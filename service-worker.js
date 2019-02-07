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
    "revision": "19788a05f0b9a1c1a874f9e20f3b4afc"
  },
  {
    "url": "about/index.html",
    "revision": "19990cb4e53fa4769f8ab273a201dc23"
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
    "url": "assets/js/11.f3e1b910.js",
    "revision": "b13332615a4b7e66ba259db6ca5f2c5f"
  },
  {
    "url": "assets/js/12.5e9c564d.js",
    "revision": "9e6e1b3100b87e2246a9abec90d56633"
  },
  {
    "url": "assets/js/13.0ba02817.js",
    "revision": "c9857d2db72fb0e8da487ea8c9fb8681"
  },
  {
    "url": "assets/js/14.14cee905.js",
    "revision": "ba95ed73519d5cef4e2c485230be0d26"
  },
  {
    "url": "assets/js/15.026b2087.js",
    "revision": "15eb577c98eb8f49da17122122234684"
  },
  {
    "url": "assets/js/16.9aba6acb.js",
    "revision": "ae718edad55719e7ab34fa491b091e4c"
  },
  {
    "url": "assets/js/17.86cf2ee6.js",
    "revision": "d79119d461afadbc1c0a85e2a3967eed"
  },
  {
    "url": "assets/js/18.a26e200a.js",
    "revision": "7223107d1dae8d533396dbe71f737cd2"
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
    "url": "assets/js/20.03d76736.js",
    "revision": "a18d2143121131fc78dd6fcd4022cf7f"
  },
  {
    "url": "assets/js/21.8082ca18.js",
    "revision": "41ba33f7f7193e0f462ee40fead862df"
  },
  {
    "url": "assets/js/22.a7a1f43f.js",
    "revision": "2177ff416575dfeee3f83daaf4581ade"
  },
  {
    "url": "assets/js/23.4c2acc0d.js",
    "revision": "53ad69a024c0aa00430bc14aa1dc2518"
  },
  {
    "url": "assets/js/24.76480988.js",
    "revision": "779c1d04f215b13b2c6b0bcd327b2527"
  },
  {
    "url": "assets/js/25.d4f46d75.js",
    "revision": "d52ed0d46c4571066cbef37721f18723"
  },
  {
    "url": "assets/js/26.1d25b651.js",
    "revision": "98387caf432e553dca0e69af2ebcf547"
  },
  {
    "url": "assets/js/27.4af385a5.js",
    "revision": "2653ed01647ea7ae028896a86bb49343"
  },
  {
    "url": "assets/js/28.fd254856.js",
    "revision": "72291b8a8c3d8ad60fd8ba2069b735a3"
  },
  {
    "url": "assets/js/29.d4ec7683.js",
    "revision": "52a34a8b6af076116b82bf695a23f947"
  },
  {
    "url": "assets/js/3.35f5fbcf.js",
    "revision": "1250a7d3faaea5731a4ebecd50410ef8"
  },
  {
    "url": "assets/js/30.03945b2e.js",
    "revision": "391776421b15850bc2e60380d31bc9db"
  },
  {
    "url": "assets/js/31.fa069bcd.js",
    "revision": "95a0d0e3ff8bf6ab958235399266a522"
  },
  {
    "url": "assets/js/32.6f58ba21.js",
    "revision": "da91f27c4c4f1c30f931591d424f629b"
  },
  {
    "url": "assets/js/33.2f3a49fd.js",
    "revision": "d9cee421e93c09f96bf60ab5c128fdd1"
  },
  {
    "url": "assets/js/34.7de30ca2.js",
    "revision": "5265f8acd6f7be750d9d6ca34fc42080"
  },
  {
    "url": "assets/js/35.a59e3f9e.js",
    "revision": "efa262f02e0f146a09f4d6bf07b8bd6c"
  },
  {
    "url": "assets/js/36.3dce9079.js",
    "revision": "48a24d271969b0bd8b52ccc1cd35cf85"
  },
  {
    "url": "assets/js/37.2dd7fbdc.js",
    "revision": "e3f469400fe406b8a54d983b09d043ab"
  },
  {
    "url": "assets/js/38.02e6fa35.js",
    "revision": "cd81971ad8a60181be0fac70c9e10413"
  },
  {
    "url": "assets/js/39.1a940c95.js",
    "revision": "8a867d7d8da0be5d3f5c0369a971315b"
  },
  {
    "url": "assets/js/4.2da6a2a8.js",
    "revision": "d82fc04231cf5f32c490ffb2a39a0a63"
  },
  {
    "url": "assets/js/40.b8380f7f.js",
    "revision": "b320bf0d32f96b5db9dc69833fd3e184"
  },
  {
    "url": "assets/js/41.21c4995c.js",
    "revision": "38a61e6adb535e5d63e8b49911476cd0"
  },
  {
    "url": "assets/js/42.75a344de.js",
    "revision": "116cd9e9d101ec61797305182781561a"
  },
  {
    "url": "assets/js/43.8dedfcb3.js",
    "revision": "8317222c4e169627c6ddd9bd7f7f3cfa"
  },
  {
    "url": "assets/js/44.de358bd2.js",
    "revision": "e668f1a93188e9374616d1600c19b69f"
  },
  {
    "url": "assets/js/45.fe57eda1.js",
    "revision": "df9bfefc5409bc3c2317a89aabcb5445"
  },
  {
    "url": "assets/js/46.67a18af8.js",
    "revision": "1001a00d7d1a89ee492785412c1589fd"
  },
  {
    "url": "assets/js/47.d48f3e95.js",
    "revision": "e8019adb9bcaa1a01a70ae8296f29967"
  },
  {
    "url": "assets/js/48.7d80d913.js",
    "revision": "ae9b17aa2125d5835ff90ff5ba88a651"
  },
  {
    "url": "assets/js/49.3c0e7451.js",
    "revision": "3be483b62b011d0b68f2b7ccb3ccc7ea"
  },
  {
    "url": "assets/js/5.668c5277.js",
    "revision": "85e2b7496a17e6a096ead20514cedd10"
  },
  {
    "url": "assets/js/50.c99e186e.js",
    "revision": "1e8341dd7bbbc3529fce2b860ee41eb0"
  },
  {
    "url": "assets/js/51.53b8bcc3.js",
    "revision": "8e060fbf0d9b6d1ec9f72844227a3535"
  },
  {
    "url": "assets/js/52.5626a491.js",
    "revision": "6fb7b716adf517f6b303a41457d737f3"
  },
  {
    "url": "assets/js/53.26c16782.js",
    "revision": "39f2c1905eff6de1a36a7afb988dbb4f"
  },
  {
    "url": "assets/js/54.83da082f.js",
    "revision": "0b9e495736b2cc8921bea79fc41e11a4"
  },
  {
    "url": "assets/js/55.7b7ed42c.js",
    "revision": "56381accb1368e02b3e9def6835863aa"
  },
  {
    "url": "assets/js/56.a094be53.js",
    "revision": "6f1ab44d39ff66ebd0860bc97f782ff1"
  },
  {
    "url": "assets/js/57.ef99f0d6.js",
    "revision": "4addcca4714fca16cad61dde0409a4e5"
  },
  {
    "url": "assets/js/58.f6f0298a.js",
    "revision": "5df348e6c077612f06b9a9c6372bd206"
  },
  {
    "url": "assets/js/59.2032b166.js",
    "revision": "8d2a5d9d0416275d5108d426b9befafa"
  },
  {
    "url": "assets/js/6.b6484e19.js",
    "revision": "a20811f29331c5f129486feb05ff81dd"
  },
  {
    "url": "assets/js/60.b00d11d5.js",
    "revision": "9e331ad9addb1e98dbb977298cbc5630"
  },
  {
    "url": "assets/js/61.77f8bbf6.js",
    "revision": "3b8e9a43ae1e40a505d69fc5c9758929"
  },
  {
    "url": "assets/js/62.15093aa7.js",
    "revision": "29d069122fe4e9e2ea02293172edf568"
  },
  {
    "url": "assets/js/63.30f6545a.js",
    "revision": "1fd483cc2a03886941a47e71ae5b3afa"
  },
  {
    "url": "assets/js/64.9eb5cfc5.js",
    "revision": "e94aec783b21b62f34e590a845c3d33b"
  },
  {
    "url": "assets/js/65.4b539e17.js",
    "revision": "ccd3b1112b9e889018b3cdf3cd84fea1"
  },
  {
    "url": "assets/js/66.cfa1dc61.js",
    "revision": "9d253155f358228bdf0a76bce859dfa3"
  },
  {
    "url": "assets/js/67.efe52b3b.js",
    "revision": "a69d2487c9e427d26960764f79ef7c66"
  },
  {
    "url": "assets/js/68.b2f3d3bd.js",
    "revision": "9ae3c0d40737c4abacf796d7e94fa196"
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
    "url": "assets/js/9.26cb2aa2.js",
    "revision": "75bf278baac3e4b122d983de85d4f76b"
  },
  {
    "url": "assets/js/app.269ec5ce.js",
    "revision": "9abf7238cae6478be93ef3370ea2909c"
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
    "revision": "1612a4460aec3a6b4a36d481ca60e03b"
  },
  {
    "url": "index.html",
    "revision": "d0a8c8294dcadbcf5eabd85ded4fdabf"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "aa00af5a0f997acf8f441342c4f60e61"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "c2c11779064a5e28be186783ed8f2861"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "f2b86b63b3eb5ce99c6fd4a68f39c26f"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "39b7316b55f02fa41d240612f4840669"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "d97591931b226b4fb03bd1b03ebb387f"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "da560730f5cb6aa31b1410f2df5977e4"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "398075c37ea6ffb28c114d7e79a1595d"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "e5d2795b789731830e0f8f70ee99480e"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "64455b9f85c2f5d2c9f39a2794959e03"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "5968b6b4c1878dabf00ce20ae0de594e"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "7dc16773f5f79959ece321757fb17d7b"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "db00ec56b49e72741952b6ccfc3ad36d"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "ed38c3e5336b26ff04f8a6b3197b8eed"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "d8c0b7db526baf3a5fabab2cbb92f863"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "4c4ae1bfbde982ae63cc827da27aa95d"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "5186ecf39ee0bfa5836cfc340d10b00b"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "8e93ce7643381068bf2ddab90e596aa6"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "188d2bd8d95220b3fbf4f915dc930672"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "c321888b45544abd293a5550b47dcc06"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "fb0944b5ebfe54e82479086d6f5e95c4"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "ca108040463c5b21e4fde1b09d51e324"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "8aad025079634fecb186ce4eccab871b"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "69361fd3e179c342606bc004bed847e4"
  },
  {
    "url": "posts/index.html",
    "revision": "f91a40aa6ced177324afe1aa97398c5f"
  },
  {
    "url": "projects/index.html",
    "revision": "919be0470a4519dfc5987a4d9c5bf42b"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "7364cb052f6ec5b601c6dbed29c7f15c"
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
    "revision": "6e21a33233134cbfb0cd4c56471626fd"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "a5c35021b1b8146f62bbfb77f35c7fbb"
  },
  {
    "url": "zh/index.html",
    "revision": "80d8d474fb2730d2129630b9425d898e"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "6e1a978ecd9f030c0a62f9aacb3732f2"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "bb8378fc3495ca635100f5e76855e979"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8521eb807951f725b8e107cb76bdef82"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "bc5bc706f34e81cf8d2eb8fd79d780c4"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "42b125540bbe8628c52df3dba2282771"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "57d37b0f11f2dd332356102180eabdd3"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "4c65c2c48faa9ec68d54c8998d59a4dc"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "06c8dd94fbae75a0fceaf201e3aa25f9"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "d64efcfe3319cb258cbd4ceacdabc741"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "4b648fcf3507f36bc5ad907e9829c322"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "403c3f9a96dda38d42359ba40def0f4b"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "9e609fb14f99d722da092e41d8b9939d"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "5c0e16113fb6656f022e4cc3ed39b706"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "bdd1dd42875f873d98d0c5edd5985df8"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "186712ea67e2a96d008f6df8c41756b3"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "77beb6d0761e2662fc7e551bc2e5c474"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "ded54d067395fdf48fc7b04e0d1bf90b"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "880cc34970441c173b9f2b36ef4bd4cc"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "c08acdf5914384f572d81b6ed23df6ce"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "40bce02cb4a80f69b7f1e2213cae9e26"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "87d35955bba3a825211ebb1edb43757f"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "05a9176775b674b8b6ae3834e201a710"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "cb86a293c5fdd12276b10a2ecaea7e09"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "65b71be4266e6639a71f6fc51c3282b3"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "0c52615dabc45275c7bf7c6ae4d28a94"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "23e3a415bf4d3a349374806a2d678585"
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
