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
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "\n/*\u767D\u68A6\u51B0\u662F\u6211\u5927\u54E5\n*\u867D\u7136\u4ED6\u662F\u4E00\u4E2A\u50BB\u86CB\n*\u4F46\u662F\u6211\u4F9D\u7136\u4E0D\u4F1A\u629B\u5F03\u4ED6\uFF01\n*\u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n*\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n**/\n#div1{\n    border: 1px solid blue;\n            width: 200px;\n            height: 200px;          \n} \n/*\u63A5\u4E0B\u6765\u6211\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n*\u4E00\u9ED1\u4E00\u767D\n**/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n    border: none;\n    background: rgb(255,255,255);\nbackground: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\u52A0\u4E24\u4E2A\u795E\u79D8\u7684\u5C0F\u7403\n**/\n#div1::before {\n    width: 100px;\n    height: 100px;\n    top: 0;\n    right: 0;\n    transform:translateX(-50%);\n    border-radius: 50%;\n    background: rgb(255, 255, 255);\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);\n}\n#div1::after {\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    right: 0;\n    transform:translateX(-50%);\n    border-radius: 50%;\n    background: rgb(0, 0, 0);\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 100%);\n}\n"; // string=string.replace(/\n/g,"<br>");

var n = 0;
var string2 = ''; // demo.innerHTML=n;
// 1 把要做的事封装成函数

var step = function step() {
  // console.log(n)
  setTimeout(function () {
    //如果是回车就加上回车,如果不是就照搬
    if (string[n] == '\n') {
      string2 += "<br>";
    } else if (string[n] == ' ') {
      string2 += '&nbsp';
    } else {
      string2 += string[n];
    }

    console.log(n);
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, document.body.scrollHeight);
    html.scrollTo(0, 99999);

    if (n + 1 < string.length) {
      // 如果n不是最后一个值就继续
      n += 1;
      step();
    }
  }, 30);
};

step();
style.innerHTML = "\nbody{\n    color:red;\n}\n";
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ec5109fe.js.map