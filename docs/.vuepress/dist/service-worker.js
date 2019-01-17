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
    "revision": "9349c570d43c3bacd56141762ef20a4b"
  },
  {
    "url": "about/index.html",
    "revision": "bb34d98334d93cddd4b402cfb53e1120"
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
    "url": "assets/css/0.styles.86da17ae.css",
    "revision": "44ed32394f52778cfc397cf93af648d2"
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
    "url": "assets/js/10.6ded0dc3.js",
    "revision": "8e8d596ec3dcb723c8be25ccc6b90bbb"
  },
  {
    "url": "assets/js/11.dc6c4ea4.js",
    "revision": "18db368b6245325fddf32f7ba8953321"
  },
  {
    "url": "assets/js/12.93b6057d.js",
    "revision": "9f269b6b2724d4783822f2d01cfe024b"
  },
  {
    "url": "assets/js/13.79a7be4c.js",
    "revision": "148a1cef96af3b519a18010f082ba380"
  },
  {
    "url": "assets/js/14.01940386.js",
    "revision": "72c09c7272e83eeec1cfea9d006441df"
  },
  {
    "url": "assets/js/15.bb8549ea.js",
    "revision": "a9e10add66577c2ad22f1b109f40912f"
  },
  {
    "url": "assets/js/16.ab0b1ed9.js",
    "revision": "72501e780514d229e9aeb0ec398641e1"
  },
  {
    "url": "assets/js/17.ca53bcac.js",
    "revision": "0d1543adab6f2aef4f66006b678f730e"
  },
  {
    "url": "assets/js/18.656b365c.js",
    "revision": "32315592d937e8d0563bbc65fdbe2027"
  },
  {
    "url": "assets/js/19.c50fcbad.js",
    "revision": "267a8370e621375773c384f847db2a39"
  },
  {
    "url": "assets/js/2.b93bcb8c.js",
    "revision": "d01d0094b66d927cce1ae28b4fe5e77e"
  },
  {
    "url": "assets/js/20.abe3eb63.js",
    "revision": "c4a446119d920db50cc844c3601c8076"
  },
  {
    "url": "assets/js/21.432c3929.js",
    "revision": "8acf7374ada6308ea7137a943210180a"
  },
  {
    "url": "assets/js/22.7cf07e98.js",
    "revision": "d00852af11971e4a7cffc8b3cbc08097"
  },
  {
    "url": "assets/js/23.62c246c5.js",
    "revision": "6884af36de490d43cb71bc6aeddae9b4"
  },
  {
    "url": "assets/js/24.f3330728.js",
    "revision": "2e507a74629ce5864f1d8868bd8a4bf0"
  },
  {
    "url": "assets/js/25.12b48829.js",
    "revision": "601c28ce8ca466f58b327b77b0743974"
  },
  {
    "url": "assets/js/26.98d28071.js",
    "revision": "aaefcd361d022db65bc1f7799c7db047"
  },
  {
    "url": "assets/js/27.0f5288b5.js",
    "revision": "0353a4308d11bec62a68216236406b7f"
  },
  {
    "url": "assets/js/28.1f788b3a.js",
    "revision": "b39dafef576dc108c920759f49e70d7a"
  },
  {
    "url": "assets/js/29.1dbf63c2.js",
    "revision": "8892ed55b8cf440ff50109c1266aa988"
  },
  {
    "url": "assets/js/3.5edd6ccd.js",
    "revision": "3d3f05664303910b011cb027adfe2f7e"
  },
  {
    "url": "assets/js/30.78595c1f.js",
    "revision": "07ab2db2cb6864404c64918c361fb698"
  },
  {
    "url": "assets/js/31.91a54b67.js",
    "revision": "8799ce116406a052f415eeb022acc765"
  },
  {
    "url": "assets/js/32.464cea4a.js",
    "revision": "f54c8b69a996681bec903868fdc82790"
  },
  {
    "url": "assets/js/33.f9db6c44.js",
    "revision": "07c60e0040c7ca5765d07aa5caf44180"
  },
  {
    "url": "assets/js/34.faf5863f.js",
    "revision": "f7d7ed8d12f63d0561dddfa43a46691b"
  },
  {
    "url": "assets/js/35.35852d88.js",
    "revision": "b92c57113d0d06ac888c9980e33ade23"
  },
  {
    "url": "assets/js/36.ebe09b9c.js",
    "revision": "34117d072fb2b15676e70c01786b247b"
  },
  {
    "url": "assets/js/37.e05d1c14.js",
    "revision": "334d56fa92d3967df13fbbbe5fd2de60"
  },
  {
    "url": "assets/js/38.c1573a9e.js",
    "revision": "adef693c9e57f5df5a2a5df7bd428c2e"
  },
  {
    "url": "assets/js/39.ba103437.js",
    "revision": "3bb589ba152cee828c405249945a37bd"
  },
  {
    "url": "assets/js/4.ca144046.js",
    "revision": "ce3c85fa2d3f6d30f284c3ba1cf5dc57"
  },
  {
    "url": "assets/js/40.42ff80c1.js",
    "revision": "a9671fb07d931e0f2ac6dfa46c7023ad"
  },
  {
    "url": "assets/js/41.5200d9c0.js",
    "revision": "31190cc7503da5572e6a97a4b9ed4aa6"
  },
  {
    "url": "assets/js/42.05e247f1.js",
    "revision": "531a3905aca2d6ef888349110e10081c"
  },
  {
    "url": "assets/js/43.795d5a36.js",
    "revision": "cd13f10b0ce14e629a261a60439814aa"
  },
  {
    "url": "assets/js/44.1f80f615.js",
    "revision": "727b6bbf30ea8efa8e7ec87d5b6e02ee"
  },
  {
    "url": "assets/js/45.b751c1d2.js",
    "revision": "1b676a2d693ff6783622d060fe5868b4"
  },
  {
    "url": "assets/js/46.46995157.js",
    "revision": "72cef156dcfb7fb2e10464b00bfb1238"
  },
  {
    "url": "assets/js/47.6520fa3c.js",
    "revision": "f29847d034126552b70b9caea3f4e388"
  },
  {
    "url": "assets/js/48.4b58e4e8.js",
    "revision": "c283b4f4d5e68651a1c1a0fe817a5120"
  },
  {
    "url": "assets/js/49.b81b4a56.js",
    "revision": "94d9024c8b340323599a8a4ea60b558b"
  },
  {
    "url": "assets/js/5.d9d3ac24.js",
    "revision": "e3b71d507c910c73067c05fe9bf17b4f"
  },
  {
    "url": "assets/js/50.51f3f795.js",
    "revision": "17a83039188dcf9243d7d90c4c6ce366"
  },
  {
    "url": "assets/js/51.169f4397.js",
    "revision": "6a327ef86affca2bae990a2aa676bfec"
  },
  {
    "url": "assets/js/52.a857a765.js",
    "revision": "d0c8be2b763bc52b7baf871c9af6b2fd"
  },
  {
    "url": "assets/js/53.59560e7a.js",
    "revision": "9f9b38c2ec0f3c1d9b2ff590af7a3d5b"
  },
  {
    "url": "assets/js/54.9bec0f65.js",
    "revision": "a407f930d5dc7d8e164100f7e53468d6"
  },
  {
    "url": "assets/js/55.0e3c2027.js",
    "revision": "cfb60019eff967b54f09c519fe02b709"
  },
  {
    "url": "assets/js/56.2c6966ef.js",
    "revision": "45a9ba8da93dac029337faaba96351d4"
  },
  {
    "url": "assets/js/57.f22b9c2d.js",
    "revision": "1ffcfc8f45eaf1a1ceb741b2eb5a3115"
  },
  {
    "url": "assets/js/6.09c16b6b.js",
    "revision": "672985fe8b748119aba388f106bc67da"
  },
  {
    "url": "assets/js/7.9637685e.js",
    "revision": "0049780a638e59a69ca9c0b8d97645d1"
  },
  {
    "url": "assets/js/8.35101220.js",
    "revision": "78263a34532af22f1b145b562e1a4835"
  },
  {
    "url": "assets/js/9.0babe4c5.js",
    "revision": "3397347525e02b8007b91e8f25c49938"
  },
  {
    "url": "assets/js/app.09672c1b.js",
    "revision": "efd78da9d777b694d40c5d29d6d0371e"
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
    "revision": "0d830ffd86dba18ba08c2498e9c8a8d7"
  },
  {
    "url": "index.html",
    "revision": "e76750d624ad6bbcecc8153b3f469f36"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "fe5bed8a4711c8b32a48507aa44c1298"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "c4ebcb3c69434f91314844812cc2e8d9"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "e81aedc9d03dfd8ed765520f5141332e"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "ec03a4ccfc254429f660f473b52bc1c4"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "3c336e3fd58625941060747ae9d41ae6"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "0ab3d82959b269d73bf8e3a2a8d60a23"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "35d756e8ab4d87a6135095afb2495446"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "7833bc40c939ca515eb44bcc050f3482"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "60ea2fd73b1816fdf4f2fc483b1d6663"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "cce65b93af558f7084fceee942f4d9a8"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "c75ec6050c3af73bf59d124d8d312519"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "7a896ce7e9078c8649f28183a96db01e"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "c93026884d05784659c81d03bd65221f"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "08a9915506833afb0410b4cdb506ed2c"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "e2fd2456d8c13863a1f30bce437cb1ad"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "b22eea35c7d6ce550123d1f25d4beca3"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "84a718b9728b2c280f957862d44559c6"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "a9b65e16355e14c99da563687834206d"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "6325bf10ed0886cae168154503c252d2"
  },
  {
    "url": "posts/index.html",
    "revision": "7144a17a0aefbda175e47043f7d2396a"
  },
  {
    "url": "projects/index.html",
    "revision": "5e17471a1caf82ab4a91c1dfdbe16e47"
  },
  {
    "url": "zh/about/index.html",
    "revision": "2939fa25434ca7bd2f2d10e78fbb6db5"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "4b04964138e4b1b13aca61c35a5a342d"
  },
  {
    "url": "zh/index.html",
    "revision": "1230f472449f60af6e235587a77012a9"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "02828cc4019aa6ce29bf9aa03602d0a4"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "c3369869029130408e3e228b76d9ba79"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "b48a1ad24ac1e395d80102503cd30722"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "65ab7adeb8839efb27044d065a3aef29"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "853015a0f052d28f73c341fae3804599"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "90a1568d4066846733f37016c977ed50"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "74f3e77f0f639db550706752592d06e6"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "6e0d7e2148c7381dba57941f9734ae11"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "7629dda792b7080f664fb7f21a192767"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "82f73e6926766cff68a807967f07c568"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "02ed2b1002ee66b674ef231e8bea5fdd"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "a4ca894486ef301e47149e0bd77440b4"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "dcd432da5df87ba534a537729dc1c2c7"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "a95000c18c07224a06bcdcf84674718a"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "145d56346ce40b0bacd0c9488dda564e"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "98a30fce3133f58e791ccbecc6355534"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "de96e31ba5791869e69892c77e4b1319"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "8f09f35041a4ca61f051795531ec97ee"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "d8c43c3be07cdedee3e5cda188b2c817"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "5f9ba1e8103a6bd2a6a01283ad8ee369"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "f1baa8573915bfa16ada908e67a13ac4"
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
