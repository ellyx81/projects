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
})({"js/common/components/toggler.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggler = function toggler() {
  var header = document.querySelector(".js-header");
  var html = document.querySelector('html');
  if (header) {
    var toggle = header.querySelector(".js-toggler");
    console.log(toggle); // Check if the toggle button is being selected properly
    if (toggle) {
      toggle.addEventListener("click", function () {
        console.log("Toggle button clicked"); // Check if the click event listener is being added
        if (header.classList.contains("is-active")) {
          header.classList.remove("is-active");
          console.log("not active"); //test
          html.style.overflowY = 'visible';
        } else {
          header.classList.add("is-active");
          console.log("active"); //test
          html.style.overflowY = 'hidden';
        }
      });
      header.addEventListener("mouseleave", function () {
        header.classList.remove("is-active");
        html.style.overflowY = 'visible';
      });
    }
  }
};
exports.default = toggler;
},{}],"js/common/components/dropdown.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dropdownCollapse = function dropdownCollapse() {
  //const header = document.querySelector(".js-header") as HTMLElement;
  var menu = document.querySelector(".js-nav");
  if (menu) {
    var menuItems = menu.querySelectorAll(".js-nav-item .js-main-menu"); //select all from header__nav-item
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        menuItem.classList.toggle("is-active"); //add is-active class
        console.log("active main menu"); //test
      });
      //submenu 
      var dropdown = menuItem.nextElementSibling; // Select the next sibling element
      //const dropdown = menu.querySelector(".js-dropdown");
      if (dropdown) {
        var submenus = dropdown.querySelectorAll(".js-submenu");
        submenus.forEach(function (submenu) {
          submenu.addEventListener("click", function () {
            submenu.classList.toggle("is-active");
            console.log("active submenu");
          });
        });
        //remove active state from submenu when the sidebar is closed
        menu.addEventListener("mouseleave", function () {
          submenus.forEach(function (submenu) {
            submenu.classList.remove("is-active");
          });
          console.log("sub menu item not active"); //test
        });
      }
    });
    //remove active state from main menu when the sidebar is closed
    menu.addEventListener("mouseleave", function () {
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("is-active");
      });
      console.log("menu item not active"); //test
    });
  }
};

exports.default = dropdownCollapse;
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
var toggler_1 = __importDefault(require("./components/toggler"));
var dropdown_1 = __importDefault(require("./components/dropdown"));
document.addEventListener('DOMContentLoaded', function () {
  (0, toggler_1.default)();
  (0, dropdown_1.default)();
}, false);
},{"./components/toggler":"js/common/components/toggler.ts","./components/dropdown":"js/common/components/dropdown.ts"}]},{},["js/common/index.ts"], null)
//# sourceMappingURL=/js/common/index.js.map