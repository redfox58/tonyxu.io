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
    "revision": "46693d4897eb8a0ec2769e2f89349c9f"
  },
  {
    "url": "about/index.html",
    "revision": "c0c1d42a9d556acbc819265bf4ee0f09"
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
    "url": "assets/css/0.styles.3a877479.css",
    "revision": "a8f28e67dc4413441cd23451d6cba297"
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
    "url": "assets/js/17.f749772c.js",
    "revision": "cb1684fda1d798a6b0433d5980f68933"
  },
  {
    "url": "assets/js/18.81d8d7d0.js",
    "revision": "e712c63c55f145cd1cf20500913955cd"
  },
  {
    "url": "assets/js/19.b6f0fa47.js",
    "revision": "51977d429a17dae11a10e0685f32f883"
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
    "url": "assets/js/31.73de81c3.js",
    "revision": "84e89989771e55fbf93951dbb0d086d1"
  },
  {
    "url": "assets/js/32.266fbe5e.js",
    "revision": "2db23ae18642d701199292168e99203a"
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
    "url": "assets/js/35.b64bdca2.js",
    "revision": "15863be8d8951e91eb48322b7f6695ac"
  },
  {
    "url": "assets/js/36.604ccee7.js",
    "revision": "05170cc9ab3ca2de1c63b68000b4ea7e"
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
    "url": "assets/js/66.e84b8f1d.js",
    "revision": "2c334176795f492c62ddc58f5d4f2894"
  },
  {
    "url": "assets/js/67.50301669.js",
    "revision": "f826635ecd61d751a1a3a5fa54825009"
  },
  {
    "url": "assets/js/68.44e5fdc1.js",
    "revision": "13dc26bbb4d53633dd61cc4b4b4b77e4"
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
    "url": "assets/js/8.a595b844.js",
    "revision": "4b5e2d9cf89353e5dc488c384a7815bd"
  },
  {
    "url": "assets/js/9.8aa49af0.js",
    "revision": "6dd4a5a253008e66622e1030d53918fe"
  },
  {
    "url": "assets/js/app.5275e46c.js",
    "revision": "f5d9eb5a5b424441fd19fe6ab6cdc06b"
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
    "url": "favicon-512x512.png",
    "revision": "196fa2299e0aa29efd8a909fda4af50c"
  },
  {
    "url": "friends/index.html",
    "revision": "b4b72312068f09b9357ba27f40c70791"
  },
  {
    "url": "index.html",
    "revision": "c0664fa01ad529994cb762f0abf2cf90"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "3b783247862ffd0149b52832bd71d6b9"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "5613e2831230b8340a812c55dd39c7f0"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "67eb6af7a789e7f0ce53e52711f45a1f"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "1296673dff9e19be9747ddc96321d34f"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "383e38e11232c277c961870b54f604e4"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "2308e69d0d18cefda2e7f3bf8f5c6d7e"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "196c01789301594b1c02ffb0d9ab6f1d"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "e01de092f1c923e8a25ade290738e2fd"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "39987ef5e13404671afca53090f4fe42"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "6506df5115f59fe20496c789b3d7ecd0"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "79660e9c96351e545e439a4b1b8d1802"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "47600f9267ff6ab26ea35aad86840b08"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "5adceea8f619c9a96d6b848d9ea5c108"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "8e60cabbf5234fef39a55f9be582a5fb"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "0c3db1e2b3e9102f5b0b8b2882cea68b"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "16cab1d68f0db8799915275eb88829ac"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "7babd1b552df27d201e91ca85c4c43d8"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "5d3daa836802bd3d5ab8298edb257421"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "75962d499a268b250c7a21eee72c6441"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "71c2a5435688f0b981df59641e8040be"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "26fa65798e055765ac41052c03b12308"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "e9739df5b87537245fdc039afa837ff4"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "c50938753727f3e641263898e019960e"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "2f4bdba71bd3dae71ade55d533b72455"
  },
  {
    "url": "posts/index.html",
    "revision": "8f0e0906a1176f90cbdc479f814667a9"
  },
  {
    "url": "projects/index.html",
    "revision": "12e78d946987cca2b344493a0fddbd80"
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
    "revision": "0a9ebaffab4abe0ec0e7b3bea24df256"
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
    "revision": "1a4f7800d8b521583d7ee2549e412c49"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "8562784326116b5fbf3ddc8bea30ce02"
  },
  {
    "url": "zh/index.html",
    "revision": "418efd1c23cf84b1244d0fbd25531fd1"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "0f3013d59e49782cf94eb22ab5adbb56"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "496ec25a0546a844bd80a958845e8520"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "e1d1e92058437ffcf0c4f454eb2c68e5"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "1f30f6dd919c3d709f63329b55df8e0e"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "8653523530fd4efd379e70633f49ab72"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "63582d71e9ca38635637e020b1642463"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "164ce8e1ef88fb8f64d2903807f445e0"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "9d1bc96ae7e9591130c4612294bcdcd3"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "7fc4a8b6f89823b6d813d74edba6011a"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "744f01d40456921cb000b03a7d434773"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "873780a4488909b6760958064c32d7d8"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "1e4eb51e75602be93485e0b446704ccf"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "2ab238e3b87e876807023e14ff51eb05"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "207ae862204afc39b2ed72883c14c0a9"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "264b50930fb20c89f9c84007e63b27a6"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "50b06f84188acaa88ca6a3057c17f60b"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "74d764e41815ece8079910ff8713a7fa"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "4731d5190bdd0d87512a0c4405adc591"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "2fcfb5760360e1fee1ab079aeea97469"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "eac3460836444566b0f90e3d66004921"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "4843e5570a6e75707d927c17575cb83a"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "1d98d98a3f7959d10545a77ec95b7881"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "20f0c2f71320ad4e8ebe20b35cb7813a"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "9f0f5697b826495aab52d21049891bf2"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "f9783048b9a27cb13aa5c62747b4fb62"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "47e71cb3e0500a73af9372ba42a27285"
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
