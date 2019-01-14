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
    "revision": "e0251506a50bf9f14433ee79a0d458be"
  },
  {
    "url": "about/index.html",
    "revision": "d3755df7624502a45a82689316d19c9f"
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
    "url": "assets/js/10.bc81126f.js",
    "revision": "765a103a40465f68dadf93e8155d9c74"
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
    "url": "assets/js/15.83f19373.js",
    "revision": "83ac6fcdf84d75479e0e87dbafbd2b61"
  },
  {
    "url": "assets/js/16.10640deb.js",
    "revision": "c626590e3e5ae6042ba1d796ee052265"
  },
  {
    "url": "assets/js/17.8655d741.js",
    "revision": "9cc51cead4934b3b95ece6793344fe2f"
  },
  {
    "url": "assets/js/18.7bee35df.js",
    "revision": "ca25df0d34d16f594fe36e12264fd68b"
  },
  {
    "url": "assets/js/19.a0f78005.js",
    "revision": "f60aee56437cf91c44082ac973cf1efb"
  },
  {
    "url": "assets/js/2.8203362e.js",
    "revision": "2a05fab2b825aff4e69d672706c11650"
  },
  {
    "url": "assets/js/20.13f8077d.js",
    "revision": "bfa77438a176f378c77f7d579d0c4c4c"
  },
  {
    "url": "assets/js/21.2ce9be89.js",
    "revision": "11062ab4b2f652e69ca8b7fca6e23116"
  },
  {
    "url": "assets/js/22.ebfd3beb.js",
    "revision": "5cf9094e4bf68842d673b4c626fdab4a"
  },
  {
    "url": "assets/js/23.cb4a2832.js",
    "revision": "8ea9eb55dcbc51aaad110def0dde2f47"
  },
  {
    "url": "assets/js/24.0fae4e77.js",
    "revision": "b953df770e99f47b26a3ba7848c0f059"
  },
  {
    "url": "assets/js/25.9d3d8119.js",
    "revision": "7270d103155e2b40e344afa0064a51a5"
  },
  {
    "url": "assets/js/26.139db1f4.js",
    "revision": "31abb61e0560b2adc05ab3f95fcdd5b5"
  },
  {
    "url": "assets/js/27.57f1da49.js",
    "revision": "88ab43270d749c848f39a37bded3b137"
  },
  {
    "url": "assets/js/28.3526f59a.js",
    "revision": "58584f3803d9c6e2605ee83db7979409"
  },
  {
    "url": "assets/js/29.40d483c4.js",
    "revision": "50728c5e90d7855211483a2e780f5750"
  },
  {
    "url": "assets/js/3.cf6a3e2a.js",
    "revision": "9f4698aa702c3bf07a7ec64dcd5d8beb"
  },
  {
    "url": "assets/js/30.cfd9a0c8.js",
    "revision": "2ccb4499f9b40e1f7643d8449fe9a80e"
  },
  {
    "url": "assets/js/31.0fb9486a.js",
    "revision": "1e46b2298a88d95d7b16a32c074d28ad"
  },
  {
    "url": "assets/js/32.401d1cd5.js",
    "revision": "f180dd3936a72f98b690b27ef178f9dc"
  },
  {
    "url": "assets/js/33.23628377.js",
    "revision": "9628fd3c02f3a8bbdc4b5f8485c3a9f3"
  },
  {
    "url": "assets/js/34.e275d985.js",
    "revision": "d15e43434df3a1c8c49750955aa93e08"
  },
  {
    "url": "assets/js/35.84d60bfa.js",
    "revision": "2cb40c7cdeb9b2694a8f471e3bb0ca75"
  },
  {
    "url": "assets/js/36.36bb3489.js",
    "revision": "9817ed5ca0fab27eef7a36a7fa01272c"
  },
  {
    "url": "assets/js/37.62301da9.js",
    "revision": "b26fefc341ea92ab16bb7b2af951f62e"
  },
  {
    "url": "assets/js/38.e5096823.js",
    "revision": "e031ae425f1b64423ac5f176ebfad754"
  },
  {
    "url": "assets/js/39.2822d2e5.js",
    "revision": "f8b0da97481a13f07829a02e55af4e08"
  },
  {
    "url": "assets/js/4.cc1339e6.js",
    "revision": "ef7055221e5a978d19c7365d974842d2"
  },
  {
    "url": "assets/js/40.2ae5af01.js",
    "revision": "4100b3e4a70db95a15a30127ed6fdbba"
  },
  {
    "url": "assets/js/41.6f05c9d7.js",
    "revision": "1497414ece8ce8859e5348289b4de533"
  },
  {
    "url": "assets/js/42.02ba8ef5.js",
    "revision": "4b5f62aecf9dbfd77c899ec930dd2663"
  },
  {
    "url": "assets/js/43.13ee9f49.js",
    "revision": "4da015167acf327389eb3fb1c36cbde3"
  },
  {
    "url": "assets/js/44.072600c1.js",
    "revision": "c6da1d7764e4e005b80da8066638ed0d"
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
    "url": "assets/js/49.e2ff9895.js",
    "revision": "16919939c15e4b712d767f205c2ceb7c"
  },
  {
    "url": "assets/js/5.953cc2cb.js",
    "revision": "f50044f719105693b99c5065a6974188"
  },
  {
    "url": "assets/js/50.3ce82386.js",
    "revision": "5d72bf903801f6bd2f0b005b8cca4827"
  },
  {
    "url": "assets/js/51.f35e0757.js",
    "revision": "064d54d50c30d8030207bb63431b5b26"
  },
  {
    "url": "assets/js/52.018d7564.js",
    "revision": "5aa11d977dd2f8814c6bc10dac71ff4f"
  },
  {
    "url": "assets/js/53.8f4f6dec.js",
    "revision": "0f6572cca86f05118847d63d170ebec2"
  },
  {
    "url": "assets/js/54.3f138b73.js",
    "revision": "1ac60516ce1cd7b6b66c42937a8d7bd8"
  },
  {
    "url": "assets/js/55.e07a5ffa.js",
    "revision": "447b21069dfb1f9317b1ebc5ad78c94c"
  },
  {
    "url": "assets/js/56.cfe1a4a7.js",
    "revision": "c1dba022852a5c6cdb12dd3a065131e5"
  },
  {
    "url": "assets/js/6.87a216b2.js",
    "revision": "f444cd926a2e0139c07604a9626455e0"
  },
  {
    "url": "assets/js/7.1e6529e3.js",
    "revision": "ae5f6100cb9255b29068be84eaf5ae9c"
  },
  {
    "url": "assets/js/8.8edb668b.js",
    "revision": "4e7f10cf2f028356e3fc70e45a71ee86"
  },
  {
    "url": "assets/js/9.8d561540.js",
    "revision": "3bf872402ef2558305d07ae7570145d0"
  },
  {
    "url": "assets/js/app.7708c808.js",
    "revision": "364781ab212f12fa7bd89c17383d94f8"
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
    "revision": "3ece9f1e8df33f7d56fb41b8447c4f86"
  },
  {
    "url": "index.html",
    "revision": "9a6cb4809c9dfdd8d769cabc25e7baa0"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "135fb71e88c66452c35f4087681e3bcd"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "18c9fc741acc509b0b2d75ba41432a94"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "c888cb1902bcb0fd41108926dfc7369f"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "11e1d1f4eb32286612cde9d298606103"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "bd31f9759b7d0ea1242e5037add5fc4d"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "108552b810c90c7b8db3582bc03ce74b"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "d379b7b0558cc46fbe275b3d0fdcec15"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "7ac26a49b64ea9f39a9937c139294c0c"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "a47022ad9c0491c55f6afe36141097f9"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "b68607ab45dd00e0ca493cc7a06f6893"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "c95f7b48f15b21ae14f4d8c2a3d1cb3b"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "022561fb4ebde65c930a69f34d947de5"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "8dd174dba3439b4d951036bdeace9716"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "66ed6024cafca1974e144730e2c78284"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "00579f3ad1ee3737a64e36a905916761"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "2acd1a07c53283f300006c0b07af3a6b"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "9724f054e4087b8d7c17488e99f5ec0c"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "961bf3129d96595d6c3ece9d89de68d4"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "54d3535035b6cf241cde8165647d9685"
  },
  {
    "url": "posts/index.html",
    "revision": "92e589d89ba72235cab1bde45604fbce"
  },
  {
    "url": "projects/index.html",
    "revision": "3a1bdcc7334a106aee19a1867cb5b1fe"
  },
  {
    "url": "zh/about/index.html",
    "revision": "1eeb1a16a0022e0ca1821c376890f518"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "8367f950f588d17ecb9f6a03b0404968"
  },
  {
    "url": "zh/index.html",
    "revision": "7f57daf8ecb366c51d8fd7a52b96f325"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "dc82bccfbe1287457fee84802ef597d2"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "486a5077c64da65ea24fe9e1e2c052ab"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "a151752cbf0aaa55b394de7c8b35616c"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "944d6a9eedf037aacfb7a0b6fe5828ce"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "969ccbd4bd70793eed00619f2b3b6a44"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "dd7078cc79ecd2696bc1556e30951680"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "33b31458b9cc0061d0300b4f4a659c76"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "1bfb5d3bc76f7bd67ea8d7134888445e"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "508f5b56b30d02740a5630175cbdbaf3"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "6734630cab55fd01ff4c29662b1369b7"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "28b84dcd1a541efe773ec08c39851b03"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "7ded3083b7b9d43be4a829e2a3102d34"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "479df756296c8979b89eec2f41c95c13"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "4a49c12c1111fbbebaab30619203835c"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "3aad42624cda6b7609d9b741ee6b0a28"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "61aa34fbbd75d0bcdf3c7c6c0b22f0a5"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "5820287f138ba4729fee00d0cf689f7b"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "a5ae4e59a241d205ce8fadf139bd9c6f"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "f32f4f5a93392b0c4c545659ad531d98"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "fd201c3fb5d17b71d7f177cb0a3855eb"
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
