'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5b0cb3b6e479fc371ac5524a6dda30f3",
".git/config": "4a650246153c40b5987d1aa27e29198e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8d8287836a02ed938097067c538ee8da",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "806d7fc386969c3eba417d5f38ec02b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a7b1578d03aa46bbf76f775582a3a28",
".git/logs/refs/heads/main": "147dbc67511f96df32712bc85d1afd51",
".git/logs/refs/remotes/origin/main": "3e99a3ac1efe06a9851b123114c30640",
".git/objects/00/75fc2b50668afa042690b15d0704ea37679a1e": "b8144599dfc98689099bd804a38f510b",
".git/objects/02/416de50dddb73b79d5514f028aed44824690c2": "5c829e5055dcf3e4c09ea78a968badb3",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/0d0772c26e1daf20381e3bd0adf54034560af4": "0ed6f5fd2a9daab8584ed97642c04b62",
".git/objects/0b/130146d0dbf82bf6f6ecf61b80ee1f981b290f": "adbc0377dbf86817360a50d498eedd16",
".git/objects/0e/57a686e21168d1c3b38cb34cff763caebda571": "8e4ac341869cf61f7397310ff0668cdc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/9751e96c206c3006748472194899718e28401e": "9de39932962648733298aa97be3578fe",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/33/11c5188761b41fd25d55088252b398f2a763f2": "1197f8f6f3821a3391c387158332ef8f",
".git/objects/35/25a86684fa0a4b54be6e8cf3e81e13a7c4e083": "02a831a5b4ca7ff05189fca34121c065",
".git/objects/37/8f33bc7b4c474e7836a49dec07c25f124c9792": "f6a531e02ffd0e6508c26867a3d70b0b",
".git/objects/3d/49cf3d32c921c3d316191ddd460d33a4e63f65": "55ed05e797382372d339b9510b4d2177",
".git/objects/43/3399af6da3a3cb92b8e4420bcf691e47d5e520": "f3d340bafae1cc76849e5baf9ea134f6",
".git/objects/46/31375e92f781d98d8d66cc396ca3848cbb8947": "2b388f3a81c5334908bea8fa78d992d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/57/f71a31c5c50dfe1a0f535c78b312ca1819df11": "017cab1e2381dccc58c7d11a2365c013",
".git/objects/58/b803818f387b3188f2db1378da0cf9feb96ebd": "b967f695e415bdc38106d9f16475354f",
".git/objects/5f/8f402f17b45b007bea4fc1524e1616ea9d00ae": "6971225e745aef1b552fe360f24869d3",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/67/7af8366cacd68563b5961e09d3d7069adf9cc9": "65c74f85ab63c91ae2bda4ed039bbcbd",
".git/objects/68/232e841f03e9068910296f24a97c4a0fe92075": "f75145ea5c4ad07a2f6a8bbf0f2b1838",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/069fcd7122f765fa557e2ac312b8d0c7b1b489": "c0d5ea03391b24cd908ef464ef8e512d",
".git/objects/70/ac8520af644c27ca4731e8865494c3f8b5e43e": "b7030c804e236dce0f228f0d5723654a",
".git/objects/72/98666aacb3f6190a86f54bb960e63b26835c38": "7697124e1c9632e8ca5c713d563842c9",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/14638cebcf172e6c0284fa874cd478e8b5b1e4": "db5ecae5afed5572dd24a2fea9d29618",
".git/objects/77/3dedb916835ee551323cb4fc3b56af2a5d263e": "66aa1aed9bc19beaeace4a67d0b42e0f",
".git/objects/83/0c538c1f32010bbc526f7de469d9265a8b3bfd": "f3bbb907cefeaa2e48031a9e9e34eda2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/91/4017a822f86d82043a2b6213952b7a056de328": "10eb366bccb828d524c20cc1790d2851",
".git/objects/92/3b7225e52e8191c26fe803d1079130c1cb0c41": "9d8087b5857ff921a1a3e5fa69e3a003",
".git/objects/94/bd030ebb40cb5efef21676cf8a976876620369": "5374013699cdbfa8817a3d45ec69dbe5",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/01f9cadaabe07cb11cc1655e67a39272669a20": "b317a61810d9204eb0ba4a45e034bf20",
".git/objects/9f/e16b7eba20c49918744b8f28a8b67c1c0d29ac": "f12f6c59acbcbbcf5f3c3b4a80c42699",
".git/objects/a7/085ae0e390e3cc67a5ce0294e908dd0cebdd1d": "65019eb82661571587084a277a9efcdf",
".git/objects/a7/80fc83c2f778ebeac7845cf4a3cd6f4d884f45": "929dcadee67526af996a8b686707a02e",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/d1eae4827218f819b8ffc54d2f15d32cadc269": "9c2b9aecb03ad067a6685777c7fffe99",
".git/objects/b3/6d2609b431695edff90f2a8740f7100ab34dbc": "a0f409c7ff3149411a7a34efd5301f1b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/0f196b88352d6f81c647b27ada71cfd143f333": "02d4c4f28274577c8cd2459b8c24875e",
".git/objects/bb/87b6831eef5a586910df4b82d42fcefac00f61": "a3b5631db56fccc6c5b30dd22670087a",
".git/objects/bd/3299a5e879fe580b8e0cce5958fa67802b501c": "69f0c8948492cd9cb0d58e35fc3f75b5",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/a2f85bc8a21c29219b289f14d21da47d7be0be": "d7d5cd8ba5d54840e18c17193e8938ce",
".git/objects/cb/aac733e61634cfad0626a9c9f055dae94e2eb8": "2876e24a52e095b3bb6136d4d141d385",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e9/5caddc7effac07af54d83ee98978876c19c245": "b16a3b9b20b2dbd44025179006990c8d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/cb16fd734792dc11da8602d96e139a443cb708": "d4b0db0008e7d3215404488777d8ae07",
".git/objects/ee/6b5e46df3b1050359a17c6cf5f092c9df1a351": "c04907d9a69892efcfb2a75f3cc8f5bc",
".git/objects/ef/47edb49cb182c711cd41e0eae08d96f8a280f7": "a00d61911e9c8569e8896db30c286bdf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/8a9240ccc31dc436eaad76f5f6aef0a84eb6ba": "6e8fc0b5bc8f8f34454de2b6be82509e",
".git/objects/f9/a9a9564fe5019b94301df532dfa16269352d12": "311e64b423a0bc24b7fa3e95aa26e527",
".git/objects/fc/d353c94814640798a67f5cf5116736ad5c25fd": "84a2d7a4d8848a519ba9ad63ba19d5cc",
".git/objects/fd/7f2f85f9c2b69370420c1d488895cec856a18b": "723121b75e161daf5ca406db8673c080",
".git/ORIG_HEAD": "321025bf62affa23f5ed51ca66a2e19a",
".git/refs/heads/main": "7ef4c82aabff39c90a913bc01fce9660",
".git/refs/remotes/origin/main": "7ef4c82aabff39c90a913bc01fce9660",
"assets/AssetManifest.bin": "f4bd2c0bcced4e2ddb83c5129f2625c7",
"assets/AssetManifest.bin.json": "453f5e0bd231ffbce87690f234f88e8b",
"assets/AssetManifest.json": "98eac8d5c9e3f053a7c0f4519eaad21f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "976299d3c1d73ae3b806a3fee797f99c",
"assets/lib/assets/class_classroom.jpg": "aa587bf2cf449db7ac1a045a66f95734",
"assets/lib/assets/landing.png": "0bab459d77ed1dc7f1fbacc6bf2ecc01",
"assets/lib/assets/menu_wallpaper.jpg": "75b2f79638c427ebf059fb6294ea7a88",
"assets/NOTICES": "890f0ab561413b85e1da276be6ad3c97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d993ad515f75b36de92c1ae10d369267",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "40528ed98ebcef4833758935375badfd",
"/": "40528ed98ebcef4833758935375badfd",
"main.dart.js": "bfc462db8e737924c2c03333142e0ef3",
"main.dart.mjs": "c6cc498a36bec4a1f7d0eaf6aaf5d73c",
"main.dart.wasm": "daaa71447941094891748e30fc044d1b",
"manifest.json": "8cb0149d5a16803ed8788153074195f3",
"version.json": "19c2e25542917ff7366281e6e76299f2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
