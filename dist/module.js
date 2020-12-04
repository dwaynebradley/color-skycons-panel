define(["@grafana/data","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/react-color-skycons/lib/index.js":
/*!********************************************************!*\
  !*** ../node_modules/react-color-skycons/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__(/*! react */ "react");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Skycons = __webpack_require__(/*! skycons-color */ "../node_modules/skycons-color/skycons.js");
(function (ColorSkyconsType) {
    ColorSkyconsType["CLEAR_DAY"] = "CLEAR_DAY";
    ColorSkyconsType["CLEAR_NIGHT"] = "CLEAR_NIGHT";
    ColorSkyconsType["PARTLY_CLOUDY_DAY"] = "PARTLY_CLOUDY_DAY";
    ColorSkyconsType["PARTLY_CLOUDY_NIGHT"] = "PARTLY_CLOUDY_NIGHT";
    ColorSkyconsType["CLOUDY"] = "CLOUDY";
    ColorSkyconsType["RAIN"] = "RAIN";
    ColorSkyconsType["SHOWERS_DAY"] = "SHOWERS_DAY";
    ColorSkyconsType["SHOWERS_NIGHT"] = "SHOWERS_NIGHT";
    ColorSkyconsType["SLEET"] = "SLEET";
    ColorSkyconsType["RAIN_SNOW"] = "RAIN_SNOW";
    ColorSkyconsType["RAIN_SNOW_SHOWERS_DAY"] = "RAIN_SNOW_SHOWERS_DAY";
    ColorSkyconsType["RAIN_SNOW_SHOWERS_NIGHT"] = "RAIN_SNOW_SHOWERS_NIGHT";
    ColorSkyconsType["SNOW"] = "SNOW";
    ColorSkyconsType["SNOW_SHOWERS_DAY"] = "SNOW_SHOWERS_DAY";
    ColorSkyconsType["SNOW_SHOWERS_NIGHT"] = "SNOW_SHOWERS_NIGHT";
    ColorSkyconsType["WIND"] = "WIND";
    ColorSkyconsType["FOG"] = "FOG";
    ColorSkyconsType["THUNDER"] = "THUNDER";
    ColorSkyconsType["THUNDER_RAIN"] = "THUNDER_RAIN";
    ColorSkyconsType["THUNDER_SHOWERS_DAY"] = "THUNDER_SHOWERS_DAY";
    ColorSkyconsType["THUNDER_SHOWERS_NIGHT"] = "THUNDER_SHOWERS_NIGHT";
    ColorSkyconsType["HAIL"] = "HAIL";
})(exports.ColorSkyconsType || (exports.ColorSkyconsType = {}));
function ColorSkyconsComponent(props) {
    var _a = props.monochrome, monochrome = _a === void 0 ? false : _a, color = props.color, _b = props.animate, animate = _b === void 0 ? true : _b, resizeClear = props.resizeClear, type = props.type, style = props.style, _c = props.size, size = _c === void 0 ? 24 : _c, restPops = __rest(props, ["monochrome", "color", "animate", "resizeClear", "type", "style", "size"]);
    var canvasRef = React.useRef(null);
    React.useEffect(function () {
        var skycons = new Skycons({
            monochrome: monochrome,
            color: color,
            resizeClear: resizeClear,
        });
        skycons.add(canvasRef.current, Skycons[type]);
        if (animate) {
            skycons.play();
        }
        return function () {
            skycons.pause();
            skycons.remove();
        };
    }, [animate, color, type, resizeClear]);
    return (React__default['default'].createElement("canvas", __assign({ ref: canvasRef, width: size, height: size, style: __assign({ width: size, height: size }, style), "aria-label": type, role: "img" }, restPops)));
}

exports.ColorSkycons = ColorSkyconsComponent;
exports.default = ColorSkyconsComponent;


/***/ }),

/***/ "../node_modules/skycons-color/skycons.js":
/*!************************************************!*\
  !*** ../node_modules/skycons-color/skycons.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
 * GREAT JUSTICE. */
var requestInterval, cancelInterval;

