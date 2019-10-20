(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"text-align: center;\">颜色生成器</h1>\n<app-color-generator></app-color-generator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/color-generator/color-generator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/color-generator/color-generator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"color-container\">\n  <div style=\"text-align: center\">\n    <app-my-button [color]=\"selectColor\"></app-my-button>\n  </div>\n  <app-select-colors [colors]=\"colors\"\n                     (onActiveChange)=\"onActiveColorChange($event)\"\n  ></app-select-colors>\n  <app-css-text [cssText]=\"cssText\"></app-css-text>\n  <div class=\"tip\">可点击右侧颜色选择框或者输入框更改颜色</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/css-text/css-text.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/css-text/css-text.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"css-text__header\">\n    <h3>{{header ? 'Css Variables' : ''}}</h3>\n    <div class=\"css-text__copy\" [class.show-confirmation]=\"showCopyConfirmation\">\n      <a class=\"css-text__copy-link\" (click)=\"copyCssText($event)\">Copy</a>\n      <span class=\"css-text__copy-confirmation\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"26px\" height=\"26px\">\n          <path d=\"M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z\"/>\n        </svg>\n        Copied\n      </span>\n    </div>\n  </div>\n  <div #cssTextEl\n    id=\"cssText\"\n    class=\"css-text__code\"\n    contenteditable=\"false\"\n    spellcheck=\"false\"\n    [innerHTML]=\"cssText\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-button/my-button.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-button/my-button.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button type=\"button\" class=\"btn\" #btn\n        [style.backgroundColor]=\"color.value\"\n        [style.color]=\"color.contrast\"\n         (mouseenter)=\"onEnter()\"\n        (mouseleave)=\"onLeave()\"\n        (mousedown)=\"onMouseDown()\"\n        (mouseup)=\"onMouseUp()\"\n>{{color.name}}</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-colors/select-colors.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-colors/select-colors.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"controls\">\n  <li *ngFor=\"let color of colors\"\n      class=\"controls__item\" [class.is-open]=\"activeColor === color.name\">\n    <app-variable-selector\n      [name]=\"color.name\"\n      [property]=\"color.property\"\n      [value]=\"color.value\"\n      [isParentOpen]=\"activeColor === color.name\"\n      (click)=\"toggleActiveColor(color.name)\">\n    </app-variable-selector>\n    <svg width=\"10px\" height=\"6px\" viewBox=\"0 0 10 6\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g id=\"Welcome\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <g id=\"Desktop-HD\" transform=\"translate(-1025.000000, -335.000000)\" stroke=\"#AEB4BE\" stroke-width=\"2\">\n          <polyline id=\"arrow\" transform=\"translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) \" points=\"1028 334 1032 338.020022 1028 342\"></polyline>\n        </g>\n      </g>\n    </svg>\n    <ul class=\"controls__sub\">\n      <li>\n        <app-variable-selector\n          [name]=\"color.name + '-shade'\"\n          [property]=\"color.property + '-shade'\"\n          [value]=\"color.shade\"\n          [editable]=\"false\">\n        </app-variable-selector>\n      </li>\n      <li>\n        <app-variable-selector\n          [name]=\"color.name + '-tint'\"\n          [property]=\"color.property + '-tint'\"\n          [value]=\"color.tint\"\n          [editable]=\"false\">\n        </app-variable-selector>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/variable-selector/variable-selector.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/variable-selector/variable-selector.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"color-selector\"\n     [ngClass]=\"{\n      'color-selector--name-error': showNameError,\n      'color-selector--value-error': showValueError\n     }\">\n  <div class=\"color-selector__name\">\n    <i class=\"color-selector__swatch\" [style.backgroundColor]=\"value\"></i>\n    <div class=\"color-selector__input color-selector__input-name\" *ngIf=\"isNew\"\n    [class.color-selector__input--focused]=\"isNameInputFocused\">\n      <input\n        type=\"text\"\n        [value]=\"name\"\n        (Input)=\"onNameChange($event)\"\n        (focus)=\"onNameInputFocus()\"\n        (blur)=\"onNameInputBlur($event)\"\n      >\n    </div>\n    <span *ngIf=\"!isNew\">{{name}}</span>\n    <span *ngIf=\"showNameError\" class=\"color-selector__error\">\n      Please enter a valid name without special characters.\n    </span>\n  </div>\n  <div *ngIf=\"editable\">\n    <div class=\"color-selector__form-group\">\n      <div class=\"color-selector__input color-selector__input-value\"\n      [class.color-selector__input--focused]=\"isValueInputFocused\"\n           (click)=\"onValueInputParentClick($event)\">\n        <div class=\"color-selector__color-wrap\" [style.backgroundColor]=\"value\">\n          <input type=\"color\"\n                 [(ngModel)]=\"value\"\n                 (ngModelChange)=\"onColorInputChange($event)\"\n                 tabindex=\"-1\">\n        </div>\n        <input type=\"text\"\n               [(ngModel)]=\"inputValue\"\n               (ngModelChange)=\"onColorTextInputChange($event)\"\n               (focus)=\"onValueInputFocus()\"\n               (blur)=\"onValueInputBlur($event)\">\n      </div>\n      <span *ngIf=\"showValueError\" class=\"color-selector__error\">\n        Please enter a valid six digit hex code.\n      </span>\n    </div>\n  </div>\n  <div *ngIf=\"!editable\" class=\"color-selector__hex\">\n    <span>{{value}}</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'color-generator';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _variable_selector_variable_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variable-selector/variable-selector.component */ "./src/app/variable-selector/variable-selector.component.ts");
/* harmony import */ var _select_colors_select_colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-colors/select-colors.component */ "./src/app/select-colors/select-colors.component.ts");
/* harmony import */ var _css_text_css_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css-text/css-text.component */ "./src/app/css-text/css-text.component.ts");
/* harmony import */ var _color_generator_color_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-generator/color-generator.component */ "./src/app/color-generator/color-generator.component.ts");
/* harmony import */ var _my_button_my_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-button/my-button.component */ "./src/app/my-button/my-button.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _variable_selector_variable_selector_component__WEBPACK_IMPORTED_MODULE_5__["VariableSelectorComponent"],
            _select_colors_select_colors_component__WEBPACK_IMPORTED_MODULE_6__["SelectColorsComponent"],
            _css_text_css_text_component__WEBPACK_IMPORTED_MODULE_7__["CssTextComponent"],
            _color_generator_color_generator_component__WEBPACK_IMPORTED_MODULE_8__["ColorGeneratorComponent"],
            _my_button_my_button_component__WEBPACK_IMPORTED_MODULE_9__["MyButtonComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/color-generator/color-generator.component.less":
/*!****************************************************************!*\
  !*** ./src/app/color-generator/color-generator.component.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color-container {\n  width: 500px;\n  margin: 15px auto;\n}\nmain {\n  display: flex;\n  height: calc(100% - 10px);\n}\nmain > section {\n  flex: 1 auto;\n}\n.preview-column {\n  max-width: 480px;\n  min-height: 700px;\n}\n.selector-column {\n  max-width: 600px;\n  height: 100%;\n  overflow-y: scroll;\n}\n#css-proxy {\n  display: none;\n}\n.tip {\n  font-size: 14px;\n  text-align: center;\n  margin: 15px 0;\n  color: #73849a;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXppY29uZy9Eb2N1bWVudHMvbXlHaXRQcm9qZWN0cy9jb2xvci1nZW5lcmF0b3Ivc3JjL2FwcC9jb2xvci1nZW5lcmF0b3IvY29sb3ItZ2VuZXJhdG9yLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb2xvci1nZW5lcmF0b3IvY29sb3ItZ2VuZXJhdG9yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtBQ0hGO0FETUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29sb3ItZ2VuZXJhdG9yL2NvbG9yLWdlbmVyYXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1jb250YWluZXIge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG59XG5cbm1haW4gPiBzZWN0aW9uIHtcbiAgZmxleDogMSBhdXRvO1xufVxuXG4ucHJldmlldy1jb2x1bW4ge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbn1cblxuLnNlbGVjdG9yLWNvbHVtbiB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jY3NzLXByb3h5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHggMDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG4iLCIuY29sb3ItY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxubWFpbiA+IHNlY3Rpb24ge1xuICBmbGV4OiAxIGF1dG87XG59XG4ucHJldmlldy1jb2x1bW4ge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbn1cbi5zZWxlY3Rvci1jb2x1bW4ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiNjc3MtcHJveHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHggMDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/color-generator/color-generator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/color-generator/color-generator.component.ts ***!
  \**************************************************************/
/*! exports provided: ColorGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorGeneratorComponent", function() { return ColorGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _default_css_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-css-text */ "./src/app/color-generator/default-css-text.ts");
/* harmony import */ var _parse_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse-css */ "./src/app/parse-css.ts");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color.service */ "./src/app/color.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let ColorGeneratorComponent = class ColorGeneratorComponent {
    constructor(colorService) {
        this.colorService = colorService;
        this.colors = [];
        this.cssText = _default_css_text__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CSS_TEXT"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.demoMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onColorChange(ev) {
        const colorProperty = ev.property;
        const colorValue = ev.value;
        const colorIndex = this.colors.findIndex(o => o.property === colorProperty);
        const color = this.colors[colorIndex];
        const genColor = Object(_parse_css__WEBPACK_IMPORTED_MODULE_3__["generateColor"])(color.name, colorProperty, colorValue);
        this.colors[colorIndex] = genColor;
        this.colors = [...this.colors];
        const attrMap = {
            value: '',
            valueRgb: '-rgb',
            contrast: '-contrast',
            contrastRgb: '-contrast-rgb',
            shade: '-shade',
            tint: '-tint'
        };
        Object.keys(attrMap).forEach(key => {
            this.cssText = Object(_parse_css__WEBPACK_IMPORTED_MODULE_3__["updateCssText"])(colorProperty + attrMap[key], this.cssText, genColor[key]);
        });
        this.demoMessage.emit({ cssText: this.cssText });
    }
    onCssTextChange(ev) {
        this.cssText = ev;
        const colors = Object(_parse_css__WEBPACK_IMPORTED_MODULE_3__["convertCssToColors"])(this.cssText);
        if (colors.length > 0) {
            this.colors = colors;
            this.demoMessage.emit({ cssText: this.cssText });
        }
    }
    observeNameOrColorChange() {
        this.colorService.onNameOrColorChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(result => {
            const { type, data } = result;
            if (type === 'color') {
                this.onColorChange(data);
                this.selectColor = this.colors.find(item => item.value === data.value);
            }
            else if (type === 'cssText') {
                this.onCssTextChange(data);
            }
            else { }
        });
    }
    onActiveColorChange(color) {
        this.selectColor = color;
    }
    ngOnInit() {
        this.observeNameOrColorChange();
        this.colors = Object(_parse_css__WEBPACK_IMPORTED_MODULE_3__["convertCssToColors"])(this.cssText);
        this.selectColor = this.colors[0];
    }
    ngAfterViewInit() {
        this.demoMessage.emit({ cssText: this.cssText });
    }
};
ColorGeneratorComponent.ctorParameters = () => [
    { type: _color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ColorGeneratorComponent.prototype, "demoMessage", void 0);
ColorGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-color-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/color-generator/color-generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-generator.component.less */ "./src/app/color-generator/color-generator.component.less")).default]
    })
], ColorGeneratorComponent);



