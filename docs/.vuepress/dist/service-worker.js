/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "459a695f53d0281fe1692cf35146deb2"
  },
  {
    "url": "about/index.html",
    "revision": "0e7b44e6529eef014bd4dd0d0eee1126"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "d1c87a1e12b2dc180f3263ec9a64de74"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "7932fc039ab9e4c5f1b90e5ab621faf2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "ca42ae50fc9b71da999b77536f251ee4"
  },
  {
    "url": "assets/css/0.styles.9328750a.css",
    "revision": "31a6d841c76f1b8f9911b4298096d52f"
  },
  {
    "url": "assets/img/2018_07_08_20_50_57.183dcb26.png",
    "revision": "183dcb2621aedf7d0a9bd75960068884"
  },
  {
    "url": "assets/img/2018_07_08_20_56_57.730b4a91.png",
    "revision": "730b4a917440f8ceb75b24028c73fd27"
  },
  {
    "url": "assets/img/2018_07_08_20_58_41.ec3a9343.png",
    "revision": "ec3a93435e5f165c5be7eaec73f2a8ae"
  },
  {
    "url": "assets/img/2018_07_08_21_06_32.5e73e58d.png",
    "revision": "5e73e58d7b3a9d4a0411a15ed5bc2e8c"
  },
  {
    "url": "assets/img/2018_07_08_21_06_54.58c8e1ab.png",
    "revision": "58c8e1abf3ce2231b85d8f13ac75a4c0"
  },
  {
    "url": "assets/img/2018_07_08_21_07_52.7ad2dab2.png",
    "revision": "7ad2dab2b84dcfdf842e6adb3c63f838"
  },
  {
    "url": "assets/img/2018_07_10_20_55_19.d56bccf5.png",
    "revision": "d56bccf50749efd70e20923e9fdd36e2"
  },
  {
    "url": "assets/img/2018_07_22_20_13_05.ad930085.png",
    "revision": "ad930085c8c363dcb719d5700e4cc0d1"
  },
  {
    "url": "assets/img/2018_07_22_20_14_27.fb12ebdb.png",
    "revision": "fb12ebdb2488b740330648eb3bc92e5f"
  },
  {
    "url": "assets/img/2018_07_22_21_11_31.6a6ae291.png",
    "revision": "6a6ae29173a9396d796055a5e881f1cd"
  },
  {
    "url": "assets/img/2018_07_22_21_13_09.3c78fdac.png",
    "revision": "3c78fdac7d672e328ef86f3a85f16343"
  },
  {
    "url": "assets/img/2018_07_22_22_05_23.94a53dd7.png",
    "revision": "94a53dd73c10cea995f43219e41606eb"
  },
  {
    "url": "assets/img/2018_07_22_22_15_58.a47a0f5e.png",
    "revision": "a47a0f5efaa03496141c88f348c5d7f0"
  },
  {
    "url": "assets/img/2018_07_28_22_50_27.db6a5a99.png",
    "revision": "db6a5a994fcec352169a8c6cb3cc3a56"
  },
  {
    "url": "assets/img/2018_07_28_23_02_23.fc601e39.png",
    "revision": "fc601e39568304d8324c9d893722a377"
  },
  {
    "url": "assets/img/2018_07_28_23_35_59.c49e6461.png",
    "revision": "c49e646114249ee8c8cf0d3fb9650f76"
  },
  {
    "url": "assets/img/2018_10_15_22_43_12.483c94f5.png",
    "revision": "483c94f57d2b1a6d76b374946dea5c98"
  },
  {
    "url": "assets/img/2018-07-08+21_33_30.62122585.gif",
    "revision": "62122585feb2dbf126b91313526b376b"
  },
  {
    "url": "assets/img/20180803-1.0942e0b0.png",
    "revision": "0942e0b0c1e9ab9f74898813c94ec773"
  },
  {
    "url": "assets/img/Analytics_-_Tony_Xu_2018-10-16_09-52-42.0ed9ed06.png",
    "revision": "0ed9ed0698b84d08d9cf309caacb5b21"
  },
  {
    "url": "assets/img/Analytics_2018-10-15_22-50-34.cf9aad9c.png",
    "revision": "cf9aad9c9b8484818abe0e51fd4fe195"
  },
  {
    "url": "assets/img/Credentials_-_api-tonyxu-io_-_Google_Cloud_Platform_2018-10-15_22-39-04.0441e289.png",
    "revision": "0441e2892001e205e89089b986344004"
  },
  {
    "url": "assets/img/IAM__IAM__admin__api-tonyxu-io__Google_Cloud_Platform_2018-10-15_22-48-01.dcfdce7f.png",
    "revision": "dcfdce7ff4fb4530d014b3121af923c2"
  },
  {
    "url": "assets/img/Overview__APIs__Services__api-tonyxu-io__Google_Cloud_Platform_2018-10-15_22-45-05.2a6251df.png",
    "revision": "2a6251dfc2b4ae43d7ea52e2ee4da255"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.86c7de2e.js",
    "revision": "30c7950135bcb0862ec24ae8d95f33a5"
  },
  {
    "url": "assets/js/11.524cf937.js",
    "revision": "93464c537af766c5b02d0c6b1b738cc4"
  },
  {
    "url": "assets/js/12.e362d56a.js",
    "revision": "679d7665cea83b4c5a1af61710b6d88a"
  },
  {
    "url": "assets/js/13.0615780f.js",
    "revision": "6f7087a58f4a12ae2a4139468fc7a29e"
  },
  {
    "url": "assets/js/14.084020fe.js",
    "revision": "1296183931b55052b5984c0bad02af8f"
  },
  {
    "url": "assets/js/15.a0142967.js",
    "revision": "fa66b69fb0a04350a8860c82d0834330"
  },
  {
    "url": "assets/js/16.d957a854.js",
    "revision": "611d6a97c1a2bbd8c5fe5e40edb986a6"
  },
  {
    "url": "assets/js/17.82cc6542.js",
    "revision": "9cc51cead4934b3b95ece6793344fe2f"
  },
  {
    "url": "assets/js/18.e3e04926.js",
    "revision": "ca25df0d34d16f594fe36e12264fd68b"
  },
  {
    "url": "assets/js/19.fb91cd6b.js",
    "revision": "7ca1e63693022e3d38c66295eeedac04"
  },
  {
    "url": "assets/js/2.fac411b5.js",
    "revision": "2a05fab2b825aff4e69d672706c11650"
  },
  {
    "url": "assets/js/20.6b827f6a.js",
    "revision": "18dfbda4f57b0a89fc136b97113e796e"
  },
  {
    "url": "assets/js/21.d87a080e.js",
    "revision": "ad0b46ec68328af498e966ed415e1195"
  },
  {
    "url": "assets/js/22.acda5b6e.js",
    "revision": "f78ba4492fec2e2f185f9c05b931c645"
  },
  {
    "url": "assets/js/23.3ede44b7.js",
    "revision": "8ea9eb55dcbc51aaad110def0dde2f47"
  },
  {
    "url": "assets/js/24.2b5b3f16.js",
    "revision": "404de52cb30e08814c2d93a49b4d188a"
  },
  {
    "url": "assets/js/25.717e1316.js",
    "revision": "4fa706db81bc205c8ddd6b227fe9c739"
  },
  {
    "url": "assets/js/26.994bb11e.js",
    "revision": "3f39613d128aed1d95d300535bdd3ab3"
  },
  {
    "url": "assets/js/27.ce331915.js",
    "revision": "b16b72341f1345caee9b7c8ba0e8b959"
  },
  {
    "url": "assets/js/28.8960dc14.js",
    "revision": "dbcd126972f2a0c87e98641e9ee94497"
  },
  {
    "url": "assets/js/29.8e0f4ac3.js",
    "revision": "5c5d7137edfa5bc2e206b965b16d172a"
  },
  {
    "url": "assets/js/3.cf6a3e2a.js",
    "revision": "9f4698aa702c3bf07a7ec64dcd5d8beb"
  },
  {
    "url": "assets/js/30.a6951914.js",
    "revision": "7a8e320e355d3a42347edb2b4e05a3aa"
  },
  {
    "url": "assets/js/31.565f50cc.js",
    "revision": "be19d741a900bdfedf2bd74ef773b598"
  },
  {
    "url": "assets/js/32.e1134bd8.js",
    "revision": "c58a245324e354bde2cffb0587cbfb6b"
  },
  {
    "url": "assets/js/33.c64cfd6d.js",
    "revision": "8f51b4ba3268a62abba890211ab06bc3"
  },
  {
    "url": "assets/js/34.49755a12.js",
    "revision": "017a892be99d993c20e1928a52471956"
  },
  {
    "url": "assets/js/35.64218021.js",
    "revision": "5e141b47a4345d064a21dab97d5ae741"
  },
  {
    "url": "assets/js/36.cea2c5f9.js",
    "revision": "055dba4010e2e90c9ef8534adf639e83"
  },
  {
    "url": "assets/js/37.3768bb91.js",
    "revision": "41953fe277b3ee8ffbef5dda807fbb17"
  },
  {
    "url": "assets/js/38.a816227b.js",
    "revision": "aba475d8ba7778094a4819a8cb27b695"
  },
  {
    "url": "assets/js/39.3d01180c.js",
    "revision": "beea1523edaac2ecc3f75f2adb22b9ed"
  },
  {
    "url": "assets/js/4.ecb10c48.js",
    "revision": "0325595ebe47c25dd633a9fff8b03f78"
  },
  {
    "url": "assets/js/40.0e847908.js",
    "revision": "183c205bdc70ba93935effbc40234ca0"
  },
  {
    "url": "assets/js/41.dde115e9.js",
    "revision": "8f3565a7d2bdabe17ceddbe9b59f63d1"
  },
  {
    "url": "assets/js/42.fc0d39e4.js",
    "revision": "090f690d09a68e2fe4a299c12836f4ff"
  },
  {
    "url": "assets/js/43.f707f33c.js",
    "revision": "4da015167acf327389eb3fb1c36cbde3"
  },
  {
    "url": "assets/js/44.9705df1a.js",
    "revision": "5473c50862eec6e52bc27eaeab42868a"
  },
  {
    "url": "assets/js/45.27b01b32.js",
    "revision": "cf395e3223e94fd321ce3708075466d9"
  },
  {
    "url": "assets/js/46.abef887a.js",
    "revision": "b7d96af0b9a794315f7acd6840b1be51"
  },
  {
    "url": "assets/js/47.979a86e5.js",
    "revision": "07c7fb823b6323ff4785c2d2581e59c2"
  },
  {
    "url": "assets/js/48.eee4b473.js",
    "revision": "b0ee066c8ee7479aaaed4b4f3a2302e7"
  },
  {
    "url": "assets/js/49.7182908c.js",
    "revision": "499ec53782a9ad41207289e8eefd7055"
  },
  {
    "url": "assets/js/5.379adf7f.js",
    "revision": "15502b3036492ce87e88f0bfe887ac89"
  },
  {
    "url": "assets/js/50.bbfdcd2f.js",
    "revision": "e1683d6004b7c586854872e6ef8fab23"
  },
  {
    "url": "assets/js/51.8970cd08.js",
    "revision": "daeffb8d0cce40e64a5ddbd0e7228960"
  },
  {
    "url": "assets/js/52.81b85b29.js",
    "revision": "9cbdddfff8a038375fe89b48294b7782"
  },
  {
    "url": "assets/js/53.cb5334ba.js",
    "revision": "53f99b8a0c3078a3c06c7971f9d29008"
  },
  {
    "url": "assets/js/54.ae2a2947.js",
    "revision": "b840694f81407406253bacb31226c3e5"
  },
  {
    "url": "assets/js/55.6f3cd954.js",
    "revision": "d5c5c32f3ddce107662049fb548b50a4"
  },
  {
    "url": "assets/js/56.cfe1a4a7.js",
    "revision": "c1dba022852a5c6cdb12dd3a065131e5"
  },
  {
    "url": "assets/js/6.0aa6d193.js",
    "revision": "eec9bc172ea817fd30701e50ded46ba0"
  },
  {
    "url": "assets/js/7.6b68903b.js",
    "revision": "28570149842871817b3572e023bb6e21"
  },
  {
    "url": "assets/js/8.602c83c9.js",
    "revision": "5c6094ca0d34244812590eeac1cdde37"
  },
  {
    "url": "assets/js/9.5139cab9.js",
    "revision": "2b3ae47a810e53c65fc07d42d11ba5d6"
  },
  {
    "url": "assets/js/app.f21bb759.js",
    "revision": "695f5b89d36ca8a6bab13c7fd9b177ac"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "2cf6aec6405acaa54f2053e423b5bd8c"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "6e8a93234f8643f2ffcd822423065baf"
  },
  {
    "url": "friends/index.html",
    "revision": "50ce99c220b97223fc81edcb1dd331ea"
  },
  {
    "url": "index.html",
    "revision": "ce2dde9eab04caddf53ec6fbfc953cf8"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "4f4a35992ef10c657155ab37f9795073"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "7ec62ef4d7eaceebcec287998ea68891"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "3a95684a035460ce54182fa3c80bfa1f"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "004f3c5fc6ad819ef7463ee7ad81a80b"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "cd1f5ad5b83e32c24d8887cf81b793be"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "160ef61b31d4b20ff3a30f1a49f497b8"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "f6715b2b6ba6ae52315a2fa4cc69f745"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "1f25f1b7954291a7a1c40074d4006d04"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "75535aa454a567684581ddd03b8822d3"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "5dd5b790c5f9d6b203a2460a43506b36"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "e0cdebb020dde4500e90e421a52e7dca"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "724d9e6827a810cf9d94d1cf4db9aa6f"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "45d46bd81923a9fd8afaa32120500b44"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "5d056b3055e0abc318fff78111c1f78c"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "e3cd24b1204b26ce73c55a4b92a3c309"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ddd8da88d1c25798e60990bf2c79a650"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "3fdd95e2e8e1b8ad22dcbe6a085f3def"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "b6e0121f11f65b48e5afda7eb8186075"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "d23450e4d2547e2b2b38ab33728809b1"
  },
  {
    "url": "posts/index.html",
    "revision": "64aeea63f8f2cd9f480858fec2e0faf9"
  },
  {
    "url": "projects/index.html",
    "revision": "fb73724c5d30728be5a7bd3b2c69208a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "a679cf7a177f7b67285800d02bf60c24"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "d1e4dafcf6885aabdf9afe61cc49d49d"
  },
  {
    "url": "zh/index.html",
    "revision": "d4c20b6fa92170ffc3bbb579e736967c"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "71a254c00e619879d8a558845683cdb8"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "aab986f6ef1c466ca5e0c831fd3c990b"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "2cc110922a12a9c9712ed181c9b9ac31"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "251d1b41db20025beb87153fba02df11"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "17857e91689942c9692dcc0409da1c84"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "d03badf27346bf32e2e0483d8a09a748"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "f97069254e8262787dd28aa24b5da01c"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "debb0c98b7124821399183bc8370131d"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "7b629f1b5a1410b934df7724be6aa2cf"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "33c2dd89d4ba910054a28b045373f2c5"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "7aa9b0e76e0bc1fe971e8ad84f64dd03"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "8053c9eb754611c6f60cc8e573235739"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "ac9e981e9fbd154e89705afff92f8494"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "be2480dea36efea556051d57be278e09"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "06c08f9b30fb8cbfd456c75d8192c511"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "f957f14746cdae0e963f39069490ecc8"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "663ae18a988a50089852cec65cc0779e"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "9a571e9c05074733e942f83e90041b7d"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "5a9e5bcc531f6f899cd4d00cf09b54d5"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "0b2bf82e2c0ddc43cad361a67773335a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