(function () {
  var raf = global.requestAnimationFrame ||
    global.webkitRequestAnimationFrame ||
    global.mozRequestAnimationFrame ||
    global.oRequestAnimationFrame ||
    global.msRequestAnimationFrame,
    caf = global.cancelAnimationFrame ||
    global.webkitCancelAnimationFrame ||
    global.mozCancelAnimationFrame ||
    global.oCancelAnimationFrame ||
    global.msCancelAnimationFrame;

  if (raf && caf) {
    requestInterval = function (fn, delay) {
      var handle = {
        value: null
      };

      function loop() {
        handle.value = raf(loop);
        fn();
      }

      loop();
      return handle;
    };

    cancelInterval = function (handle) {
      caf(handle.value);
    };
  } else {
    requestInterval = setInterval;
    cancelInterval = clearInterval;
  }
}());

/* Catmull-rom spline stuffs. */
/*
function upsample(n, spline) {
  var polyline = [],
      len = spline.length,
      bx  = spline[0],
      by  = spline[1],
      cx  = spline[2],
      cy  = spline[3],
      dx  = spline[4],
      dy  = spline[5],
      i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

  for(i = 6; i !== spline.length; i += 2) {
    ax = bx;
    bx = cx;
    cx = dx;
    dx = spline[i    ];
    px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
    qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
    rx = -0.5 * ax            + 0.5 * cx           ;
    sx =                   bx                      ;

    ay = by;
    by = cy;
    cy = dy;
    dy = spline[i + 1];
    py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
    qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
    ry = -0.5 * ay            + 0.5 * cy           ;
    sy =                   by                      ;

    for(j = 0; j !== n; ++j) {
      t = j / n;

      polyline.push(
        ((px * t + qx) * t + rx) * t + sx,
        ((py * t + qy) * t + ry) * t + sy
      );
    }
  }

  polyline.push(
    px + qx + rx + sx,
    py + qy + ry + sy
  );

  return polyline;
}

function downsample(n, polyline) {
  var len = 0,
      i, dx, dy;

  for(i = 2; i !== polyline.length; i += 2) {
    dx = polyline[i    ] - polyline[i - 2];
    dy = polyline[i + 1] - polyline[i - 1];
    len += Math.sqrt(dx * dx + dy * dy);
  }

  len /= n;

  var small = [],
      target = len,
      min = 0,
      max, t;

  small.push(polyline[0], polyline[1]);

  for(i = 2; i !== polyline.length; i += 2) {
    dx = polyline[i    ] - polyline[i - 2];
    dy = polyline[i + 1] - polyline[i - 1];
    max = min + Math.sqrt(dx * dx + dy * dy);

    if(max > target) {
      t = (target - min) / (max - min);

      small.push(
        polyline[i - 2] + dx * t,
        polyline[i - 1] + dy * t
      );

      target += len;
    }

    min = max;
  }

  small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

  return small;
}
*/

/* Define skycon things. */
/* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
 * I'll try to clean it up eventually! Promise! */
var KEYFRAME = 500,
  STROKE = 0.08,
  TAU = 2.0 * Math.PI,
  TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

function circle(ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU, false);
  ctx.fill();
}

function line(ctx, ax, ay, bx, by) {
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.stroke();
}

function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
  var c = Math.cos(t * TAU),
    s = Math.sin(t * TAU);

  rmax -= rmin;

  circle(
    ctx,
    cx - s * rx,
    cy + c * ry + rmax * 0.5,
    rmin + (1 - c * 0.5) * rmax
  );
}

function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
  var i;

  for (i = 5; i--;)
    puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
}

function cloud(ctx, t, cx, cy, cw, s, color) {
  t /= 30000;

  var a = cw * 0.21,
    b = cw * 0.12,
    c = cw * 0.24,
    d = cw * 0.28;

  ctx.fillStyle = color;
  puffs(ctx, t, cx, cy, a, b, c, d);

  ctx.globalCompositeOperation = 'destination-out';
  puffs(ctx, t, cx, cy, a, b, c - s, d - s);
  ctx.globalCompositeOperation = 'source-over';
}

