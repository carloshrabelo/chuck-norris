webpackHotUpdate_N_E("pages/[category]",{

/***/ "./pages/[category].js":
/*!*****************************!*\
  !*** ./pages/[category].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var reducers_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers/categories */ \"./reducers/categories.js\");\n/* harmony import */ var containers_Joke_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/Joke/Card */ \"./containers/Joke/Card.js\");\n/* harmony import */ var reducers_jokes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reducers/jokes */ \"./reducers/jokes.js\");\n/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card */ \"./components/Card/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/carloshenriquerabelodeoliveira/Workspace/chuck-norris/pages/[category].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Hero = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"category__Hero\",\n  componentId: \"sc-19x7rtk-0\"\n})([\"justify-content:center;margin-bottom:var(--space);\"]);\n_c = Hero;\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"category__Main\",\n  componentId: \"sc-19x7rtk-1\"\n})([\"background-color:aquamarine;display:grid;gap:var(--space);grid-template-columns:repeat(auto-fit,minmax(100px,360px));justify-content:center;@media only screen and (max-width:600px){background-color:lightblue;}\"]);\n_c2 = Main;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var category = router.query.category;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(Object(reducers_jokes__WEBPACK_IMPORTED_MODULE_7__[\"selectorByCategory\"])(category)),\n      data = _useSelector.data,\n      isLoading = _useSelector.isLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    !isLoading && !data.length && dispatch(Object(reducers_categories__WEBPACK_IMPORTED_MODULE_5__[\"search\"])());\n  }, [isLoading, data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Hero, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(containers_Joke_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        category: category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n      children: data.slice(1, data.length).map(function (d) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          children: d.value\n        }, d.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"FpG8SF3h73T2XFla4xhF4oKCIXg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c2, \"Main\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NhdGVnb3J5XS5qcz9jMDJmIl0sIm5hbWVzIjpbIkhlcm8iLCJzdHlsZWQiLCJkaXYiLCJNYWluIiwiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXRlZ29yeSIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzZWxlY3RvckJ5Q2F0ZWdvcnkiLCJkYXRhIiwiaXNMb2FkaW5nIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwic2VhcmNoIiwic2xpY2UiLCJtYXAiLCJkIiwidmFsdWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBEQUFWO0tBQU1GLEk7QUFLTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseU5BQVY7TUFBTUMsSTtBQWFTLFNBQVNDLElBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDOUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGOEIsTUFHdEJDLFFBSHNCLEdBR1RGLE1BQU0sQ0FBQ0csS0FIRSxDQUd0QkQsUUFIc0I7O0FBQUEscUJBS0ZFLCtEQUFXLENBQUNDLHlFQUFrQixDQUFDSCxRQUFELENBQW5CLENBTFQ7QUFBQSxNQUt0QkksSUFMc0IsZ0JBS3RCQSxJQUxzQjtBQUFBLE1BS2hCQyxTQUxnQixnQkFLaEJBLFNBTGdCOztBQU85QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsS0FBQ0QsU0FBRCxJQUFjLENBQUNELElBQUksQ0FBQ0csTUFBcEIsSUFBOEJYLFFBQVEsQ0FBQ1ksa0VBQU0sRUFBUCxDQUF0QztBQUNELEdBRlEsRUFFTixDQUFDSCxTQUFELEVBQVlELElBQVosQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxJQUFEO0FBQUEsNkJBQ0UscUVBQUMsNERBQUQ7QUFBVSxnQkFBUSxFQUFFSjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsSUFBRDtBQUFBLGdCQUNHSSxJQUFJLENBQUNLLEtBQUwsQ0FBVyxDQUFYLEVBQWNMLElBQUksQ0FBQ0csTUFBbkIsRUFBMkJHLEdBQTNCLENBQStCLFVBQUFDLENBQUM7QUFBQSw0QkFDL0IscUVBQUMsdURBQUQ7QUFBQSxvQkFBa0JBLENBQUMsQ0FBQ0M7QUFBcEIsV0FBV0QsQ0FBQyxDQUFDRSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRCtCO0FBQUEsT0FBaEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQVlEOztHQXZCdUJsQixJO1VBQ0xFLHVELEVBQ0ZFLHFELEVBR2FHLHVEOzs7TUFMTlAsSSIsImZpbGUiOiIuL3BhZ2VzL1tjYXRlZ29yeV0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgc2VhcmNoIH0gZnJvbSAncmVkdWNlcnMvY2F0ZWdvcmllcydcbmltcG9ydCBDYXJkSm9rZSBmcm9tICdjb250YWluZXJzL0pva2UvQ2FyZCdcbmltcG9ydCB7IHNlbGVjdG9yQnlDYXRlZ29yeSB9IGZyb20gJ3JlZHVjZXJzL2pva2VzJ1xuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50cy9DYXJkJ1xuXG5jb25zdCBIZXJvID0gc3R5bGVkLmRpdmBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlKTtcbmBcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogdmFyKC0tc3BhY2UpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAzNjBweCkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHJvdXRlci5xdWVyeVxuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RvckJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIWlzTG9hZGluZyAmJiAhZGF0YS5sZW5ndGggJiYgZGlzcGF0Y2goc2VhcmNoKCkpXG4gIH0sIFtpc0xvYWRpbmcsIGRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvPlxuICAgICAgICA8Q2FyZEpva2UgY2F0ZWdvcnk9e2NhdGVnb3J5fSAvPlxuICAgICAgPC9IZXJvPlxuICAgICAgPE1haW4+XG4gICAgICAgIHtkYXRhLnNsaWNlKDEsIGRhdGEubGVuZ3RoKS5tYXAoZCA9PiAoXG4gICAgICAgICAgPENhcmQga2V5PXtkLmlkfT57ZC52YWx1ZX08L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[category].js\n");

/***/ })

})