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
  const counterRef = admin.database().ref("/hit_counter");
  counterRef.transaction(current => {
    return (current || 0) + 1;
  });
  next();
};

app.use(hitCounter);

app.get("/viewEvent", (req, res) => {
  var ip = req.query.ip;
  if (!req.query.ip) {
    return res.send("NO IP");
  }
  return axios
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
      return res.send(error);
    });
});

// https://tonyxu.io/go?url=https://www.example.com will redirect to www.example.com
app.get("/go", (req, res) => {
  return res.redirect(req.query.url);
});

const { google } = require("googleapis");
const privateKey = require("./google_key.json");
let jwtClient = new google.auth.JWT(
  privateKey.client_email,
  null,
  privateKey.private_key,
  ["https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly"]
);

jwtClient.authorize();

app.get("/analytics/hit-trend", (req, res) => {
  const analytics = google.analytics('v3').data.ga.get({
    'auth': jwtClient,
    'ids': 'ga:97501557',
    'start-date': '90daysAgo',
    'end-date': 'today',
    'metrics': 'ga:users',
    'dimensions': 'ga:date'
  })
  .then(function(data) {
    return res.send(data.data.rows)
  });
});

app.get("/analytics/top-pages", (req,res) => {
  const analytics = google.analytics('v3').data.ga.get({
    'auth': jwtClient,
    'ids': 'ga:97501557', // <-- Replace with the ids value for your view.
    'start-date': '90daysAgo',
    'end-date': 'today',
    'metrics': 'ga:pageviews',
    'sort': '-ga:pageviews',
    'dimensions': 'ga:pagePath',
    'max-results': 10
  })
  .then(function(data) {
    return res.send(data.data.rows)
  });
})

app.get("/analytics/top-cities", (req,res) => {
  const analytics = google.analytics('v3').data.ga.get({
    'auth': jwtClient,
    'ids': 'ga:97501557', // <-- Replace with the ids value for your view.
    'start-date': '90daysAgo',
    'end-date': 'today',
    'metrics': 'ga:pageviews',
    'sort': '-ga:pageviews',
    'dimensions': 'ga:pagePath',
    'max-results': 10
  })
  .then(function(data) {
    return res.send(data.data.rows)
  });
})

app.get("/analytics/top-queries", (req,res) => {
  const webmasters = google.webmasters({
    version: 'v3',
    auth: jwtClient,
  });
  var today = new Date()
  var priorDate = new Date(new Date().setDate(today.getDate() - 90))
  webmasters.searchanalytics.query({
    siteUrl: 'https://tonyxu.io',
    requestBody: {
      'rowLimit': 15,
      'startDate': priorDate.toISOString().split('T')[0],
      'dimensions': ['query'],
      'endDate': today.toISOString().split('T')[0]
    }
  })
  .then(function(data) {
    return res.send(data.data.rows)
  })
  .catch(error => {
    return res.status(500)
  })
})

app.get("/analytics/site-speed", (req,res) => {
  const analytics = google.analytics('v3').data.ga.get({
    'auth': jwtClient,
    'ids': 'ga:97501557', // <-- Replace with the ids value for your view.
    'start-date': '90daysAgo',
    'end-date': 'today',
    'metrics': 'ga:avgPageLoadTime',
    'sort': 'ga:avgPageLoadTime',
    'dimensions': 'ga:country',
    'include-empty-rows': false,
    'max-results': 10
  })
  .then(function(data) {
    return res.send(data.data.rows)
  });
})

const main = express();
main.use("/api", app);

exports.api = functions.https.onRequest(main);
