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
    "revision": "1f50bd56657ebe79b7b9dc50becfa37b"
  },
  {
    "url": "about/index.html",
    "revision": "1d534670ede2f17cfc4dfad45ed2081e"
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
    "url": "assets/js/21.afce8684.js",
    "revision": "6eb63ab35c0e878b89bebf6d0709016f"
  },
  {
    "url": "assets/js/22.fbf4a483.js",
    "revision": "b7f1d55584d15931f6e7003230bf7e5d"
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
    "url": "assets/js/46.4c529482.js",
    "revision": "405e916e0fec67261ed63078a60b4f5b"
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
    "url": "assets/js/app.1e73dc44.js",
    "revision": "040511bb4bf32496c97c2a1cca57f236"
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
    "revision": "fb96c3df783c1471b5606427e2248f89"
  },
  {
    "url": "index.html",
    "revision": "4fb4bc3d45b5efa58449cfe9debfff4d"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "b1e76d144c77a83d77606c1e2b4debdb"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "21accf8b9bec91b692fc7f632c0b602e"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "d36eb1f3b230406d48638c2637693619"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "f000ed0d2dcae375543f05f4c53e53c9"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "710949c14f63dfacf0d49aef9fa07638"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "a80f646d4570238568c54f39eb94f16e"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "499b0cde4acb1391e29aab4b553e8802"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "9089ef28a7ae808f8ea14ade5d47a168"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "52abcc529f096e1edc418e5291ac1e89"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "39bab2e9c2b87031f7dccdb2f17c6b80"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "daecac951d1fc624e3c4cbba3cf996d1"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "ac29cff7c675f68ba5d4ac0d9f913738"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "7afec37ff070b0181712875054fda7ad"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "5a18851f0f163f64f987a1599cd7389b"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "ce8be7296d49c1b698aaaa738075d480"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "a03c996b7b18b2f59b3523b038b302b5"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "945df855f8c9cdf2a9f341a08c4bbbfc"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "be7dfbbcba638a1c2650ee9ab843c22e"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "7b74e2efdb36931792eb238f0c00a582"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "5fe2c00365d503e94cdd397a01efcad3"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "2143ff42ec15ad90bbc19ce0f27b94fa"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "4b482913127a4c51dd2309d5a65e8d8a"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "63eef50645465e57c73b7a50350855f5"
  },
  {
    "url": "posts/index.html",
    "revision": "4b4d5271517b6801b7173a3f2d92a34f"
  },
  {
    "url": "projects/index.html",
    "revision": "ca01b55850a31252d7d297065d68791e"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "b4fb275931406a560bac79399008cefc"
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
    "revision": "6f336e3a796b14f0e07c4d0d6b973d5b"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "4e42e29ba157b13b6f3785ff47f57c32"
  },
  {
    "url": "zh/index.html",
    "revision": "8c64a522c6a8b437533043098865b73a"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "12dab3ea68b94ed68e2a1f591accdc31"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "39c440b251cbc4552ffbe9f9734cf2c7"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "051190b84fa502a821c06cadaa0dd38c"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "e3eae9708e8fe251ee3f83c6c883ec44"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "3980b307fedaa7252e6a2d330d4c7599"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "7d0ffa50b69bd18f18f15bdeb44465b8"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "35a27969a44186af412b647546e4ad26"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "adf7c5da8333e88858e4b2372d53d8a8"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "8c0ffab85f8eafdf8010516de46cc291"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "842ad80965bb8db0f0e0c0561ea72e85"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "5b6a917dc13e5abf9f0cd64762e3bc3d"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "7442788af12d40941458f8544f710e50"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "b3eedf3d71b1082d3da6a97767559109"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "b0a2939b93ccd983f9aa6df3f98c0f3c"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "659af90a5a5e4ebce693ae87c337dfe2"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "95faa5b2affa5b3a80369a750b64c70e"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "99f25c3ccd88ffcb7efda2b6a86bc99f"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "b14ab50ca3966b2c3f9cef5cd4982b2c"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "f0e2c67dd4b21fea40b2ddf1d41ecac9"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "231728ae0279f67a62948f5bbcf29007"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "e07b4495d5092054cb3cf620d8b8233a"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "1f7840187f85df7fe930c5d4508fe255"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "4cacc3ebcd80131b7e33e847f739dd2b"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "3937d8f1c7409d04db524c1a54c9450f"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "3fa595cb079d7158912f00f8083b7138"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "bfcf58d6a6d7fe926020eac4b632eded"
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
