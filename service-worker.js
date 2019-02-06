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
    "revision": "9fa3629400fe12d0d35908fafa51050f"
  },
  {
    "url": "about/index.html",
    "revision": "c0a685f225e6d3e1e8fdc24aa142a545"
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
    "url": "assets/css/0.styles.f9672c50.css",
    "revision": "5dd2adfc8a3867f495ced29959645692"
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
    "url": "assets/js/10.72213f40.js",
    "revision": "06ad1bccaee6bddf65ee974823cf901d"
  },
  {
    "url": "assets/js/11.354a6ecb.js",
    "revision": "e8c60d382c9985b40d65dd38442eb34e"
  },
  {
    "url": "assets/js/12.3c0fea73.js",
    "revision": "97deefbe3d41205fba199f7fddde11cf"
  },
  {
    "url": "assets/js/13.9ce2a9a8.js",
    "revision": "4e2c9033fd022cf6975370a4ecfd3c97"
  },
  {
    "url": "assets/js/14.8a70db6f.js",
    "revision": "461fd911ea7434c6fe933d6488352323"
  },
  {
    "url": "assets/js/15.0814fb6e.js",
    "revision": "378bb720f72840453e7489f56ea665c2"
  },
  {
    "url": "assets/js/16.48f98194.js",
    "revision": "e5f73114112554dc437b0e28fc9bf971"
  },
  {
    "url": "assets/js/17.f9179ec4.js",
    "revision": "887b411893b6f1f79997544a48e28e3e"
  },
  {
    "url": "assets/js/18.8eaa90fb.js",
    "revision": "46e71369a02de5a05bc804ddecbe52ce"
  },
  {
    "url": "assets/js/19.fb12e978.js",
    "revision": "33455825e5bcd86d6cd72074f4a12483"
  },
  {
    "url": "assets/js/2.f288015c.js",
    "revision": "e45a9798c9bec2a87166d970bb10b106"
  },
  {
    "url": "assets/js/20.781f5a88.js",
    "revision": "510719d535ccef46dbfdd825760eb3d0"
  },
  {
    "url": "assets/js/21.c41a59d0.js",
    "revision": "756c31ac6876e91fea6f62620516de20"
  },
  {
    "url": "assets/js/22.88902f7d.js",
    "revision": "a9fd6e6213ee80dacbc6f0be35fa91eb"
  },
  {
    "url": "assets/js/23.a915a731.js",
    "revision": "8d5001184db39c7fb7d9902e8bf4fd7e"
  },
  {
    "url": "assets/js/24.45ad5f9d.js",
    "revision": "a4d8942b101d1f0a3cf3c32be25bfa89"
  },
  {
    "url": "assets/js/25.e10c9693.js",
    "revision": "1f384e66fe53ebc820a44a4f2320e392"
  },
  {
    "url": "assets/js/26.5f16dea5.js",
    "revision": "c47de3b1aaeb36b0f9b6904e1c2375d4"
  },
  {
    "url": "assets/js/27.1d0eafb1.js",
    "revision": "55f6745005b81af472680ae14dfe177e"
  },
  {
    "url": "assets/js/28.2f78f1f6.js",
    "revision": "6e4563374db11d0391134ca6ecdd7c38"
  },
  {
    "url": "assets/js/29.18d235d3.js",
    "revision": "aded5bca731fd98ba5828ad0baa2dd83"
  },
  {
    "url": "assets/js/3.4fbc460c.js",
    "revision": "a16efe5ef7c6b64f4ec43f3cb90eff79"
  },
  {
    "url": "assets/js/30.dfe022bb.js",
    "revision": "d5628d8bbc11ee7cd3b303282e286e32"
  },
  {
    "url": "assets/js/31.ec110c88.js",
    "revision": "cbb0b5cf4565b9579a86cf7ae95d01a6"
  },
  {
    "url": "assets/js/32.aa9ce0c7.js",
    "revision": "1add4870dd78d6436c6c487cc007d606"
  },
  {
    "url": "assets/js/33.f3c605fd.js",
    "revision": "736ee49cfc0ff371f99cabf2cc7d3f0a"
  },
  {
    "url": "assets/js/34.74eb8368.js",
    "revision": "827469925598ce44a1f29493a443c9b6"
  },
  {
    "url": "assets/js/35.b8c9c71d.js",
    "revision": "517e32f247d7ff458d514ba718c6e50d"
  },
  {
    "url": "assets/js/36.ec653dba.js",
    "revision": "f4c2c237e14d45ef66ab4c38242a394e"
  },
  {
    "url": "assets/js/37.5585ee9c.js",
    "revision": "48839d670d21bea4d78707892dcf1194"
  },
  {
    "url": "assets/js/38.1022c3b1.js",
    "revision": "dc7936b108bfbc31823ebc650e29fdac"
  },
  {
    "url": "assets/js/39.fb8dc8f4.js",
    "revision": "e44afe80bf9981cc78d74f2e365b572b"
  },
  {
    "url": "assets/js/4.2154a788.js",
    "revision": "d108cf23ffbcfbd509324a6c63a593ca"
  },
  {
    "url": "assets/js/40.34e7d783.js",
    "revision": "73827b0920736c979cee77d47a3fac94"
  },
  {
    "url": "assets/js/41.9c7c4350.js",
    "revision": "62987c8a844139559c2d11a08c50bdc3"
  },
  {
    "url": "assets/js/42.f1b2d6e9.js",
    "revision": "fc3158298691e2b452599eef0b55a50a"
  },
  {
    "url": "assets/js/43.9bccf3cf.js",
    "revision": "7aa755be47eb429cdaf14d079a23b027"
  },
  {
    "url": "assets/js/44.007d4d80.js",
    "revision": "1d77081c824c881c7b6209fb4d00f197"
  },
  {
    "url": "assets/js/45.723677c0.js",
    "revision": "823bb763876c6a9931888cac401ec1da"
  },
  {
    "url": "assets/js/46.c22245b7.js",
    "revision": "7b0ab1d91915d36d926877ebb62661cd"
  },
  {
    "url": "assets/js/47.3e5866d6.js",
    "revision": "f78dafa32a5074a86ac2179a7e7a43b0"
  },
  {
    "url": "assets/js/48.d3e7df81.js",
    "revision": "bf4593c6e26cbbe7c50c02aeaf94be45"
  },
  {
    "url": "assets/js/49.82ad0cbf.js",
    "revision": "5611b6ccf5449619d18d38b80b708903"
  },
  {
    "url": "assets/js/5.1defff98.js",
    "revision": "1d03c404253d6aa3090bfd7e4d2493bc"
  },
  {
    "url": "assets/js/50.57eb4faa.js",
    "revision": "6006819726640ef2852768b256a3fc2d"
  },
  {
    "url": "assets/js/51.ddc767be.js",
    "revision": "81f3437e711719ea805452ce54a50121"
  },
  {
    "url": "assets/js/52.cbbe8752.js",
    "revision": "36e49cd5586da81582ca3433fd989754"
  },
  {
    "url": "assets/js/53.6d36a04d.js",
    "revision": "3eeea1608cc4877e1aa7a93752f10d7d"
  },
  {
    "url": "assets/js/54.b9703b33.js",
    "revision": "8aad12f7f9dc753c9d0342318a7d7288"
  },
  {
    "url": "assets/js/55.8570f3e7.js",
    "revision": "8b2f26542853dd86e172657aee248ded"
  },
  {
    "url": "assets/js/56.e425ac72.js",
    "revision": "4c8f98dcebc92afb452b4dc1c8256c85"
  },
  {
    "url": "assets/js/57.14298e2f.js",
    "revision": "6b9864d493ec0958704225bc4682ae89"
  },
  {
    "url": "assets/js/58.fbed540a.js",
    "revision": "4df309c8ee52d0951906793d18114e11"
  },
  {
    "url": "assets/js/59.9a522265.js",
    "revision": "1b986385847f0666191ffb7754679fa6"
  },
  {
    "url": "assets/js/6.8f6a16a6.js",
    "revision": "c38abe67fea5a2082fcd379ec428e88c"
  },
  {
    "url": "assets/js/60.0c9938d7.js",
    "revision": "8ca444349885b2b8af0bd2914ce2ff7b"
  },
  {
    "url": "assets/js/61.787c8bce.js",
    "revision": "d82e4b4f378f6370c8608c8fce0cf69c"
  },
  {
    "url": "assets/js/62.5bf1c7b8.js",
    "revision": "b8f697cda8eb4b98a247b4aee1fafd03"
  },
  {
    "url": "assets/js/63.df55fc0b.js",
    "revision": "8a19da4bd478faf5351373e821edd16c"
  },
  {
    "url": "assets/js/64.91823b7a.js",
    "revision": "389b50c959f2c1d67a2a4e595f15adf2"
  },
  {
    "url": "assets/js/65.4d660cf8.js",
    "revision": "0d6c4cb290ccfa57d99b439f6c4952b5"
  },
  {
    "url": "assets/js/66.1cea7c50.js",
    "revision": "3cdf7d14c20fab1de04ca326783b4518"
  },
  {
    "url": "assets/js/67.59f4b319.js",
    "revision": "eee538fead0b3b59c9e1fa8837d7ce9b"
  },
  {
    "url": "assets/js/68.e981cbbb.js",
    "revision": "94d9076bf55dda460053572402a25ef6"
  },
  {
    "url": "assets/js/7.50c179c4.js",
    "revision": "9281f2b582e57f3b89ae91dc91abef84"
  },
  {
    "url": "assets/js/8.522dffc4.js",
    "revision": "cecc748a3d54bf825b403f17213490c0"
  },
  {
    "url": "assets/js/9.c7ebddd8.js",
    "revision": "6a280f5e8a3a29f937d39580a06be42d"
  },
  {
    "url": "assets/js/app.7b27c40b.js",
    "revision": "3c8c4d1410f2b263606d2b4e2f7f87dd"
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
    "revision": "0c2f6efed7104270a3cb51f304e3e41c"
  },
  {
    "url": "index.html",
    "revision": "f1b0f70c0d81cfbe0ca1629754637a1c"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "f973d2b3b774b279a8c947e8b378c4ae"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "d472e97ec45c3164def0d525094727d0"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "183ab27e322878d4c86ec3908e29693c"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "b38682e413376706a306abb8d1bf49a7"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "87c699bac64822462b9f334b5531a391"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "49e0086ad1841e631d26bb7fef7d2e5d"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "b12eb6fa5093235bd7e5d8c74867e5f9"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "77306a1ca9e91187ec9ebeaaa703532b"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "b7aa91fbafd38c8ec3a873874dbd736e"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "1b26197854a0955a20cb93d9ef97e593"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "3db7cffe6e8c5490ba69dc9a0736d525"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "256a1d1a6ecc7fe930c2530f2a243fda"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "59d520c8872a34ad74306264de06e978"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "7484e82cbbecf2298f3bb51250fbd074"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "e90514ab1e264effb0ec9eee59d42bee"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "51deb416d9682b2c93b4b340c8c8f691"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "604614682fb9175d47cba181f8017a43"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "9239fd4164e099e01ad29660133f4dd7"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "3b76e5895a600b55bb2cf49012cbb17d"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "d1426c4200e68a671eaa6f5d0da55cd9"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "81a40162e7c275f271173308d9bd65ee"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "93cb01e55d12c72468b74786e3099d41"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "b3b347f69fbe4cc2a777946f33bf6a44"
  },
  {
    "url": "posts/index.html",
    "revision": "cc9ae7d53ed0c4b5f9232ac0b1ef597d"
  },
  {
    "url": "projects/index.html",
    "revision": "aa16015dd36d69cd94471e21ac1131ce"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "d42c0e889f48baee751b95f415613f57"
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
    "revision": "12edad2762bdb7113b38221305181c74"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "b464ed2d45ca464048d23fc412d05575"
  },
  {
    "url": "zh/index.html",
    "revision": "651b2ebd3ccb57424c8f99993901bcfc"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "b0dd661808ba982f0f31b8b06894534f"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "3034570ca6d5da73669d14c5a61d0730"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "09ce1e5c4e1bdbcc779a73c39523c144"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "67876c71802c2e6c2bfcd795c4f8508a"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "21b69bf64591afaea5be7a6656a5a787"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "0e0eb8cc28f9031fc1ee70ab422e597c"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "686c3a196a26a538393aee64151bb370"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "0e1eaf430a7b0bd0ed9f20c45b1c43a0"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "08a673f2bd47e198787358b30b3ddee6"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "38dddb2173798426d68e9b2addcd61fc"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "88a49e1e1af26d57c84f20c3a9a35518"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "ef5c5bff98c594df72399f67135f3e53"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "bb2521cb70526d9f7869cd295f91b1bc"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "7e3698ecb411af5ebb9610bdfe9e0a59"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "c3807a16561057d8ec237c5b59808fb1"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "72c55fe3647f363839ffb618e87cbd14"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "b37473e84a348385c0df52d2828247cb"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "9dde7bed63fe4543d1dc413085541eb4"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "5420231e790bc6a4262e8d07ac610515"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "303a74cc7e660aa3a489566f8d039907"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "d79a7fa3f4afdcc7f048c92835efca92"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "58db628cf4036a8171b56a6433d0af1f"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "a4be18b462787cfcd6fe9711348a7b4c"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "aa8b78af1dbbc5a71ed562fc66cb0a3f"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "27c77365801d51e1bab0fd60df59825f"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "d8bce24f5c6b2086b6dc1028c55512fa"
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
