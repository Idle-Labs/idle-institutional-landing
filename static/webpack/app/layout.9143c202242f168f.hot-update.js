"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/theme.tsx":
/*!***************************!*\
  !*** ./src/app/theme.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts */ \"(app-pages-browser)/./src/app/fonts.tsx\");\n\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: {\n        initialColorMode: \"dark\",\n        useSystemColorMode: false\n    },\n    fonts: {\n        heading: _fonts__WEBPACK_IMPORTED_MODULE_0__.openSans.style.fontFamily,\n        body: _fonts__WEBPACK_IMPORTED_MODULE_0__.sourceSans.style.fontFamily\n    },\n    colors: {\n        white: \"#FFFFFF\",\n        dark: \"#1B1E27\",\n        primary: \"#1682FE\",\n        bgWhite: {\n            backgroundColor: \"white\",\n            color: \"dark\"\n        }\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"dark\",\n                color: \"white\"\n            },\n            a: {\n                _hover: {\n                    textDecoration: \"none\"\n                }\n            }\n        }\n    },\n    textStyles: {\n        base: {\n            fontSize: \"sm\",\n            fontWeight: 500\n        }\n    },\n    components: {\n        Button: {\n            variants: {\n                neutral: {\n                    bg: \"white\",\n                    color: \"gray.800\",\n                    _hover: {\n                        bg: \"gray.200\"\n                    }\n                },\n                outline: {\n                    color: \"gray.800\"\n                }\n            },\n            defaultProps: {\n                variant: \"neutral\"\n            },\n            sizes: {\n                xl: {\n                    fontSize: \"1.4rem\",\n                    fontWeight: 600,\n                    padding: \"1rem 1.5rem\"\n                }\n            }\n        },\n        Modal: {\n            variants: {\n                dark: {\n                    dialog: {\n                        bg: \"dark\",\n                        padding: \"1rem 3rem\"\n                    }\n                }\n            }\n        },\n        Input: {\n            sizes: {\n                xl: {\n                    field: {\n                        fontSize: \"2rem\",\n                        fontWeight: \"bold\",\n                        borderRadius: \"xl\"\n                    }\n                }\n            },\n            variants: {\n                dark: {\n                    field: {\n                        bg: \"grey\",\n                        border: 0,\n                        caretColor: \"transparent\",\n                        _focus: {\n                            bg: \"primary\"\n                        }\n                    }\n                }\n            }\n        }\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGhlbWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUNBO0FBRXZDLE1BQU1HLFFBQVFILDZEQUFXQSxDQUFDO0lBQy9CSSxRQUFRO1FBQ05DLGtCQUFrQjtRQUNsQkMsb0JBQW9CO0lBQ3RCO0lBQ0FDLE9BQU87UUFDTEMsU0FBU1AsNENBQVFBLENBQUNRLEtBQUssQ0FBQ0MsVUFBVTtRQUNsQ0MsTUFBTVQsOENBQVVBLENBQUNPLEtBQUssQ0FBQ0MsVUFBVTtJQUNuQztJQUNBRSxRQUFRO1FBQ05DLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsaUJBQWlCO1lBQ2pCQyxPQUFPO1FBQ1Q7SUFDRjtJQUNBQyxRQUFRO1FBQ05DLFFBQVE7WUFDTlQsTUFBTTtnQkFDSlUsSUFBSTtnQkFDSkgsT0FBTztZQUNUO1lBQ0FJLEdBQUc7Z0JBQ0RDLFFBQVE7b0JBQ05DLGdCQUFnQjtnQkFDbEI7WUFDRjtRQUNGO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxNQUFNO1lBQ0pDLFVBQVU7WUFDVkMsWUFBWTtRQUNkO0lBQ0Y7SUFDQUMsWUFBWTtRQUNWQyxRQUFRO1lBQ05DLFVBQVU7Z0JBQ1JDLFNBQVM7b0JBQ1BYLElBQUk7b0JBQ0pILE9BQU87b0JBQ1BLLFFBQVE7d0JBQ05GLElBQUk7b0JBQ047Z0JBQ0Y7Z0JBQ0FZLFNBQVM7b0JBQ1BmLE9BQU87Z0JBQ1Q7WUFDRjtZQUNBZ0IsY0FBYztnQkFDWkMsU0FBUztZQUNYO1lBQ0FDLE9BQU87Z0JBQ0xDLElBQUk7b0JBQ0ZWLFVBQVU7b0JBQ1ZDLFlBQVk7b0JBQ1pVLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGO1FBQ0FDLE9BQU87WUFDTFIsVUFBVTtnQkFDUmpCLE1BQU07b0JBQ0owQixRQUFRO3dCQUNObkIsSUFBSTt3QkFDSmlCLFNBQVM7b0JBQ1g7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FHLE9BQU87WUFDTEwsT0FBTztnQkFDTEMsSUFBSTtvQkFDRkssT0FBTzt3QkFDTGYsVUFBVTt3QkFDVkMsWUFBWTt3QkFDWmUsY0FBYztvQkFDaEI7Z0JBQ0Y7WUFDRjtZQUNBWixVQUFVO2dCQUNSakIsTUFBTTtvQkFDSjRCLE9BQU87d0JBQ0xyQixJQUFJO3dCQUNKdUIsUUFBUTt3QkFDUkMsWUFBWTt3QkFDWkMsUUFBUTs0QkFDTnpCLElBQUk7d0JBQ047b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdGhlbWUudHN4PzM5ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgb3BlblNhbnMsIHNvdXJjZVNhbnMgfSBmcm9tICcuL2ZvbnRzJ1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbmZpZzoge1xuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxuICB9LFxuICBmb250czoge1xuICAgIGhlYWRpbmc6IG9wZW5TYW5zLnN0eWxlLmZvbnRGYW1pbHksXG4gICAgYm9keTogc291cmNlU2Fucy5zdHlsZS5mb250RmFtaWx5LFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICB3aGl0ZTogJyNGRkZGRkYnLFxuICAgIGRhcms6ICcjMUIxRTI3JyxcbiAgICBwcmltYXJ5OiAnIzE2ODJGRScsXG4gICAgYmdXaGl0ZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgY29sb3I6ICdkYXJrJyxcbiAgICB9LFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6ICdkYXJrJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgICAgYToge1xuICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0ZXh0U3R5bGVzOiB7XG4gICAgYmFzZToge1xuICAgICAgZm9udFNpemU6ICdzbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEJ1dHRvbjoge1xuICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICAgIGNvbG9yOiAnZ3JheS44MDAnLFxuICAgICAgICAgIF9ob3Zlcjoge1xuICAgICAgICAgICAgYmc6ICdncmF5LjIwMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgIGNvbG9yOiAnZ3JheS44MDAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB2YXJpYW50OiAnbmV1dHJhbCcsXG4gICAgICB9LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgeGw6IHtcbiAgICAgICAgICBmb250U2l6ZTogJzEuNHJlbScsXG4gICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgIHBhZGRpbmc6ICcxcmVtIDEuNXJlbScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTW9kYWw6IHtcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIGRhcms6IHtcbiAgICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgIGJnOiAnZGFyaycsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMXJlbSAzcmVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIElucHV0OiB7XG4gICAgICBzaXplczoge1xuICAgICAgICB4bDoge1xuICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAneGwnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgZGFyazoge1xuICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICBiZzogJ2dyZXknLFxuICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgY2FyZXRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIF9mb2N1czoge1xuICAgICAgICAgICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm9wZW5TYW5zIiwic291cmNlU2FucyIsInRoZW1lIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsImZvbnRzIiwiaGVhZGluZyIsInN0eWxlIiwiZm9udEZhbWlseSIsImJvZHkiLCJjb2xvcnMiLCJ3aGl0ZSIsImRhcmsiLCJwcmltYXJ5IiwiYmdXaGl0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic3R5bGVzIiwiZ2xvYmFsIiwiYmciLCJhIiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0U3R5bGVzIiwiYmFzZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJ2YXJpYW50cyIsIm5ldXRyYWwiLCJvdXRsaW5lIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsInNpemVzIiwieGwiLCJwYWRkaW5nIiwiTW9kYWwiLCJkaWFsb2ciLCJJbnB1dCIsImZpZWxkIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY2FyZXRDb2xvciIsIl9mb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/theme.tsx\n"));

/***/ })

});