function sun(ctx, t, cx, cy, cw, s, color) {
  t /= 120000;

  var a = cw * 0.25 - s * 0.5,
    b = cw * 0.32 + s * 0.5,
    c = cw * 0.50 - s * 0.5,
    i, p, cos, sin;

  ctx.strokeStyle = color;
  ctx.lineWidth = s;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.arc(cx, cy, a, 0, TAU, false);
  ctx.stroke();

  for (i = 8; i--;) {
    p = (t + i / 8) * TAU;
    cos = Math.cos(p);
    sin = Math.sin(p);
    line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
  }
}

function moon(ctx, t, cx, cy, cw, s, color) {
  t /= 15000;

  var a = cw * 0.29 - s * 0.5,
    b = cw * 0.05,
    c = Math.cos(t * TAU),
    p = c * TAU / -16;

  ctx.strokeStyle = color;
  ctx.lineWidth = s;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  cx += c * b;

  ctx.beginPath();
  ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
  ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
  ctx.closePath();
  ctx.stroke();
}

function rain(ctx, t, cx, cy, cw, s, color) {
  t /= 1350;

  var a = cw * 0.16,
    b = TAU * 11 / 12,
    c = TAU * 7 / 12,
    i, p, x, y;

  ctx.fillStyle = color;

  for (i = 4; i--;) {
    p = (t + i / 4) % 1;
    x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
    y = cy + p * p * cw;
    ctx.beginPath();
    ctx.moveTo(x, y - s * 1.5);
    ctx.arc(x, y, s * 0.75, b, c, false);
    ctx.fill();
  }
}

function sleet(ctx, t, cx, cy, cw, s, color) {
  t /= 750;

  var a = cw * 0.1875,
    b = TAU * 11 / 12,
    c = TAU * 7 / 12,
    i, p, x, y;

  ctx.strokeStyle = color;
  ctx.lineWidth = s * 0.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (i = 4; i--;) {
    p = (t + i / 4) % 1;
    x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
    y = cy + p * cw;
    line(ctx, x, y - s * 1.5, x, y + s * 1.5);
  }
}

function snow(ctx, t, cx, cy, cw, s, color) {
  t /= 3000;

  var a = cw * 0.16,
    b = s * 0.75,
    u = t * TAU * 0.7,
    ux = Math.cos(u) * b,
    uy = Math.sin(u) * b,
    v = u + TAU / 3,
    vx = Math.cos(v) * b,
    vy = Math.sin(v) * b,
    w = u + TAU * 2 / 3,
    wx = Math.cos(w) * b,
    wy = Math.sin(w) * b,
    i, p, x, y;

  ctx.strokeStyle = color;
  ctx.lineWidth = s * 0.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (i = 4; i--;) {
    p = (t + i / 4) % 1;
    x = cx + Math.sin((p + i / 4) * TAU) * a;
    y = cy + p * cw;

    line(ctx, x - ux, y - uy, x + ux, y + uy);
    line(ctx, x - vx, y - vy, x + vx, y + vy);
    line(ctx, x - wx, y - wy, x + wx, y + wy);
  }
}

function fogbank(ctx, t, cx, cy, cw, s, color) {
  t /= 30000;

  var a = cw * 0.21,
    b = cw * 0.06,
    c = cw * 0.21,
    d = cw * 0.28;

  ctx.fillStyle = color;
  puffs(ctx, t, cx, cy, a, b, c, d);

  ctx.globalCompositeOperation = 'destination-out';
  puffs(ctx, t, cx, cy, a, b, c - s, d - s);
  ctx.globalCompositeOperation = 'source-over';
}

function foglines(ctx, t, cw, ch, s, k, color) {
  t /= 5000;

  var a = Math.cos((t) * TAU) * s * 0.02,
    b = Math.cos((t + 0.25) * TAU) * s * 0.02,
    c = Math.cos((t + 0.50) * TAU) * s * 0.02,
    d = Math.cos((t + 0.75) * TAU) * s * 0.02,
    n = ch * 0.936,
    e = Math.floor(n - k * 0.5) + 0.5,
    f = Math.floor(n - k * 2.5) + 0.5;

  ctx.strokeStyle = color;
  ctx.lineWidth = k;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  line(ctx, a + cw * 0.2 + k * 0.5, e, b + cw * 0.8 - k * 0.5, e);
  line(ctx, c + cw * 0.2 + k * 0.5, f, d + cw * 0.8 - k * 0.5, f);
}