/***/ }),

/***/ "./src/app/color-generator/default-css-text.ts":
/*!*****************************************************!*\
  !*** ./src/app/color-generator/default-css-text.ts ***!
  \*****************************************************/
/*! exports provided: DEFAULT_CSS_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CSS_TEXT", function() { return DEFAULT_CSS_TEXT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DEFAULT_CSS_TEXT = `
@primary: #3880ff;
@primary-rgb: 56,128,255;
@primary-contrast: #ffffff;
@primary-contrast-rgb: 255,255,255;
@primary-shade: #3171e0;
@primary-tint: #4c8dff;

@secondary: #0cd1e8;
@secondary-rgb: 12,209,232;
@secondary-contrast: #ffffff;
@secondary-contrast-rgb: 255,255,255;
@secondary-shade: #0bb8cc;
@secondary-tint: #24d6ea;

@tertiary: #7044ff;
@tertiary-rgb: 112,68,255;
@tertiary-contrast: #ffffff;
@tertiary-contrast-rgb: 255,255,255;
@tertiary-shade: #633ce0;
@tertiary-tint: #7e57ff;

@success: #10dc60;
@success-rgb: 16,220,96;
@success-contrast: #ffffff;
@success-contrast-rgb: 255,255,255;
@success-shade: #0ec254;
@success-tint: #28e070;

@warning: #ffce00;
@warning-rgb: 255,206,0;
@warning-contrast: #ffffff;
@warning-contrast-rgb: 255,255,255;
@warning-shade: #e0b500;
@warning-tint: #ffd31a;

@danger: #f04141;
@danger-rgb: 245,61,61;
@danger-contrast: #ffffff;
@danger-contrast-rgb: 255,255,255;
@danger-shade: #d33939;
@danger-tint: #f25454;

@dark: #222428;
@dark-rgb: 34,34,34;
@dark-contrast: #ffffff;
@dark-contrast-rgb: 255,255,255;
@dark-shade: #1e2023;
@dark-tint: #383a3e;

@medium: #989aa2;
@medium-rgb: 152,154,162;
@medium-contrast: #ffffff;
@medium-contrast-rgb: 255,255,255;
@medium-shade: #86888f;
@medium-tint: #a2a4ab;

@light: #f4f5f8;
@light-rgb: 244,244,244;
@light-contrast: #000000;
@light-contrast-rgb: 0,0,0;
@light-shade: #d7d8da;
@light-tint: #f5f6f9;
`.trim();


/***/ }),

