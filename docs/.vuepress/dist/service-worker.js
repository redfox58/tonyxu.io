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
    "revision": "b95c576c796942f15aa379e769b89566"
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
    "url": "assets/css/0.styles.dcae4551.css",
    "revision": "439d826d57d7154c5ddbcf8f39f129c2"
  },
  {
    "url": "assets/img/20180803-1.0942e0b0.png",
    "revision": "0942e0b0c1e9ab9f74898813c94ec773"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3498ffb9.js",
    "revision": "88cb404d7c26807aba7afc44f965078a"
  },
  {
    "url": "assets/js/11.8f6bd1eb.js",
    "revision": "686f8b7a63a9d5f9d4c4a636c21af07f"
  },
  {
    "url": "assets/js/12.3b6549ee.js",
    "revision": "87ac82d36e77f4b3bdf4ff07f45903be"
  },
  {
    "url": "assets/js/13.83f8516f.js",
    "revision": "e2ffd2d23b0ba86d85ad66ce027c6e6c"
  },
  {
    "url": "assets/js/14.9cc9bf23.js",
    "revision": "0826a4b988970e759ad8dea71a8d08f4"
  },
  {
    "url": "assets/js/15.027b30cf.js",
    "revision": "1c9d711600b0d3af6beaea0a8092fb53"
  },
  {
    "url": "assets/js/16.0662f42b.js",
    "revision": "f58798d6f739dd42a632e4a814848560"
  },
  {
    "url": "assets/js/17.9aad6d60.js",
    "revision": "074f00777715c879af0d7aa0ded0c897"
  },
  {
    "url": "assets/js/18.60f4d9ed.js",
    "revision": "76a8a29a7967a15aea4bd47c57cee2f1"
  },
  {
    "url": "assets/js/19.348a8473.js",
    "revision": "b34c62771a854631024a852a4f0f02e4"
  },
  {
    "url": "assets/js/2.881dd6f2.js",
    "revision": "9040281b6ba26a1f1e73022c49c3ec3f"
  },
  {
    "url": "assets/js/20.0ac21507.js",
    "revision": "b43d092fb384915c667f7f050564df60"
  },
  {
    "url": "assets/js/21.a899d87a.js",
    "revision": "ec21d7375feed5ad6b8a97dd53453bf7"
  },
  {
    "url": "assets/js/22.fd57834d.js",
    "revision": "c18cf2f578e0202e971c8aa076f09365"
  },
  {
    "url": "assets/js/23.f2dc06d5.js",
    "revision": "8f060e69c74a80d70c0e1fc186867fb6"
  },
  {
    "url": "assets/js/24.9b7fe64e.js",
    "revision": "df1e83af901c269508f7dea7b004dc69"
  },
  {
    "url": "assets/js/25.b5829770.js",
    "revision": "6751f3ff64b59baf23ab1ca925408048"
  },
  {
    "url": "assets/js/26.3b85cc00.js",
    "revision": "da6099a700c613b4df35d2cae294774c"
  },
  {
    "url": "assets/js/27.9cc66107.js",
    "revision": "43f052b54058dd99a072b130948799a5"
  },
  {
    "url": "assets/js/28.40876834.js",
    "revision": "6e3810f0ca945fc815b5afd6dd57dfda"
  },
  {
    "url": "assets/js/29.60cc36ef.js",
    "revision": "d753b8573832e7dd262fe00dd61b17af"
  },
  {
    "url": "assets/js/3.08439775.js",
    "revision": "6ddbf1980f3432d5b2af5e9a16d1112e"
  },
  {
    "url": "assets/js/30.c2290d39.js",
    "revision": "e2dbb760ffd414142f7d435ea2c3c324"
  },
  {
    "url": "assets/js/31.41af31d7.js",
    "revision": "be710096975e2f077af6eb8c709da103"
  },
  {
    "url": "assets/js/32.9f352ce6.js",
    "revision": "1afe84402548f2c29a7573c201fdc3cf"
  },
  {
    "url": "assets/js/4.3936b1d4.js",
    "revision": "582cb884401bdbf530f7fbc2cde9a7c5"
  },
  {
    "url": "assets/js/5.25fdfe69.js",
    "revision": "6428843fb67ee50435830fe8fb0fccf0"
  },
  {
    "url": "assets/js/6.08e3dcfa.js",
    "revision": "9fa8c69a8f7b2575d68b5c4f5922a612"
  },
  {
    "url": "assets/js/7.90c6ca7f.js",
    "revision": "9d6dcfa9fb1c6639f3feb83b1fdd0dd3"
  },
  {
    "url": "assets/js/8.e0a3ece0.js",
    "revision": "61e1b97e87fcf276f8bc35093226fe9b"
  },
  {
    "url": "assets/js/9.bbb8b728.js",
    "revision": "3770df45769bb5dc45e50a49e1e54041"
  },
  {
    "url": "assets/js/app.d16497d1.js",
    "revision": "62aa812f6d5bcf4a3150ac569dba9fbf"
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
    "url": "index.html",
    "revision": "06ff7235fe67da9c046b7f80db5664ed"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "617b62dbb1a731c731f598349d7636e6"
  },
  {
    "url": "posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "56fac5614bbb527935a555aa93ce0723"
  },
  {
    "url": "posts/2018/cloud-computing-exploration/index.html",
    "revision": "a09d7e86963acbcf76ded55f390642a5"
  },
  {
    "url": "posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "8e8f347508fafcd8bd27c37357027ae8"
  },
  {
    "url": "posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "3ea5c386bdfc256b4c4ff0a8504e05df"
  },
  {
    "url": "posts/2018/embed-google-analytics-dashboard-on-website/index.html",
    "revision": "9ff912b54aa4a71ca4d158c1313b4f2f"
  },
  {
    "url": "posts/2018/get-started/index.html",
    "revision": "46a73c5da35dca37c03740c91a4ffa2a"
  },
  {
    "url": "posts/2018/http-deprecate-x-prefix/index.html",
    "revision": "c7d0148c3290bfc8784b6c6dce70c33c"
  },
  {
    "url": "posts/2018/improve-your-ability-to-solve-problem-at-work/index.html",
    "revision": "83619cc5f621c5ab99e94cefdbe738d4"
  },
  {
    "url": "posts/2018/join-linkedin-one-month-summary/index.html",
    "revision": "176b61de61acffb39e53634e6e904f88"
  },
  {
    "url": "posts/2018/oauth2-pkce-flow/index.html",
    "revision": "ec04fb742cf85ff02da9c8da19989833"
  },
  {
    "url": "posts/2018/rest-api-design-interview-preparation/index.html",
    "revision": "284e499ec18ec23ea932a1cbc415d270"
  },
  {
    "url": "posts/2018/tech-stack-for-building-your-own-product/index.html",
    "revision": "135a90cdf1339c6978da44f011c00aa0"
  },
  {
    "url": "posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "7a274584a189144ed8f635802a1adf3f"
  },
  {
    "url": "posts/2018/ultimate-way-to-beautify-mac-terminal-and-recommendations-for-plugins/index.html",
    "revision": "ed4f178e6d3ce1a30cc5470d13a136d4"
  },
  {
    "url": "posts/2018/use-firebase-cloud-function-to-count-website-visitors/index.html",
    "revision": "ba551eac494e1ad1ea4d9c1c46b2b8dc"
  },
  {
    "url": "posts/2018/use-gitlab-ci-to-run-free-scheduled-jobs/index.html",
    "revision": "967582557b546a90e69fd032d1f69d5b"
  },
  {
    "url": "posts/2018/use-icomoon-to-reduce-fontawesome-size/index.html",
    "revision": "208ebefa0f93562cdbf73ed38bd6aeaa"
  },
  {
    "url": "posts/2018/use-telegram-and-flask-to-build-notification-server/index.html",
    "revision": "b00b45d1a24a1d01d7f15de41d6fe8d4"
  },
  {
    "url": "posts/2018/write-script-to-scrap-house-rental-price/index.html",
    "revision": "ad89db0fa53ed6cad2a75f10a3a11daa"
  },
  {
    "url": "posts/index.html",
    "revision": "78032f7c2a66ad4e708a9ca3ff9ba4a8"
  },
  {
    "url": "zh/index.html",
    "revision": "f176e01b39da09c126a692c553a50843"
  },
  {
    "url": "zh/posts/2018/be-prepared-for-your-next-job/index.html",
    "revision": "3de087447ca0f488aad29c2116719ce7"
  },
  {
    "url": "zh/posts/2018/cloud-computing-exploration/index.html",
    "revision": "0c32f1dd576ead1231903174f64d2581"
  },
  {
    "url": "zh/posts/2018/create-alfred-workflow-for-uploading-screenshot-to-s3/index.html",
    "revision": "739dbe61326f4d2f8c1e71390aaaaea3"
  },
  {
    "url": "zh/posts/2018/customize-chrome-new-tab-page/index.html",
    "revision": "c36e5f7dc836712051794955dc93edea"
  },
  {
    "url": "zh/posts/2018/technologies-learned-as-a-software-engineer/index.html",
    "revision": "4341b587c3c85e09258893b3a2ffb262"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "787dcc92766c142259dfcd8deb83c6ec"
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
