"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/benner/core.js":
/*!***********************************!*\
  !*** ./components/benner/core.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel-react */ \"./node_modules/embla-carousel-react/embla-carousel-react.umd.js\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(embla_carousel_react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n// import { PrevButton, NextButton } from \"./EmblaCarouselButtons\";\n\nvar _s = $RefreshSig$();\nvar Core = function(param) {\n    var slides = param.slides;\n    _s();\n    var ref = _slicedToArray(embla_carousel_react__WEBPACK_IMPORTED_MODULE_2___default()({\n        slidesToScroll: 2,\n        skipSnaps: false\n    }), 2), viewportRef = ref[0], embla = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), prevBtnEnabled = ref1[0], setPrevBtnEnabled = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), nextBtnEnabled = ref2[0], setNextBtnEnabled = ref2[1];\n    var scrollPrev = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return embla && embla.scrollPrev();\n    }, [\n        embla\n    ]);\n    var scrollNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        return embla && embla.scrollNext();\n    }, [\n        embla\n    ]);\n    var onSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        if (!embla) return;\n        setPrevBtnEnabled(embla.canScrollPrev());\n        setNextBtnEnabled(embla.canScrollNext());\n    }, [\n        embla\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!embla) return;\n        embla.on(\"select\", onSelect);\n        onSelect();\n    }, [\n        embla,\n        onSelect\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"embla\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"embla__viewport\",\n            ref: viewportRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"embla__container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"embla__slide\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"embla__slide__inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-56 h-32 bg-slate-900\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\homepage-e-commerce\\\\components\\\\benner\\\\core.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\homepage-e-commerce\\\\components\\\\benner\\\\core.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\homepage-e-commerce\\\\components\\\\benner\\\\core.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\homepage-e-commerce\\\\components\\\\benner\\\\core.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"G:\\\\homepage-e-commerce\\\\components\\\\benner\\\\core.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"G:\\\\homepage-e-commerce\\\\components\\\\benner\\\\core.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Core, \"4QKF4sSlAgaYDAIXEOu322RXq44=\", false, function() {\n    return [\n        (embla_carousel_react__WEBPACK_IMPORTED_MODULE_2___default())\n    ];\n});\n_c = Core;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Core));\nvar _c, _c1;\n$RefreshReg$(_c, \"Core\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jlbm5lci9jb3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBQ3RFLG1FQUFtRTtBQUNmOztBQUNwRCxJQUFNTSxJQUFJLEdBQUcsZ0JBQWdCO1FBQWJDLE1BQU0sU0FBTkEsTUFBTTs7SUFDcEIsSUFBNkJGLEdBRzNCLGtCQUgyQkEsMkRBQWdCLENBQUM7UUFDNUNHLGNBQWMsRUFBRSxDQUFDO1FBQ2pCQyxTQUFTLEVBQUUsS0FBSztLQUNqQixDQUFDLE1BSEtDLFdBQVcsR0FBV0wsR0FHM0IsR0FIZ0IsRUFBRU0sS0FBSyxHQUFJTixHQUczQixHQUh1QjtJQUl6QixJQUE0Q0osSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVI3RCxjQVF1QixHQUF1QkEsSUFBZSxHQUF0QyxFQVJ2QixpQkFRMEMsR0FBSUEsSUFBZSxHQUFuQjtJQUN4QyxJQUE0Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVQ3RCxjQVN1QixHQUF1QkEsSUFBZSxHQUF0QyxFQVR2QixpQkFTMEMsR0FBSUEsSUFBZSxHQUFuQjtJQUV4QyxJQUFNZSxVQUFVLEdBQUdiLGtEQUFXLENBQUM7ZUFBTVEsS0FBSyxJQUFJQSxLQUFLLENBQUNLLFVBQVUsRUFBRTtLQUFBLEVBQUU7UUFBQ0wsS0FBSztLQUFDLENBQUM7SUFDMUUsSUFBTU0sVUFBVSxHQUFHZCxrREFBVyxDQUFDO2VBQU1RLEtBQUssSUFBSUEsS0FBSyxDQUFDTSxVQUFVLEVBQUU7S0FBQSxFQUFFO1FBQUNOLEtBQUs7S0FBQyxDQUFDO0lBQzFFLElBQU1PLFFBQVEsR0FBR2Ysa0RBQVcsQ0FBQyxXQUFNO1FBQ2pDLElBQUksQ0FBQ1EsS0FBSyxFQUFFLE9BQU87UUFDbkJFLGlCQUFpQixDQUFDRixLQUFLLENBQUNRLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDekNKLGlCQUFpQixDQUFDSixLQUFLLENBQUNTLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUMsRUFBRTtRQUFDVCxLQUFLO0tBQUMsQ0FBQztJQUVYVCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNTLEtBQUssRUFBRSxPQUFPO1FBQ25CQSxLQUFLLENBQUNVLEVBQUUsQ0FBQyxRQUFRLEVBQUVILFFBQVEsQ0FBQyxDQUFDO1FBQzdCQSxRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUU7UUFBQ1AsS0FBSztRQUFFTyxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRXRCLHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUNwQiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsaUJBQWlCO1lBQUNDLEdBQUcsRUFBRWQsV0FBVztzQkFDL0MsNEVBQUNZLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7MEJBRS9CLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsY0FBYzs4QkFDM0IsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7a0NBQ2xDLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzs7OztpQ0FBTzs7Ozs7NkJBQzFDOzs7Ozt5QkFDRjs7Ozs7cUJBRUY7Ozs7O2lCQUNGOzs7OzthQUdGLENBQ047Q0FDSDtHQXZDS2pCLElBQUk7O1FBQ3FCRCw2REFBZ0I7OztBQUR6Q0MsS0FBQUEsSUFBSTtBQXlDViw0RUFBZUYsTUFBQUEsMkNBQUksQ0FBQ0UsSUFBSSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iZW5uZXIvY29yZS5qcz9hMDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBQcmV2QnV0dG9uLCBOZXh0QnV0dG9uIH0gZnJvbSBcIi4vRW1ibGFDYXJvdXNlbEJ1dHRvbnNcIjtcclxuaW1wb3J0IHVzZUVtYmxhQ2Fyb3VzZWwgZnJvbSBcImVtYmxhLWNhcm91c2VsLXJlYWN0XCI7XHJcbmNvbnN0IENvcmUgPSAoeyBzbGlkZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFt2aWV3cG9ydFJlZiwgZW1ibGFdID0gdXNlRW1ibGFDYXJvdXNlbCh7XHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgIHNraXBTbmFwczogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3ByZXZCdG5FbmFibGVkLCBzZXRQcmV2QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25leHRCdG5FbmFibGVkLCBzZXROZXh0QnRuRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxQcmV2KCksIFtlbWJsYV0pO1xyXG4gIGNvbnN0IHNjcm9sbE5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYSAmJiBlbWJsYS5zY3JvbGxOZXh0KCksIFtlbWJsYV0pO1xyXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFlbWJsYSkgcmV0dXJuO1xyXG4gICAgc2V0UHJldkJ0bkVuYWJsZWQoZW1ibGEuY2FuU2Nyb2xsUHJldigpKTtcclxuICAgIHNldE5leHRCdG5FbmFibGVkKGVtYmxhLmNhblNjcm9sbE5leHQoKSk7XHJcbiAgfSwgW2VtYmxhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWVtYmxhKSByZXR1cm47XHJcbiAgICBlbWJsYS5vbihcInNlbGVjdFwiLCBvblNlbGVjdCk7XHJcbiAgICBvblNlbGVjdCgpO1xyXG4gIH0sIFtlbWJsYSwgb25TZWxlY3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1ibGFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYV9fdmlld3BvcnRcIiByZWY9e3ZpZXdwb3J0UmVmfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19jb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiB7c2xpZGVzLm1hcCgoaW5kZXgpID0+ICggKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19zbGlkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmxhX19zbGlkZV9faW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTYgaC0zMiBiZy1zbGF0ZS05MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiApKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPFByZXZCdXR0b24gb25DbGljaz17c2Nyb2xsUHJldn0gZW5hYmxlZD17cHJldkJ0bkVuYWJsZWR9IC8+XHJcbiAgICAgIDxOZXh0QnV0dG9uIG9uQ2xpY2s9e3Njcm9sbE5leHR9IGVuYWJsZWQ9e25leHRCdG5FbmFibGVkfSAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKENvcmUpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwibWVtbyIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJDb3JlIiwic2xpZGVzIiwic2xpZGVzVG9TY3JvbGwiLCJza2lwU25hcHMiLCJ2aWV3cG9ydFJlZiIsImVtYmxhIiwicHJldkJ0bkVuYWJsZWQiLCJzZXRQcmV2QnRuRW5hYmxlZCIsIm5leHRCdG5FbmFibGVkIiwic2V0TmV4dEJ0bkVuYWJsZWQiLCJzY3JvbGxQcmV2Iiwic2Nyb2xsTmV4dCIsIm9uU2VsZWN0IiwiY2FuU2Nyb2xsUHJldiIsImNhblNjcm9sbE5leHQiLCJvbiIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/benner/core.js\n");

/***/ })

});