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
    "revision": "7dfeab1a81f9f539d5933eeb177c5a3e"
  },
  {
    "url": "about/index.html",
    "revision": "7c5f804836241ce9c46aa4a0d1a20ca6"
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
    "url": "assets/css/0.styles.52c0ecaa.css",
    "revision": "8f43851c602aa9139879f38b8f0d0466"
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
    "url": "assets/js/12.1556e04f.js",
    "revision": "35b43a8cb8ad0201b6113b8e11597f0f"
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
    "url": "assets/js/19.35008f33.js",
    "revision": "b0c473d1ce4e9d38df1a28acf68a157d"
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
    "url": "assets/js/26.72a3a204.js",
    "revision": "1ccb41b210b4834057e5bab1ff2908af"
  },
  {
    "url": "assets/js/27.85a83106.js",
    "revision": "5ca1f98d2ef167b435befa398ce6faf7"
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
    "url": "assets/js/30.745accb5.js",
    "revision": "b0d376a636b3588c8d6f140f5c23a019"
  },
  {
    "url": "assets/js/31.1ad3d083.js",
    "revision": "b45960b7d8183f8c2242c124720b53aa"
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
    "url": "assets/js/43.bc6cf937.js",
    "revision": "7f2fb0d5dafbf6c0f51abadf339db3fd"
  },
  {
    "url": "assets/js/44.007d4d80.js",
    "revision": "1d77081c824c881c7b6209fb4d00f197"
  },
  {
    "url": "assets/js/45.70b2473f.js",
    "revision": "caae0a50972bed930763568b9811a9d8"
  },
  {
    "url": "assets/js/46.8235d1f4.js",
    "revision": "7b4dd763f4f056ee89566af83f6308a8"
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
    "url": "assets/js/49.d01949b5.js",
    "revision": "4e485d540683c1e044278a72772d2d2a"
  },
  {
    "url": "assets/js/5.a9a976c2.js",
    "revision": "009a4aefd6b2615ca61b16cc10664d54"
  },
  {
    "url": "assets/js/50.47154942.js",
    "revision": "1540208aa02d83fdb74a3c036c75808c"
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
    "url": "assets/js/61.34f074cb.js",
    "revision": "795818df9ee4fca1b728f2994b1d1568"
  },
  {
    "url": "assets/js/62.e79d5899.js",
    "revision": "33d56ee85fa94911afe832113fc7c709"
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
    "url": "assets/js/66.21017dce.js",
    "revision": "c55d5e985f1e86346b48ca879cbac7b8"
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
    "url": "assets/js/7.8296f75b.js",
    "revision": "fd830eb3a958a17b7d4b88f973177093"
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
    "url": "assets/js/app.2672b4a5.js",
    "revision": "a95e5934945b672a755eceb956fbad32"
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
    "revision": "aed8286d91281c2dbb1dabd73428330b"
  },
  {
    "url": "index.html",
    "revision": "534e0f5dff4483cea3f4fdaa8d0a8a21"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "538586e13d94661a7f96126b137414fb"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "b454ec19cf0a140538cc141f01dccf4a"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "87db1d63a85355f427a64df3fbd84579"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "d1f5af512415783d08cdea8e6eaea3ec"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "c214ab1ff96860a4e5fd4056c31f54f2"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "2bd116f9f89b8cb1a0b7fca2783cef00"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "54ddd1fc0755efb6c8dc7eb3e5836321"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "8f171dc47367c062fe3533df4caafaad"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "c43e5aaaaca82caa1b93d1bddd0fa674"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "a604a5b93e880605a76947e71f632f05"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "464601ebd1b925c9d0d7c5387dbf2449"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "71c1afaedbf028825ee0813e06e4acef"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "4203bec93b34a62b6bf3d9986900065b"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "6fd6153e7371f418bf53e687bdd10faa"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "b727323f8ff38c7707ba5ee76eacaeaf"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "ca84cefca3304726e3058ae231800d2c"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "25be84a5ec39f369aeb222a4eff448b2"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "c3f1a9b756a3eed8aebed16486495f1d"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "f45701dbc9dc1a0c85e7f34e11e0ae59"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "d9318bf6539414b55145ecc72617f189"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "a1c3362cea758e17a77c49b1c4012faf"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "06856561d69ffecb9d641b2833c7f971"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "ca319546284c0cdfe09cae80bfae7f69"
  },
  {
    "url": "posts/index.html",
    "revision": "6af339f06d9affd06f42a282d70225b5"
  },
  {
    "url": "projects/index.html",
    "revision": "da5f5fc38519c14425d9448d51255418"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "bff7bceb2b445b9613bbd7879dae3ae7"
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
    "revision": "fd558b14465bd5425d7d0a7186ecbb52"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "28ace587458914abae38f1793aaab171"
  },
  {
    "url": "zh/index.html",
    "revision": "a9d449ef68fccbee53de3c5bdb2fab4f"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "3cb7160fbe6b958b72c3fb7a7cd21012"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "b25c75f62a0966d574d022cdca5675e5"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "49a2d580b104221ae3c7a4899f6a122a"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "e16e47d6dd590fab63313806445883ff"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "1bcd0e624799b6f4dc3edc7f0905d25f"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "41f9d04ddbf074680177f480621a2d28"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "e67dc406a8bed5b2a5493034a289b5da"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "46627813aced99aaebd62a799e13ea65"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "614d68c88a77fccaa65b359a2e10f795"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "73eb05609f610baa3f249700332fd7b5"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "380c0181fa3a04f2df43331b3c6552ac"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "3b3ce2749d2e27863cc0e746a25e7b35"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "14aa8988d466c95cb5b3d2e1ac1b3a07"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "b6a4ad59caa4a424dce313078178a805"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "29d7bea556ad9abf24798f9344fae667"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "bf7448c7f3166ba242391dd6d8a3a478"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "9aab2939eff91a48f2ddb41391ae6370"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "9aa0df89dc75240dd91fde7be2dbcd1d"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "a3b29348639ca128549f22a902e5b701"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "a1a9b5d9800a21bcf010fdefb085bd4d"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "203f95cdbd536658370e91798438e17e"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "3e343669415c08b7a055ee2666224d11"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "67890d270c592ab463a3a5f8ed029fcd"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "e9c9049c88c33d9ae37d3260d91ffd18"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "e382c82b686de42ce45f00ff554844ef"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "b963d3d58bbeb30c42d75dec4d0bdc4d"
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
