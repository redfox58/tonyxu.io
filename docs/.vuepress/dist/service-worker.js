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
    "revision": "609217f8093efdc45d735cc351fed39e"
  },
  {
    "url": "about/index.html",
    "revision": "fdbfeb9ce660add4e9dbb646d0c339d6"
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
    "url": "assets/js/16.22d24730.js",
    "revision": "11ddc66a72855583b8e30dc6b79a97ff"
  },
  {
    "url": "assets/js/17.8655d741.js",
    "revision": "9cc51cead4934b3b95ece6793344fe2f"
  },
  {
    "url": "assets/js/18.896a1b41.js",
    "revision": "aaf2dc6b407bc77a194fa91e4d9b35b8"
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
    "url": "assets/js/20.e3920a61.js",
    "revision": "9b16e571f6cee652c3c87988cefe3739"
  },
  {
    "url": "assets/js/21.05dcb2e4.js",
    "revision": "ad0b46ec68328af498e966ed415e1195"
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
    "url": "assets/js/24.4daefb49.js",
    "revision": "69e0aae7c0aee403d5cc2ae38e6536a7"
  },
  {
    "url": "assets/js/25.f001c186.js",
    "revision": "9dd650e6e5e448bba0484134bae5201e"
  },
  {
    "url": "assets/js/26.7d004a07.js",
    "revision": "e1f7a93caab3c78da1b6abc4af37d8b4"
  },
  {
    "url": "assets/js/27.8c64997b.js",
    "revision": "b00edbd0d791340f10f9607ffdd810c8"
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
    "url": "assets/js/31.2bab3aa2.js",
    "revision": "86b639e3d493712e14aed6329c70dec7"
  },
  {
    "url": "assets/js/32.a4944637.js",
    "revision": "88319210d9f3b3cb364bff5276317cd6"
  },
  {
    "url": "assets/js/33.80ccd3d7.js",
    "revision": "0ded5c99f15e9c50822f6cf3504d5c0d"
  },
  {
    "url": "assets/js/34.ed1b34c8.js",
    "revision": "6b5c13d6f37eb6ad55e29141639aa7ad"
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
    "url": "assets/js/40.3150efde.js",
    "revision": "f2f28436e9cc2c60367fb6f13aa54425"
  },
  {
    "url": "assets/js/41.0094a4fc.js",
    "revision": "30593f811da12c21f2db1e1c126a2738"
  },
  {
    "url": "assets/js/42.2cd68b0f.js",
    "revision": "090f690d09a68e2fe4a299c12836f4ff"
  },
  {
    "url": "assets/js/43.de58303f.js",
    "revision": "0981de80fa336c30e35c59a4eae803fb"
  },
  {
    "url": "assets/js/44.94367515.js",
    "revision": "78fe6e74c1afc62543148fed7530eca5"
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
    "url": "assets/js/48.61cfba59.js",
    "revision": "d88f067c94589a59bc2acf31b3a0359a"
  },
  {
    "url": "assets/js/49.dcde9801.js",
    "revision": "499ec53782a9ad41207289e8eefd7055"
  },
  {
    "url": "assets/js/5.126ab03f.js",
    "revision": "98f84c105f8872645d7c37eda9cd5bb3"
  },
  {
    "url": "assets/js/50.e5f621dd.js",
    "revision": "72905af358c03cc1f1a80186b0841107"
  },
  {
    "url": "assets/js/51.00ca0b4b.js",
    "revision": "af1acbdf8b6628f6faf469e1427b2734"
  },
  {
    "url": "assets/js/52.20f2113c.js",
    "revision": "0a551265992fdfcd0d435e570e3d532c"
  },
  {
    "url": "assets/js/53.11a9fbe3.js",
    "revision": "0dd2e3383beac40f5afa79d63bb10d2b"
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
    "url": "assets/js/7.04839810.js",
    "revision": "839bf6d84c06234b1770415531ee1710"
  },
  {
    "url": "assets/js/8.95cc4e1d.js",
    "revision": "b76035d75851531afe58c04db1688f76"
  },
  {
    "url": "assets/js/9.14cd3dae.js",
    "revision": "19dc25d4b952e7f68b8c453281d40454"
  },
  {
    "url": "assets/js/app.b50a5e31.js",
    "revision": "7fa0ae20c4f7ddec8262f111bd992187"
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
    "revision": "3e131b598a980720fc79bdcc5a50b6d8"
  },
  {
    "url": "index.html",
    "revision": "6dbd6c7041c8889be6f42f8acbe1bf8f"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "7203ede93f48d38ded4dc81903813e22"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "fb29eca42ab1df4f410ac24a11a16998"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "7820f2ca36b4fca76b5762bf63f88331"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "64a8fc5fbb6bce9d24acf5135e82e2e9"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "ef8f7d114631f543bc33e5fa60051295"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "d598f876398441ebc39d32af2fbe8b9c"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "b6dccc33fbba730d95be6cff7b5804b1"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "575e7d881554b5cd7e1ea5019fd92bc5"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "cdf1f1a906bb112642b12fb2f199ed1a"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "124ff75ee76ddc0a50416c96a5b21ead"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "68a52a0d3946caa898433eace81d2021"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "bfe3db4a082f4783bf3398a2d4cf9f14"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "5e28d85933d2096292be1e66cd40e121"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "922bf9783b1a11deb9fc6b7d8c606053"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "cfb29e0bf9b53040214dc62f9b7295d4"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "198cfecea4cee386aca4b0307921ab78"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "542791cdc8b91536fbafd5231c8bddc1"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "22a3388dc74634a84301ff3e32e84a4f"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "67f5510d84b307e1aa055cdf10cce82c"
  },
  {
    "url": "posts/index.html",
    "revision": "11341b1c8796cb720b9e1b4a4bef9bb8"
  },
  {
    "url": "projects/index.html",
    "revision": "0c76fc2803356a8382d4ac88736e6dda"
  },
  {
    "url": "zh/about/index.html",
    "revision": "71a140089b0dbebd4112d23e4eb0e8c6"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "bd2d049c2bc3d75e69ac0b7c60222939"
  },
  {
    "url": "zh/index.html",
    "revision": "4229af17344e23d3079d41ec8d058168"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "9af47bc33910ef42e1158be548e535e9"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "192a4fe0bb33bc63be06acb96cf8b89d"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8cc47ff18fe840fc5fce103e39ba5fb9"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "6220f178ea1ca108295c9c322a0b4b34"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "77a591e546959272f5f37a6bd9721fc8"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "3ccccf94209f731bb201e9b2cb769e38"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "4567da6111cabacb826aec8c825ee1f3"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "a474e94d027ddbdcbff25b5a99b2de08"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "b4b07d63aab1c5275759963cff9fc952"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "a839e0eea6ebd079c744359e50634641"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "fd3e001d005a768075142c054c876724"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "24a926e4104c0c0304d655db8c6f523a"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "48faa33e4bb346c62d5459fb2ec1e88c"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "d37e98e81ec808d69d2aa9ce866568bf"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "c3b34a492e04e5eafb259ee055d17994"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "50d6d45bad3cd1f81a8ceeba60116f8a"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "5c35f1d1a92a10e2deb12fdf4bc2c6f3"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "e62d566286273c49c3ad9aa581f3d387"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "b4d070edb618e3150915e4a05346855b"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "ccd2a539c3ac50e9ddfb08cb22c2bb24"
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
