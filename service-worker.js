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
    "revision": "ca9d94b05e6287288e4c3a7110058fe4"
  },
  {
    "url": "about/index.html",
    "revision": "a9080e230f6bd2649b359c418cc4cf5c"
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
    "url": "assets/js/10.87831687.js",
    "revision": "1a22518f7ed174f5eb1f1f2731cc64ea"
  },
  {
    "url": "assets/js/11.a39f3f48.js",
    "revision": "f7bcd5b28eb2772bd6b1232a8e36fa4e"
  },
  {
    "url": "assets/js/12.d67102ad.js",
    "revision": "f830b0d28796387306d1533b7ae2e794"
  },
  {
    "url": "assets/js/13.5b1fb626.js",
    "revision": "d56ea9f7342e04c510be9b5ac15c5a74"
  },
  {
    "url": "assets/js/14.8c7b0b8f.js",
    "revision": "29c200d0eeb98b5591528d324f597ebc"
  },
  {
    "url": "assets/js/15.cf80c23d.js",
    "revision": "c32a426ee1bf2b68508ace4d4609ae4b"
  },
  {
    "url": "assets/js/16.475fc0a3.js",
    "revision": "90b8c78d357812f0d4cd532a98b55373"
  },
  {
    "url": "assets/js/17.866059a9.js",
    "revision": "44eb5c9ba97a5f17754f3f6bacc74608"
  },
  {
    "url": "assets/js/18.8462573c.js",
    "revision": "c441ecefa4fcac246c65a93b6b13d9cc"
  },
  {
    "url": "assets/js/19.b3993457.js",
    "revision": "e8f3c99c68ebbb6b2c2ec71d08efaa04"
  },
  {
    "url": "assets/js/2.6579a700.js",
    "revision": "8976af15703949732fe0f1b85b546151"
  },
  {
    "url": "assets/js/20.6cdfee42.js",
    "revision": "3add7a97b9ba9a66a13f350244e1c9ad"
  },
  {
    "url": "assets/js/21.753db146.js",
    "revision": "96c5ec213cfafb8a15d63751946bce03"
  },
  {
    "url": "assets/js/22.7173c272.js",
    "revision": "53593068e1dbdce5a8b70df2d40b18b1"
  },
  {
    "url": "assets/js/23.4407bda7.js",
    "revision": "53e131be021528d5f3161730ca66bee2"
  },
  {
    "url": "assets/js/24.ac23a34f.js",
    "revision": "ad1792d31eaca59d4d24072a797823f8"
  },
  {
    "url": "assets/js/25.ebf75903.js",
    "revision": "a1b437f5ecb9c24294c0d58834c8aa96"
  },
  {
    "url": "assets/js/26.796c7021.js",
    "revision": "2742eab5d1a7b4e39f79085c63d69889"
  },
  {
    "url": "assets/js/27.5aeaf18c.js",
    "revision": "6771377370965d0ac70b0f0e9a89b4b3"
  },
  {
    "url": "assets/js/28.ebc7305d.js",
    "revision": "07e88e151bccf7430ba9c4ae39467a66"
  },
  {
    "url": "assets/js/29.4694815a.js",
    "revision": "48eb60705d998dabd8719cc0e2295eea"
  },
  {
    "url": "assets/js/3.93d72f71.js",
    "revision": "94f3a42d6e6c9d7847f86797011faa58"
  },
  {
    "url": "assets/js/30.6c8261d6.js",
    "revision": "47d674af717fda74f54f2fe203781444"
  },
  {
    "url": "assets/js/31.a9bd4cf4.js",
    "revision": "05009e96872de01b35bc1681aac50072"
  },
  {
    "url": "assets/js/32.ce01a206.js",
    "revision": "73f84f892f3fe43fe226eca807229a14"
  },
  {
    "url": "assets/js/33.e2a67341.js",
    "revision": "425ccae8a8b88911588691ad3ad9e1c9"
  },
  {
    "url": "assets/js/34.4ea3e7bd.js",
    "revision": "61703ef35921cc4d1b750d3b74d97f3b"
  },
  {
    "url": "assets/js/35.fa9c8115.js",
    "revision": "67384a91df8f77047dc8475b95af263e"
  },
  {
    "url": "assets/js/36.20d8fb98.js",
    "revision": "41eaa4bc2a8021fb6354e3d5e18f7971"
  },
  {
    "url": "assets/js/37.8646badf.js",
    "revision": "aaf3b6d7659889f107623b929225e75a"
  },
  {
    "url": "assets/js/38.a4c48f44.js",
    "revision": "a615cf0d474e47914a08cee3987a10e0"
  },
  {
    "url": "assets/js/39.348508db.js",
    "revision": "536f118e08343ef9c94537252192fc42"
  },
  {
    "url": "assets/js/4.51748646.js",
    "revision": "8f2ba0240535f67774e91b827b7cf9f0"
  },
  {
    "url": "assets/js/40.ea54117e.js",
    "revision": "33ebb87223b37f8ec9b73d91c6e7c68d"
  },
  {
    "url": "assets/js/41.54c573b2.js",
    "revision": "6e717cedd8af450caf1e544316297408"
  },
  {
    "url": "assets/js/42.43948c01.js",
    "revision": "0144eb65fa5fb0a2dbc7e1774110b491"
  },
  {
    "url": "assets/js/43.9916caed.js",
    "revision": "f61d3145decb8413d0b8196be7f4d0cd"
  },
  {
    "url": "assets/js/44.5d6d9c35.js",
    "revision": "a3640e6b6960967c7d512be6f4299caf"
  },
  {
    "url": "assets/js/45.ff3ecf72.js",
    "revision": "7b4ed6186a28e39b590fd3296b742377"
  },
  {
    "url": "assets/js/46.27699f6c.js",
    "revision": "b0ea876c2eb62a63bdbeb2654f32bfea"
  },
  {
    "url": "assets/js/47.5b7dfa16.js",
    "revision": "1aa3b497a30482e91c19fc5823cdf0b7"
  },
  {
    "url": "assets/js/48.3032cf0c.js",
    "revision": "07938271f54198215fd807267bf4aa27"
  },
  {
    "url": "assets/js/49.e9708d6f.js",
    "revision": "161e8453de6730b01879ad34b7cbe11b"
  },
  {
    "url": "assets/js/5.0374af4b.js",
    "revision": "c87ceaebaced097aeb3ac5f222b695e4"
  },
  {
    "url": "assets/js/50.3c1eff75.js",
    "revision": "13f2c1cc44bec763470aa411cd9dc6de"
  },
  {
    "url": "assets/js/51.94951b30.js",
    "revision": "64004c8622e7d0b5481d2db2efb6fddb"
  },
  {
    "url": "assets/js/52.8ab100b7.js",
    "revision": "42849a7779daef23d6536ba4dbb2fdfb"
  },
  {
    "url": "assets/js/53.e946c2ab.js",
    "revision": "7d0a76d51517d1cc4a102e85099fc0fb"
  },
  {
    "url": "assets/js/54.a001765f.js",
    "revision": "8b45cdf9bceb702b3718737aa853578f"
  },
  {
    "url": "assets/js/55.574663ef.js",
    "revision": "c5f823e83c0c8b62fccfaba8949c8bc2"
  },
  {
    "url": "assets/js/56.5bc588cc.js",
    "revision": "4526a7a027d365022557456139baa8f0"
  },
  {
    "url": "assets/js/57.f1c78b13.js",
    "revision": "d1b371f4152e2f40a8187eb21d6062f8"
  },
  {
    "url": "assets/js/58.62dc578a.js",
    "revision": "6255a957e17d98b31d229a1d48a44e1a"
  },
  {
    "url": "assets/js/59.4d05fa17.js",
    "revision": "5cf408ccf91609ccca5722ab28e6f91f"
  },
  {
    "url": "assets/js/6.f161f1c1.js",
    "revision": "09c2a92259f0ac55448fdbc0dce4fc4f"
  },
  {
    "url": "assets/js/60.d7cc24a6.js",
    "revision": "7186702f81e8695de6a6c1ba38f2c16b"
  },
  {
    "url": "assets/js/61.36c98058.js",
    "revision": "20cdf76c458bb7a57e75421fe2b80013"
  },
  {
    "url": "assets/js/62.cd5f5899.js",
    "revision": "2796d80ae174f68b23e48716521b5c51"
  },
  {
    "url": "assets/js/63.8ac78703.js",
    "revision": "c1952f54b87a1b28604aa13584d07e1b"
  },
  {
    "url": "assets/js/64.649cdd86.js",
    "revision": "472206fc6d5b24330bc71519848484c6"
  },
  {
    "url": "assets/js/65.c43ac36a.js",
    "revision": "cbb52c120f6c58942b4c931bca912880"
  },
  {
    "url": "assets/js/66.8933639b.js",
    "revision": "1147151c0f566cd678f08e6b84a67724"
  },
  {
    "url": "assets/js/67.4a3ec739.js",
    "revision": "598812b993e18f9f4aca0bdc60301094"
  },
  {
    "url": "assets/js/68.950c805f.js",
    "revision": "a20d31a76724f5fc54cbc7848d1f110b"
  },
  {
    "url": "assets/js/69.780e2d90.js",
    "revision": "e2917ede714b0262ae31e880dad041bf"
  },
  {
    "url": "assets/js/7.444f754b.js",
    "revision": "6c77e50fc30a242026bfa17ca01ba76d"
  },
  {
    "url": "assets/js/8.18335ce5.js",
    "revision": "2e466b7d542eac46d73863de17ea2435"
  },
  {
    "url": "assets/js/9.fb69606f.js",
    "revision": "cb333ad15803826afac27cda66ad7c07"
  },
  {
    "url": "assets/js/app.94066445.js",
    "revision": "a0f48cb2e87545ae6ed094ea25c20be3"
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
    "revision": "f5e90f775fdc714453e2fbb7c4835fe5"
  },
  {
    "url": "index.html",
    "revision": "a85481f178dcf0cfe802a18957cdc9fb"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "b92ac0b7de03f4414188734b193430c6"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "ccf650e231cbe53a3b84721939e82fe1"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "efb954a4329dfa6764ae78c98bce2204"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "1f73f014778aa3568425d0dae750c2d2"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "89a3951a457716ff937498a860d10451"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "b9bb7411cbff8a047339e0f517443ef1"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "d840179a6f90818be170af3b47d6ffc3"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "1cb2154570b9736e93431c6b7c52bef8"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "308e1b7f6d354ac7d94e140e41d35737"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "1581fc49e4859800a603fb559d96f250"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "6cec56a4426c2d0a1a655830287bd067"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "0882954f70966add05863ec7ac6230bd"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "2536af55da21848942018f8db2dcaaac"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "056992cbd505b2628f130dfb7280ac86"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "ab798f3274b27aade5b717df0abcc652"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "40786177f1681e75b97f124bf83b691a"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "4cc3022be291fa064026403cdf18cde5"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "295ba82f706ae14317742355efaf0ce7"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "1e1de593396f8fd6b793867c801e0327"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "eee16478abb4d378a00d2f310a3f6d62"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "bad2296b1b2ab96e87c8b9382d5f236b"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "215f06b6358cbb92f2d5147a4abccb98"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "89c6321e98695a829338d2597b52eece"
  },
  {
    "url": "posts/index.html",
    "revision": "9ff622b94b3235747e343b8dce3649d7"
  },
  {
    "url": "projects/index.html",
    "revision": "f1d69762a3233b8fda9fc82cf338daf1"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "358309861097c84dfce31233a5dbc108"
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
    "revision": "60439763e72a5f38689ebe08f457a4d9"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "3484497a9f328df22f1b394003397093"
  },
  {
    "url": "zh/index.html",
    "revision": "516757704ec0c3c2b7eb2c758c52b2a4"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "ec5a35dac4919de30461a9f62a7867a0"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "ce82469ce35f754d4e464280877a412c"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "258b47652a64c0f44556af53f1b319db"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "7a8184a5baa8be58ed57bb3646f593aa"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "a8e0830f43283db19507bc1fcb783c5f"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "ea88ad80cacb18bd5c9450de681334cd"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "23e4bcb597e14f93578d777d560ade65"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "6fce0964856ce102b28d94eeacaef8b4"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "520ec685aec9eb21fcd815fbb1405a19"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "41104cd632566ef37d7e9af41b78e899"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "1d74d98645f1b074a7c0a8c314a1c299"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "f07f84f9200bc33d0c923aa9d2a6aaeb"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "eba80723e8e77fd1bcf7f62f24f83bfd"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "468d06e8532c09f53922fc56e7cdc157"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "7d99ed6e6df614335dd7e2a1a4e0f617"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "710dc439a4093077291906e754f0d8d3"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ec6dd1746869c9432736efd715f7ef8c"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "564649c2a5bd2ef64371f53009c95e0a"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "10c6ce6166bf7469c2ad5f24291109e3"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "11fa6ab01d5e8f6aee2a5f4151ffd04d"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "deebd185d96927a2f9150c71bdb4b0a6"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "86b850a471448cc29af16743e77383a4"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "35dc13a1ac5fbd9cb4535b44a0e88d5b"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "5841b6836e2023e3b096a3c093da53b8"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "6cd308468e39e648d58e014b4429fbf3"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "9892b495c34ad7eb0f7ffa57c9caec19"
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