/***/ "./src/app/color-variables.ts":
/*!************************************!*\
  !*** ./src/app/color-variables.ts ***!
  \************************************/
/*! exports provided: COLOR_VARS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_VARS", function() { return COLOR_VARS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const COLOR_VARS = [
    {
        name: 'Primary',
        property: '@primary'
    },
    {
        name: 'Secondary',
        property: '@secondary'
    },
    {
        name: 'Tertiary',
        property: '@tertiary'
    },
    {
        name: 'Success',
        property: '@success'
    },
    {
        name: 'Warning',
        property: '@warning'
    },
    {
        name: 'Danger',
        property: '@danger'
    },
    {
        name: 'Dark',
        property: '@dark'
    },
    {
        name: 'Medium',
        property: '@medium'
    },
    {
        name: 'Light',
        property: '@light'
    }
];


/***/ }),

/***/ "./src/app/color.service.ts":
/*!**********************************!*\
  !*** ./src/app/color.service.ts ***!
  \**********************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ColorService = class ColorService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get onNameOrColorChange() {
        return this.subject;
    }
    changeName(data) {
        this.subject.next({
            type: 'name',
            data
        });
    }
    changeColor(data) {
        this.subject.next({
            type: 'color',
            data
        });
    }
    changeCssText(data) {
        this.subject.next({
            type: 'cssText',
            data
        });
    }
};
ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ColorService);



/***/ }),

/***/ "./src/app/color.ts":
/*!**************************!*\
  !*** ./src/app/color.ts ***!
  \**************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function expandHex(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
        return r + r + g + g + b + b;
    });
    return `#${hex.replace('#', '')}`;
}
function hexToRGB(hex) {
    hex = expandHex(hex);
    hex = hex.replace('#', '');
    const intValue = parseInt(hex, 16);
    return {
        r: (intValue >> 16) & 255,
        g: (intValue >> 8) & 255,
        b: intValue & 255
    };
}
function hslToRGB({ h, s, l }) {
    h = h / 360;
    s = s / 100;
    l = l / 100;
    if (s === 0) {
        l = Math.round(l * 255);
        return {
            r: l,
            g: l,
            b: l
        };
    }
    // tslint:disable-next-line:no-shadowed-variable
    const hue2rgb = (p, q, t) => {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }, q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q, r = hue2rgb(p, q, h + (1 / 3)), g = hue2rgb(p, q, h), b = hue2rgb(p, q, h - (1 / 3));
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
function mixColors(color, mixColor, weight = .5) {
    const colorRGB = color.rgb, mixColorRGB = mixColor.rgb, mixColorWeight = 1 - weight;
    return {
        r: Math.round(weight * mixColorRGB.r + mixColorWeight * colorRGB.r),
        g: Math.round(weight * mixColorRGB.g + mixColorWeight * colorRGB.g),
        b: Math.round(weight * mixColorRGB.b + mixColorWeight * colorRGB.b)
    };
}
function rgbToHex({ r, g, b }) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function rgbToHSL({ r, g, b }) {
    r = Math.max(Math.min(r / 255, 1), 0);
    g = Math.max(Math.min(g / 255, 1), 0);
    b = Math.max(Math.min(b / 255, 1), 0);
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = Math.min(1, Math.max(0, (max + min) / 2));
    let d, h, s;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) {
            h = (g - b) / d + (g < b ? 6 : 0);
        }
        else if (max === g) {
            h = (b - r) / d + 2;
        }
        else {
            h = (r - g) / d + 4;
        }
        h = h / 6;
    }
    else {
        h = s = 0;
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}
function rgbToYIQ({ r, g, b }) {
    return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}
class Color {
    constructor(value) {
        if (typeof (value) === 'string' && /rgb\(/.test(value)) {
            const matches = /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(value);
            value = { r: parseInt(matches[0], 10), g: parseInt(matches[1], 10), b: parseInt(matches[2], 10) };
        }
        else if (typeof (value) === 'string' && /hsl\(/.test(value)) {
            const matches = /hsl\((\d{1,3}), ?(\d{1,3}%), ?(\d{1,3}%)\)/.exec(value);
            value = { h: parseInt(matches[0], 10), s: parseInt(matches[1], 10), l: parseInt(matches[2], 10) };
        }
        if (typeof (value) === 'string') {
            value = value.replace(/\s/g, '');
            this.hex = expandHex(value);
            this.rgb = hexToRGB(this.hex);
            this.hsl = rgbToHSL(this.rgb);
        }
        else if ('r' in value && 'g' in value && 'b' in value) {
            this.rgb = value;
            this.hex = rgbToHex(this.rgb);
            this.hsl = rgbToHSL(this.rgb);
        }
        else if ('h' in value && 's' in value && 'l' in value) {
            this.hsl = value;
            this.rgb = hslToRGB(this.hsl);
            this.hex = rgbToHex(this.rgb);
        }
        else {
            return null;
        }
        this.yiq = rgbToYIQ(this.rgb);
    }
    static isColor(value) {
        if (/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(value))
            return true;
        return /(^#[0-9a-fA-F]+)/.test(value.trim());
    }
    contrast(threshold = 128) {
        return new Color((this.yiq >= threshold ? '#000' : '#fff'));
    }
    mix(from, amount = .5) {
        const base = from instanceof Color ? from : new Color(from);
        return new Color(mixColors(this, base, amount));
    }
    shade(weight = .12) {
        return this.mix({ r: 0, g: 0, b: 0 }, weight);
    }
    tint(weight = .1) {
        return this.mix({ r: 255, g: 255, b: 255 }, weight);
    }
    toList() {
        const { r, g, b } = this.rgb;
        return `${r},${g},${b}`;
    }
}


/***/ }),

