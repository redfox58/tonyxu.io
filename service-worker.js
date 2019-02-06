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
    "revision": "1c71c4944203a9d332f6a64623f86902"
  },
  {
    "url": "about/index.html",
    "revision": "101c99fe723d3db5dd737c9a760781fc"
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
    "url": "assets/js/17.39f4c19c.js",
    "revision": "42c81acb3376c299d8e22fe34dec96b7"
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
    "url": "assets/js/37.138fb01d.js",
    "revision": "5d167db429ca8dd8790b0ba89a34b0c0"
  },
  {
    "url": "assets/js/38.4cf83dc0.js",
    "revision": "06c4e7a380e522e78ba5c08ac5aa1741"
  },
  {
    "url": "assets/js/39.3f0930ee.js",
    "revision": "e9660ff19c05f119ba9f1ff91fda3e77"
  },
  {
    "url": "assets/js/4.2154a788.js",
    "revision": "d108cf23ffbcfbd509324a6c63a593ca"
  },
  {
    "url": "assets/js/40.836281ed.js",
    "revision": "75a5bfac0658dda23fcee6fa4e30469e"
  },
  {
    "url": "assets/js/41.76483b2d.js",
    "revision": "953965fc8302de94e9a83f463a7a7f4e"
  },
  {
    "url": "assets/js/42.0d5e3aa7.js",
    "revision": "2704cf097f4e7d2f1fabc50af376dbc1"
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
    "url": "assets/js/49.82ad0cbf.js",
    "revision": "5611b6ccf5449619d18d38b80b708903"
  },
  {
    "url": "assets/js/5.a9a976c2.js",
    "revision": "009a4aefd6b2615ca61b16cc10664d54"
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
    "url": "assets/js/66.ce98a788.js",
    "revision": "7b1ab509355a3bb832e2b300f54ef532"
  },
  {
    "url": "assets/js/67.71de99a0.js",
    "revision": "1f3cbb25d845b9469d260fcf775762d2"
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
    "url": "assets/js/app.e62034fa.js",
    "revision": "7643d0fae5c8328a5969c480d5495e23"
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
    "revision": "bde272e5449709bf0821724107945d90"
  },
  {
    "url": "index.html",
    "revision": "333e5dd5d3c9f83e4fb2e116fc223cde"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "53194eb140069eae48625aebec3a6b97"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "4a132b287b2b9416ad535f51d5d1374b"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "4da3a946ffdc4a80bc27370e57c79225"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "48f66f315ffe0a5ba198ac615f13de97"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "71f361c43899f031098c0e32e9ebbe1d"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "47716c79fe4cd83085bc844508e958f6"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "65d0291751740a0649c17f929a165c4a"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "95a71cbe668763a8dd62321850a11774"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "a1ec583fbbb4e2f7bbc61500e554aba8"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "cb96c0d184a1eeb52edf6465273cfeef"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "3010ee94f71750b2ed7ab2758f64adff"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "e2404528368e4a893493dc0162450aa4"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "6811d09ff5ebb232002e31b412d97664"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "74a15b20e55ed09e292f756d4f3147a6"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "48bc3b0114c582eca951194e841d916c"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "2879329a7f33658d00c3a4e53cd465a9"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ca88245875be1698a1902ca84ee36e3d"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "3328a201230db1695ae159f416e45330"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "5ea75e29cf3c1098d1ace7f370580cc1"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "d6c6ac57486f2599d9b11066aa12a0f2"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "a101c774699d606a5b13c238294d52e4"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "89ff003ede325d6ce8aae3f7833a09c6"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "ef9917181dda56b95a7fce9360579876"
  },
  {
    "url": "posts/index.html",
    "revision": "b432439fb6c13440e50f6608cf509a40"
  },
  {
    "url": "projects/index.html",
    "revision": "b7af1ff00033503235e742a0ea0f8d7f"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "9f9539664679daf1e49dd2efd482719c"
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
    "revision": "8992920d33aa045807ec5d6ac6f60c40"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "0f2579fc04705556ae9175b9e14f77d8"
  },
  {
    "url": "zh/index.html",
    "revision": "789cbf118235d3d7266e52614ecdbccd"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "bf749959cdf2eb0b1c4eebcb1e7702c5"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "317e4754c23471745e9827a6fddd6c34"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "d67872dd930e3dc7eb9dbec651db4f6b"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "fd42d6bfa88f8ee4a48f0a706663d879"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "210a5f689511de1a4612facbe7af37a6"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "5de2e542b71dad371af8d9b84593fbce"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "c62715dd11b0bf5aa32bd7b8930acb7f"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "6a9f71c3f0906eb58bad471d310bc018"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "15a62de19f4ab66d73b5871a19d9bac4"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "eea49629defc858868dd9aac316bbc27"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "012421416122306e4c545fe739277266"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "a4f0fc919289420ce8c074b1cb34ba00"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "1cd54d32bad7c40e193db1939ee5881e"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "83cd3ee12f497fc8ce7b981c3f476d05"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "fd9d13827c21d7965e4a331da21e96eb"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "8eef890a051415663120cee78aa34f0e"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "b5fbabcdea338a3d3726c0973a15928d"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "c59c52ced7ce57448a746588a8f83a34"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "52ac90defddc24202eac0c2795c7cfa6"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "9a1c6d0756c7adeadc4e4afa1d34a1d2"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "17ab169bd7e59875637c951d95fb562c"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "2a91e0de68072b0685cdf4381f8f7fa6"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "825a8beda1ad9d7f5976e82092be2798"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "0eecb186d49b5ca3898a796c317218b2"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "9b1f03de56057c78a82bee4f3ee4b89a"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "a3f715e619bf50d6bf5ff862c9c4dc3b"
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