/*
var WIND_PATHS = [
      downsample(63, upsample(8, [
        -1.00, -0.28,
        -0.75, -0.18,
        -0.50,  0.12,
        -0.20,  0.12,
        -0.04, -0.04,
        -0.07, -0.18,
        -0.19, -0.18,
        -0.23, -0.05,
        -0.12,  0.11,
         0.02,  0.16,
         0.20,  0.15,
         0.50,  0.07,
         0.75,  0.18,
         1.00,  0.28
      ])),
      downsample(31, upsample(16, [
        -1.00, -0.10,
        -0.75,  0.00,
        -0.50,  0.10,
        -0.25,  0.14,
         0.00,  0.10,
         0.25,  0.00,
         0.50, -0.10,
         0.75, -0.14,
         1.00, -0.10
      ]))
    ];
*/

var WIND_PATHS = [
    [
      -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
      -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
      -0.6083, 0.0065, -0.5868, 0.0396, -0.5643, 0.0731,
      -0.5372, 0.1041, -0.5033, 0.1259, -0.4662, 0.1406,
      -0.4275, 0.1493, -0.3881, 0.1530, -0.3487, 0.1526,
      -0.3095, 0.1488, -0.2708, 0.1421, -0.2319, 0.1342,
      -0.1943, 0.1217, -0.1600, 0.1025, -0.1290, 0.0785,
      -0.1012, 0.0509, -0.0764, 0.0206, -0.0547, -0.0120,
      -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
      -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
      -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
      -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
      -0.2064, 0.0033, -0.1853, 0.0362, -0.1613, 0.0672,
      -0.1350, 0.0961, -0.1051, 0.1213, -0.0706, 0.1397,
      -0.0332, 0.1512, 0.0053, 0.1580, 0.0442, 0.1624,
      0.0833, 0.1636, 0.1224, 0.1615, 0.1613, 0.1565,
      0.1999, 0.1500, 0.2378, 0.1402, 0.2749, 0.1279,
      0.3118, 0.1147, 0.3487, 0.1015, 0.3858, 0.0892,
      0.4236, 0.0787, 0.4621, 0.0715, 0.5012, 0.0702,
      0.5398, 0.0766, 0.5768, 0.0890, 0.6123, 0.1055,
      0.6466, 0.1244, 0.6805, 0.1440, 0.7147, 0.1630,
      0.7500, 0.1800
    ],
    [
      -0.7500, 0.0000, -0.7033, 0.0195, -0.6569, 0.0399,
      -0.6104, 0.0600, -0.5634, 0.0789, -0.5155, 0.0954,
      -0.4667, 0.1089, -0.4174, 0.1206, -0.3676, 0.1299,
      -0.3174, 0.1365, -0.2669, 0.1398, -0.2162, 0.1391,
      -0.1658, 0.1347, -0.1157, 0.1271, -0.0661, 0.1169,
      -0.0170, 0.1046, 0.0316, 0.0903, 0.0791, 0.0728,
      0.1259, 0.0534, 0.1723, 0.0331, 0.2188, 0.0129,
      0.2656, -0.0064, 0.3122, -0.0263, 0.3586, -0.0466,
      0.4052, -0.0665, 0.4525, -0.0847, 0.5007, -0.1002,
      0.5497, -0.1130, 0.5991, -0.1240, 0.6491, -0.1325,
      0.6994, -0.1380, 0.7500, -0.1400
    ]
  ],
  WIND_OFFSETS = [{
      start: 0.36,
      end: 0.11
    },
    {
      start: 0.56,
      end: 0.16
    }
  ];

function leaf(ctx, t, x, y, cw, s, color) {
  var a = cw / 8,
    b = a / 3,
    c = 2 * b,
    d = (t % 1) * TAU,
    e = Math.cos(d),
    f = Math.sin(d);

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = s;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.arc(x, y, a, d, d + Math.PI, false);
  ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
  ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  ctx.stroke();
}

