const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const config = dotenv.config().parsed;
var useragent = require("useragent");

const app = express();

var hitCounter = function(req, res, next) {
  console.log("HIT COUNTER");
  const counterRef = admin.database().ref("/hit_counter");
  counterRef
    .transaction(current => {
      return (current || 0) + 1;
    })
  next();
};

app.use(hitCounter);

app.get("/viewEvent", (req, res) => {
  console.log("VIEW EVENT");
  var ip = req.query.ip;
  if (!req.query.ip) {
    return res.send("NO IP");
  }
  axios
    .get(`https://api.ipdata.co/${ip}?api-key=${config.ip_key}`)
    .then(response => {
      var agent = useragent.parse(req.headers["user-agent"]);
      var ipInfo = response.data;
      var target = req.query.page || "My Blog";
      var referrer = req.query.referrer || "None";
      var responseText = `*Visit: ${target}* \nIP: [${ip}](https://ipinfo.io/${ip}) \nReferrer: ${referrer} \nCity: ${
        ipInfo.city
      } \nCountry: ${ipInfo.emoji_flag}${ipInfo.country_name} \nOrganization: ${
        ipInfo.organisation
      } \nAgent: ${agent.toString()}`;
      var requestUrl = `${
        config.telegramWebHookURI
      }/sendMessage?chat_id=507960755&parse_mode=Markdown&disable_web_page_preview=true&text=${responseText}`;
      return axios
        .get(encodeURI(requestUrl))
        .then(response => {
          return res.json(response.data);
        })
        .catch(error => {
          return res.send(error);
        });
    })
    .catch(error => {
      console.log(error);
      return res.send(error);
    });
});

// https://tonyxu.io/go?url=https://www.example.com will redirect to www.example.com
app.get("/go", (req,res) => {
  return res.redirect(req.query.url);
})

// https://tonyxu.io/accessTokens will return access tokens such as google access tokens
app.get("/accessTokens", (req,res) => {

  let {google} = require('googleapis');
  let privateKey = require("./google_key.json");

  // configure a JWT auth client
  let jwtClient = new google.auth.JWT(
    privateKey.client_email,
    null,
    privateKey.private_key,
    'https://www.googleapis.com/auth/analytics.readonly');
  
    jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return res.status(500).send('Error');
    } else {
      return res.json({"google_access_token":tokens.access_token});
    }
  });
})

const main = express();
main.use("/api", app);

exports.api = functions.https.onRequest(main);