/***/ "./src/app/css-text/css-text.component.less":
/*!**************************************************!*\
  !*** ./src/app/css-text/css-text.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".css-text__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.css-text__code {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  height: 1200px;\n  white-space: pre;\n  background-color: #f5f6f9;\n  border-radius: 4px;\n  border: 0;\n  outline: none;\n  font-family: SFMono-Regular, \"Roboto Mono\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 12px;\n  line-height: 18px;\n  margin: 1.5em 0;\n  padding: 2em 2em;\n  -webkit-font-smoothing: initial;\n  color: #73849a;\n  resize: both;\n  overflow: auto;\n}\nh3 {\n  font-size: 18px;\n  color: #24282e;\n  margin: 0;\n}\n.css-text__copy {\n  position: relative;\n  height: 20px;\n}\n.css-text__copy-link,\n.css-text__copy-confirmation {\n  padding: 4px 5px;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: 600;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.css-text__copy-link {\n  transition: 0.2s transform, 0.2s opacity, 0.2s color;\n  color: #70A4FF;\n  background-color: #E0EEFF;\n  border-radius: 4px;\n  display: inline-block;\n  cursor: pointer;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  z-index: 5;\n}\n.css-text__copy-link:hover {\n  color: #70a4ff;\n}\n.css-text__copy-confirmation {\n  transition: 0.2s transform, 0.2s opacity;\n  color: #0ec254;\n  opacity: 0;\n  transform: translate3d(0, 5px, 0);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  height: 20px;\n  padding: 0;\n}\n.css-text__copy-confirmation svg {\n  fill: #0ec254;\n  margin-right: -4px;\n}\n.show-confirmation .css-text__copy-link {\n  opacity: 0;\n  transform: translate3d(0, -5px, 0);\n  pointer-events: none;\n}\n.show-confirmation .css-text__copy-confirmation {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXppY29uZy9Eb2N1bWVudHMvbXlHaXRQcm9qZWN0cy9jb2xvci1nZW5lcmF0b3Ivc3JjL2FwcC9jc3MtdGV4dC9jc3MtdGV4dC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY3NzLXRleHQvY3NzLXRleHQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrR0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDSEY7QURNQTtFQUNFLG9EQUFBO0VBSUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7QUNSRjtBRFdBO0VBQ0Usd0NBQUE7RUFHQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDWEY7QURjQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9jc3MtdGV4dC9jc3MtdGV4dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jc3MtdGV4dF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3NzLXRleHRfX2NvZGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMDBweDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgXCJSb2JvdG8gTW9ub1wiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luOiAxLjVlbSAwO1xuICBwYWRkaW5nOiAyZW0gMmVtO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbml0aWFsO1xuICBjb2xvcjogcmdiKDExNSwgMTMyLCAxNTQpO1xuICByZXNpemU6IGJvdGg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJnYigzNiwgNDAsIDQ2KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3NzLXRleHRfX2NvcHl7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY3NzLXRleHRfX2NvcHktbGluayxcbi5jc3MtdGV4dF9fY29weS1jb25maXJtYXRpb24ge1xuICBwYWRkaW5nOiA0cHggNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5jc3MtdGV4dF9fY29weS1saW5rIHtcbiAgdHJhbnNpdGlvbjpcbiAgICAwLjJzIHRyYW5zZm9ybSAsXG4gICAgMC4ycyBvcGFjaXR5LFxuICAgIDAuMnMgY29sb3I7XG4gIGNvbG9yOiAjNzBBNEZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFRUZGO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgei1pbmRleDogNTtcbn1cblxuLmNzcy10ZXh0X19jb3B5LWxpbms6aG92ZXIge1xuICBjb2xvcjogcmdiKDExMiwgMTY0LCAyNTUpO1xufVxuXG4uY3NzLXRleHRfX2NvcHktY29uZmlybWF0aW9uIHtcbiAgdHJhbnNpdGlvbjpcbiAgICAwLjJzIHRyYW5zZm9ybSAsXG4gICAgMC4ycyBvcGFjaXR5O1xuICBjb2xvcjogIzBlYzI1NDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDVweCwwKTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY3NzLXRleHRfX2NvcHktY29uZmlybWF0aW9uIHN2ZyB7XG4gIGZpbGw6ICMwZWMyNTQ7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbn1cblxuLnNob3ctY29uZmlybWF0aW9uIC5jc3MtdGV4dF9fY29weS1saW5rIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC01cHgsMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2hvdy1jb25maXJtYXRpb24gLmNzcy10ZXh0X19jb3B5LWNvbmZpcm1hdGlvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xufVxuIiwiLmNzcy10ZXh0X19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3NzLXRleHRfX2NvZGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMDBweDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgXCJSb2JvdG8gTW9ub1wiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luOiAxLjVlbSAwO1xuICBwYWRkaW5nOiAyZW0gMmVtO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbml0aWFsO1xuICBjb2xvcjogIzczODQ5YTtcbiAgcmVzaXplOiBib3RoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI0MjgyZTtcbiAgbWFyZ2luOiAwO1xufVxuLmNzcy10ZXh0X19jb3B5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uY3NzLXRleHRfX2NvcHktbGluayxcbi5jc3MtdGV4dF9fY29weS1jb25maXJtYXRpb24ge1xuICBwYWRkaW5nOiA0cHggNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY3NzLXRleHRfX2NvcHktbGluayB7XG4gIHRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtLCAwLjJzIG9wYWNpdHksIDAuMnMgY29sb3I7XG4gIGNvbG9yOiAjNzBBNEZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFRUZGO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB6LWluZGV4OiA1O1xufVxuLmNzcy10ZXh0X19jb3B5LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzcwYTRmZjtcbn1cbi5jc3MtdGV4dF9fY29weS1jb25maXJtYXRpb24ge1xuICB0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybSwgMC4ycyBvcGFjaXR5O1xuICBjb2xvcjogIzBlYzI1NDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uY3NzLXRleHRfX2NvcHktY29uZmlybWF0aW9uIHN2ZyB7XG4gIGZpbGw6ICMwZWMyNTQ7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbn1cbi5zaG93LWNvbmZpcm1hdGlvbiAuY3NzLXRleHRfX2NvcHktbGluayB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnNob3ctY29uZmlybWF0aW9uIC5jc3MtdGV4dF9fY29weS1jb25maXJtYXRpb24ge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/css-text/css-text.component.ts":
/*!************************************************!*\
  !*** ./src/app/css-text/css-text.component.ts ***!
  \************************************************/