function swoosh(ctx, t, cx, cy, cw, s, index, total, color, leafcolor) {
  t /= 2500;

  var path = WIND_PATHS[index],
    a = (t + index - WIND_OFFSETS[index].start) % total,
    c = (t + index - WIND_OFFSETS[index].end) % total,
    e = (t + index) % total,
    b, d, f, i;

  ctx.strokeStyle = color;
  ctx.lineWidth = s;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (a < 1) {
    ctx.beginPath();

    a *= path.length / 2 - 1;
    b = Math.floor(a);
    a -= b;
    b *= 2;
    b += 2;

    ctx.moveTo(
      cx + (path[b - 2] * (1 - a) + path[b] * a) * cw,
      cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
    );

    if (c < 1) {
      c *= path.length / 2 - 1;
      d = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      for (i = b; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );
    } else
      for (i = b; i !== path.length; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

    ctx.stroke();
  } else if (c < 1) {
    ctx.beginPath();

    c *= path.length / 2 - 1;
    d = Math.floor(c);
    c -= d;
    d *= 2;
    d += 2;

    ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

    for (i = 2; i !== d; i += 2)
      ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

    ctx.lineTo(
      cx + (path[d - 2] * (1 - c) + path[d] * c) * cw,
      cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
    );

    ctx.stroke();
  }

  if (e < 1) {
    e *= path.length / 2 - 1;
    f = Math.floor(e);
    e -= f;
    f *= 2;
    f += 2;

    leaf(
      ctx,
      t,
      cx + (path[f - 2] * (1 - e) + path[f] * e) * cw,
      cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
      cw,
      s,
      leafcolor
    );
  }
}

function thunderbolts(ctx, t, cx, cy, cw, color) {
  t /= 1000;

  var alpha = 1 - t % 1,
    a = cw / 25,
    b = Math.floor(t % 4),
    x = x = cx + ((b - 1.5) / 1.5) * (b === 1 || b === 2 ? -1 : 1) * cw * 0.16,
    y = cy;

  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;

  ctx.beginPath();
  ctx.moveTo(x - a, y - a * 5);
  ctx.lineTo(x - a * 3, y);
  ctx.lineTo(x, y);
  ctx.lineTo(x - a * 2, y + a * 5);
  ctx.lineTo(x + a * 3, y - a);
  ctx.lineTo(x, y - a);
  ctx.lineTo(x + a * 2, y - a * 5);
  ctx.closePath();
  ctx.fill();

  ctx.globalAlpha = 1;
}

function hail(ctx, t, cx, cy, cw, s, color) {
  t /= 900;

  var a = cw * 0.16,
    i, p, x, y;

  ctx.fillStyle = color;

  for (i = 8; i--;) {
    p = (t + i / 8) % 1;
    x = cx + ((i - 3) / 3) * (i === 1 || i === 3 || i === 4 || i === 6 ? -1 : 1) * a;
    y = cy + p * p * cw;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, s * 0.4, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}

var Skycons = function (opts) {
  opts = opts || {};
  this.list = [];
  this.interval = null;
  this.monochrome = typeof (opts.monochrome) === "undefined" ? true : opts.monochrome;
  opts.colors = opts.colors || {};
  this.colors = {
    main: opts.colors.main || "#111",
    moon: opts.colors.moon || "#353545",
    fog: opts.colors.fog || "#CCC",
    fogbank: opts.colors.fogbank || "#AAA",
    light_cloud: opts.colors.light_cloud || "#888",
    cloud: opts.colors.cloud || "#666",
    dark_cloud: opts.colors.dark_cloud || "#444",
    thunder: opts.colors.thunder || "#FF0",
    snow: opts.colors.snow || "#C2EEFF",
    hail: opts.colors.hail || "#CCF",
    sleet: opts.colors.sleet || "#C2EEFF",
    wind: opts.colors.wind || "#777",
    leaf: opts.colors.leaf || "#2C5228",
    rain: opts.colors.rain || "#7FDBFF",
    sun: opts.colors.sun || "#FFDC00"
  };

  if (this.monochrome) {
    this.color = opts.color || this.colors.main;
  } else {
    this.color = this.colors;
  }
  this.resizeClear = !!(opts && opts.resizeClear);
};

Skycons.CLEAR_DAY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color.sun || color);
};

