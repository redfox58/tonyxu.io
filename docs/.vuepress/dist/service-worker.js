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
    "revision": "e2f5b19362916166ca8e9be204e5b101"
  },
  {
    "url": "about/index.html",
    "revision": "4948ea9014c36e68b1961304f35db025"
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
    "url": "assets/css/0.styles.86da17ae.css",
    "revision": "44ed32394f52778cfc397cf93af648d2"
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
    "url": "assets/js/10.6ded0dc3.js",
    "revision": "8e8d596ec3dcb723c8be25ccc6b90bbb"
  },
  {
    "url": "assets/js/11.dc6c4ea4.js",
    "revision": "18db368b6245325fddf32f7ba8953321"
  },
  {
    "url": "assets/js/12.93b6057d.js",
    "revision": "9f269b6b2724d4783822f2d01cfe024b"
  },
  {
    "url": "assets/js/13.79a7be4c.js",
    "revision": "148a1cef96af3b519a18010f082ba380"
  },
  {
    "url": "assets/js/14.01940386.js",
    "revision": "72c09c7272e83eeec1cfea9d006441df"
  },
  {
    "url": "assets/js/15.bb8549ea.js",
    "revision": "a9e10add66577c2ad22f1b109f40912f"
  },
  {
    "url": "assets/js/16.ab0b1ed9.js",
    "revision": "72501e780514d229e9aeb0ec398641e1"
  },
  {
    "url": "assets/js/17.ca53bcac.js",
    "revision": "0d1543adab6f2aef4f66006b678f730e"
  },
  {
    "url": "assets/js/18.45e63f37.js",
    "revision": "1003921548589f1265a6ae5af0a67d27"
  },
  {
    "url": "assets/js/19.a3ef943c.js",
    "revision": "b2fa97bb2d68fb2ca683e7174be33187"
  },
  {
    "url": "assets/js/2.b93bcb8c.js",
    "revision": "d01d0094b66d927cce1ae28b4fe5e77e"
  },
  {
    "url": "assets/js/20.abe3eb63.js",
    "revision": "c4a446119d920db50cc844c3601c8076"
  },
  {
    "url": "assets/js/21.432c3929.js",
    "revision": "8acf7374ada6308ea7137a943210180a"
  },
  {
    "url": "assets/js/22.94efc73e.js",
    "revision": "4bb7b71258360af521af1685c96083c1"
  },
  {
    "url": "assets/js/23.afad67eb.js",
    "revision": "50870cc7714e214e2f88c4a87ea75112"
  },
  {
    "url": "assets/js/24.f3330728.js",
    "revision": "2e507a74629ce5864f1d8868bd8a4bf0"
  },
  {
    "url": "assets/js/25.10073dbe.js",
    "revision": "9af43f98f97b011e86eaa305e6f9964e"
  },
  {
    "url": "assets/js/26.72c4aeba.js",
    "revision": "a18b876ac5aa6c7d2b28d60f2aa9b7b4"
  },
  {
    "url": "assets/js/27.afa4a8e6.js",
    "revision": "1afc90417dbea0a79f9053eb93b6b2cc"
  },
  {
    "url": "assets/js/28.b96c6d9f.js",
    "revision": "6eada09efbfe3204820fdafc86454fe4"
  },
  {
    "url": "assets/js/29.ed25ef32.js",
    "revision": "896213fa7eef451df920499d4bd68170"
  },
  {
    "url": "assets/js/3.5edd6ccd.js",
    "revision": "3d3f05664303910b011cb027adfe2f7e"
  },
  {
    "url": "assets/js/30.da2f498d.js",
    "revision": "f79307d73c8ccd522f92b5f72d1dc88c"
  },
  {
    "url": "assets/js/31.91a54b67.js",
    "revision": "8799ce116406a052f415eeb022acc765"
  },
  {
    "url": "assets/js/32.e3af2a06.js",
    "revision": "b7f9aa0228fbf598d7dafa76e2a51ff8"
  },
  {
    "url": "assets/js/33.4de35c44.js",
    "revision": "5da92ae7f4d79c238efc8a2de1eca897"
  },
  {
    "url": "assets/js/34.37788fc7.js",
    "revision": "abd361bbef1bb4a5b72a14a0875c48a6"
  },
  {
    "url": "assets/js/35.dd676ab0.js",
    "revision": "873b0b77783da51bb9f8c69d8e6fbd97"
  },
  {
    "url": "assets/js/36.1d1010aa.js",
    "revision": "8ae893a0800c4603de560203cdeae400"
  },
  {
    "url": "assets/js/37.103debd0.js",
    "revision": "5a01439009c8110458d27ad522eb05b8"
  },
  {
    "url": "assets/js/38.32445dec.js",
    "revision": "a99c068a53678de1242202e0682fae2d"
  },
  {
    "url": "assets/js/39.8f69816b.js",
    "revision": "2e08361adf77e6e7b8c99591a2b45b79"
  },
  {
    "url": "assets/js/4.2ff81756.js",
    "revision": "5ab992ddad4b8a2575e461e7ac844de2"
  },
  {
    "url": "assets/js/40.9c324dcb.js",
    "revision": "6b7bc192edba39bb0dd3759c4a797816"
  },
  {
    "url": "assets/js/41.5200d9c0.js",
    "revision": "31190cc7503da5572e6a97a4b9ed4aa6"
  },
  {
    "url": "assets/js/42.a6684717.js",
    "revision": "9741e7876a66c542e176f3ba35dbc22e"
  },
  {
    "url": "assets/js/43.3b10ae6f.js",
    "revision": "c693404f650750f22694e2ae1fceaa05"
  },
  {
    "url": "assets/js/44.428b4fd6.js",
    "revision": "4c86efa5af73c116edb508007fdd150f"
  },
  {
    "url": "assets/js/45.ba6d9623.js",
    "revision": "656e35c529b501a27768221987024544"
  },
  {
    "url": "assets/js/46.6c8673d2.js",
    "revision": "58662f2149fb36f208e9dac70f8759eb"
  },
  {
    "url": "assets/js/47.28e16fbd.js",
    "revision": "594346e9048a1c1198531e885dc8c018"
  },
  {
    "url": "assets/js/48.4ad61485.js",
    "revision": "e578208667b990ea424a3559a91becc1"
  },
  {
    "url": "assets/js/49.3a43900c.js",
    "revision": "ff6627111e33bbc9ac7b94cacd602de3"
  },
  {
    "url": "assets/js/5.d9d3ac24.js",
    "revision": "e3b71d507c910c73067c05fe9bf17b4f"
  },
  {
    "url": "assets/js/50.1c1c6861.js",
    "revision": "3e4f85d5139823472f1aed2bc024d833"
  },
  {
    "url": "assets/js/51.7b1665d8.js",
    "revision": "114160b2a0072a9216f7394577bacb64"
  },
  {
    "url": "assets/js/52.0cacb5cf.js",
    "revision": "9f8b64313e946fba775aab7f8c166046"
  },
  {
    "url": "assets/js/53.9e5c48c5.js",
    "revision": "9b2a39a244a4e927a4828b21a3c2ec03"
  },
  {
    "url": "assets/js/54.ab19323e.js",
    "revision": "0ce2297623bc0a69c775afac3bf60d3f"
  },
  {
    "url": "assets/js/55.77a99353.js",
    "revision": "ab6226606bd54c6718f180a2ca993364"
  },
  {
    "url": "assets/js/56.ccae295e.js",
    "revision": "01e378fcae6199d1ec9926c302389cc2"
  },
  {
    "url": "assets/js/57.f22b9c2d.js",
    "revision": "1ffcfc8f45eaf1a1ceb741b2eb5a3115"
  },
  {
    "url": "assets/js/6.2740103d.js",
    "revision": "2c3498427efbbade6055c92d4d841eae"
  },
  {
    "url": "assets/js/7.dfb74656.js",
    "revision": "922232fea59cdbc80c53893f2bb5945a"
  },
  {
    "url": "assets/js/8.35101220.js",
    "revision": "78263a34532af22f1b145b562e1a4835"
  },
  {
    "url": "assets/js/9.0babe4c5.js",
    "revision": "3397347525e02b8007b91e8f25c49938"
  },
  {
    "url": "assets/js/app.98ff401d.js",
    "revision": "fb7fd3a822f776f7165f6696b32792e5"
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
    "revision": "3b88ee0d67f8f6f2b73162d692cef05e"
  },
  {
    "url": "index.html",
    "revision": "4b5ab3e623c8b9a5221cf9989308f128"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "061f35b6d2a78d987836178e23bbda89"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "27284aa95aae21dce489b6884ac896d7"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8b12baf39cb89f586f9d7b1932d3c873"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "a9d285a5deebaa1dcc62b6df4cd75ba4"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "9539b55149d89fca01dc96070fb415bd"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "f1470ede32fcb25beb431bc3659aa490"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "918d4ab72980c1074585dff667cd72ff"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "299a64297f6ac9682e7c6d9b60a8e770"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "924d1186ff1586184c46247398ae1fca"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "f1c06a5e41aabd6485a44924b0084b2b"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "7544673d19cc1e5031c541a95c905d61"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "8420a895b359be2c6942110137492e5b"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "cd1ab99f0ae351bebef80f0c6dd9209d"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "e8d0fc2e0efc9b95741a685e5eb1fd2d"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "f4c215339ecb561997caa694ea3e697b"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "f993e43144ffa881390283d827d98866"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "10f4182ecb8d686b770d0b842e2b2d69"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "1a51cc17af1fb076e657adf42da5becd"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "2995b85cf0ea9c58193e6429a0ed01f8"
  },
  {
    "url": "posts/index.html",
    "revision": "e5b5c98e681484a8453973912f26041a"
  },
  {
    "url": "projects/index.html",
    "revision": "ab2611abc09fa33a3978ba657ee77f94"
  },
  {
    "url": "zh/about/index.html",
    "revision": "6b80f6796ce7c2085b405e7ec225ef3b"
  },
  {
    "url": "zh/friends/index.html",
    "revision": "85aaf77b28eb00e5b3ea38f031d5d731"
  },
  {
    "url": "zh/index.html",
    "revision": "e2a48e3055869ef132cfe222bd279d14"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "b8cf4a3b28d4a5f856e66e4931d4bdf0"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "76b41023783e0975aa968a624cc3255c"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "065881e7105a913a2efda3f9302dfa70"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "ed38731769a46febc5ba62dcbd9f6847"
  },
  {
    "url": "zh/posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "8365b3edf62e99c2450ba3df6884177e"
  },
  {
    "url": "zh/posts/2018/get-started/index.html",
    "revision": "f3505071e9efa6e436e9844fa39008bc"
  },
  {
    "url": "zh/posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "7d062117727696024c4dd749fd625fa5"
  },
  {
    "url": "zh/posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "2a23b77abb0996a8fa1276d2ffb81de3"
  },
  {
    "url": "zh/posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "01610189bdf5e791572653b2c3261245"
  },
  {
    "url": "zh/posts/2018/oauth2-pkce-flow/index.html",
    "revision": "7c08777b55c1e37dfbcfcc5d5a41d5f2"
  },
  {
    "url": "zh/posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "03e9693a7a5c836d40bdab0dfd4ecb42"
  },
  {
    "url": "zh/posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "6467ac938e3c095dc1efaf5f38beb252"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "df7a53f479c7be554fe48d32dbb96351"
  },
  {
    "url": "zh/posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "0b087730e6765147bcb70d69086dff69"
  },
  {
    "url": "zh/posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "4220e7f6965c4a3afd1eab9fecbcfbf4"
  },
  {
    "url": "zh/posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "2e4213a61a62ab038bdc9d11b1276f8c"
  },
  {
    "url": "zh/posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "e4040673e0db11ab9641be50a018db0a"
  },
  {
    "url": "zh/posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "555c9a77878ab642a73532796fe4f3f4"
  },
  {
    "url": "zh/posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "c6b08ab8b79a31bff6fc9ab10ec62679"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "acd9c3e9b43a6e1235508e1374b91833"
  },
  {
    "url": "zh/projects/index.html",
    "revision": "ccbc36b3b64b2f4abf73adca8b25f9af"
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
