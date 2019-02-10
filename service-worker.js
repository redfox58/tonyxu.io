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
    "revision": "664088aaba60dabf12c70f2a62499499"
  },
  {
    "url": "about/index.html",
    "revision": "2138321805bb7a862552c531d25d18ce"
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
    "url": "assets/css/0.styles.9c760875.css",
    "revision": "23fb52f49ff32fd4908284492d12a992"
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
    "url": "assets/js/12.71034bb2.js",
    "revision": "45d489a1331c9c34efaa2f0493c04694"
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
    "url": "assets/js/17.f749772c.js",
    "revision": "cb1684fda1d798a6b0433d5980f68933"
  },
  {
    "url": "assets/js/18.33e859e4.js",
    "revision": "60612ab96f40f6bd619098d4df948a72"
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
    "url": "assets/js/23.c7350a08.js",
    "revision": "b2f93f6604b47164b2e23a65473d53a1"
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
    "url": "assets/js/38.fd70b668.js",
    "revision": "dc575d8688c4867020030f46130eecf0"
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
    "url": "assets/js/46.c886901e.js",
    "revision": "bbbb36831dabd17226668b22afc931bb"
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
    "url": "assets/js/58.6938776c.js",
    "revision": "133fc91447c146f9cd024f5817b8c578"
  },
  {
    "url": "assets/js/59.5d94108d.js",
    "revision": "f1577611105fe4a430ce76940e7adfe2"
  },
  {
    "url": "assets/js/6.202a6f46.js",
    "revision": "6de51da7ab968a2c9ae8db78d0376d12"
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
    "url": "assets/js/66.e528343e.js",
    "revision": "7a04416653062c08bddb3aa4a3e79363"
  },
  {
    "url": "assets/js/67.c05c47e5.js",
    "revision": "274521672faa2b0ad49273057d45afa8"
  },
  {
    "url": "assets/js/68.427f02bd.js",
    "revision": "35b148f192fece84d0e71c8fba172f1e"
  },
  {
    "url": "assets/js/69.9b7a87d7.js",
    "revision": "038428c753bae49cefb4b93c47a3b880"
  },
  {
    "url": "assets/js/7.6d9e07ae.js",
    "revision": "6eac8844f0af010e75a68b9b699a4109"
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
    "url": "assets/js/app.12cdb7e6.js",
    "revision": "8ac2a51d65d606bea644e3ae68947625"
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
    "revision": "15ef6f5a4c236c1af0a393e09fa94533"
  },
  {
    "url": "index.html",
    "revision": "17319ca294d56caaa1486ebc53aadd57"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "3b783247862ffd0149b52832bd71d6b9"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "92ae8df8097f8430019e93c6f00438bc"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "b27559ecd653511ea64a955b17e6e3ad"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "36ad4a71edeea4de6f17d027b797a2ee"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "28b368d68db641f03f740a39b14ad79b"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "b3d49fe2a8492eb8e5f9bedb6b51b631"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "047b803380cc212eb55132b32b304ea7"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "f2ab8a789c456eb96c05a2d232549fcd"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "6fc68e14436c144787e44fb1163446a0"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "8733c326f0501c376477ac3e296789d9"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "eec4f171a3bed9fed477f839395d4e09"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "697f10289ff8370d0aca33a8591f40a1"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "04231bbf869bf1ee79de57d391f4d8ca"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "cb4930a48b25d50b0535dc75b28f371c"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "4d6ad61920cb83d4d7fc255896192484"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "6ce2792e6b49787b748325a594028253"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "9742a6326050f3af31011660e6a863ea"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "e6c85105a36679be258bf1f8caaa1f59"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "3a85a0d0c27f01048a414907a9f8e3f3"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "a03a0f5c889b54149e7ec659f03ea71c"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "a4b2a9580857e04a1d468bece34ce711"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "4ec7fdb0865bbf54c041c48786a60ea4"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "6481d6d74ec1535f3de5fc751f21a0af"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "be71830eca2a0e1b10ae83f8b444fd09"
  },
  {
    "url": "posts/index.html",
    "revision": "c6593a33db2b36fae43a67c8a5758baf"
  },
  {
    "url": "projects/index.html",
    "revision": "e6743b330bc077b716db2978a569fd67"
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
    "revision": "75ca02de5740ba943b4ea87444df6407"
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
    "revision": "6faa48f04dfa3bb734b3441da5be6058"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "65a0608548d4c745d6070c27ddaf0e46"
  },
  {
    "url": "zh/index.html",
    "revision": "f65f9aa96f174c1399ca27061fe8c890"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "77ba6947b3b07b438e3234dc9395bf8e"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "4a20ff2d1f0a7e93d5f613b43b81a5d7"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "20c9992ebb6ffd8ec374c2380d7fe391"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "1075927cff7fd8ab2ab6c54b131c2182"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "b9258da0bbcddd45d0965985c2bc23b8"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "a35b47a1ff1c4e71c67f1d041404057a"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "caee4cfa16607b61c2efedd773741dc3"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "64601647629e4b6df5cdec5b215f459b"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "5a9bb849e3767e4588edab1064507b46"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "47b3502defba76fd7fcff055d3991aaa"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "9e535bda1ec02abcd25faf18bb2276e0"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "6b2d4e79e31ee1f5c374137f43d974a8"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "6e14b68160d7062d404c284bf2870066"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "6af1d8dad22ed7c2eefd0082d59c6946"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "75c421a4ae02a54d883dd28a655cac4c"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "e3130eccbecb300ab357601036212217"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "9de0a4d626ff44905fbda811db7fec6e"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "29bdf0df84dd5b350da81bb9ad38c182"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "ff437af148876bf1b6e89974c3e28a41"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "6dff3a83c7e5fb8d239b2250a18cf881"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "6c122b3b3ed16c7de945cf2a9892c054"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "bdcb0a90271acc2f87461b02a361fe50"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "65e61cd0400d55c8d93f4494ee9d2552"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "d111cdfefe304856cb8b232f5af4570f"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "e864fef2cd9dea2aa2d0aa445dba9426"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "ede71cf5707da7e64cf99505c43eb0eb"
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
