webpackHotUpdate_N_E("pages/_app",{

/***/ "./layout/Header.js":
/*!**************************!*\
  !*** ./layout/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Dropdown */ \"./components/Dropdown/index.js\");\n/* harmony import */ var reducers_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reducers/categories */ \"./reducers/categories.js\");\n\n\nvar _jsxFileName = \"/Users/carloshenriquerabelodeoliveira/Workspace/chuck-norris/layout/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar HeaderDOM = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderDOM\",\n  componentId: \"sc-37i6hb-0\"\n})([\"background:var(--paper-bg);box-shadow:var(--box-shadow);display:flex;gap:var(--space-lg);margin-bottom:var(--space-md);padding:var(--space) var(--space-lg);position:sticky;top:0;z-index:99;h1{margin:0;}\"]);\n_c = HeaderDOM;\nvar DropdownDOM = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(components_Dropdown__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"]).withConfig({\n  displayName: \"Header__DropdownDOM\",\n  componentId: \"sc-37i6hb-1\"\n})([\"margin:calc(-1 * var(--space)) 0;padding:var(--space) var(--space-lg);text-transform:capitalize;\", \"{color:var(--secondary);font-family:var(--font-family-header);}\"], components_Dropdown__WEBPACK_IMPORTED_MODULE_6__[\"Label\"]);\n_c2 = DropdownDOM;\n\nvar Header = function Header() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(reducers_categories__WEBPACK_IMPORTED_MODULE_7__[\"selector\"]),\n      data = _useSelector.data,\n      isLoading = _useSelector.isLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    !isLoading && !data.length && dispatch(Object(reducers_categories__WEBPACK_IMPORTED_MODULE_7__[\"search\"])());\n  }, [isLoading, data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HeaderDOM, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"Chuck Norris\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownDOM, {\n      label: \"Categories\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        children: data.map(function (category, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Dropdown__WEBPACK_IMPORTED_MODULE_6__[\"Item\"], {\n            href: category,\n            children: category\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"ZE/4rcZB/J0hg5SF7SjpfaYOpmk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c3 = Header;\nHeader.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeaderDOM\");\n$RefreshReg$(_c2, \"DropdownDOM\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0hlYWRlci5qcz82NTUyIl0sIm5hbWVzIjpbIkhlYWRlckRPTSIsInN0eWxlZCIsImhlYWRlciIsIkRyb3Bkb3duRE9NIiwiRHJvcGRvd24iLCJMYWJlbCIsIkhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNlbGVjdG9yIiwiZGF0YSIsImlzTG9hZGluZyIsInVzZUVmZmVjdCIsImxlbmd0aCIsInNlYXJjaCIsIm1hcCIsImNhdGVnb3J5Iiwia2V5IiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsa05BQWY7S0FBTUYsUztBQWdCTixJQUFNRyxXQUFXLEdBQUdGLGlFQUFNLENBQUNHLDREQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNEtBS2JDLHlEQUxhLENBQWpCO01BQU1GLFc7O0FBV04sSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQixxQkFHU0MsK0RBQVcsQ0FBQ0MsNERBQUQsQ0FIcEI7QUFBQSxNQUdYQyxJQUhXLGdCQUdYQSxJQUhXO0FBQUEsTUFHTEMsU0FISyxnQkFHTEEsU0FISzs7QUFLbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLEtBQUNELFNBQUQsSUFBYyxDQUFDRCxJQUFJLENBQUNHLE1BQXBCLElBQThCUCxRQUFRLENBQUNRLGtFQUFNLEVBQVAsQ0FBdEM7QUFDRCxHQUZRLEVBRU4sQ0FBQ0gsU0FBRCxFQUFZRCxJQUFaLENBRk0sQ0FBVDtBQUlBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSxxRUFBQyxXQUFEO0FBQWEsV0FBSyxFQUFDLFlBQW5CO0FBQUEsNkJBQ0U7QUFBQSxrQkFDR0EsSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYO0FBQUEsOEJBQ1IscUVBQUMsd0RBQUQ7QUFBZ0IsZ0JBQUksRUFBRUQsUUFBdEI7QUFBQSxzQkFDR0E7QUFESCxhQUFXQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTNCRDs7R0FBTVosTTtVQUNhRSx1RCxFQUVXQyx1RDs7O01BSHhCSCxNO0FBNkJOQSxNQUFNLENBQUNhLFNBQVAsR0FBbUI7QUFDakJDLFVBQVEsRUFBRUMsaURBQVMsQ0FBQ0M7QUFESCxDQUFuQjtBQUllaEIscUVBQWYiLCJmaWxlIjoiLi9sYXlvdXQvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRHJvcGRvd24sIExhYmVsLCBJdGVtIH0gZnJvbSAnY29tcG9uZW50cy9Ecm9wZG93bidcbmltcG9ydCB7IHNlYXJjaCwgc2VsZWN0b3IgfSBmcm9tICdyZWR1Y2Vycy9jYXRlZ29yaWVzJ1xuXG5jb25zdCBIZWFkZXJET00gPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1iZyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZSkgdmFyKC0tc3BhY2UtbGcpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmBcblxuY29uc3QgRHJvcGRvd25ET00gPSBzdHlsZWQoRHJvcGRvd24pYFxuICBtYXJnaW46IGNhbGMoLTEgKiB2YXIoLS1zcGFjZSkpIDA7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlKSB2YXIoLS1zcGFjZS1sZyk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICR7TGFiZWx9IHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGVyKTtcbiAgfVxuYFxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RvcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICFpc0xvYWRpbmcgJiYgIWRhdGEubGVuZ3RoICYmIGRpc3BhdGNoKHNlYXJjaCgpKVxuICB9LCBbaXNMb2FkaW5nLCBkYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXJET00+XG4gICAgICA8aDE+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhPkNodWNrIE5vcnJpczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9oMT5cbiAgICAgIDxEcm9wZG93bkRPTSBsYWJlbD0nQ2F0ZWdvcmllcyc+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAge2RhdGEubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgICAgICA8SXRlbSBrZXk9e2tleX0gaHJlZj17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9Ecm9wZG93bkRPTT5cbiAgICA8L0hlYWRlckRPTT5cbiAgKVxufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/Header.js\n");

/***/ })

})