/*! exports provided: CssTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssTextComponent", function() { return CssTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/color.service.ts");



let CssTextComponent = class CssTextComponent {
    constructor(colorService) {
        this.colorService = colorService;
        this.showCopyConfirmation = false;
        this.cssText = '';
        this.header = true;
    }
    onCssTextChange(ev) {
        if (ev.target.value !== this.cssText) {
            const value = ev.target.value;
            if (!value.length)
                return;
            this.cssText = value;
            this.colorService.changeCssText(this.cssText);
        }
    }
    copyCssText(ev) {
        ev.preventDefault();
        this.showCopyConfirmation = true;
        const cssEl = this.cssTextEl.nativeElement;
        const cssText = cssEl.textContent || '';
        const el = document.createElement('textarea');
        el.value = cssText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.showCopyConfirmation = false;
        }, 2000);
    }
    ngOnInit() {
    }
};
CssTextComponent.ctorParameters = () => [
    { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CssTextComponent.prototype, "cssText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CssTextComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cssTextEl', { static: true })
], CssTextComponent.prototype, "cssTextEl", void 0);
CssTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-css-text',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./css-text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/css-text/css-text.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./css-text.component.less */ "./src/app/css-text/css-text.component.less")).default]
    })
], CssTextComponent);



/***/ }),

/***/ "./src/app/my-button/my-button.component.less":
/*!****************************************************!*\
  !*** ./src/app/my-button/my-button.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  width: 104px;\n  height: 46px;\n  outline: none;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n}\n.btn:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXppY29uZy9Eb2N1bWVudHMvbXlHaXRQcm9qZWN0cy9jb2xvci1nZW5lcmF0b3Ivc3JjL2FwcC9teS1idXR0b24vbXktYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9teS1idXR0b24vbXktYnV0dG9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9teS1idXR0b24vbXktYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG4iLCIuYnRuIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/my-button/my-button.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-button/my-button.component.ts ***!
  \**************************************************/
/*! exports provided: MyButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyButtonComponent", function() { return MyButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyButtonComponent = class MyButtonComponent {
    constructor() {
        this.isHover = false;
    }
    setBackgroundColor(color) {
        this.btn.nativeElement.style.backgroundColor = color;
    }
    onEnter() {
        this.isHover = true;
        this.setBackgroundColor(this.color.tint);
    }
    onLeave() {
        this.isHover = false;
        this.setBackgroundColor(this.color.value);
    }
    onMouseDown() {
        this.setBackgroundColor(this.color.shade);
    }
    onMouseUp() {
        if (this.isHover) {
            this.setBackgroundColor(this.color.tint);
        }
        else {
            this.setBackgroundColor(this.color.value);
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyButtonComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btn', { static: true })
], MyButtonComponent.prototype, "btn", void 0);
MyButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-button/my-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-button.component.less */ "./src/app/my-button/my-button.component.less")).default]
    })
], MyButtonComponent);



/***/ }),

/***/ "./src/app/parse-css.ts":
/*!******************************!*\
  !*** ./src/app/parse-css.ts ***!
  \******************************/
/*! exports provided: generateColor, convertCssToColors, updateCssText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateColor", function() { return generateColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCssToColors", function() { return convertCssToColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCssText", function() { return updateCssText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _color_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-variables */ "./src/app/color-variables.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/app/color.ts");



function generateColor(name, property, value) {
    const color = new _color__WEBPACK_IMPORTED_MODULE_2__["Color"](value);
    const contrast = color.contrast();
    const tint = color.tint();
    const shade = color.shade();
    return {
        name,
        property,
        value,
        valueRgb: rgbToString(color.rgb),
        contrast: contrast.hex,
        contrastRgb: rgbToString(contrast.rgb),
        tint: tint.hex,
        shade: shade.hex,
    };
}
function convertCssToColors(cssText) {
    const colors = [];
    _color_variables__WEBPACK_IMPORTED_MODULE_1__["COLOR_VARS"].forEach(colorVar => {
        const attrMap = {
            value: '',
            valueRgb: '-rgb',
            contrast: '-contrast',
            contrastRgb: '-contrast-rgb',
            shade: '-shade',
            tint: '-tint',
        };
        const color = Object.assign({}, colorVar);
        Object.keys(attrMap).forEach(key => {
            color[key] = parseColorVar(colorVar.property + attrMap[key], cssText);
        });
        colors.push(color);
    });
    return colors;
}
function updateCssText(colorAttr, cssText, newColorValue) {
    const oldKeyValue = getCssKeyVal(colorAttr, cssText);
    const newKeyValue = `${colorAttr}: ${newColorValue}`;
    cssText = cssText.replace(oldKeyValue, newKeyValue);
    return cssText;
}
function parseColorVar(colorAttr, cssText) {
    const attrKeyVal = getCssKeyVal(colorAttr, cssText);
    return attrKeyVal.trim().split(':')[1].trim();
}
function getCssKeyVal(colorAttr, cssText) {
    const startIndex = cssText.indexOf(colorAttr);
    const valueSplt = cssText.substring(startIndex + colorAttr.length);
    // const bracketIndex = valueSplt.indexOf('}');
    const semiColonIndex = valueSplt.indexOf(';');
    // const endIndex = startIndex + colorAttr.length + Math.min(bracketIndex, semiColonIndex);
    const endIndex = startIndex + colorAttr.length + semiColonIndex;
    return cssText.substring(startIndex, endIndex);
}
function rgbToString(c) {
    return `${c.r},${c.g},${c.b}`;
}


