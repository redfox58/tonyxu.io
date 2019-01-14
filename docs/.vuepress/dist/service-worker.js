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
    "revision": "3781104b11c7bc97e58972c24de7f6a5"
  },
  {
    "url": "about/index.html",
    "revision": "4447d9762a3e5493116e51691c2f6217"
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
    "url": "assets/js/10.9f65411d.js",
    "revision": "08d53296f9b4cdb02687ac8d0a73384f"
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
    "url": "assets/js/15.4f48c6b1.js",
    "revision": "712341c942e31c4782e45cf2e5189885"
  },
  {
    "url": "assets/js/16.44ad4b18.js",
    "revision": "211b3fd6d1c19540e803fe3525bd863d"
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
    "url": "assets/js/19.36441407.js",
    "revision": "5a1e6e4e2539bca3dcd6125a3e4fc245"
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
    "url": "assets/js/21.05dcb2e4.js",
    "revision": "ad0b46ec68328af498e966ed415e1195"
  },
  {
    "url": "assets/js/22.f5132237.js",
    "revision": "207dd48965f48a44b5b48634230d3a77"
  },
  {
    "url": "assets/js/23.7ee31631.js",
    "revision": "e44632eabadb7a99704036f81ad4acc7"
  },
  {
    "url": "assets/js/24.bf57aaf0.js",
    "revision": "7ddc48968aa685dd2fbc78a3d4a75377"
  },
  {
    "url": "assets/js/25.9d3d8119.js",
    "revision": "7270d103155e2b40e344afa0064a51a5"
  },
  {
    "url": "assets/js/26.7d004a07.js",
    "revision": "e1f7a93caab3c78da1b6abc4af37d8b4"
  },
  {
    "url": "assets/js/27.279eb23b.js",
    "revision": "63d5f99a0cf5bdf23822bb4f1f3ad2c9"
  },
  {
    "url": "assets/js/28.d813acc5.js",
    "revision": "41f1aac65497485a96145a356247a125"
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
    "url": "assets/js/30.4678df9a.js",
    "revision": "963ae08ab2aac94bdbca5ef67b6c1787"
  },
  {
    "url": "assets/js/31.b1551fef.js",
    "revision": "fd9d0ee0c11f73407963c21556b55d0a"
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
    "url": "assets/js/34.bdfb92a3.js",
    "revision": "f136565a203858bbed988a6b16641f6a"
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
    "url": "assets/js/38.8fa22392.js",
    "revision": "a5b38d21d317d53e14c986ac6feadf18"
  },
  {
    "url": "assets/js/39.87ed2f17.js",
    "revision": "12cd580fb8a311b95a4acdd5202ca8e3"
  },
  {
    "url": "assets/js/4.2c5850dc.js",
    "revision": "a3f2bcc0f820d2a8e3d1e67e174f6630"
  },
  {
    "url": "assets/js/40.e815fd47.js",
    "revision": "5e7362014603d5ec70b37e12af4bbbe4"
  },
  {
    "url": "assets/js/41.0094a4fc.js",
    "revision": "30593f811da12c21f2db1e1c126a2738"
  },
  {
    "url": "assets/js/42.135e4bd8.js",
    "revision": "de8d9a6cc4980f0753927052a80c1c84"
  },
  {
    "url": "assets/js/43.8de5baa3.js",
    "revision": "aaa981e1fa30c9e73d30f1aacd6a9a8d"
  },
  {
    "url": "assets/js/44.df1919ad.js",
    "revision": "3751d1c166da4a13e36171e97d4a6285"
  },
  {
    "url": "assets/js/45.bc602075.js",
    "revision": "c176bc02b773c90390bcc64294904765"
  },
  {
    "url": "assets/js/46.25f7f91e.js",
    "revision": "3d6f6525f81028e5d3827d716e5f6cb9"
  },
  {
    "url": "assets/js/47.49244c67.js",
    "revision": "7a8333c042bb3d19cde376587caa6f06"
  },
  {
    "url": "assets/js/48.257e919e.js",
    "revision": "0d537b4843d6a8da566777f55aa90daf"
  },
  {
    "url": "assets/js/49.e2ff9895.js",
    "revision": "16919939c15e4b712d767f205c2ceb7c"
  },
  {
    "url": "assets/js/5.f120a756.js",
    "revision": "a2fca639b5965993476becac13d86d27"
  },
  {
    "url": "assets/js/50.18df9cf9.js",
    "revision": "29c2530ac6e3b4a907222092c4742770"
  },
  {
    "url": "assets/js/51.76966023.js",
    "revision": "9c57d8bc710e06537b80f71f6f141b1e"
  },
  {
    "url": "assets/js/52.8d5f8577.js",
    "revision": "fbfc928c629135f587b9122eea4a926e"
  },
  {
    "url": "assets/js/53.a22b26ef.js",
    "revision": "01f994d0c806a9836d4a93f90ebc0956"
  },
  {
    "url": "assets/js/54.308fef5e.js",
    "revision": "216f2ac0fb1c27580667ba8a6d910c1a"
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
    "url": "assets/js/6.4895d04a.js",
    "revision": "d8dd5420548105f94cbbd50add547422"
  },
  {
    "url": "assets/js/7.f1e2ecae.js",
    "revision": "d36a28c5a68f5e6af9d4abad35d8f19b"
  },
  {
    "url": "assets/js/8.ecc3e4f8.js",
    "revision": "6da6b9c7ff39c175e20845ea1760db86"
  },
  {
    "url": "assets/js/9.8d561540.js",
    "revision": "3bf872402ef2558305d07ae7570145d0"
  },
  {
    "url": "assets/js/app.17bc72d7.js",
    "revision": "dc10ad74ddb3f894f807a9f44eae2d87"
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
    "revision": "037062f216564b1b6f9f365276961a63"
  },
  {
    "url": "index.html",
    "revision": "a19b5ea3d563204a70644a98d92795e6"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "70da36739fa956e0cff889e77e30d172"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "9db10d21f65d3159037731d3f32f8b8c"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "3c5b0e9a31f648f55bbdbf7fe4f108fc"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "cff52908e66eb9560fcc0bdfdcb9333e"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "423d6e5dd4b5d6c6f93128ccd6e0493f"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "3b7df6a10ab114d52a4aaf0791d14f05"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "1f43110103b358bcd7aa9ff7bc79be6d"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "ed50fb5740710db20392fced7489a803"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "88aba703bd8940d4216eeeb3aa4dd5cc"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "cc33d52cc43208a5359adb40fca4ce06"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "71a000dff28c27583df5f3ad8e7c135f"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "c0583f6297c766a2a98399f78bfd22cf"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "5589fff8f7bbdfc0cfa22744ce572107"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "40d56e8b19a88564c3b03c2eaea5ac5d"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "2d5191c9109cf0a3e0c232e1feaecc57"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "684baee11eb2c11c57a36a0140f3b542"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "c4b3f8f957590ac931e385bba9ccbeb1"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "293423b80033f757f0d10dd187e801bd"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "c42ed67720b91f0884f941163fc1cb84"
  },
  {
    "url": "posts/index.html",
    "revision": "e17df76fc4cccaae81657b68bf1d32d7"
  },
  {
    "url": "projects/index.html",
    "revision": "5261ba4e5b52761583f6331742e5a65f"
  },
  {
    "url": "zh/about/index.html",
    "revision": "2d4e8c7643d7c8c35332992b9624dbd0"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "80cd76d1d15f6e480ca9d029cfcf004d"
  },
  {
    "url": "zh/index.html",
    "revision": "591aadf6963d3101e86825b33d1a1dfd"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "1f5cac47599fb31e2278f788fadf2b35"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "a3e3ac2524d1c002103546916cc153a2"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "323310a88bef94b3b42d29453439302c"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "4e0e203fd13ed530db70f21182b87e5e"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "fa9a6eb23feb47bfcf91e437a8991472"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "298b99aca21bac6626b5057d3ce75d5d"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "72565bbbdc619ef8b21c0cc337a3bacc"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "6cd7ebecd91268738183b6363351daf3"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "f87896425d67b9dd258c58aa1fed5105"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "c4185972ceb0b5d9e2d4d9699ec4a94c"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "0fea28cbd8e5b273d57b94c903bee44c"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "00763e083e317d5c3a601cae50babc2c"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "170fa74c3f9d1fe94c6cb41efae9e0cd"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "ea78844a8fb620e4c549f518da69ee05"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "adb228b0ef6051070b5288b36d941983"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "38eaabb5d9dcddde5feb10e6e5d23bc9"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "21a7c8c4f73e0869c02117f9dbc422bc"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "e0e7a9dc3a91377f5fe8ecdfd76be6d0"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "b4648cc2eda6de656e8140bb1db39f00"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "fd5119a67bdc91e7aa0f1288111068cb"
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
