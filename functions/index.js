const functions = require('firebase-functions');
const express = require('express');
const axios      = require('axios')
const dotenv     = require('dotenv')
const config = dotenv.config().parsed
var useragent = require('useragent');

const app = express();

app.get('/viewEvent', (req, res) => {
    var ip = req.query.ip;
    axios.get(`https://api.ipdata.co/${ip}?api-key=${config.ip_key}`)
    .then((response) => {
        var agent = useragent.parse(req.headers['user-agent']);
        var ipInfo = response.data
        var target = req.query.page || 'My Blog'
        var responseText = `*Visit: ${target}* \nIP: [${ip}](https://ipinfo.io/${ip}) \nCity: ${ipInfo.city} \nCountry: ${ipInfo.emoji_flag}${ipInfo.country_name} \nOrganization: ${ipInfo.organisation} \nAgent: ${agent.toString()}`
        var requestUrl = `${config.telegramWebHookURI}/sendMessage?chat_id=507960755&parse_mode=Markdown&disable_web_page_preview=true&text=${responseText}`
        return axios.get(encodeURI(requestUrl))
        .then((response) => {
            return res.json(response.data)
        })
        .catch((error) => {
            return res.send(error)
        });
    })
    .catch((error) => {
        console.log(error)
        return res.send(error)
    });
});

const main = express();
main.use('/api', app);

exports.api = functions.https.onRequest(main);
