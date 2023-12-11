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
})({"js/common/components/menuToggler.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Toggle menu in mobile view
 */
var menuToggler = function menuToggler() {
 
};
exports.default = menuToggler;
},{}],"js/common/components/showElementsOnScroll.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Show and hide elements (header and to-top-btn) while scrolling
 */
var showElements = function showElements() {
  var header = document.querySelector(".header");
  //const btn = document.querySelector(".js-to-top");
  window.addEventListener("scroll", function () {
    if (header) {
      if (window.scrollY > 400) {
        header.classList.add("show");
        //  btn.classList.add("show");
      } else {
        header.classList.remove("show");
        //  btn.classList.remove("show");
      }
    }
  });
};

exports.default = showElements;
},{}],"js/common/components/dropdown.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Show and hide elements submenu
 */
var dropdown = function dropdown() {
  var sub = document.querySelector(".js-dropdown");
  if (sub && screen.width >= 1024) {
    sub === null || sub === void 0 ? void 0 : sub.addEventListener('mouseover', function () {
      sub === null || sub === void 0 ? void 0 : sub.classList.add('show');
    });
    sub === null || sub === void 0 ? void 0 : sub.addEventListener('mouseout', function () {
      sub === null || sub === void 0 ? void 0 : sub.classList.remove('show');
    });
  }
};
exports.default = dropdown;
},{}],"js/common/components/slider.ts":[function(require,module,exports) {
"use strict";

/**
 * Setup splide plugin for banner
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
var slider = function slider() {
  var img = document.querySelector(".js-slider");
  var imgSplide = new Splide(img, {
    type: 'loop',
    focus: 'center',
    drag: true,
    arrows: false,
    autoplay: true,
    interval: 3000
  });
  imgSplide.mount();
};
exports.default = slider;
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
var menuToggler_1 = __importDefault(require("./components/menuToggler"));
var showElementsOnScroll_1 = __importDefault(require("./components/showElementsOnScroll"));
var dropdown_1 = __importDefault(require("./components/dropdown"));
var slider_1 = __importDefault(require("./components/slider"));
document.addEventListener('DOMContentLoaded', function () {
  (0, menuToggler_1.default)();
  (0, showElementsOnScroll_1.default)();
  (0, dropdown_1.default)();
  (0, slider_1.default)();
}, false);
},{"./components/menuToggler":"js/common/components/menuToggler.ts","./components/showElementsOnScroll":"js/common/components/showElementsOnScroll.ts","./components/dropdown":"js/common/components/dropdown.ts","./components/slider":"js/common/components/slider.ts"}]},{},["js/common/index.ts"], null)
//# sourceMappingURL=/js/common/index.js.map