// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/common/components/test.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Test comment
 */
var test = function test() {
  console.log('common');
};
exports.default = test;
},{}],"js/common/components/video-player.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var videoPlayer = function videoPlayer() {
  var sections = document.querySelectorAll('.js-section');
  var html = document.querySelector('.js-html');
  var videoOverlay = document.querySelector('.js-modal');
  var vidFrame = videoOverlay.querySelector('.js-iframe');
  var openVideo = function openVideo(urlContent) {
    videoOverlay.style.visibility = 'visible';
    html.style.overflowY = 'hidden';
    html.style.pointerEvents = 'none';
    videoOverlay.style.pointerEvents = 'auto';
    vidFrame.src = urlContent;
  };
  var closeVideo = function closeVideo() {
    videoOverlay.style.visibility = 'hidden';
    html.style.overflowY = 'auto';
    html.style.pointerEvents = 'auto';
    vidFrame.src = '';
  };
  var handleClickOutside = function handleClickOutside(event) {
    var target = event.target;
    sections.forEach(function (section) {
      if (!section.contains(target)) {
        var openedVideoItem = section.querySelector('.js-video-item.is-opened');
        if (openedVideoItem) {
          openedVideoItem.classList.remove('is-opened');
          closeVideo();
        }
      }
    });
  };
  sections.forEach(function (section) {
    var videos = section.querySelectorAll('.js-video-item');
    videos.forEach(function (videoItem) {
      videoItem.addEventListener('click', function () {
        videoItem.classList.add('is-opened');
        var urlContent = videoItem.querySelector('.js-url').textContent;
        if (videoItem.classList.contains('is-opened')) {
          openVideo(urlContent);
        } else {
          closeVideo();
        }
      });
    });
  });
  document.addEventListener('click', handleClickOutside);
};
exports.default = videoPlayer;
},{}],"js/common/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var test_1 = __importDefault(require("./components/test"));
var video_player_1 = __importDefault(require("./components/video-player"));
document.addEventListener('DOMContentLoaded', function () {
  (0, test_1.default)();
  (0, video_player_1.default)();
}, false);
},{"./components/test":"js/common/components/test.ts","./components/video-player":"js/common/components/video-player.ts"}]},{},["js/common/index.ts"], null)
//# sourceMappingURL=/js/common/index.js.map