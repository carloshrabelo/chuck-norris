webpackHotUpdate_N_E("pages/_app",{

/***/ "./layout/Header.js":
/*!**************************!*\
  !*** ./layout/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Dropdown */ \"./components/Dropdown/index.js\");\n/* harmony import */ var reducers_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reducers/categories */ \"./reducers/categories.js\");\n\n\nvar _jsxFileName = \"/Users/carloshenriquerabelodeoliveira/Workspace/chuck-norris/layout/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar HeaderDOM = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"Header__HeaderDOM\",\n  componentId: \"sc-37i6hb-0\"\n})([\"background:var(--paper-bg);box-shadow:var(--box-shadow);display:flex;gap:var(--space-lg);margin-bottom:var(--space-md);padding:var(--space) var(--space-lg);position:sticky;top:0;z-index:99;h1{margin:0;}\"]);\n_c = HeaderDOM;\nvar DropdownDOM = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(components_Dropdown__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"]).withConfig({\n  displayName: \"Header__DropdownDOM\",\n  componentId: \"sc-37i6hb-1\"\n})([\"margin:calc(-1 * var(--space)) 0;padding:var(--space) var(--space-lg);\"]);\n_c2 = DropdownDOM;\n\nvar Header = function Header() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(reducers_categories__WEBPACK_IMPORTED_MODULE_7__[\"selector\"]),\n      data = _useSelector.data,\n      isLoading = _useSelector.isLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    !isLoading && !data.length && dispatch(Object(reducers_categories__WEBPACK_IMPORTED_MODULE_7__[\"search\"])());\n  }, [isLoading, data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HeaderDOM, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"Chuck Norris\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DropdownDOM, {\n      label: \"Categories\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        children: data.map(function (category, key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Dropdown__WEBPACK_IMPORTED_MODULE_6__[\"Item\"], {\n            href: category,\n            children: category\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"ZE/4rcZB/J0hg5SF7SjpfaYOpmk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c3 = Header;\nHeader.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeaderDOM\");\n$RefreshReg$(_c2, \"DropdownDOM\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0hlYWRlci5qcz82NTUyIl0sIm5hbWVzIjpbIkhlYWRlckRPTSIsInN0eWxlZCIsImhlYWRlciIsIkRyb3Bkb3duRE9NIiwiRHJvcGRvd24iLCJIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RvciIsImRhdGEiLCJpc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJzZWFyY2giLCJtYXAiLCJjYXRlZ29yeSIsImtleSIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLGtOQUFmO0tBQU1GLFM7QUFnQk4sSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDhFQUFqQjtNQUFNRCxXOztBQUtOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEbUIscUJBR1NDLCtEQUFXLENBQUNDLDREQUFELENBSHBCO0FBQUEsTUFHWEMsSUFIVyxnQkFHWEEsSUFIVztBQUFBLE1BR0xDLFNBSEssZ0JBR0xBLFNBSEs7O0FBS25CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxLQUFDRCxTQUFELElBQWMsQ0FBQ0QsSUFBSSxDQUFDRyxNQUFwQixJQUE4QlAsUUFBUSxDQUFDUSxrRUFBTSxFQUFQLENBQXRDO0FBQ0QsR0FGUSxFQUVOLENBQUNILFNBQUQsRUFBWUQsSUFBWixDQUZNLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsV0FBRDtBQUFhLFdBQUssRUFBQyxZQUFuQjtBQUFBLDZCQUNFO0FBQUEsa0JBQ0dBLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLFFBQUQsRUFBV0MsR0FBWDtBQUFBLDhCQUNSLHFFQUFDLHdEQUFEO0FBQWdCLGdCQUFJLEVBQUVELFFBQXRCO0FBQUEsc0JBQ0dBO0FBREgsYUFBV0MsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0EzQkQ7O0dBQU1aLE07VUFDYUUsdUQsRUFFV0MsdUQ7OztNQUh4QkgsTTtBQTZCTkEsTUFBTSxDQUFDYSxTQUFQLEdBQW1CO0FBQ2pCQyxVQUFRLEVBQUVDLGlEQUFTLENBQUNDO0FBREgsQ0FBbkI7QUFJZWhCLHFFQUFmIiwiZmlsZSI6Ii4vbGF5b3V0L0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IERyb3Bkb3duLCBJdGVtIH0gZnJvbSAnY29tcG9uZW50cy9Ecm9wZG93bidcbmltcG9ydCB7IHNlYXJjaCwgc2VsZWN0b3IgfSBmcm9tICdyZWR1Y2Vycy9jYXRlZ29yaWVzJ1xuXG5jb25zdCBIZWFkZXJET00gPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1iZyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZSkgdmFyKC0tc3BhY2UtbGcpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmBcblxuY29uc3QgRHJvcGRvd25ET00gPSBzdHlsZWQoRHJvcGRvd24pYFxuICBtYXJnaW46IGNhbGMoLTEgKiB2YXIoLS1zcGFjZSkpIDA7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlKSB2YXIoLS1zcGFjZS1sZyk7XG5gXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKHNlbGVjdG9yKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIWlzTG9hZGluZyAmJiAhZGF0YS5sZW5ndGggJiYgZGlzcGF0Y2goc2VhcmNoKCkpXG4gIH0sIFtpc0xvYWRpbmcsIGRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlckRPTT5cbiAgICAgIDxoMT5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgPGE+Q2h1Y2sgTm9ycmlzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2gxPlxuICAgICAgPERyb3Bkb3duRE9NIGxhYmVsPSdDYXRlZ29yaWVzJz5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGNhdGVnb3J5LCBrZXkpID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17a2V5fSBocmVmPXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L0Ryb3Bkb3duRE9NPlxuICAgIDwvSGVhZGVyRE9NPlxuICApXG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/Header.js\n");

/***/ })

})