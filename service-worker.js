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
    "revision": "be76afd8d9e1028ca5beb66596e8c2c8"
  },
  {
    "url": "about/index.html",
    "revision": "35572d05f278ee305d8a432e1f761bc1"
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
    "url": "assets/js/10.ca938d09.js",
    "revision": "825c4307c7b7877028a8af2be3411bb8"
  },
  {
    "url": "assets/js/11.827a91b7.js",
    "revision": "a0ae54a51f752ac15d0011eba9cb1989"
  },
  {
    "url": "assets/js/12.cb017bd6.js",
    "revision": "5aebb0127e5822b27fed7ea1f6399baf"
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
    "url": "assets/js/16.5b7dc482.js",
    "revision": "9af7004fb7582f2131775f74954ba4fa"
  },
  {
    "url": "assets/js/17.b9140df3.js",
    "revision": "6a8a72613b43da65a5ef085ca003c1b6"
  },
  {
    "url": "assets/js/18.d5bee35e.js",
    "revision": "943713ce25805cb358f49ddd227e8de8"
  },
  {
    "url": "assets/js/19.9a01600b.js",
    "revision": "1aa4fa6d0c12d62e544a6b4a89d15353"
  },
  {
    "url": "assets/js/2.410d500d.js",
    "revision": "e45a9798c9bec2a87166d970bb10b106"
  },
  {
    "url": "assets/js/20.8a7a1fd6.js",
    "revision": "642550969639c6cfdbe310c409738892"
  },
  {
    "url": "assets/js/21.c41a59d0.js",
    "revision": "756c31ac6876e91fea6f62620516de20"
  },
  {
    "url": "assets/js/22.3a8c3a2c.js",
    "revision": "cd5e264dcedf5057b121f2839f2432d2"
  },
  {
    "url": "assets/js/23.93d39f01.js",
    "revision": "c44374d107ac98cdde589fa65a16a2d6"
  },
  {
    "url": "assets/js/24.31b6349b.js",
    "revision": "09fb82eabab3e0613122c158f6fcd30d"
  },
  {
    "url": "assets/js/25.2df899c9.js",
    "revision": "aff9802191a547f3eceda4e059b5d433"
  },
  {
    "url": "assets/js/26.72a3a204.js",
    "revision": "1ccb41b210b4834057e5bab1ff2908af"
  },
  {
    "url": "assets/js/27.2756a8e8.js",
    "revision": "1011b769bfc89baee5076b40d0e57ef8"
  },
  {
    "url": "assets/js/28.6c7d2615.js",
    "revision": "2f4d575384328d7ec9cb25148f7ebed9"
  },
  {
    "url": "assets/js/29.7341f103.js",
    "revision": "e15ff8cac50c3cd92b1f2db7fcbea4ee"
  },
  {
    "url": "assets/js/3.d23ceab1.js",
    "revision": "06cf0df21a93bac2c1084467cc98b543"
  },
  {
    "url": "assets/js/30.1af4f737.js",
    "revision": "6414cf159aabb33e1b3580d6e70ccdac"
  },
  {
    "url": "assets/js/31.6867c546.js",
    "revision": "4054838111e31e536c761ca4f3ae3924"
  },
  {
    "url": "assets/js/32.91900275.js",
    "revision": "7ee37b566476187c2b60a81277f22eef"
  },
  {
    "url": "assets/js/33.613f173c.js",
    "revision": "e8a8021061c3ae42814cacea029b026e"
  },
  {
    "url": "assets/js/34.6e96df98.js",
    "revision": "17d5e1a81a48b087527a07bc1c1bbf25"
  },
  {
    "url": "assets/js/35.039646bd.js",
    "revision": "1dc0e3396d9edadf63e33af3ce8e15c0"
  },
  {
    "url": "assets/js/36.c6927169.js",
    "revision": "6be8f138ed03ad68f4263e14f16fa192"
  },
  {
    "url": "assets/js/37.d3c3bad6.js",
    "revision": "ab8b117ac4ef622775447ceccdadc8c8"
  },
  {
    "url": "assets/js/38.a18059d7.js",
    "revision": "acb6c36c06bb3669edaa08cb7f483847"
  },
  {
    "url": "assets/js/39.1d3a6742.js",
    "revision": "fe33a389be00d43a1e2d3b3fdc13f50e"
  },
  {
    "url": "assets/js/4.ef262dc2.js",
    "revision": "45293874d8cd785e530f30e01489fb3a"
  },
  {
    "url": "assets/js/40.da82da95.js",
    "revision": "8296f925102c0f7b8dab802344c7ad15"
  },
  {
    "url": "assets/js/41.98af61a8.js",
    "revision": "801e7fe72f113ff523af4c51dc632eb1"
  },
  {
    "url": "assets/js/42.7f316388.js",
    "revision": "b69af034fef71eca53ed9b0536c278a8"
  },
  {
    "url": "assets/js/43.2807cd15.js",
    "revision": "5fb22642921f4c90d0c6220ff707c2f4"
  },
  {
    "url": "assets/js/44.49591945.js",
    "revision": "8513a164dfddd6ecd8ccb10bc23747b8"
  },
  {
    "url": "assets/js/45.b4261dcd.js",
    "revision": "c9d82c4a144cd96d9d60495fef7cc980"
  },
  {
    "url": "assets/js/46.0e3d3c48.js",
    "revision": "6ef7c6559821eb5c195c7b74e1dfd169"
  },
  {
    "url": "assets/js/47.22b581e8.js",
    "revision": "8e908294f912456b8f9d1c0850f791b5"
  },
  {
    "url": "assets/js/48.ccce9881.js",
    "revision": "c3ab4343dd64bd941313498823a70bc0"
  },
  {
    "url": "assets/js/49.b44ea87f.js",
    "revision": "10df1c758c571b6b2d712983331f770c"
  },
  {
    "url": "assets/js/5.a2220bf6.js",
    "revision": "09844b0955d5bb809720616dbc7a48ab"
  },
  {
    "url": "assets/js/50.455f6407.js",
    "revision": "5ba27379abb39a89a1fdbd220ffcab30"
  },
  {
    "url": "assets/js/51.8c9cde36.js",
    "revision": "c5a5e043d2c66f67e11ccafa69ecb949"
  },
  {
    "url": "assets/js/52.ff6d42a7.js",
    "revision": "588b8a16a703ab0fbdac237bb3730cb0"
  },
  {
    "url": "assets/js/53.f5635b08.js",
    "revision": "73ced494f125c43f157692e3776b185c"
  },
  {
    "url": "assets/js/54.ee9c2e7e.js",
    "revision": "c6a391a8c8bfbb89ef8f145fc41f5b20"
  },
  {
    "url": "assets/js/55.99245cc8.js",
    "revision": "4a1b5e662daf5ca18b287caca1e70501"
  },
  {
    "url": "assets/js/56.ac9d2f5d.js",
    "revision": "be265b3baec15146da18d9d8198fd282"
  },
  {
    "url": "assets/js/57.6202f56f.js",
    "revision": "50268209943140d0d481afb12b19fbbe"
  },
  {
    "url": "assets/js/58.e1dac641.js",
    "revision": "9eb78fb12e0cbbe84668f905a3a5b257"
  },
  {
    "url": "assets/js/59.9a522265.js",
    "revision": "1b986385847f0666191ffb7754679fa6"
  },
  {
    "url": "assets/js/6.ee76e16c.js",
    "revision": "3716643e280c3a74dfa865f4074d4f20"
  },
  {
    "url": "assets/js/60.2c17bf18.js",
    "revision": "8902df1e0c7a5b4f3938fbff68a1e6bb"
  },
  {
    "url": "assets/js/61.ada92f3f.js",
    "revision": "7f1e94f164248ebd3150e8188cc5ebad"
  },
  {
    "url": "assets/js/62.e79d5899.js",
    "revision": "33d56ee85fa94911afe832113fc7c709"
  },
  {
    "url": "assets/js/63.235465d5.js",
    "revision": "8c81ae58fe5c5dc8809237f59849f923"
  },
  {
    "url": "assets/js/64.57ec6575.js",
    "revision": "a43553cf4754bade8242949a4d1024c0"
  },
  {
    "url": "assets/js/65.0393959d.js",
    "revision": "7869442dbfbe0bbcc8c2711329a00548"
  },
  {
    "url": "assets/js/66.a7f92e2a.js",
    "revision": "61db8068f9393df5385d20afafdf4583"
  },
  {
    "url": "assets/js/67.e1686b41.js",
    "revision": "6a318c45ca7ee4e792e879e18a658a61"
  },
  {
    "url": "assets/js/68.e981cbbb.js",
    "revision": "94d9076bf55dda460053572402a25ef6"
  },
  {
    "url": "assets/js/7.5603cf51.js",
    "revision": "b017b9850eae1f0b45ab9a241a4f2db0"
  },
  {
    "url": "assets/js/8.680c1f4b.js",
    "revision": "de7222e769fa63b7a3fc388396defd23"
  },
  {
    "url": "assets/js/9.18b5be37.js",
    "revision": "78c827a27b68b7130d79fbd8ce682d4f"
  },
  {
    "url": "assets/js/app.f92e6797.js",
    "revision": "a397f7c7ca723939290c3a32e4ef0978"
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
    "revision": "c24a584c0d4b0c437eee938a7bdefd1d"
  },
  {
    "url": "index.html",
    "revision": "0586de80466b4440266186533ce5f40a"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "004e479082d8c4745e9802466584e857"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "968f86f88a0c4848b97620f1698574d6"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "bfe0bb4b7583fb6830e5cf2c0f002e7d"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "39d8ddcc5e857361c36503897e31b640"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "24e8ec5d2dc54fabfe3dc94c1e22436c"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "b47150c1f168c2424c59cbad18a67512"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "febd80d01452d3364cb68c5df9832e7e"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "a69439e9a084328fbeabc51eab5a7804"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "9cf7772c3c5a51082d5ede5cfbf3a99d"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "382f16a82d7c493e771a2b634c3aae10"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "2de594630218cadf9f7901369a23f6db"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "5134fe1a908c1e2deeec643ca107847e"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "43e366c8d55ee597a8f4178906ab87c9"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "4bf3b750bc5bdfd8777deb3db7ac4c1e"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "e1b336e91b37597898e603d659eb028b"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "d2ca8bb4ec8d52bb3cc06c6bc5cade31"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "e36ee1831fd588e25e88d6a6a3c1a5f1"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "fa18f5d021b3fce9d699f862fe89b43e"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "3539812c7c79d730d5a1b2724f47af37"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "e3b90881ca5903c2ef704a8fc132aefc"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "4732eb90ceed351ce82e68190909c15f"
  },
  {
    "url": "posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "87a465501075a447ac4548250e24f5d8"
  },
  {
    "url": "posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "9cc9b8920d8b91aebfe3fdefabddaa66"
  },
  {
    "url": "posts/index.html",
    "revision": "0860a7bd974aacef5ce3d976acb2f227"
  },
  {
    "url": "projects/index.html",
    "revision": "cf094080d7ab28d0e2b815f92f5c6b56"
  },
  {
    "url": "tip/alipay_barcode.jpg",
    "revision": "79b132c90317d2c12b5b35a7574986f4"
  },
  {
    "url": "tip/index.html",
    "revision": "30865908aa1c7c0abcf25b4a9168a39d"
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
    "revision": "4046c21b48454c7b1ac7cd111d6f87af"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "9df57614d0434ad7a34a9de1c3c8173a"
  },
  {
    "url": "zh/index.html",
    "revision": "fa410bb22c95aac6294c01df8e7bfb4e"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "0acb101ea9c32a3828357d31c5b7826f"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "408844dbf874aeb68993bb92df34cd99"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "eaa3c1793330c088a51b66e7e1db5af4"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "562651aea51285c16779f1b9d07547b4"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "2d6d010052f2c66232e8d4562bf76c90"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "5954eec01dc58207342bc696566b87ae"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "fa50efc79a0996ee933fbd5da8ee7447"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "5de6201caf730e7ca7f65a3d06537c45"
  },
  {
    "url": "zh/posts/2018/index.html",
    "revision": "10c7cf7ab7e9ef3451db50fcbdb38cde"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "c34707701c59729a26191e887012c8e4"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "4cd35aff180fb3ee88489df9b3d09a7c"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "52bf9d1c819f5a4fdadfc8a8cb37f514"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "81bd476d15242fd9862d908dd40baf43"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "fea4e2ad7ef6394ece0c54a5ac7169be"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "2426d27c9660070387f3a88ee3339801"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "38ab4b9a345d736e35610078506bcef6"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "fdff79d811cf83fe1c8f39c5eb04b3b6"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "6625d38ed3cff951dfc49e1710f7db94"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "1fca5f52d748184b91c09e0ec7637721"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "c8d60391c6aab5cfc4462afa998e0095"
  },
  {
    "url": "zh/posts/2019/index.html",
    "revision": "ead259dfb0717940040ef7d61d194885"
  },
  {
    "url": "zh/posts/2019/my-productivity-tools-and-development-setup-recommended-to-software-engineers/index.html",
    "revision": "9850cfccc7e4090aedae838569becef6"
  },
  {
    "url": "zh/posts/2019/use-github-to-mange-personal-knowledge-base/index.html",
    "revision": "2c5a9058fc3647907a8e26227595450f"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "a646e7c52f6258d15afbe1bdec137f86"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "e79c8b4f28d56f67a699fdaa5e39f1a6"
  },
  {
    "url": "zh/tip/index.html",
    "revision": "e318270edf9d238a2cfeed40ed761800"
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
