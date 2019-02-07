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
    "revision": "a531ee543d1c835c504ad018bdfa6510"
  },
  {
    "url": "about/index.html",
    "revision": "46faf3981a39928f7f2e435d6ea13cdb"
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
    "url": "assets/js/10.e93c632b.js",
    "revision": "caa31cfe2603bb648fdc92f1e5bb48f9"
  },
  {
    "url": "assets/js/11.5277e066.js",
    "revision": "4aab11b333198bd70974b6d0fc1543f7"
  },
  {
    "url": "assets/js/12.55f3293e.js",
    "revision": "dc8cc34ea2ea2689ed201ae2b894b221"
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
    "url": "assets/js/16.9d899490.js",
    "revision": "2ebc596e5c32b122b886a650476285ca"
  },
  {
    "url": "assets/js/17.f749772c.js",
    "revision": "cb1684fda1d798a6b0433d5980f68933"
  },
  {
    "url": "assets/js/18.ee3dbb39.js",
    "revision": "77ec8cfbab4c160766b30c6aa12247ed"
  },
  {
    "url": "assets/js/19.becb87ef.js",
    "revision": "9609d0f6bcc9b0223489c15171fb7c78"
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
    "url": "assets/js/23.b8cabec9.js",
    "revision": "04714f9d0e0ccfe470d745e4d004b178"
  },
  {
    "url": "assets/js/24.ed03db60.js",
    "revision": "f72d50de74bd11bf2e0e33e9c1cbb2a4"
  },
  {
    "url": "assets/js/25.e5671928.js",
    "revision": "d452204d3f0f38dd77c694a220477678"
  },
  {
    "url": "assets/js/26.8a44bbba.js",
    "revision": "6f50cc3e88f3502010c082449f605bcf"
  },
  {
    "url": "assets/js/27.62e25633.js",
    "revision": "0c661b8497e13a6774c3f1a1b5b86faf"
  },
  {
    "url": "assets/js/28.da7d139a.js",
    "revision": "db70588b33d8380c1b3b365f2cacb978"
  },
  {
    "url": "assets/js/29.8848d302.js",
    "revision": "129d75aa3546d5b5aaaa8b6c14c4f208"
  },
  {
    "url": "assets/js/3.35f5fbcf.js",
    "revision": "1250a7d3faaea5731a4ebecd50410ef8"
  },
  {
    "url": "assets/js/30.dcfd06e7.js",
    "revision": "ba8f1331c599100cbcdf25d2e9b82be6"
  },
  {
    "url": "assets/js/31.3e30c81c.js",
    "revision": "c48e0d17569f56989e57e977f040a8f7"
  },
  {
    "url": "assets/js/32.ebaa5930.js",
    "revision": "7ce5a609a2787873531c291172535e35"
  },
  {
    "url": "assets/js/33.48f07ae7.js",
    "revision": "be3b21224a33f656968fa59fde183788"
  },
  {
    "url": "assets/js/34.285e54c3.js",
    "revision": "e6a94372ddf9c768716feb828a9793c5"
  },
  {
    "url": "assets/js/35.fae31bb0.js",
    "revision": "65b1076b5206402250e139387a85f5df"
  },
  {
    "url": "assets/js/36.aff31acc.js",
    "revision": "3a2b2bb181f01d962b6effbcb7d3dbc3"
  },
  {
    "url": "assets/js/37.6be8e90b.js",
    "revision": "7fa87e7e8229f4658f2ad4e5d15e1bee"
  },
  {
    "url": "assets/js/38.3d8bc7f9.js",
    "revision": "9ffe8abecd5801e13b6cf5347cd17ede"
  },
  {
    "url": "assets/js/39.280863ed.js",
    "revision": "f3fdd067d74c0a26ce41120c2b85bf6c"
  },
  {
    "url": "assets/js/4.9435e998.js",
    "revision": "e30a7b59e330ab4f1a244ed3656e51a3"
  },
  {
    "url": "assets/js/40.e8a3ef66.js",
    "revision": "e942ffcc1f268b7c02e567a97e18bb04"
  },
  {
    "url": "assets/js/41.042c324a.js",
    "revision": "7a39657ea274ac9040923788e4c393ee"
  },
  {
    "url": "assets/js/42.1c7a6935.js",
    "revision": "79d4648fa61c2ab2bdd8ae57917b6457"
  },
  {
    "url": "assets/js/43.34002c8b.js",
    "revision": "01ba75e53db09cdaf73626d07c6663ce"
  },
  {
    "url": "assets/js/44.57eeb06e.js",
    "revision": "d78bad6db1830dd6a9070788414d2614"
  },
  {
    "url": "assets/js/45.bbab32bd.js",
    "revision": "a1848d455f9cf63d4e0605efe9cb7c24"
  },
  {
    "url": "assets/js/46.60befd1d.js",
    "revision": "4a87bf4e2789d520b9dd9909cacc3ecb"
  },
  {
    "url": "assets/js/47.3d3643a5.js",
    "revision": "b250223fc5581574f2c701215f9c11ca"
  },
  {
    "url": "assets/js/48.023fd28a.js",
    "revision": "dbc595e0deb4770d7d33105164c01e30"
  },
  {
    "url": "assets/js/49.53b49e5a.js",
    "revision": "5b12acec9406244f267d8bbb43790ca8"
  },
  {
    "url": "assets/js/5.668c5277.js",
    "revision": "85e2b7496a17e6a096ead20514cedd10"
  },
  {
    "url": "assets/js/50.fd711c78.js",
    "revision": "0483012891310ce36a33e24afa4cfdd7"
  },
  {
    "url": "assets/js/51.6c6016c4.js",
    "revision": "4cc304e30354c7041a93ac8764be683d"
  },
  {
    "url": "assets/js/52.5b7403ca.js",
    "revision": "dca6065738803f7e002475bce678734f"
  },
  {
    "url": "assets/js/53.7dbb0d78.js",
    "revision": "cae0ce35c44a8879057b94c99415f3a4"
  },
  {
    "url": "assets/js/54.c3e2dcc8.js",
    "revision": "734315aa19ac7e390fbcc15e860390f5"
  },
  {
    "url": "assets/js/55.3f9d800e.js",
    "revision": "d66bc37a0bb8f5f48cf34f31d437f1bf"
  },
  {
    "url": "assets/js/56.bc81f51e.js",
    "revision": "76fd9c0be6bfced03317d017c0686383"
  },
  {
    "url": "assets/js/57.3fc7cee2.js",
    "revision": "36f9641686daedf415a4cf5bd4b863d6"
  },
  {
    "url": "assets/js/58.7a554865.js",
    "revision": "74c809013419d36a2fe161a277528127"
  },
  {
    "url": "assets/js/59.e0a3fc8d.js",
    "revision": "8721e34189068d1f7c4b6c4b2c8e4567"
  },
  {
    "url": "assets/js/6.54de538b.js",
    "revision": "a347c904cbc2837b651bfa41cf706724"
  },
  {
    "url": "assets/js/60.681d1a33.js",
    "revision": "8f02104b82b934a363beb1d895c02913"
  },
  {
    "url": "assets/js/61.374e82bf.js",
    "revision": "1712fc931063aa97c052eaae15dcb5f1"
  },
  {
    "url": "assets/js/62.8cb2c76d.js",
    "revision": "aa2bd3b1596ebfa42858ad80416656e2"
  },
  {
    "url": "assets/js/63.b2abbdc5.js",
    "revision": "bde66c1fd776f1538f57624108617e0b"
  },
  {
    "url": "assets/js/64.c7b3ecd0.js",
    "revision": "ca65e3ef33afc6537efd7b2225322bfd"
  },
  {
    "url": "assets/js/65.b14135dd.js",
    "revision": "d35c8aa03a69515ae184cb4619308ca2"
  },
  {
    "url": "assets/js/66.f3def615.js",
    "revision": "7518d455540a7c1daf78fe25c83fc866"
  },
  {
    "url": "assets/js/67.55418e55.js",
    "revision": "c8d92679a9aae988d66e3e8d53725015"
  },
  {
    "url": "assets/js/68.3ad46d44.js",
    "revision": "86439d4dc5370e4f58ddf22e3620a6e9"
  },
  {
    "url": "assets/js/69.9b7a87d7.js",
    "revision": "038428c753bae49cefb4b93c47a3b880"
  },
  {
    "url": "assets/js/7.f81cef96.js",
    "revision": "55ba304bd117d4de1b77b45a22cb1be9"
  },
  {
    "url": "assets/js/8.2f8c0b11.js",
    "revision": "de7656619fb5384654566120dc84fbc8"
  },
  {
    "url": "assets/js/9.8aa49af0.js",
    "revision": "6dd4a5a253008e66622e1030d53918fe"
  },
  {
    "url": "assets/js/app.8afdc0fc.js",
    "revision": "4a5a15ece526604dc764621d87bcde66"
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
    "revision": "4172a7fdb33c926779ffcc7800c81511"
  },
  {
    "url": "index.html",
    "revision": "0050f383d916c04b390477265275d952"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "ae2eebfb3af0890fbe913eca095508b3"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "b11575d5981c1796744ce96d7958f622"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "e2d906ad481b6e8e41d2f166eaa58150"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "e757f5f559b6a9d4e75269dfe04d60de"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "f898d9ecac1b870467c7e5115042aff7"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "972e24491eb374e27d95b4cd8c322cca"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "c3ab258958f70d53095a504e924dde98"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "8cd276d77e24775bca0fcc817ed9152e"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "2e73b2daf9ba984d8456b25e68431354"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "958f8e08c3494a05a3931d2f8f762496"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "c46d49763f9dccf7f0be3b94e7b390fe"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "e0365b830b7f25a0693ea66e589bfc95"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "4c44b996b5b795675e9935cea8c40592"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "4ebe279eb598e394c2dbd9ddf670f0d1"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "ab96306ba231bb9c21b5c736c8a5f4d4"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "7dbc90edd83e5a1e949d3bc184c222d6"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "2863b5db45c11a35276370d05ea471b2"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "2ae2482d93cb055e43206676af8c4af7"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "4294ae6dcf7bf4d10dedaec0a173f1ee"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "087d91a085eac56bba5906b61547e748"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "6d563e49f1cf56d550769580098e6f43"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "a886dbd472e769bb396f490f95955170"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "50c8b77f9d7e59d7e94dd9fe8ae4ebd7"
  },
  {
    "url": "posts/index.html",
    "revision": "39061cf09b3d9aff2356766b09981b3a"
  },
  {
    "url": "projects/index.html",
    "revision": "51143c8e95bdcec9b1d4f1b90995e061"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "3ea395c2b4b12e5bd50431c0ed98f844"
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
    "revision": "04c0a351ef6efdfb12478b0a302519a6"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "cab4f6cc64ef8a63da17ea23c841de75"
  },
  {
    "url": "zh/index.html",
    "revision": "13347a1d534f2780e56283e21cc854b3"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "08d9b079fd40544c80a6afae682315f8"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "c106b3fb09965dabeaee920fcdfadb75"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "790f4df0b4d714c75183fc646bf17674"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "082bc5fc758afecc95ea599a37d09321"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "69181e5c05b6f5bde63a66608456b3e8"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "026c40c6d5f724c85d316b814b52d20f"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "60bee9e2c2624c2effdd71af93fd7085"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "336ed71ad1bc83b1b77cde47c2a29b8a"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "924b0c6c4a216c5fce5b4057e36b6370"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "7b42912d16ebc244d009e44e2f7d7ac1"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "b80d3b775cd9b752d6fb85fd655665aa"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "7eb83a1c27c3c5f86e54d78cfc2223cf"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "c008a74f5ba1470fd658dd23e1eb9560"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "1c134f1f68a863da6f89120b700c5738"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "06af9419d7078ee8cd0472133845811d"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "5f94ae1835e30b64f6059564ca44991d"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ece469fcf504d9baf741bf23c51d1028"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "bd6aa7ec826bc793f2213b745cdb968d"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "8d6d0a089ea77b69a589710906847471"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "a2009f33ae583313e04bf8be42f51e3a"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "b93d3366745e2af094338c2f750dd97c"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "d7415a5c2102703598d1f74293e5bba2"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "ff1d67920329cee35024dc033ff7ede7"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "2d1d491646139d9ed17e23a405bab514"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "638d74b475dc6aee02d79ad1f1e48a3f"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "6ce640f72fe56532c5f8eabb650bb819"
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