Skycons.CLEAR_NIGHT = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color.moon || color);
};

Skycons.PARTLY_CLOUDY_DAY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE * 0.9, color.sun || color);
  cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE * 0.9, color.light_cloud || color);
};

Skycons.PARTLY_CLOUDY_NIGHT = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE * 0.9, color.moon || color);
  cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE * 0.9, color.light_cloud || color);
};

Skycons.CLOUDY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color.light_cloud || color || color);
};

Skycons.RAIN = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.rain || color);
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.cloud || color);
};

Skycons.SHOWERS_DAY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);


  sun(ctx, t, w * 0.625, h * 0.325, s * 0.65, s * STROKE * 0.8, color.sun || color);
  rain(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.rain || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.cloud || color);
}

Skycons.SHOWERS_NIGHT = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  moon(ctx, t, w * 0.667, h * 0.325, s * 0.75, s * STROKE * 0.8, color.moon || color);
  rain(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.rain || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.cloud || color);
}

Skycons.SLEET = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.sleet || color);
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.cloud || color);
};

Skycons.RAIN_SNOW = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.rain || color);
  snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.snow || color);
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.cloud || color);
};

Skycons.RAIN_SNOW_SHOWERS_DAY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  sun(ctx, t, w * 0.625, h * 0.325, s * 0.65, s * STROKE * 0.8, color.sun || color);
  snow(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.snow || color);
  rain(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.rain || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.cloud || color);
};

Skycons.RAIN_SNOW_SHOWERS_NIGHT = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  moon(ctx, t, w * 0.667, h * 0.325, s * 0.75, s * STROKE * 0.8, color.moon || color);
  snow(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.snow || color);
  rain(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.rain || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.cloud || color);
};

Skycons.SNOW = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.snow || color);
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.cloud || color);
};

Skycons.SNOW_SHOWERS_DAY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  sun(ctx, t, w * 0.625, h * 0.325, s * 0.65, s * STROKE * 0.8, color.sun || color);
  snow(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.snow || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.cloud || color);
}

Skycons.SNOW_SHOWERS_NIGHT = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  moon(ctx, t, w * 0.667, h * 0.325, s * 0.75, s * STROKE * 0.8, color.moon || color);
  snow(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.snow || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.cloud || color);
}

Skycons.WIND = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color.wind || color, color.leaf || color);
  swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color.wind || color, color.leaf || color);
};

Skycons.FOG = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h),
    k = s * STROKE;

  fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k * 0.9, color.light_cloud || color);
  foglines(ctx, t, w, h, s, k, color.fog || color);
};

Skycons.THUNDER = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  thunderbolts(ctx, t, w * 0.5, h * 0.825, s * 0.9, color.thunder || color)
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.dark_cloud || color);
};

Skycons.THUNDER_RAIN = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  rain(ctx, t, w * 0.5, h * 0.5, s * 0.9, s * STROKE, color.rain || color);
  thunderbolts(ctx, t, w * 0.5, h * 0.825, s * 0.9, color.thunder || color)
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.dark_cloud || color);
};

Skycons.THUNDER_SHOWERS_DAY = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  thunderbolts(ctx, t, w * 0.375, h * 0.85, s * 0.7, color.thunder || color)
  sun(ctx, t, w * 0.625, h * 0.325, s * 0.65, s * STROKE * 0.8, color.sun || color);
  rain(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.rain || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.dark_cloud || color);
};

Skycons.THUNDER_SHOWERS_NIGHT = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  thunderbolts(ctx, t, w * 0.375, h * 0.85, s * 0.7, color.thunder || color)
  moon(ctx, t, w * 0.667, h * 0.325, s * 0.75, s * STROKE * 0.8, color.moon || color);
  rain(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.rain || color);
  cloud(ctx, t, w * 0.375, h * 0.5, s * 0.7, s * STROKE * 0.9, color.dark_cloud || color);
};

Skycons.HAIL = function (ctx, t, color) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    s = Math.min(w, h);

  hail(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.hail || color);
  cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color.cloud || color);
};

