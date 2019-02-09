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
    "revision": "563e6aa84405718bfb438eb74568c1b1"
  },
  {
    "url": "about/index.html",
    "revision": "14fed2b3358b7b2f181c5bfc1dc34ff8"
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
    "url": "assets/js/10.f99dfcc8.js",
    "revision": "0b5604d769621e37d6d05c68af556162"
  },
  {
    "url": "assets/js/11.f6a17b64.js",
    "revision": "e73a3b857001ad526f7b234fc25c74d2"
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
    "url": "assets/js/16.861aa9c9.js",
    "revision": "4affcf98fbdbe2b307ff305d9e738890"
  },
  {
    "url": "assets/js/17.f58ae05c.js",
    "revision": "57e386a3106708b006e23e4256ee9f9b"
  },
  {
    "url": "assets/js/18.4fb0f4aa.js",
    "revision": "e7dc311c300e9be1648899d6a3ec12ff"
  },
  {
    "url": "assets/js/19.2b62c1cc.js",
    "revision": "04655ee13d191b77e6e91a725af3e2c3"
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
    "url": "assets/js/23.6ed8f4d9.js",
    "revision": "9b55f36fb7f1a67935a14804b6c62985"
  },
  {
    "url": "assets/js/24.8e909eae.js",
    "revision": "09c0058b5be35efb0f0ebb4ddcea8c14"
  },
  {
    "url": "assets/js/25.1123d842.js",
    "revision": "90fcfae6c7280c869dbade7eccef3840"
  },
  {
    "url": "assets/js/26.631519b0.js",
    "revision": "3baa53534ddfb5c7aceedf495f1dcad1"
  },
  {
    "url": "assets/js/27.ec429daf.js",
    "revision": "695e4af48336db071b3c940c7e5a3796"
  },
  {
    "url": "assets/js/28.d3f950cc.js",
    "revision": "020f5758300ecaabdc13f945a10331bc"
  },
  {
    "url": "assets/js/29.a83c8733.js",
    "revision": "98eb47d2fa947992122b9e3e24c5b8e5"
  },
  {
    "url": "assets/js/3.93d72f71.js",
    "revision": "94f3a42d6e6c9d7847f86797011faa58"
  },
  {
    "url": "assets/js/30.9c747fed.js",
    "revision": "b593092d47d6b50c41e700a105c98763"
  },
  {
    "url": "assets/js/31.5d18995d.js",
    "revision": "2fe0fec6537627fa68a3cb5c087989c1"
  },
  {
    "url": "assets/js/32.1497d7dd.js",
    "revision": "a471a2ca4614ee4c07bc56c19a6d213c"
  },
  {
    "url": "assets/js/33.a9b7d09f.js",
    "revision": "52281a45a26ed55838d906fbc606fc1e"
  },
  {
    "url": "assets/js/34.c8ad9d33.js",
    "revision": "61980d8850824e9ac6d23baf9d37e696"
  },
  {
    "url": "assets/js/35.2bad3e97.js",
    "revision": "0e975a4cda28ba15f14f4677802d255d"
  },
  {
    "url": "assets/js/36.4dcf7a5d.js",
    "revision": "a8b8317d064d8dbe09cfe4bbbff6f2f9"
  },
  {
    "url": "assets/js/37.56ac0d74.js",
    "revision": "039ed257e602106c7822b9828ce4237d"
  },
  {
    "url": "assets/js/38.aa604ed8.js",
    "revision": "8d5361271b05c2e5809708b32788c572"
  },
  {
    "url": "assets/js/39.c6ff7e00.js",
    "revision": "6217d6bdb962909591a1ec2facf3f12f"
  },
  {
    "url": "assets/js/4.958da283.js",
    "revision": "2213133c65a4359c6dc9537a1af01ed6"
  },
  {
    "url": "assets/js/40.ade1a12c.js",
    "revision": "4c394a21f116946a86486d8544006257"
  },
  {
    "url": "assets/js/41.20f22588.js",
    "revision": "c3cd00d9b97200652859b7588faa6f79"
  },
  {
    "url": "assets/js/42.f39dbea6.js",
    "revision": "1742a89ebc00fda536f92e7b25457b2f"
  },
  {
    "url": "assets/js/43.8d47188d.js",
    "revision": "248bd97cc5783275169f108061f66d5a"
  },
  {
    "url": "assets/js/44.84ccb386.js",
    "revision": "a31fe70f5be50b520a01b43cec2a2951"
  },
  {
    "url": "assets/js/45.c2e5255d.js",
    "revision": "4bb9f8e8acb2e7f651fd5d5316af0ea9"
  },
  {
    "url": "assets/js/46.e788d2bc.js",
    "revision": "4cc02827cd80a65092cf17e414b0bb69"
  },
  {
    "url": "assets/js/47.35ce7384.js",
    "revision": "b374e176add20de7f3162c742bb52a06"
  },
  {
    "url": "assets/js/48.44bc11ea.js",
    "revision": "e58cab75610769cc7343d5f87d914b8c"
  },
  {
    "url": "assets/js/49.dffcb479.js",
    "revision": "cf858fdaf313b3557fd820bae3f2db5d"
  },
  {
    "url": "assets/js/5.56f4859b.js",
    "revision": "d69c5a2b411f9f9f23467faf5ff08730"
  },
  {
    "url": "assets/js/50.54ebd0b8.js",
    "revision": "58be457e74bd863f568c7d4a3bf8adac"
  },
  {
    "url": "assets/js/51.856bca98.js",
    "revision": "4f0dac44c1092aa8f3c40c012ce21281"
  },
  {
    "url": "assets/js/52.a964c5ec.js",
    "revision": "b4b927811983e4155bbc52723666f870"
  },
  {
    "url": "assets/js/53.92bd8e06.js",
    "revision": "a5775b75ffec496f99d3a52637f2ed9a"
  },
  {
    "url": "assets/js/54.6c110b99.js",
    "revision": "11b902e9701a614736bdfacf0b24e563"
  },
  {
    "url": "assets/js/55.905e2ea1.js",
    "revision": "6d48e310c49c7eb1b826d04e4447c722"
  },
  {
    "url": "assets/js/56.c4f28c44.js",
    "revision": "bf30d9bb8d4feb73d41ee4441b47a012"
  },
  {
    "url": "assets/js/57.248aea0a.js",
    "revision": "bd4a1aae48682cfa08ff6d28d37c6ff7"
  },
  {
    "url": "assets/js/58.ea8eef96.js",
    "revision": "8df794ab1418a3538b31d338e63358c1"
  },
  {
    "url": "assets/js/59.2d64b4f4.js",
    "revision": "3c43a6cd8d425179b24e4ae266875cbb"
  },
  {
    "url": "assets/js/6.1fb43188.js",
    "revision": "11fac103f612df7bb3b38c6c6bf0dba3"
  },
  {
    "url": "assets/js/60.b75e2832.js",
    "revision": "50cc69e477d9d30344ae75a3fccbe85b"
  },
  {
    "url": "assets/js/61.ddc136f1.js",
    "revision": "ab70afe75f9a0b7c3838d460f263eecd"
  },
  {
    "url": "assets/js/62.0fa012cd.js",
    "revision": "c2572d57f34b57b125743c22f238e7e5"
  },
  {
    "url": "assets/js/63.19ae7319.js",
    "revision": "ed57fbd3782e8dbf1f7cbab3716336c8"
  },
  {
    "url": "assets/js/64.95a802aa.js",
    "revision": "2888a4653bf565a17a3ece383f5d6d29"
  },
  {
    "url": "assets/js/65.dc3a2084.js",
    "revision": "7ca070de97558f75f95ac1894b72760c"
  },
  {
    "url": "assets/js/66.e12a513a.js",
    "revision": "9791aab71efd1e89272fa2f56c57b82d"
  },
  {
    "url": "assets/js/67.e7b332ce.js",
    "revision": "c5738cd20e83b50a337c8e3d3339a1ab"
  },
  {
    "url": "assets/js/68.dee9869a.js",
    "revision": "88f5a532d968d60143146b5957cecc65"
  },
  {
    "url": "assets/js/69.780e2d90.js",
    "revision": "e2917ede714b0262ae31e880dad041bf"
  },
  {
    "url": "assets/js/7.0959353a.js",
    "revision": "0738fe8c996f374a37e65f3f88f988ff"
  },
  {
    "url": "assets/js/8.09462717.js",
    "revision": "e73843287adc135140f1d733f85f23c7"
  },
  {
    "url": "assets/js/9.fb69606f.js",
    "revision": "cb333ad15803826afac27cda66ad7c07"
  },
  {
    "url": "assets/js/app.f4d142e0.js",
    "revision": "cce7807a22a933c082908da89e341058"
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
    "revision": "bcc10ab8419d47b5b17385b5d8447016"
  },
  {
    "url": "index.html",
    "revision": "282f60315b28c87227191d7f46225769"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "3b783247862ffd0149b52832bd71d6b9"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "8ecdb7a40d069de88670748419dca316"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "4bba71698ffb823292067bbb43e60eae"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "852dadc4376f8efbe17d0d8633c9ce38"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "2c1ecb87bfd05d4e026de6b9a413bcca"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "d8ac3b940fabd63da9dd70bd3b0e79c9"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "12cc2cc960a53aec3a88292b3ae61f74"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "e9895d97ad93546b094c45e92e4ca3ec"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "2d2274f77f9e77c7b1261639e9087d95"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "fca624f3b129173f3c73dcf55a182e16"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "7e046ab8868c1086fb756b11ddbbaedf"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "7b3a590c8d4eb5e161c1ebc9ba0d2451"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "2a54b9598991f0ba2ffae510881528a4"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "b4e8122d2e3874346adde8700d261330"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "498ba0314eee6ae7c92ca5c66a8f00b1"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "1f30ae497bc1e5a78febe75e009954b9"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "97617bb4646ca3a30387d0cc5bc2225e"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "34bcccb55e830504a52fd50fe0f3df79"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "bee3ae9d10155aaef24b4133fce73a32"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "18831caea97566bd895770b92e9cd4c6"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "4a787b40c92624d5beef4c53cea0a85d"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "bd6acdb24175bc3dedd616f249439cc1"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "7486b8ee3130912fd37ca6ab7dbe6a28"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "fba8be2cc57e3d0251362a842e4ba8a8"
  },
  {
    "url": "posts/index.html",
    "revision": "ecae6380bcb2ff9804b40429fb40da2a"
  },
  {
    "url": "projects/index.html",
    "revision": "fff3cff56667cc2441f55de63e6c74ea"
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
    "revision": "78433544f39da22b8694f6f1d5bf89d2"
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
    "revision": "a1eed2540ef9f7a6464cdc9fad47ff4a"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "72490140ccf1f3ed1484b9ceb93ec061"
  },
  {
    "url": "zh/index.html",
    "revision": "a726671b06a6554e6cc52e72cc7968a9"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "71ff08c67bf0e8b886d704cde1caebe4"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "5350ef2d739c11360bdd857f358d5aad"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "625f8e04c2c8dd629dccc26168a2d670"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "bcd4a3648524f2cab5ebb36551163bc6"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "d21141f6661a94eae1af20ab1a398917"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "3c6b1b3fae56181d80e4995bf8c2364e"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "a103461d3d94f9e21f026fe6aa25c171"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "4fe4cff84c5e74cc7f7df21a5eb21590"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "fe49e4c169ac3081a2b8c2b362f9c038"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "230c10bfefe29c7f6c49a886f0898fe6"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "45e353ceac9a3aaae5b3521276188a6b"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "5aaf9c46113373d67f598fb36c1c5d3e"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "7111d5f39d90967d9786381ef67469c0"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "ecb5a5a8a5b47b59afa0ecae0278e523"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "85a508db94af8e314f7d1714da16e697"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "b1780277b86d21b57aa56794d2a08d1b"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "13823eb3ad76fc9a8d3169863a8f2936"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "3ad3abf536e5c155eb8b0272f47bb520"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "d47a1852a308b40e3d4b23756a8b90ec"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "a78dd20195973b76f9c5c538af39d7a6"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "2f6f492ced7d1311fa104b49fc0b1e8e"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "1623ab24c5585687c6a29b1b8e314a79"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "55631fd98361b7e5c872a782916e3586"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "006af0aba8605d21a88c9c6c6fe53403"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "4f0f5f70e75af523c3f5436c6e809fea"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "f6a931c40b947eb2a10abbc9d06e9183"
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
