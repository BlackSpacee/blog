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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e742e779c7d41bc7005c9cd1a45dcb96"
  },
  {
    "url": "about/index.html",
    "revision": "650bf31d42a10d7e246dc9b90dd873d3"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "e27fc0680286e75d342b9047a6dbe4d8"
  },
  {
    "url": "assets/css/0.styles.c8a60675.css",
    "revision": "2fb47c2e0683d18b2d66bd9d8cd76d8a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.792c9595.js",
    "revision": "a4610d92e928bc16ba131deb2a6e7b9f"
  },
  {
    "url": "assets/js/11.ad956743.js",
    "revision": "35e30592da07d35331f27a8b7abbd623"
  },
  {
    "url": "assets/js/12.d9b45204.js",
    "revision": "9082ea989ebbb4e949ec447635c2790c"
  },
  {
    "url": "assets/js/13.06bdfee6.js",
    "revision": "ca4a3fb85dcc440fcc75343520b1781a"
  },
  {
    "url": "assets/js/14.eba37fb9.js",
    "revision": "bbb850383ee9e0a018eeb7e9a0eb1282"
  },
  {
    "url": "assets/js/15.cbc381f4.js",
    "revision": "1a312765751df3110f1af1a4632b7145"
  },
  {
    "url": "assets/js/16.43b2ce6d.js",
    "revision": "13af478029cbce60b321ed8382ba480c"
  },
  {
    "url": "assets/js/17.701430d8.js",
    "revision": "076a2bbbf765338c1b53e37de1d193e3"
  },
  {
    "url": "assets/js/18.3e3227f3.js",
    "revision": "798346b01d73de8b700d39b5e1f5668b"
  },
  {
    "url": "assets/js/19.25458a06.js",
    "revision": "ab76a099d2ef6be2734fa4375ebf8e23"
  },
  {
    "url": "assets/js/2.09c1df90.js",
    "revision": "e67d81803a1a8ed23e33a8db464a15c9"
  },
  {
    "url": "assets/js/20.05942889.js",
    "revision": "b1abe54db9f4658e1cb6e807f87b6bd2"
  },
  {
    "url": "assets/js/21.1f501939.js",
    "revision": "cdc147ea1669783e02a5c40f4d6a4337"
  },
  {
    "url": "assets/js/22.16ef9af4.js",
    "revision": "7d31862c71d6f56c43b9f431a0b83655"
  },
  {
    "url": "assets/js/23.97537190.js",
    "revision": "37c0ab37ea7d8961a29203c9486e2503"
  },
  {
    "url": "assets/js/24.f4e42b6b.js",
    "revision": "fc2606e1c190c9af122c3e08a5d32063"
  },
  {
    "url": "assets/js/25.b2f33d75.js",
    "revision": "2ef5ee7b4d4e68cd3b4a10e176447d96"
  },
  {
    "url": "assets/js/26.74a50450.js",
    "revision": "012626a0f37dbfb830670c8baaee0405"
  },
  {
    "url": "assets/js/27.69251278.js",
    "revision": "6836d772c8a16ddeda0386c14aa1798e"
  },
  {
    "url": "assets/js/28.a672144c.js",
    "revision": "6dc6062ee76b7fdf78cf1a3f739799b3"
  },
  {
    "url": "assets/js/29.6263a2fd.js",
    "revision": "3e1263e876355c1e75e8d21400d392d6"
  },
  {
    "url": "assets/js/3.c0db3266.js",
    "revision": "6cccb0af580923535a09284be0e83a65"
  },
  {
    "url": "assets/js/30.2e794242.js",
    "revision": "872a6e641a00fca8a2006304bd45bc4e"
  },
  {
    "url": "assets/js/31.c616e1f1.js",
    "revision": "ce953a6f260c4f3def20242ae1d8872a"
  },
  {
    "url": "assets/js/32.54261b92.js",
    "revision": "e1588c012dea6bc64f6dea8b8856d332"
  },
  {
    "url": "assets/js/33.1c61b40e.js",
    "revision": "0e22edf65aacfc556e53667014775e0e"
  },
  {
    "url": "assets/js/34.d03a008d.js",
    "revision": "76da89c5ba8c9eca04c07272810761c2"
  },
  {
    "url": "assets/js/35.0c6517e0.js",
    "revision": "682e07446b92015d4ebe65c7091635b1"
  },
  {
    "url": "assets/js/36.9a59e2fa.js",
    "revision": "8b60318753ae434c730d07561fe6f0ee"
  },
  {
    "url": "assets/js/37.0da503b5.js",
    "revision": "5f0df46805cab66ea3fb03dfd1b2b78f"
  },
  {
    "url": "assets/js/38.e35ba786.js",
    "revision": "1e6e5a58996d8822237870f9365ecc52"
  },
  {
    "url": "assets/js/39.985e47a3.js",
    "revision": "a55a480b30664628aa528af1cfde5e69"
  },
  {
    "url": "assets/js/4.64f8a00c.js",
    "revision": "ccdb34621f739066604b134708b74f00"
  },
  {
    "url": "assets/js/40.6060fdbb.js",
    "revision": "1c3090075a41b594db68d4563e069b09"
  },
  {
    "url": "assets/js/41.b894ba43.js",
    "revision": "091ad6c039d1807bed3380d2ec02e138"
  },
  {
    "url": "assets/js/42.f73d37bc.js",
    "revision": "58be2146b68738e5792b735309698157"
  },
  {
    "url": "assets/js/43.4a91b340.js",
    "revision": "48c5adbdbaec0bc3b9aed2e9043c95b6"
  },
  {
    "url": "assets/js/44.c35891d4.js",
    "revision": "666a1ee8a715b8edeff643b59cb1e508"
  },
  {
    "url": "assets/js/45.5956063c.js",
    "revision": "0d3bd49075d609895913550ad542f564"
  },
  {
    "url": "assets/js/46.15ecb34c.js",
    "revision": "11a4e21de5d1d9c26121761a22829102"
  },
  {
    "url": "assets/js/47.967a13e5.js",
    "revision": "18ddab70f6eddee603744fca6cc89315"
  },
  {
    "url": "assets/js/48.edccff42.js",
    "revision": "560a92c7a9da81b116cb9ac8b1ee5bcd"
  },
  {
    "url": "assets/js/49.63f043a1.js",
    "revision": "b5cc828f056036bde9fa523f473cc152"
  },
  {
    "url": "assets/js/5.f6966e72.js",
    "revision": "a6c2aefc0ccb891ba5d3e0809b1723c9"
  },
  {
    "url": "assets/js/50.dda6c6c4.js",
    "revision": "c274be64de9ceb89eb4c230a1915ed06"
  },
  {
    "url": "assets/js/51.3cc13e49.js",
    "revision": "8d80296bc88976e85ab9e8411cd50000"
  },
  {
    "url": "assets/js/52.044ff865.js",
    "revision": "87479462ee357e7c59aec665dbd5f133"
  },
  {
    "url": "assets/js/53.844f8ff1.js",
    "revision": "f4fc2b446b3b92c900fa45515df7cdd9"
  },
  {
    "url": "assets/js/54.5cf351e9.js",
    "revision": "ced1058292768b939c4dd05ed848ea60"
  },
  {
    "url": "assets/js/55.ac9f233f.js",
    "revision": "0de6470b1c2dacfcff54a46db389b06e"
  },
  {
    "url": "assets/js/56.2a8029ef.js",
    "revision": "8f790aaae6f54d4f1886276c38deebe9"
  },
  {
    "url": "assets/js/57.fc4774e0.js",
    "revision": "4a59b17fdbece769bf2d7a797ab41aaa"
  },
  {
    "url": "assets/js/58.bafc5295.js",
    "revision": "750adae022be2e96b6955d34b394aff3"
  },
  {
    "url": "assets/js/59.b4ce9c07.js",
    "revision": "a3c1d5fb8560a7cab02b9352a7eb7c06"
  },
  {
    "url": "assets/js/6.1d31d62f.js",
    "revision": "94e557f7b49df4eac4ee02e0c0c2fb21"
  },
  {
    "url": "assets/js/60.a1370413.js",
    "revision": "6e25afa8e1cc76cd41b9f9db26f2fc82"
  },
  {
    "url": "assets/js/61.178fb243.js",
    "revision": "33ab7505735990ca21b630de1051ef41"
  },
  {
    "url": "assets/js/62.88c09f00.js",
    "revision": "1ec57c4a6ae3abb0319241375bcd7675"
  },
  {
    "url": "assets/js/63.93b7be73.js",
    "revision": "c9484d71a07409a6b27bbce1368a6983"
  },
  {
    "url": "assets/js/64.cb833996.js",
    "revision": "7c08a9a48e945f727dc577b62439cb07"
  },
  {
    "url": "assets/js/65.37f298d6.js",
    "revision": "79f04c23d440d8de17b36ac081a4fa31"
  },
  {
    "url": "assets/js/66.58ce4375.js",
    "revision": "48fe8d71d9ed7c47a87b2a5b0dc5652b"
  },
  {
    "url": "assets/js/67.f63ce476.js",
    "revision": "8eaa39a0a26bc284d2d1f38a8fa4c734"
  },
  {
    "url": "assets/js/68.e8f43c7e.js",
    "revision": "40760d4507e9b3ba27ecd7d63f7502c7"
  },
  {
    "url": "assets/js/7.786c12d1.js",
    "revision": "f4dcb29331507913dd14a6b81afa465d"
  },
  {
    "url": "assets/js/8.c26d80ae.js",
    "revision": "a1cd61a3743d2b3ebe31d026571f16e9"
  },
  {
    "url": "assets/js/9.911fcd57.js",
    "revision": "6993a4d8e030a954080d438f512a8da1"
  },
  {
    "url": "assets/js/app.da8279db.js",
    "revision": "569f2132a089b2445251e1fd15877b84"
  },
  {
    "url": "css3/css3.html",
    "revision": "ac04ccadb5c8b05a3bffb2cc51b3388c"
  },
  {
    "url": "ES6/babel编译.html",
    "revision": "98b16ddb024c1e959783d36820e1434c"
  },
  {
    "url": "ES6/class类.html",
    "revision": "12aae282c0c38e629b28788e1533f44c"
  },
  {
    "url": "ES6/let&&const.html",
    "revision": "b484918548386a05b06ec86097a3d3dc"
  },
  {
    "url": "ES6/map.html",
    "revision": "965cb47a36b490a96675f3034dde9bf4"
  },
  {
    "url": "ES6/Promise.html",
    "revision": "898c56f3f189ec9512e2b69eb52741a2"
  },
  {
    "url": "ES6/rest.html",
    "revision": "d7a5d080033f58388be12be3f889986b"
  },
  {
    "url": "ES6/set.html",
    "revision": "5dfd12b88cacdc9d820280890d89ecd1"
  },
  {
    "url": "ES6/webpack编译.html",
    "revision": "7ac5b450aa364b9163f9f8b785da4cab"
  },
  {
    "url": "ES6/字符串扩展.html",
    "revision": "ab089f88217f2c2d55818c79e1e5adf6"
  },
  {
    "url": "ES6/对象扩展.html",
    "revision": "58fcbeb876a2a6d8651507932c018b01"
  },
  {
    "url": "ES6/数值扩展.html",
    "revision": "28a92d0c3b3b127134981ccb12cea457"
  },
  {
    "url": "ES6/模块化.html",
    "revision": "4bf302b179a3ac38b33a42cd0521189e"
  },
  {
    "url": "ES6/箭头函数.html",
    "revision": "3b595531ece98d9252b17b680709a311"
  },
  {
    "url": "ES6/解构赋值.html",
    "revision": "e541bce93577ba0e22e8cd3475eada9b"
  },
  {
    "url": "ES6/起步.html",
    "revision": "d01b2c49e2acc4ad1324dbfc883db59e"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1437578e46e173bd9ce22938c5dc32bd"
  },
  {
    "url": "flex/flex.html",
    "revision": "1cc6c2174359b708e3f15a3c14f1784a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "cca39abf22280ff4e887edfeec1daf6b"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "d08cbe2651824fe17bb0337e43db1859"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "0f6f608cbf97d00aeba2c8074fb49987"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "f0e4e87353ca723c8476d3c6f708c89f"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "da49417621c7ed2d40fd370200fdad05"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7999a7ec354851ab19e83bf9f656763f"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "3be4378e5bf8ef97e7540cb752c65d0a"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "d007ed24371f5ee4ed5a5c2a3cccdea4"
  },
  {
    "url": "index.html",
    "revision": "91d76eef1c1ae2e35138664a7833c0ba"
  },
  {
    "url": "javascript/Date对象&&定时器.html",
    "revision": "64119bf985622953c1a55b3388595b65"
  },
  {
    "url": "javascript/Dom继承树.html",
    "revision": "aee4e210222cd81aa513de31b093d1f7"
  },
  {
    "url": "javascript/DOM起步.html",
    "revision": "9ac30023b5ea585908e14312e0676225"
  },
  {
    "url": "javascript/index.html",
    "revision": "197655b0de4f72bb8af3b5c7b8ca33bc"
  },
  {
    "url": "javascript/json异步加载.html",
    "revision": "361a262a7c2de63cacf3e42636f3b767"
  },
  {
    "url": "javascript/this.html",
    "revision": "5b888b7432382e2ba5c9d6adb135455e"
  },
  {
    "url": "javascript/trycatch.html",
    "revision": "06d6316ef0453373fb2aad714df57b70"
  },
  {
    "url": "javascript/typeof类型转换.html",
    "revision": "f515cd5311ee17064419417247dd544d"
  },
  {
    "url": "javascript/主流浏览器.html",
    "revision": "b2c7f1f53d17d3db0cc89aa4c1fcf9dc"
  },
  {
    "url": "javascript/事件.html",
    "revision": "75083426f39d997d04b72371ae15af10"
  },
  {
    "url": "javascript/作用域.html",
    "revision": "3629e5990e44a262f84fbe243e6ad843"
  },
  {
    "url": "javascript/克隆&&数组.html",
    "revision": "d9410e60513cfbf3c1672502493780cb"
  },
  {
    "url": "javascript/函数.html",
    "revision": "d1959d24e9cd144049c9df50b452e498"
  },
  {
    "url": "javascript/函数小练习.html",
    "revision": "7c7c4b1104b6376b9de7b0301881072a"
  },
  {
    "url": "javascript/原型原型链.html",
    "revision": "5d250793eaa7ba97998696637055ffff"
  },
  {
    "url": "javascript/变量.html",
    "revision": "6a49051c09072e6f656efe877addafeb"
  },
  {
    "url": "javascript/对象包装类.html",
    "revision": "d35eb481e3efad2434584a8213e2a064"
  },
  {
    "url": "javascript/总结复习篇.html",
    "revision": "1fc7c9b54a35e8cf9a6b95d4398b14f5"
  },
  {
    "url": "javascript/数组对象.html",
    "revision": "adaa89fa990cc5d8917b8b3527d83f7c"
  },
  {
    "url": "javascript/条件语句循环语句.html",
    "revision": "12714c610b61461587c6b1eab30f7ba1"
  },
  {
    "url": "javascript/正则表达式.html",
    "revision": "92a352311e9a5ff8cd3032851f0bcd6f"
  },
  {
    "url": "javascript/立即执行函数.html",
    "revision": "d26a40db95c9245d51d5a784373f73f4"
  },
  {
    "url": "javascript/继承模式对象枚举.html",
    "revision": "6c9f09ae0351a40bffaf255c78309b95"
  },
  {
    "url": "javascript/获取窗口尺寸.html",
    "revision": "0c26031c8e2d21c1b410ab74bf9de3f8"
  },
  {
    "url": "javascript/运算操作符.html",
    "revision": "0fb7db1e12649ad9242c9c9432f928c1"
  },
  {
    "url": "javascript/运算符小练习.html",
    "revision": "5c7e95a5ed09930eeafe02279161537d"
  },
  {
    "url": "javascript/选择器&&节点树.html",
    "revision": "ca540208507f47d7fc65a7a1f7e1ed3e"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "43052352bb7cc955e9d05ef2b3c6ca22"
  },
  {
    "url": "javascript/预编译.html",
    "revision": "34cd8238e535a5e61dc594df97a9bd3a"
  },
  {
    "url": "jQuery/jQuery.html",
    "revision": "937ba1531434fc1eff4d5141880d4093"
  },
  {
    "url": "less/less.html",
    "revision": "e18037961c54f411fa5a723de1ad8be6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mei.png",
    "revision": "54c9dcad48aff68e5ee6dac5e790cdbf"
  },
  {
    "url": "mine/index.html",
    "revision": "5eeb048cf41c272b644fb8fcf0d29945"
  },
  {
    "url": "react/docs/15854838887192.html",
    "revision": "4424b6127030dc9ce8f6c98ccff260ef"
  },
  {
    "url": "react/react.html",
    "revision": "5cd5ed257e69af9f34ad212713d4d78c"
  },
  {
    "url": "react/redux.html",
    "revision": "a3246e16ffa52ac2f89b0eaa63a605bf"
  },
  {
    "url": "rem/rem.html",
    "revision": "76aac71d6b094e97c57282466b621622"
  },
  {
    "url": "vue/Vue.js.html",
    "revision": "703558f2379be3eebcaf9d903750e51e"
  },
  {
    "url": "vue/VueRouter.html",
    "revision": "a439e01b42c859793fd4d71d203ab173"
  },
  {
    "url": "vue/Vuex.html",
    "revision": "6fffa457fdc746c897d64c793277b32b"
  },
  {
    "url": "百分比/百分比.html",
    "revision": "d4e4d1a41d2b5523ae11c1298f471e73"
  }
].concat(self.__precacheManifest || []);
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
