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
    "revision": "cb4321d5abf28e4045df511a0d78f29b"
  },
  {
    "url": "about/about.html",
    "revision": "58f40d71e371a2940c06df29e9798b3d"
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
    "url": "assets/js/17.e10fa0a5.js",
    "revision": "d9f203114be3994700605efd4fc1422d"
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
    "url": "assets/js/23.459defa7.js",
    "revision": "a37b40ba764038fc2a5e3a6a665697c4"
  },
  {
    "url": "assets/js/24.0b5dbeff.js",
    "revision": "274c1c226e4951c539872da7e7d46f4e"
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
    "url": "assets/js/37.0721aad2.js",
    "revision": "24b8c29fc651914f84cc6f4aac34e3c5"
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
    "url": "assets/js/43.094113c5.js",
    "revision": "72bf6ea65ac99143b56b76c10236e6c5"
  },
  {
    "url": "assets/js/44.c2dfcfd9.js",
    "revision": "44abacd3ab92eb5db12bf3b9f247b671"
  },
  {
    "url": "assets/js/45.32009c54.js",
    "revision": "c154ac5a88a6c559b1ab5f68aab009d1"
  },
  {
    "url": "assets/js/46.5cd898cb.js",
    "revision": "8369bfdea7c252bb79eb94d8cefa6a74"
  },
  {
    "url": "assets/js/47.76d6506f.js",
    "revision": "602c78d3947c1c366ec2ec6816128b71"
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
    "url": "assets/js/53.e2e9693c.js",
    "revision": "7435b6afaab25dcd72be6f6350568c09"
  },
  {
    "url": "assets/js/54.81cfb878.js",
    "revision": "b6b7c83b512847301b28ce6c6b5498cd"
  },
  {
    "url": "assets/js/55.f46e930b.js",
    "revision": "91004a0fb0a639d7f3d9cb284cab98a8"
  },
  {
    "url": "assets/js/56.954bf851.js",
    "revision": "7d66960b94bd05a8dde27815c6c5e9f1"
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
    "url": "assets/js/60.65e7b14f.js",
    "revision": "9155b601f4581ea7c15a530ecc04b8f6"
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
    "url": "assets/js/66.3d805efd.js",
    "revision": "304eaadf7c66b7cce92f9ef2cf7e9e79"
  },
  {
    "url": "assets/js/67.27e30687.js",
    "revision": "2d97580766d6ba8c5fae5e9d05f774d3"
  },
  {
    "url": "assets/js/68.c32f9a10.js",
    "revision": "5804b6498981544f39108fdafa8aa78f"
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
    "url": "assets/js/app.67c55a36.js",
    "revision": "ebfd21ea94df057910524ab2293b2bd6"
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
    "url": "friends/friends.html",
    "revision": "5667f295139a53fdc9395c23a23f0440"
  },
  {
    "url": "index.html",
    "revision": "2a22c52dd164161a1a0f802d79c9a68e"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "c81ab4f7bba09362295ddd906e656ce7"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "ba921e84ca2f12a3f4c455a52f18ae25"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "d3e7cd7235fa2e87f66963a200995989"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "51c8f2c93c9fede7139304e6d7e601b4"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "006d36beeb555530e551c72323ad751f"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "4b0972a813e9612a47b5139214ea5534"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "2e31fbdf4ab198367f35755582f1d08c"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "65012b2d616959c1fc8fab22fc10c8e9"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "ced18356e86f6b65194332107d8cf639"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "69ad08df1e880784d6f83f2c368d333e"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "e3610441b92e48796d7458f237ceefef"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "bf332ac91a812c6cf308449bafaba7fe"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "4fffc37bc531ef61fd3250cc9d83179d"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "ba34d371c86c9e10a43bda4d572e776a"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "488738847f293429f1aa404537cd2c65"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "a7fc4f559de8457d5088311cfd44e74a"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "0aba7554fb0e350dd02a02b044a13b77"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "dcdbef84e682a204a7f5f48b774765f8"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "e65a40565a716a843438a2a69bb2946f"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "e774fa94a3917ccff2eec55aef98fbd3"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "a8a83e95854cef1b002302387cfd020c"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "21ec9654f91facc694d6dfff35ce64db"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "e41378a67e173194c69bcba29f1072be"
  },
  {
    "url": "posts/index.html",
    "revision": "bf1ce6ff11dbfa69cec2dcc3d8042748"
  },
  {
    "url": "projects/projects.html",
    "revision": "1818f6a616f0fdaed64bfa85cddd2973"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/paypal_barcode.jpg",
    "revision": "5949fc6164de5f14f09b7d83b179fab1"
  },
  {
    "url": "tip/tip.html",
    "revision": "fe28c94cb52efef72a89f963cede7ea6"
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
    "url": "zh/about/about.html",
    "revision": "60759cf07ea7210f28e0266f530f7a30"
  },
  {
    "url": "zh/friends/friends.html",
    "revision": "40f15cce572ac960969972ac514a346b"
  },
  {
    "url": "zh/index.html",
    "revision": "1be19bf1b097ac682604eeb79355fd96"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "7f8a05419f43b217c088c44f0bde6d91"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "6e29e78e3b9d1c21db0a7b836fac7f02"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8763a4d2f27f965dba00601671428a22"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "b6e760efa4e13eb03fd57c6ba4373879"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "8a0101c57c601b130c8239e852aa47ed"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "3090e910f9707c95e541cd729f96767c"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "504d620f7283d4d02af35f141f17f0e3"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "68b2fcb6b853c7daa6cc99f9d55b3c9b"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "fcbae63371604c30fa5ea7cb55b2226f"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "4e77fb79128301b3add24c0da66765a2"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "e3cb25feec2dbf2c4f40736826eb9ff0"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "ccfef1d280e4cedf3307507af2bfd6c1"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "a95259a5af45558efe4790ba647b6a9a"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "3049f722af7751b65e90d80249b3aad6"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "f8be66bb800cb1b5e19780aafe4510eb"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "a8ab053342b7b8d1c9ceec6a7a39e765"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "5d0610280df17526f9f3e9bae5a01b4e"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "3ffc45355dd30498760b5ea088875fa0"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "7a4bce195de6e6ebb038a8308d27872d"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "5a317996f066f58f99cebe0fc773dc62"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "5e5a9cebaaa566685d2a72fa2f8d10e9"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "104ba79d9d1c32c171f106c0f4fdba52"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "86f07095be67ef115d6202f85fc8b5f6"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "3b57498a9640ddfc7cf3d22488db12ea"
  },
  {
    "url": "zh/projects/projects.html",
    "revision": "bc41c301d01f05fb3a70bea74c176637"
  },
  {
    "url": "zh/tip/tip.html",
    "revision": "68a5cc7c8fa3dce555b26312a59f2c04"
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