/***/ }),

/***/ "./src/app/select-colors/select-colors.component.less":
/*!************************************************************!*\
  !*** ./src/app/select-colors/select-colors.component.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding-top: 20px;\n  margin-bottom: 80px;\n}\n.controls,\n.controls__sub {\n  margin: 0;\n  padding: 0;\n}\n.controls li {\n  list-style-type: none;\n}\n.controls__item {\n  margin: 0;\n  position: relative;\n  border-bottom: 1px solid #edf2f6;\n}\n.controls__item > app-variable-selector {\n  cursor: pointer;\n}\n.controls__item svg {\n  transition: 100ms transform;\n  position: absolute;\n  top: 24px;\n  right: 12px;\n  pointer-events: none;\n}\n.controls__item:first-child {\n  border-top: 1px solid #edf2f6;\n}\n.controls__sub > li {\n  height: 0;\n  opacity: 0;\n  margin: 0;\n  pointer-events: none;\n  transition: 160ms height,\n    160ms opacity;\n}\n.controls__item.is-open svg {\n  transform: rotate(180deg);\n}\n.controls__item.is-open .controls__sub > li {\n  height: 54px;\n  opacity: 1;\n  pointer-events: all;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXppY29uZy9Eb2N1bWVudHMvbXlHaXRQcm9qZWN0cy9jb2xvci1nZW5lcmF0b3Ivc3JjL2FwcC9zZWxlY3QtY29sb3JzL3NlbGVjdC1jb2xvcnMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NlbGVjdC1jb2xvcnMvc2VsZWN0LWNvbG9ycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtBQ0FGO0FER0E7RUFDRSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0ZGO0FEUUE7RUFDRSxlQUFBO0FDTkY7QURTQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDUEY7QURVQTtFQUNFLDZCQUFBO0FDUkY7QURXQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0E7aUJBQUE7QUNSRjtBRGFBO0VBQ0UseUJBQUE7QUNYRjtBRGNBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0LWNvbG9ycy9zZWxlY3QtY29sb3JzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb250cm9scyxcbi5jb250cm9sc19fc3ViIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udHJvbHMgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb250cm9sc19faXRlbSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjJmNjtcbiAgJjpmaXJzdC1jaGlsZCB7XG5cbiAgfVxufVxuXG4uY29udHJvbHNfX2l0ZW0gPiBhcHAtdmFyaWFibGUtc2VsZWN0b3J7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRyb2xzX19pdGVtIHN2ZyB7XG4gIHRyYW5zaXRpb246IDEwMG1zIHRyYW5zZm9ybTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRyb2xzX19pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGYyZjY7XG59XG5cbi5jb250cm9sc19fc3ViID4gbGkge1xuICBoZWlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246XG4gICAgMTYwbXMgaGVpZ2h0LFxuICAgIDE2MG1zIG9wYWNpdHk7XG59XG5cbi5jb250cm9sc19faXRlbS5pcy1vcGVuIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5jb250cm9sc19faXRlbS5pcy1vcGVuIC5jb250cm9sc19fc3ViID4gbGkge1xuICBoZWlnaHQ6IDU0cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi5jb250cm9scyxcbi5jb250cm9sc19fc3ViIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRyb2xzIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmNvbnRyb2xzX19pdGVtIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRmMmY2O1xufVxuLmNvbnRyb2xzX19pdGVtID4gYXBwLXZhcmlhYmxlLXNlbGVjdG9yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRyb2xzX19pdGVtIHN2ZyB7XG4gIHRyYW5zaXRpb246IDEwMG1zIHRyYW5zZm9ybTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb250cm9sc19faXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRmMmY2O1xufVxuLmNvbnRyb2xzX19zdWIgPiBsaSB7XG4gIGhlaWdodDogMDtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogMTYwbXMgaGVpZ2h0LFxuICAgIDE2MG1zIG9wYWNpdHk7XG59XG4uY29udHJvbHNfX2l0ZW0uaXMtb3BlbiBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNvbnRyb2xzX19pdGVtLmlzLW9wZW4gLmNvbnRyb2xzX19zdWIgPiBsaSB7XG4gIGhlaWdodDogNTRweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/select-colors/select-colors.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/select-colors/select-colors.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectColorsComponent", function() { return SelectColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectColorsComponent = class SelectColorsComponent {
    constructor() {
        this.activeColor = '';
        this.colors = [];
        this.onActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    toggleActiveColor(name) {
        if (this.activeColor === name) {
            this.activeColor = '';
            return;
        }
        this.activeColor = name;
        const selectColor = this.colors.find(item => item.name === name);
        this.onActiveChange.emit(selectColor);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectColorsComponent.prototype, "colors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectColorsComponent.prototype, "onActiveChange", void 0);
SelectColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-colors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-colors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-colors/select-colors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-colors.component.less */ "./src/app/select-colors/select-colors.component.less")).default]
    })
], SelectColorsComponent);



/***/ }),

