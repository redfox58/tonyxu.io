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
    "revision": "aa708c4b98bbb2a009d46153408bf64f"
  },
  {
    "url": "about/index.html",
    "revision": "a1b27a8436040a73a90aa623d4157443"
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
    "url": "assets/css/0.styles.03af12d0.css",
    "revision": "c4345ebc4415d954732e2cbd612cdd66"
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
    "url": "assets/js/10.e7c55557.js",
    "revision": "88badd26b44371a294210aa75d25d664"
  },
  {
    "url": "assets/js/11.5091b4a5.js",
    "revision": "93464c537af766c5b02d0c6b1b738cc4"
  },
  {
    "url": "assets/js/12.e362d56a.js",
    "revision": "679d7665cea83b4c5a1af61710b6d88a"
  },
  {
    "url": "assets/js/13.a8b66c76.js",
    "revision": "6f7087a58f4a12ae2a4139468fc7a29e"
  },
  {
    "url": "assets/js/14.2a220a7b.js",
    "revision": "1296183931b55052b5984c0bad02af8f"
  },
  {
    "url": "assets/js/15.e9638387.js",
    "revision": "dab5337a28bfbb08eb8a7224c676d8be"
  },
  {
    "url": "assets/js/16.4470747c.js",
    "revision": "e6b72aa0deb8801608e560237e5f30fa"
  },
  {
    "url": "assets/js/17.8655d741.js",
    "revision": "9cc51cead4934b3b95ece6793344fe2f"
  },
  {
    "url": "assets/js/18.6ae9a535.js",
    "revision": "665a2b8a3bb185e68e31e7563b5fc7c5"
  },
  {
    "url": "assets/js/19.1ae033d7.js",
    "revision": "3c9220aef6a3555c4c7a0861c6d3d762"
  },
  {
    "url": "assets/js/2.8203362e.js",
    "revision": "2a05fab2b825aff4e69d672706c11650"
  },
  {
    "url": "assets/js/20.13a5f3ac.js",
    "revision": "8b6b0cb8ab65cf8726889bc2f405fdad"
  },
  {
    "url": "assets/js/21.bc4f6ed0.js",
    "revision": "f776533855e9618e86fc3183da5e0146"
  },
  {
    "url": "assets/js/22.f5132237.js",
    "revision": "207dd48965f48a44b5b48634230d3a77"
  },
  {
    "url": "assets/js/23.b9c47da6.js",
    "revision": "919a8d72a752cf58a0b9273074548573"
  },
  {
    "url": "assets/js/24.0fae4e77.js",
    "revision": "b953df770e99f47b26a3ba7848c0f059"
  },
  {
    "url": "assets/js/25.093dad9a.js",
    "revision": "4fa706db81bc205c8ddd6b227fe9c739"
  },
  {
    "url": "assets/js/26.e3e6ac6e.js",
    "revision": "3f39613d128aed1d95d300535bdd3ab3"
  },
  {
    "url": "assets/js/27.2c0f5b56.js",
    "revision": "08931742f161d6a3fedc1189331d8e52"
  },
  {
    "url": "assets/js/28.855809a5.js",
    "revision": "c126ece26e5394adfa615de9560128d5"
  },
  {
    "url": "assets/js/29.6880ea87.js",
    "revision": "91ab5607f9556c025a8514c4175b5347"
  },
  {
    "url": "assets/js/3.cf6a3e2a.js",
    "revision": "9f4698aa702c3bf07a7ec64dcd5d8beb"
  },
  {
    "url": "assets/js/30.1ac898b0.js",
    "revision": "6642cf2e4031b099ef894bc2ee261cc0"
  },
  {
    "url": "assets/js/31.b639f016.js",
    "revision": "8de5656c48aa4a27f4229a96374ebc5f"
  },
  {
    "url": "assets/js/32.e6917995.js",
    "revision": "5c659262399640f93b60f7c16575e690"
  },
  {
    "url": "assets/js/33.0f78fa1a.js",
    "revision": "87b6187cf82273373ce80b95a95c3177"
  },
  {
    "url": "assets/js/34.55c69a1b.js",
    "revision": "b1e6935e0265fd362bd23797341fc004"
  },
  {
    "url": "assets/js/35.f2862aeb.js",
    "revision": "cd2f86e3fa92bbe3d79f0a8013387bfe"
  },
  {
    "url": "assets/js/36.50441995.js",
    "revision": "22f9b6f24c8eead2563d38d46db0fc00"
  },
  {
    "url": "assets/js/37.c1aca50b.js",
    "revision": "d34841f29b63eeb47d5f945d8a5fae8a"
  },
  {
    "url": "assets/js/38.8c5dd2dc.js",
    "revision": "4d6c0d5fb4072506590b82a4960122fd"
  },
  {
    "url": "assets/js/39.37686c63.js",
    "revision": "0b44df85b78d8dd882446e6719fc3be8"
  },
  {
    "url": "assets/js/4.eccd3b2c.js",
    "revision": "a8e066227810750e51ed6687ce5480ae"
  },
  {
    "url": "assets/js/40.2ae5af01.js",
    "revision": "4100b3e4a70db95a15a30127ed6fdbba"
  },
  {
    "url": "assets/js/41.7dc2769e.js",
    "revision": "8f3565a7d2bdabe17ceddbe9b59f63d1"
  },
  {
    "url": "assets/js/42.2a466a5f.js",
    "revision": "784f3adf0f76cc071059e60bf5bd24ea"
  },
  {
    "url": "assets/js/43.13ee9f49.js",
    "revision": "4da015167acf327389eb3fb1c36cbde3"
  },
  {
    "url": "assets/js/44.94fb9dd6.js",
    "revision": "b67c5611a12c7997ae5beecdc46dae22"
  },
  {
    "url": "assets/js/45.a203d42c.js",
    "revision": "f6bfd59e52b5cfd7b04c1de6a707f89c"
  },
  {
    "url": "assets/js/46.0462232d.js",
    "revision": "d1f3d9e0c4e8c4d7c8af028819c7e18c"
  },
  {
    "url": "assets/js/47.72208950.js",
    "revision": "52b83f056a2f338ef96a8468fdadaa5c"
  },
  {
    "url": "assets/js/48.59191b02.js",
    "revision": "b35d61c3c0d3602255f8c640635f88c8"
  },
  {
    "url": "assets/js/49.59a8178f.js",
    "revision": "45f6e51c0970ab01e4d0df9f3e9acef3"
  },
  {
    "url": "assets/js/5.953cc2cb.js",
    "revision": "f50044f719105693b99c5065a6974188"
  },
  {
    "url": "assets/js/50.60a31850.js",
    "revision": "8475023f1465d8317a7dae19911b884f"
  },
  {
    "url": "assets/js/51.00ca0b4b.js",
    "revision": "af1acbdf8b6628f6faf469e1427b2734"
  },
  {
    "url": "assets/js/52.635fb785.js",
    "revision": "045ca7402b4cec03065993c27f94b9f4"
  },
  {
    "url": "assets/js/53.5d2b8f4c.js",
    "revision": "56c96c820706ca11cdc4d48aa42b6535"
  },
  {
    "url": "assets/js/54.516ba888.js",
    "revision": "b840694f81407406253bacb31226c3e5"
  },
  {
    "url": "assets/js/55.5ec50adb.js",
    "revision": "614a92f8430fbdb53a4683ce484a67c2"
  },
  {
    "url": "assets/js/56.cfe1a4a7.js",
    "revision": "c1dba022852a5c6cdb12dd3a065131e5"
  },
  {
    "url": "assets/js/6.26deb0b4.js",
    "revision": "21c7320839ce2be2752a06fe8d5e382d"
  },
  {
    "url": "assets/js/7.f6a22c0a.js",
    "revision": "6815e4629362e3eaf4cdbade9f916581"
  },
  {
    "url": "assets/js/8.0d6ab15d.js",
    "revision": "32d093dc0633db092a72c351a0493cdb"
  },
  {
    "url": "assets/js/9.14cd3dae.js",
    "revision": "19dc25d4b952e7f68b8c453281d40454"
  },
  {
    "url": "assets/js/app.c0aa83d1.js",
    "revision": "24bfeaac62a68fcca1bbd678e7ea5e4a"
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
    "revision": "44c06521ce3ecc7928f5213d4ac6a900"
  },
  {
    "url": "index.html",
    "revision": "b1d0215300f75fb3f61f9471b9b9f9ac"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "8edfe5d3c2baad663b26c1dfed31332d"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "63e11c4b3baf1ab4d81ce35cf3ef5670"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "ebfab4fe94fd8abac4b9642c371daf13"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "c662444b15569b7b894c822963601e83"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "529682a903f232537ec66f8c3d115797"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "b59129033e2bcee668d9f037c1c97056"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "11e0fddb282097a8ab56c947dfd26859"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "51bc6e619bb2e53b22488ee8dfdbaecc"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "81cc6d63e827e10a498066e5af1f5995"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "b7dbcd46a7efa171989de92c096d2465"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "57276f70c1b7fb91a0d7b6a7fde1b3e5"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "613d9b339b671182ae530bf9039e44d3"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "692757b40e41d274536b9c15b5334382"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "7469df8dce595d3040d35a7a6dab9542"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "1798201546e8be897fac0564fe022461"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "9f0d03e311d33309116cd216e1b7c5eb"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "ca38aba763e85bbf9d495721cbfe3ee5"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "3a4825855dde5bd5a58cb467e599ed2f"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "837be2384efd729f4a252e5e5bdc643c"
  },
  {
    "url": "posts/index.html",
    "revision": "680b111722e6aa5d8d48a014c94787ca"
  },
  {
    "url": "projects/index.html",
    "revision": "7c700b6b52c4581f24065190d5f2f7c2"
  },
  {
    "url": "zh/about/index.html",
    "revision": "1d2c689ae5dd674f8d0c5ad4a42a2b5d"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "a5c8724c7494e7c7e88abcb8b8540b39"
  },
  {
    "url": "zh/index.html",
    "revision": "0c8fe456fb10e177ecd1817994334e2b"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "4196585784f5fd39caa44133566828de"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "209a2b3a54fd0b7aad774c56166aee0d"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "2291d539b77fa51d769b5fe143a53e85"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "c3297516e701f8f99228956c3aa245ce"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "29f2add97ffb5e3ab3e294808a8410c0"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "dc236b405df7f3f2b1d595977830de25"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "af7e52046220118b6581dad795335a97"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "6d0156e35d380a520360e88c3a44a3e4"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "b82ca30570552243ea0709dfaeff02ca"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "31a7f42fa6d73726dd20049de362008f"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "6713bb93b37c57911c5300eac27da276"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "51c79baf39473689f223c2d3da6a0d10"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "de0ed4a4ca51101b281e17be3427411a"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "0604d50be2680976afd13f6e32cdc2e2"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "6c7956b2c9a03b0b5d1a0bb0ae636758"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ea52e0b3dc7e1216a2db59aad20b7d72"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "d223b960f9901da8bcd647324b9411e4"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "1e0f2fe485d3e24c8ec3aa080c09a333"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "ce2662c3a2e185d6e5aa1099cccad6f7"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "71ab0e1a8cc9d96cfae196d056631b0f"
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
