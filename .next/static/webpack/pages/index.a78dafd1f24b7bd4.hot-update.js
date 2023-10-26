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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./src/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_task_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task/task */ \"./src/components/task/task.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_index_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/index.json */ \"./data/index.json\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header/header */ \"./src/components/header/header.jsx\");\n/* harmony import */ var _components_aside_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/aside/aside */ \"./src/components/aside/aside.jsx\");\n/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/search/search */ \"./src/components/search/search.jsx\");\n/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useSearch */ \"./src/hooks/useSearch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [tasksState, setTasksState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_data_index_json__WEBPACK_IMPORTED_MODULE_3__);\n    const [searchState, setSearchState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [searchedTasks] = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(tasksState.tasks, tasksState);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (searchState.length > 0) {}\n        const newState = {\n            title: tasksState.title,\n            tasks: searchedTasks\n        };\n        setTasksState(newState);\n    }, [\n        searchedTasks\n    ]);\n    const handleTask = (title, typeOfClick)=>{\n        if (typeOfClick === \"delete\") {\n            const newState = {\n                title: tasksState.title,\n                tasks: tasksState.filter((task)=>{\n                    return task.title !== title;\n                })\n            };\n            setTasksState(newState);\n        } else if (typeOfClick === \"complete\") {\n            const newState = {\n                title: tasksState.title,\n                tasks: searchedTasks.map((task)=>{\n                    if (task.title === title) {\n                        task.isCompleted = !task.isCompleted;\n                        return task;\n                    } else return task;\n                })\n            };\n            setTasksState(newState);\n        }\n    };\n    const handleSearch = (event)=>{\n        setSearchState(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                logoText: \"Creative Digital Production\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_aside_aside__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        logoText: \"Список задач\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tasksWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleWrapper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainTitle),\n                                        children: tasksState.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        handleSearch: handleSearch\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainTasks),\n                                children: tasksState.tasks.map((task)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        handlerClick: handleTask,\n                                        title: task.title,\n                                        description: task.text,\n                                        isCompleted: task.isCompleted\n                                    }, task.title, false, {\n                                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 36\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"b1Fj7dwg0v1B0X0cGoVJtIPpU+s=\", false, function() {\n    return [\n        _hooks_useSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNOO0FBRUM7QUFDRjtBQUNNO0FBQ0g7QUFDRztBQUNOO0FBRTFDLE1BQU1TLFFBQVE7O0lBRVYsTUFBTSxDQUFDQyxZQUFXQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDQyw2Q0FBS0E7SUFDakQsTUFBTSxDQUFDUSxhQUFZQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU0sQ0FBQ1csY0FBYyxHQUFHTiw0REFBU0EsQ0FBQ0UsV0FBV04sS0FBSyxFQUFDTTtJQUVuRFIsZ0RBQVNBLENBQUM7UUFDTixJQUFJVSxZQUFZRyxNQUFNLEdBQUUsR0FBRyxDQUUzQjtRQUNBLE1BQU1DLFdBQVc7WUFDVEMsT0FBTVAsV0FBV08sS0FBSztZQUN0QmIsT0FBTVU7UUFDVjtRQUNKSCxjQUFjSztJQUNsQixHQUFFO1FBQUNGO0tBQWM7SUFFakIsTUFBTUksYUFBYSxDQUFDRCxPQUFNRTtRQUN0QixJQUFJQSxnQkFBYyxVQUFVO1lBQ3hCLE1BQU1ILFdBQVc7Z0JBQ2JDLE9BQU1QLFdBQVdPLEtBQUs7Z0JBQ3RCYixPQUFNTSxXQUFXVSxNQUFNLENBQUMsQ0FBQ0M7b0JBQ3JCLE9BQU9BLEtBQUtKLEtBQUssS0FBR0E7Z0JBQ3hCO1lBQ0o7WUFDQU4sY0FBY0s7UUFDbEIsT0FBTyxJQUFJRyxnQkFBYyxZQUFZO1lBQ2pDLE1BQU1ILFdBQVc7Z0JBQ2JDLE9BQU1QLFdBQVdPLEtBQUs7Z0JBQ3RCYixPQUFNVSxjQUFjUSxHQUFHLENBQUMsQ0FBQ0Q7b0JBQ3JCLElBQUlBLEtBQUtKLEtBQUssS0FBS0EsT0FBTzt3QkFDdEJJLEtBQUtFLFdBQVcsR0FBRyxDQUFDRixLQUFLRSxXQUFXO3dCQUNwQyxPQUFPRjtvQkFDWCxPQUFPLE9BQU9BO2dCQUNsQjtZQUNKO1lBQ0FWLGNBQWNLO1FBQ2xCO0lBQ0o7SUFFQSxNQUFNUSxlQUFlLENBQUNDO1FBQ2xCWixlQUFlWSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDckM7SUFFQSxxQkFDSTs7MEJBQ0EsOERBQUN0QixpRUFBTUE7Z0JBQUN1QixVQUFTOzs7Ozs7MEJBQ2pCLDhEQUFDQztnQkFBS0MsV0FBVzlCLHVFQUFXOztrQ0FDeEIsOERBQUNNLCtEQUFLQTt3QkFBQ3NCLFVBQVM7Ozs7OztrQ0FDaEIsOERBQUNHO3dCQUFRRCxXQUFXOUIsK0VBQW1COzswQ0FDbkMsOERBQUNpQztnQ0FBSUgsV0FBVzlCLCtFQUFtQjs7a0RBQy9CLDhEQUFDbUM7d0NBQUdMLFdBQVc5Qiw0RUFBZ0I7a0RBQUdVLFdBQVdPLEtBQUs7Ozs7OztrREFDbEQsOERBQUNWLGlFQUFNQTt3Q0FBQ2lCLGNBQWNBOzs7Ozs7Ozs7Ozs7MENBRTFCLDhEQUFDUztnQ0FBSUgsV0FBVzlCLDRFQUFnQjswQ0FFeEJVLFdBQVdOLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDRDtvQ0FDbEIscUJBQU8sOERBQUNwQiw2REFBSUE7d0NBQWtCcUMsY0FBY3BCO3dDQUFZRCxPQUFPSSxLQUFLSixLQUFLO3dDQUFFc0IsYUFBYWxCLEtBQUttQixJQUFJO3dDQUFFakIsYUFBYUYsS0FBS0UsV0FBVzt1Q0FBOUdGLEtBQUtKLEtBQUs7Ozs7O2dDQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0FqRU1SOztRQUlzQkQsd0RBQVNBOzs7S0FKL0JDOztBQTRFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFzay90YXNrXCI7XG5pbXBvcnQge2dldEluZGV4UGFnZX0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGFza3MgZnJvbSAnLi4vLi4vZGF0YS9pbmRleC5qc29uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEFzaWRlIGZyb20gJ0AvY29tcG9uZW50cy9hc2lkZS9hc2lkZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ0AvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCB1c2VTZWFyY2ggZnJvbSAnQC9ob29rcy91c2VTZWFyY2gnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt0YXNrc1N0YXRlLHNldFRhc2tzU3RhdGVdID0gdXNlU3RhdGUodGFza3MpO1xuICAgIGNvbnN0IFtzZWFyY2hTdGF0ZSxzZXRTZWFyY2hTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlYXJjaGVkVGFza3NdID0gdXNlU2VhcmNoKHRhc2tzU3RhdGUudGFza3MsdGFza3NTdGF0ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoU3RhdGUubGVuZ3RoID4wKSB7XG5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTp0YXNrc1N0YXRlLnRpdGxlLFxuICAgICAgICAgICAgICAgIHRhc2tzOnNlYXJjaGVkVGFza3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgc2V0VGFza3NTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfSxbc2VhcmNoZWRUYXNrc10pXG5cbiAgICBjb25zdCBoYW5kbGVUYXNrID0gKHRpdGxlLHR5cGVPZkNsaWNrKSA9PiB7XG4gICAgICAgIGlmICh0eXBlT2ZDbGljaz09PSdkZWxldGUnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTp0YXNrc1N0YXRlLnRpdGxlLFxuICAgICAgICAgICAgICAgIHRhc2tzOnRhc2tzU3RhdGUuZmlsdGVyKCh0YXNrKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay50aXRsZSE9PXRpdGxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRhc2tzU3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZkNsaWNrPT09J2NvbXBsZXRlJykge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6dGFza3NTdGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICB0YXNrczpzZWFyY2hlZFRhc2tzLm1hcCgodGFzayk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmlzQ29tcGxldGVkID0gIXRhc2suaXNDb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdGFza1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUYXNrc1N0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hTdGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkZXIgbG9nb1RleHQ9J0NyZWF0aXZlIERpZ2l0YWwgUHJvZHVjdGlvbicvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxBc2lkZSBsb2dvVGV4dD0n0KHQv9C40YHQvtC6INC30LDQtNCw0YcnLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRhc2tzV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubWFpblRpdGxlfT57dGFza3NTdGF0ZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17aGFuZGxlU2VhcmNofS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluVGFza3N9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrc1N0YXRlLnRhc2tzLm1hcCgodGFzayk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRhc2sga2V5PXt0YXNrLnRpdGxlfSBoYW5kbGVyQ2xpY2s9e2hhbmRsZVRhc2t9IHRpdGxlPXt0YXNrLnRpdGxlfSBkZXNjcmlwdGlvbj17dGFzay50ZXh0fSBpc0NvbXBsZXRlZD17dGFzay5pc0NvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4UGFnZSA9IGF3YWl0IGdldEluZGV4UGFnZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IGluZGV4UGFnZSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsic3R5bGVzIiwiVGFzayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidGFza3MiLCJIZWFkZXIiLCJBc2lkZSIsIlNlYXJjaCIsInVzZVNlYXJjaCIsIkluZGV4IiwidGFza3NTdGF0ZSIsInNldFRhc2tzU3RhdGUiLCJzZWFyY2hTdGF0ZSIsInNldFNlYXJjaFN0YXRlIiwic2VhcmNoZWRUYXNrcyIsImxlbmd0aCIsIm5ld1N0YXRlIiwidGl0bGUiLCJoYW5kbGVUYXNrIiwidHlwZU9mQ2xpY2siLCJmaWx0ZXIiLCJ0YXNrIiwibWFwIiwiaXNDb21wbGV0ZWQiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibG9nb1RleHQiLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInRhc2tzV3JhcHBlciIsImRpdiIsInRpdGxlV3JhcHBlciIsImgyIiwibWFpblRpdGxlIiwibWFpblRhc2tzIiwiaGFuZGxlckNsaWNrIiwiZGVzY3JpcHRpb24iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});