/***/ "./src/app/variable-selector/variable-selector.component.less":
/*!********************************************************************!*\
  !*** ./src/app/variable-selector/variable-selector.component.less ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color-selector {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 34px 12px;\n}\n.color-selector__name {\n  color: #73849a;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n.color-selector__swatch {\n  display: block;\n  width: 24px;\n  height: 24px;\n  border-radius: 24px;\n  margin-right: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.invalid {\n  background: #f0b2b1;\n}\n.property-label {\n  font-family: Courier New, Courier, monospace;\n  white-space: nowrap;\n  cursor: pointer;\n  flex: 1;\n  padding-left: 10px;\n}\n.color-selector__form-group {\n  position: relative;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.color-selector__input {\n  transition: 0.3s border;\n  border: 1px solid #D4D9E1;\n  border-radius: 4px;\n  height: 28px;\n  max-width: 90px;\n  display: flex;\n  align-items: center;\n}\n.color-selector__input-name input,\n.color-selector__input-value input {\n  -webkit-appearance: none;\n  border: 0;\n  outline: none;\n  font-family: SFMono-Regular, \"Roboto Mono\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 12px;\n  width: 60px;\n  color: #73849a;\n}\n.color-selector__input--focused {\n  border-color: #7eafff;\n}\n.color-selector--name-error .color-selector__input-name,\n.color-selector--name-error .color-selector__input--focused .color-selector__input-name,\n.color-selector--value-error .color-selector__input-value,\n.color-selector--value-error .color-selector__input--focused .color-selector__input-value {\n  border-color: #f04141;\n}\n.color-selector__input-name {\n  max-width: 150px;\n}\n.color-selector__input-name input {\n  padding: 0 15px;\n  width: 110px;\n}\n.color-selector__color-wrap {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  width: 12px;\n  height: 12px;\n  margin: 0 7px;\n  border-radius: 2px;\n  display: inline-block;\n}\n.color-selector__input input[type=\"color\"] {\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  opacity: 0;\n  width: 12px;\n  height: 12px;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.color-selector__error {\n  font-size: 11px;\n  line-height: 13px;\n  display: block;\n  max-width: 120px;\n  padding: 0 10px;\n  color: #f04141;\n  font-weight: normal;\n}\n@media (max-width: 700px) {\n  .color-selector--value-error {\n    padding-bottom: 24px;\n  }\n  .color-selector__error {\n    max-width: 300px;\n    width: 300px;\n    text-align: right;\n    padding-right: 0;\n    top: calc(100% + 3px);\n    right: 0;\n    position: absolute;\n  }\n}\n.color-selector__hex {\n  width: 94px;\n}\n.color-selector__hex span {\n  font-family: SFMono-Regular, \"Roboto Mono\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 12px;\n  background-color: #edf2f6;\n  color: #020814;\n  padding: 3px 5px;\n  border-radius: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXppY29uZy9Eb2N1bWVudHMvbXlHaXRQcm9qZWN0cy9jb2xvci1nZW5lcmF0b3Ivc3JjL2FwcC92YXJpYWJsZS1zZWxlY3Rvci92YXJpYWJsZS1zZWxlY3Rvci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdmFyaWFibGUtc2VsZWN0b3IvdmFyaWFibGUtc2VsZWN0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDREY7QURJQTtFQUNFLG1CQUFBO0FDRkY7QURLQTtFQUNFLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsT0FBQTtFQUNBLGtCQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7QUNORjtBRFNBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrR0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1JGO0FEV0E7RUFDRSxxQkFBQTtBQ1RGO0FEWUE7Ozs7RUFJRSxxQkFBQTtBQ1ZGO0FEYUE7RUFDRSxnQkFBQTtBQ1hGO0FEY0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ1pGO0FEZUE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNiRjtBRGdCQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkRjtBRGlCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjtBRGtCQTtFQUNFO0lBQ0Usb0JBQUE7RUNoQkY7RURtQkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7RUNqQkY7QUFDRjtBRG9CQTtFQUNFLFdBQUE7QUNsQkY7QURxQkE7RUFDRSxrR0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJGIiwiZmlsZSI6InNyYy9hcHAvdmFyaWFibGUtc2VsZWN0b3IvdmFyaWFibGUtc2VsZWN0b3IuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Itc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEycHggMzRweCAxMnB4O1xufVxuXG4uY29sb3Itc2VsZWN0b3JfX25hbWUge1xuICBjb2xvcjogcmdiKDExNSwgMTMyLCAxNTQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9fc3dhdGNoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaW52YWxpZCB7XG4gIGJhY2tncm91bmQ6ICNmMGIyYjE7XG59XG5cbi5wcm9wZXJ0eS1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgZmxleDogMTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29sb3Itc2VsZWN0b3JfX2Zvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQge1xuICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDlFMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbG9yLXNlbGVjdG9yX19pbnB1dC1uYW1lIGlucHV0LFxuLmNvbG9yLXNlbGVjdG9yX19pbnB1dC12YWx1ZSBpbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIFwiUm9ib3RvIE1vbm9cIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGNvbG9yOiByZ2IoMTE1LCAxMzIsIDE1NCk7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItY29sb3I6ICM3ZWFmZmY7XG59XG5cbi5jb2xvci1zZWxlY3Rvci0tbmFtZS1lcnJvciAuY29sb3Itc2VsZWN0b3JfX2lucHV0LW5hbWUsXG4uY29sb3Itc2VsZWN0b3ItLW5hbWUtZXJyb3IgLmNvbG9yLXNlbGVjdG9yX19pbnB1dC0tZm9jdXNlZCAuY29sb3Itc2VsZWN0b3JfX2lucHV0LW5hbWUsXG4uY29sb3Itc2VsZWN0b3ItLXZhbHVlLWVycm9yIC5jb2xvci1zZWxlY3Rvcl9faW5wdXQtdmFsdWUsXG4uY29sb3Itc2VsZWN0b3ItLXZhbHVlLWVycm9yIC5jb2xvci1zZWxlY3Rvcl9faW5wdXQtLWZvY3VzZWQgLmNvbG9yLXNlbGVjdG9yX19pbnB1dC12YWx1ZSB7XG4gIGJvcmRlci1jb2xvcjogI2YwNDE0MTtcbn1cblxuLmNvbG9yLXNlbGVjdG9yX19pbnB1dC1uYW1lIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmNvbG9yLXNlbGVjdG9yX19pbnB1dC1uYW1lIGlucHV0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9fY29sb3Itd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luOiAwIDdweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9fZXJyb3Ige1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjb2xvcjogI2YwNDE0MTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb2xvci1zZWxlY3Rvci0tdmFsdWUtZXJyb3Ige1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgLmNvbG9yLXNlbGVjdG9yX19lcnJvciB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDNweCk7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9faGV4IHtcbiAgd2lkdGg6IDk0cHg7XG59XG5cbi5jb2xvci1zZWxlY3Rvcl9faGV4IHNwYW4ge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIFwiUm9ib3RvIE1vbm9cIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjJmNjtcbiAgY29sb3I6ICMwMjA4MTQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbiIsIi5jb2xvci1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTJweCAzNHB4IDEycHg7XG59XG4uY29sb3Itc2VsZWN0b3JfX25hbWUge1xuICBjb2xvcjogIzczODQ5YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbG9yLXNlbGVjdG9yX19zd2F0Y2gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaW52YWxpZCB7XG4gIGJhY2tncm91bmQ6ICNmMGIyYjE7XG59XG4ucHJvcGVydHktbGFiZWwge1xuICBmb250LWZhbWlseTogQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY29sb3Itc2VsZWN0b3JfX2Zvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQge1xuICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDlFMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQtbmFtZSBpbnB1dCxcbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQtdmFsdWUgaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBcIlJvYm90byBNb25vXCIsIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cbi5jb2xvci1zZWxlY3Rvcl9faW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItY29sb3I6ICM3ZWFmZmY7XG59XG4uY29sb3Itc2VsZWN0b3ItLW5hbWUtZXJyb3IgLmNvbG9yLXNlbGVjdG9yX19pbnB1dC1uYW1lLFxuLmNvbG9yLXNlbGVjdG9yLS1uYW1lLWVycm9yIC5jb2xvci1zZWxlY3Rvcl9faW5wdXQtLWZvY3VzZWQgLmNvbG9yLXNlbGVjdG9yX19pbnB1dC1uYW1lLFxuLmNvbG9yLXNlbGVjdG9yLS12YWx1ZS1lcnJvciAuY29sb3Itc2VsZWN0b3JfX2lucHV0LXZhbHVlLFxuLmNvbG9yLXNlbGVjdG9yLS12YWx1ZS1lcnJvciAuY29sb3Itc2VsZWN0b3JfX2lucHV0LS1mb2N1c2VkIC5jb2xvci1zZWxlY3Rvcl9faW5wdXQtdmFsdWUge1xuICBib3JkZXItY29sb3I6ICNmMDQxNDE7XG59XG4uY29sb3Itc2VsZWN0b3JfX2lucHV0LW5hbWUge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLmNvbG9yLXNlbGVjdG9yX19pbnB1dC1uYW1lIGlucHV0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICB3aWR0aDogMTEwcHg7XG59XG4uY29sb3Itc2VsZWN0b3JfX2NvbG9yLXdyYXAge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbjogMCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbG9yLXNlbGVjdG9yX19pbnB1dCBpbnB1dFt0eXBlPVwiY29sb3JcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb2xvci1zZWxlY3Rvcl9fZXJyb3Ige1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjb2xvcjogI2YwNDE0MTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29sb3Itc2VsZWN0b3ItLXZhbHVlLWVycm9yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgfVxuICAuY29sb3Itc2VsZWN0b3JfX2Vycm9yIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHRvcDogY2FsYygxMDAlICsgM3B4KTtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbi5jb2xvci1zZWxlY3Rvcl9faGV4IHtcbiAgd2lkdGg6IDk0cHg7XG59XG4uY29sb3Itc2VsZWN0b3JfX2hleCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBcIlJvYm90byBNb25vXCIsIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYyZjY7XG4gIGNvbG9yOiAjMDIwODE0O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/variable-selector/variable-selector.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/variable-selector/variable-selector.component.ts ***!
  \******************************************************************/
