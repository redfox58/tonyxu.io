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
    "revision": "81902c8c8aed9325d8dbcbdc112d2625"
  },
  {
    "url": "about/index.html",
    "revision": "45f0574660a122b13d3b1be21206dd34"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "177a5bcbb5615569e99512bc21716aee"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "094ed17a6c21de50e30bd8013a6bc74b"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "fa0a54944f47478e1b86d571e5cfdc38"
  },
  {
    "url": "assets/css/0.styles.119d7f4f.css",
    "revision": "082b8b22f557d9dc14050da568f11669"
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
    "url": "assets/img/github-issues.279114fa.png",
    "revision": "279114fa078a914dc61cd3e1c32cdfda"
  },
  {
    "url": "assets/img/github-projects.95639a4c.png",
    "revision": "95639a4ce54d1e477637213e3dcd657e"
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
    "url": "assets/js/10.5e138f1d.js",
    "revision": "9882c1f647c39fe3ac6c73ac29b5b2a4"
  },
  {
    "url": "assets/js/11.1bd07509.js",
    "revision": "8932f5d63443f77a4da618153889c977"
  },
  {
    "url": "assets/js/12.9b4deea3.js",
    "revision": "92fde5353216ca88819d09f96c543d67"
  },
  {
    "url": "assets/js/13.0ba02817.js",
    "revision": "c9857d2db72fb0e8da487ea8c9fb8681"
  },
  {
    "url": "assets/js/14.6d8de823.js",
    "revision": "2ea1eae7df48b21274d82815ad52cd94"
  },
  {
    "url": "assets/js/15.026b2087.js",
    "revision": "15eb577c98eb8f49da17122122234684"
  },
  {
    "url": "assets/js/16.b72c3b5f.js",
    "revision": "013681a4cab69096481ed7a3af5b522b"
  },
  {
    "url": "assets/js/17.e10fa0a5.js",
    "revision": "d9f203114be3994700605efd4fc1422d"
  },
  {
    "url": "assets/js/18.81d8d7d0.js",
    "revision": "e712c63c55f145cd1cf20500913955cd"
  },
  {
    "url": "assets/js/19.cf2fb7bd.js",
    "revision": "8aa5f7f7b66fbefa79ac28d33eca9187"
  },
  {
    "url": "assets/js/2.a93cbcc6.js",
    "revision": "323b12a78253c268eadc5ced52e426d5"
  },
  {
    "url": "assets/js/20.ebcdb40b.js",
    "revision": "cf98dac909f92e49b54e13048bede336"
  },
  {
    "url": "assets/js/21.d5e775cd.js",
    "revision": "6d7c9b6960e0e97a92258de1e47f47ca"
  },
  {
    "url": "assets/js/22.73cf46cd.js",
    "revision": "2858c016708065fc898997e85acf1ade"
  },
  {
    "url": "assets/js/23.07e26d06.js",
    "revision": "80c44a2dce77c70c6e4b32f6697f74d1"
  },
  {
    "url": "assets/js/24.a750307a.js",
    "revision": "3d5fa04640838e9f1b2e34b34058f811"
  },
  {
    "url": "assets/js/25.eb74193f.js",
    "revision": "570e3fc50687f312b613e406f61604b0"
  },
  {
    "url": "assets/js/26.9a86f3c6.js",
    "revision": "12c8b07507a51aad99e0a65dcbfc8a88"
  },
  {
    "url": "assets/js/27.a764b68d.js",
    "revision": "d2ebd227e938a47d8963ccbbc6726f97"
  },
  {
    "url": "assets/js/28.20fee3ac.js",
    "revision": "967981014cf4fcf12e7ef8ded387a074"
  },
  {
    "url": "assets/js/29.2144fae5.js",
    "revision": "2232e36766ade2fdf4f6dcdc44f91145"
  },
  {
    "url": "assets/js/3.35f5fbcf.js",
    "revision": "1250a7d3faaea5731a4ebecd50410ef8"
  },
  {
    "url": "assets/js/30.4c014072.js",
    "revision": "7a92880b39c77169478126e0964c9c47"
  },
  {
    "url": "assets/js/31.ce0838ed.js",
    "revision": "1763721949278352f63551978668f6ee"
  },
  {
    "url": "assets/js/32.b0dc31a2.js",
    "revision": "3656ee8fe9e3fe46fb62fddbc806d5ce"
  },
  {
    "url": "assets/js/33.04fbb223.js",
    "revision": "024460699959e4a6e82c1fc4d5a2dda3"
  },
  {
    "url": "assets/js/34.9d0e9c7e.js",
    "revision": "5a7dfdc80048e8c2e17f3530d6977b5f"
  },
  {
    "url": "assets/js/35.47f67944.js",
    "revision": "fba4590e771152b11a6ec8cbc5d52026"
  },
  {
    "url": "assets/js/36.79185a03.js",
    "revision": "463cde74f62cc2d70e7607fa1cb66758"
  },
  {
    "url": "assets/js/37.1bc1eb4e.js",
    "revision": "b98bbb310791deb5870d165c03dd24f2"
  },
  {
    "url": "assets/js/38.8b1f9a48.js",
    "revision": "f749a84b5e2f7ec7f804381f1a6a927f"
  },
  {
    "url": "assets/js/39.c261a562.js",
    "revision": "c5c63de27d3c7f31f6f869efd9fe26a1"
  },
  {
    "url": "assets/js/4.879ea0ad.js",
    "revision": "30d620da32e1c3e9178b4614a9ba647b"
  },
  {
    "url": "assets/js/40.299acc5e.js",
    "revision": "c2cc13bb55a99676a87e0bcc779b7c23"
  },
  {
    "url": "assets/js/41.389eca45.js",
    "revision": "21afa183e2cfc923e7246a7187001949"
  },
  {
    "url": "assets/js/42.aa3d84d9.js",
    "revision": "3fd64053a252dc7aa47f54866bb3a288"
  },
  {
    "url": "assets/js/43.60928d2c.js",
    "revision": "b8470e815973bc8e70b673067c5c3409"
  },
  {
    "url": "assets/js/44.c4c9e92b.js",
    "revision": "3b9dec17888e70a683b5fa0e5539d9a8"
  },
  {
    "url": "assets/js/45.32009c54.js",
    "revision": "c154ac5a88a6c559b1ab5f68aab009d1"
  },
  {
    "url": "assets/js/46.f0b4bd6b.js",
    "revision": "80f326e415f8f8d558b14fb670d41854"
  },
  {
    "url": "assets/js/47.c1940c71.js",
    "revision": "aa5bf12c5a60903142ea98830e48c612"
  },
  {
    "url": "assets/js/48.c7462937.js",
    "revision": "b7a380ba0e1a4b7dbd2da224179bc7ea"
  },
  {
    "url": "assets/js/49.8c17367d.js",
    "revision": "e3a662d5b7029c6349985391b3425947"
  },
  {
    "url": "assets/js/5.b3a6858d.js",
    "revision": "81223a19cf3fb74c580f2fe192d10847"
  },
  {
    "url": "assets/js/50.8dc8b4bf.js",
    "revision": "30a6e7d96550468f2a7003be89401f9e"
  },
  {
    "url": "assets/js/51.582c29a1.js",
    "revision": "438f44ea996ac68bb78e5c68646a63d9"
  },
  {
    "url": "assets/js/52.d853c9d8.js",
    "revision": "b3639dfc11f723640f22fc03d58c61ae"
  },
  {
    "url": "assets/js/53.c01990d6.js",
    "revision": "7390964e91821abb778628b97b141322"
  },
  {
    "url": "assets/js/54.5aeed2fb.js",
    "revision": "b443a76a0c2c01c8c9fdfe6fed8bb17a"
  },
  {
    "url": "assets/js/55.6da49897.js",
    "revision": "1e75053de876a7efa1a9a079a2624a0c"
  },
  {
    "url": "assets/js/56.c092290e.js",
    "revision": "92e1f6ad77445f5f0cc0e1235812833b"
  },
  {
    "url": "assets/js/57.5f875683.js",
    "revision": "cdf329e646f148aa3b4707c650024341"
  },
  {
    "url": "assets/js/58.7ceba8f7.js",
    "revision": "3eddc51954996c0fd183dc9d3f4e64d0"
  },
  {
    "url": "assets/js/59.5d94108d.js",
    "revision": "f1577611105fe4a430ce76940e7adfe2"
  },
  {
    "url": "assets/js/6.8d2942ef.js",
    "revision": "76bfe2589f4d6dbdc7c80dec29327ec3"
  },
  {
    "url": "assets/js/60.ba66a643.js",
    "revision": "0ade47de09e14cc810da6d5fbabe0acc"
  },
  {
    "url": "assets/js/61.ee66529d.js",
    "revision": "8e6f8d2f596660ce77e4f88e03cc8875"
  },
  {
    "url": "assets/js/62.49531f04.js",
    "revision": "5486993cf2cf8a86b4ea4f8dda05c2fd"
  },
  {
    "url": "assets/js/63.aa1a3a21.js",
    "revision": "3a7f06989429ab7b397e671294bd187e"
  },
  {
    "url": "assets/js/64.a23f7a8b.js",
    "revision": "149b349532a9c2e3a1e32a431d2fe3be"
  },
  {
    "url": "assets/js/65.35a6667a.js",
    "revision": "a52f90ce686569d780efc97b271091af"
  },
  {
    "url": "assets/js/66.f17cfb35.js",
    "revision": "c5bd20fafa3b4a9ce4b72fd23aaf8a63"
  },
  {
    "url": "assets/js/67.3da09744.js",
    "revision": "d89ef443914189ad95a209bce03d355e"
  },
  {
    "url": "assets/js/68.94184db1.js",
    "revision": "112f69d7f9447b8ec07d1f4418fd938a"
  },
  {
    "url": "assets/js/69.9b7a87d7.js",
    "revision": "038428c753bae49cefb4b93c47a3b880"
  },
  {
    "url": "assets/js/7.1788aa15.js",
    "revision": "5cf1fd3f271d04f3da80b9aa8222f8ad"
  },
  {
    "url": "assets/js/8.0a873f3c.js",
    "revision": "8dea7ecdff825e6bd5b33d55658d2d45"
  },
  {
    "url": "assets/js/9.8aa49af0.js",
    "revision": "6dd4a5a253008e66622e1030d53918fe"
  },
  {
    "url": "assets/js/app.5e7523a4.js",
    "revision": "3ef353d1127734666479ed621e372b7a"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "1550c3d9ab3f24babb47ca77f8508695"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2280c4bc0615fd87cd5ed2d650a3b373"
  },
  {
    "url": "friends/index.html",
    "revision": "a7658fdc0b29d1a2dd4a437517733bed"
  },
  {
    "url": "index.html",
    "revision": "1e0af99f790b4364d04167dd9cb94fe7"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "3b783247862ffd0149b52832bd71d6b9"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "a8cd83f2f0ae2c5cd510a51690697534"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "41edd0e4020ae00aa3a97774534d9974"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8efda10ae6eb87ef720ae07163b5153c"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "7941edfd114bc7b2bab33523cb7e5c99"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "4d0dc10f83bffddbe2aab798db3f53cf"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "42df506f73382170c145428d95f0abf0"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "3b4e427b4fc6942861196397aa2fb2c0"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "73d25b42bb327c74c6e8e4aec1c33d4f"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "6193d01bcab866b9463083ffbca096e1"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "86ea5d3e40226ba4b290014fc5605a7f"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "4b4a2a5734eaa4a7e70c05dbf530d9ef"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "cae51b54156a9bc7db5ddac8b9693524"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "eee50bf39c524eba9fe218fb77adae9f"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "136f77a095b40616fc38bad7b4f3a77f"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "2bb0babf1cd824c5e2c4f1eade998c94"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "feab08d2edbe34476ba16ba5ae70630c"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "e41cd9c0205fdb4b7326d95066c5d179"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "45c953c79d431b3b8017cc52fcce20fc"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "559aab9a381fef249e9ce50336e7b365"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "db2a59c788c17624d5f7a95cfd2b23b3"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "bbc392230537501e7113b32261bb2240"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "80e1e2604c081af32c53ee38ade989fd"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "fc53b0427103f17c523eceac7a021034"
  },
  {
    "url": "posts/index.html",
    "revision": "4c6c0cf9e2be1727467e2f91a84ebefd"
  },
  {
    "url": "projects/index.html",
    "revision": "4994249e3d9bcbfd10b0e2a0287e2729"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "7baf319b3ac5a66f834f4a04848ac7d9"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "c87edf5e56a570879be990712c1b453d"
  },
  {
    "url": "tip/paypal_barcode.jpg",
    "revision": "5949fc6164de5f14f09b7d83b179fab1"
  },
  {
    "url": "tip/venmo_barcode.jpg",
    "revision": "f302adb4b39a6e972ffacc0ee2a96951"
  },
  {
    "url": "tip/wechat_barcode.jpg",
    "revision": "689b52e80d647e3e57947363038f0b85"
  },
  {
    "url": "zh/about/index.html",
    "revision": "b924200fa5ab96e5482fdfac073ea45e"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "0aa6fd9f690a83e41020eedd4bb923d2"
  },
  {
    "url": "zh/index.html",
    "revision": "423dc1dcbb9dded0503f3564c8e3eacf"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "e57ad235e7298982f112a26b5c54beaf"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "70fd88411797db13de733af7fc8f4e27"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "89546ce2296671f9126233dcc5b4e1c1"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "08854222b2622db03816a72c0e8ec139"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "4645de3354bfd8a61b143e395e137a36"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "a3185b0b6b1fe14cbb87877d7441e9a1"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "51e1112b824ae90392d4ee8308b8ebee"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "9596dfdd6d8f5694e73ab9cc3028627d"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "44f626fea5c579cf16cd41714788c4d3"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "58e37b26e7812fa325d4c569c1eaa40d"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "88d94074fb082b1616d27efd8f1d679a"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "e9a883bd9aaa6d19055299aa785c1a2b"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "60b0207f061db2099fde5b5f072994d8"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "cb273593b9422dc0f776c5587c5e8e37"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "369fcf8d3802924a90de0c7ecd4b4a82"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "3c1260f1ecd9f4ef09ca2d6136cca5f2"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "95b9b8a1634d242160bba48982cd8054"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "c4534dc362eb7d6a1c4b2434b5f36a3d"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "663007ea325ac2ade93d4b694449146c"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "1b3fa692601b26e26a5f8ecd8f431d45"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "f9c0766923aab2a0fddc93373787b1d8"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "1d1272718f070fb02eb5f562bcaf16ce"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "94d81d437197c8adc3109e63ec7708d0"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "22dac3219eee3f7d8bedea0c9ed6139f"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "e7168da3aa7d100aeec1f3e8182fc00f"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "3594cd6954793bf42b010b4813177d26"
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