Skycons.prototype = {
  _determineDrawingFunction: function (draw) {
    if (typeof draw === "string")
      draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;

    return draw;
  },
  add: function (el, draw) {
    var obj;

    if (typeof el === "string")
      el = document.getElementById(el);

    // Does nothing if canvas name doesn't exists
    if (el === null || el === undefined)
      return;

    draw = this._determineDrawingFunction(draw);

    // Does nothing if the draw function isn't actually a function
    if (typeof draw !== "function")
      return;

    obj = {
      element: el,
      context: el.getContext("2d"),
      drawing: draw
    };

    this.list.push(obj);
    this.draw(obj, KEYFRAME);
  },
  set: function (el, draw) {
    var i;

    if (typeof el === "string")
      el = document.getElementById(el);

    for (i = this.list.length; i--;)
      if (this.list[i].element === el) {
        this.list[i].drawing = this._determineDrawingFunction(draw);
        this.draw(this.list[i], KEYFRAME);
        return;
      }

    this.add(el, draw);
  },
  remove: function (el) {
    var i;

    if (typeof el === "string")
      el = document.getElementById(el);

    for (i = this.list.length; i--;)
      if (this.list[i].element === el) {
        this.list.splice(i, 1);
        return;
      }
  },
  draw: function (obj, time) {
    var canvas = obj.context.canvas;

    if (this.resizeClear)
      canvas.width = canvas.width;

    else
      obj.context.clearRect(0, 0, canvas.width, canvas.height);

    obj.drawing(obj.context, time, this.color);
  },
  play: function () {
    var self = this;

    this.pause();
    this.interval = requestInterval(function () {
      var now = Date.now(),
        i;

      for (i = self.list.length; i--;)
        self.draw(self.list[i], now);
    }, 1000 / 60);
  },
  pause: function () {
    var i;

    if (this.interval) {
      cancelInterval(this.interval);
      this.interval = null;
    }
  }
};

module.exports = Skycons;


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./ColorSkyconsPanel.tsx":
/*!*******************************!*\
  !*** ./ColorSkyconsPanel.tsx ***!
  \*******************************/
/*! exports provided: ColorSkyconsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSkyconsPanel", function() { return ColorSkyconsPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_color_skycons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-color-skycons */ "../node_modules/react-color-skycons/lib/index.js");
/* harmony import */ var react_color_skycons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_color_skycons__WEBPACK_IMPORTED_MODULE_4__);





var ColorSkyconsPanel = function ColorSkyconsPanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;
  var styles = getStyles();
  var icons = data.series.map(function (series) {
    return series.fields.find(function (field) {
      return field.type === 'number';
    });
  }).map(function (field) {
    return field === null || field === void 0 ? void 0 : field.values.get(field.values.length - 1);
  });
  var size = 0;

  if (height > width) {
    size = width;
  } else {
    size = height;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n          display: flex;\n          justify-content: center;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n          display: flex;\n          justify-content: center;\n        "])), width, height))
  }, icons.map(function (icon, index) {
    // Icon must be uppercase and have '_' instead of '-' to work correctly.
    var mytype = icon.toUpperCase().replaceAll('-', '_');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_color_skycons__WEBPACK_IMPORTED_MODULE_4__["ColorSkycons"], {
      monochrome: false,
      type: mytype,
      size: size
    });
  }));
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ColorSkyconsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSkyconsPanel */ "./ColorSkyconsPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_ColorSkyconsPanel__WEBPACK_IMPORTED_MODULE_1__["ColorSkyconsPanel"]).setPanelOptions(function (builder) {
  return builder.addTextInput({
    path: 'text',
    name: 'Simple text option',
    description: 'Description of panel option',
    defaultValue: 'Default value of text input option'
  }).addBooleanSwitch({
    path: 'showSeriesCount',
    name: 'Show series counter',
    defaultValue: false
  }).addRadio({
    path: 'seriesCountSize',
    defaultValue: 'sm',
    name: 'Series counter size',
    settings: {
      options: [{
        value: 'sm',
        label: 'Small'
      }, {
        value: 'md',
        label: 'Medium'
      }, {
        value: 'lg',
        label: 'Large'
      }]
    },
    showIf: function showIf(config) {
      return config.showSeriesCount;
    }
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map