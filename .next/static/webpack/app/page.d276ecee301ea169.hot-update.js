"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/common/editor/styled.ts":
/*!************************************************!*\
  !*** ./src/components/common/editor/styled.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuillWrapper\": function() { return /* binding */ QuillWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"(app-client)/./.yarn/__virtual__/styled-components-virtual-35a79d1d84/4/Users/anje/AppData/Local/Yarn/Berry/cache/styled-components-npm-6.1.1-10768abb38-10c0.zip/node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _tagged_template_literal(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    const data = _tagged_template_literal([\n        \"\\n    .quill {\\n      width: 345px;\\n      height: 300px;\\n    }\\n\\n    .ql-toolbar {\\n      border: 1px solid #eee;\\n      border-radius: 5px 5px 0 0;\\n\\n      & > .ql-formats {\\n        margin-right: 5px;\\n\\n        & > button {\\n          width: 20px;\\n          height: 20px;\\n        }\\n      }\\n    }\\n\\n    .ql-container {\\n      border: 1px solid #eee;\\n      border-radius: 0 0 5px 5px;\\n      font-size: 11px;\\n\\n      & > .ql-editor {\\n        &::-webkit-scrollbar {\\n          width: 4px;\\n          cursor: pointer;\\n        }\\n        &::-webkit-scrollbar-thumb {\\n          border-radius: 2px;\\n          background-color: #ccc;\\n        }\\n      }\\n    }\\n\\n    .ql-picker {\\n      font-size: 10px;\\n    }\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = _tagged_template_literal([\n        \"\\n  \",\n        \"\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst QuillWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styled__QuillWrapper\",\n    componentId: \"sc-bbd720a-0\"\n})(_templateObject1(), (param)=>{\n    let { theme  } = param;\n    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject());\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VkaXRvci9zdHlsZWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUV6QyxNQUFNRSxlQUFlRix3RUFBVTs7O3VCQUNsQztRQUFDLEVBQUVJLE1BQUssRUFBRTtXQUFLSCxzREFBR0E7R0F5Q3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9lZGl0b3Ivc3R5bGVkLnRzPzI4ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUXVpbGxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcclxuICAgIC5xdWlsbCB7XHJcbiAgICAgIHdpZHRoOiAzNDVweDtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucWwtdG9vbGJhciB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG5cclxuICAgICAgJiA+IC5xbC1mb3JtYXRzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucWwtY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAgICYgPiAucWwtZWRpdG9yIHtcclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5xbC1waWNrZXIge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgYH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsIlF1aWxsV3JhcHBlciIsImRpdiIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/common/editor/styled.ts\n"));

/***/ })

});