/*! exports provided: VariableSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableSelectorComponent", function() { return VariableSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/color.service.ts");



let VariableSelectorComponent = class VariableSelectorComponent {
    constructor(colorService) {
        this.colorService = colorService;
        this.showNameError = false;
        this.showValueError = false;
        this.isValueInputFocused = false;
        this.isNameInputFocused = false;
        this.editable = true;
        this.isParentOpen = false;
        this.isNew = false;
    }
    onNameChange(ev) {
        const input = ev.currentTarget;
        const name = input.value.trim();
        if (name.length === 0) {
            return;
        }
        if (!this.isValidName(name)) {
            return;
        }
        this.name = name;
        this.colorService.changeName({
            name: this.name,
            value: this.value
        });
    }
    onColorInputChange(color) {
        this.colorService.changeColor({
            property: this.property,
            value: color
        });
    }
    onColorTextInputChange(color) {
        let val = color.trim();
        if (val[0] !== '#') {
            val = '#' + val;
        }
        if (val.length > 7) {
            val = val.substring(0, val.length - 1);
        }
        this.inputValue = val;
        if (val.length !== 7) {
            this.showValueError = true;
            return;
        }
        else {
            this.showValueError = false;
        }
        this.value = val;
        this.colorService.changeColor({
            property: this.property,
            value: this.value
        });
    }
    onValueInputFocus() {
        this.isValueInputFocused = true;
    }
    onValueInputBlur(ev) {
        const input = ev.currentTarget;
        this.value = input.value.trim();
        this.isValueInputFocused = false;
    }
    onNameInputFocus() {
        this.isNameInputFocused = true;
    }
    onNameInputBlur(ev) {
        const input = ev.currentTarget;
        this.name = input.value.trim();
        this.isNameInputFocused = false;
    }
    isValidName(str) {
        return /^[A-Z\-\_]+$/i.test(str);
    }
    validateName() {
        const isValidName = this.isValidName(this.name);
        this.showNameError = (isValidName && this.name.length > 0) ? false : true;
    }
    isValidHex(str) {
        return /^#[0-9A-F]{6}$/i.test(str);
    }
    validateValue() {
        const isValidHex = this.isValidHex(this.value);
        this.showValueError = (isValidHex && this.value.length === 7) ? false : true;
    }
    onValueInputParentClick(ev) {
        if (this.isParentOpen) {
            ev.stopPropagation();
        }
    }
    ngOnInit() {
        this.validateName();
        this.validateValue();
        this.inputValue = this.value;
    }
};
VariableSelectorComponent.ctorParameters = () => [
    { type: _color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VariableSelectorComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VariableSelectorComponent.prototype, "property", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VariableSelectorComponent.prototype, "editable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VariableSelectorComponent.prototype, "isParentOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VariableSelectorComponent.prototype, "isNew", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VariableSelectorComponent.prototype, "value", void 0);
VariableSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-variable-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./variable-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/variable-selector/variable-selector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./variable-selector.component.less */ "./src/app/variable-selector/variable-selector.component.less")).default]
    })
], VariableSelectorComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lizicong/Documents/myGitProjects/color-generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map