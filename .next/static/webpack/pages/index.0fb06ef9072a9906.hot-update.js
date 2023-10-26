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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./src/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_task_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task/task */ \"./src/components/task/task.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_index_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/index.json */ \"./data/index.json\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header/header */ \"./src/components/header/header.jsx\");\n/* harmony import */ var _components_aside_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/aside/aside */ \"./src/components/aside/aside.jsx\");\n/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/search/search */ \"./src/components/search/search.jsx\");\n/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useSearch */ \"./src/hooks/useSearch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [tasksState, setTasksState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_data_index_json__WEBPACK_IMPORTED_MODULE_3__);\n    const [searchState, setSearchState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [searchedTasks] = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_data_index_json__WEBPACK_IMPORTED_MODULE_3__.tasks, searchState);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newState = {\n            title: tasksState.title,\n            tasks: searchedTasks\n        };\n        setTasksState(newState);\n    }, [\n        searchedTasks\n    ]);\n    const handleTask = (title, typeOfClick)=>{\n        if (typeOfClick === \"delete\") {\n            const newState = {\n                title: tasksState.title,\n                tasks: searchedTasks.filter((task)=>{\n                    return task.title !== title;\n                })\n            };\n            setTasksState(newState);\n        } else if (typeOfClick === \"complete\") {\n            const newState = {\n                title: tasksState.title,\n                tasks: searchedTasks.map((task)=>{\n                    if (task.title === title) {\n                        task.isCompleted = !task.isCompleted;\n                        return task;\n                    } else return task;\n                })\n            };\n            setTasksState(newState);\n        }\n    };\n    const handleSearch = (event)=>{\n        setSearchState(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                logoText: \"Creative Digital Production\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_aside_aside__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        logoText: \"Список задач\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tasksWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titleWrapper),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainTitle),\n                                        children: tasksState.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        handleSearch: handleSearch\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainTasks),\n                                children: searchedTasks.map((task)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        handlerClick: handleTask,\n                                        title: task.title,\n                                        description: task.text,\n                                        isCompleted: task.isCompleted\n                                    }, task.title, false, {\n                                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 36\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mnew5\\\\Vadim\\\\Стажировки\\\\ONLY\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"b1Fj7dwg0v1B0X0cGoVJtIPpU+s=\", false, function() {\n    return [\n        _hooks_useSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNOO0FBRUM7QUFDRjtBQUNNO0FBQ0g7QUFDRztBQUNOO0FBRTFDLE1BQU1TLFFBQVE7O0lBRVYsTUFBTSxDQUFDQyxZQUFXQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDQyw2Q0FBS0E7SUFDakQsTUFBTSxDQUFDUSxhQUFZQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU0sQ0FBQ1csY0FBYyxHQUFHTiw0REFBU0EsQ0FBQ0osbURBQVcsRUFBQ1E7SUFFOUNWLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsV0FBVztZQUNUQyxPQUFNTixXQUFXTSxLQUFLO1lBQ3RCWixPQUFNVTtRQUNWO1FBQ0pILGNBQWNJO0lBQ2xCLEdBQUU7UUFBQ0Q7S0FBYztJQUVqQixNQUFNRyxhQUFhLENBQUNELE9BQU1FO1FBQ3RCLElBQUlBLGdCQUFjLFVBQVU7WUFDeEIsTUFBTUgsV0FBVztnQkFDYkMsT0FBTU4sV0FBV00sS0FBSztnQkFDdEJaLE9BQU1VLGNBQWNLLE1BQU0sQ0FBQyxDQUFDQztvQkFDeEIsT0FBT0EsS0FBS0osS0FBSyxLQUFHQTtnQkFDeEI7WUFDSjtZQUNBTCxjQUFjSTtRQUNsQixPQUFPLElBQUlHLGdCQUFjLFlBQVk7WUFDakMsTUFBTUgsV0FBVztnQkFDYkMsT0FBTU4sV0FBV00sS0FBSztnQkFDdEJaLE9BQU1VLGNBQWNPLEdBQUcsQ0FBQyxDQUFDRDtvQkFDckIsSUFBSUEsS0FBS0osS0FBSyxLQUFLQSxPQUFPO3dCQUN0QkksS0FBS0UsV0FBVyxHQUFHLENBQUNGLEtBQUtFLFdBQVc7d0JBQ3BDLE9BQU9GO29CQUNYLE9BQU8sT0FBT0E7Z0JBQ2xCO1lBQ0o7WUFDQVQsY0FBY0k7UUFDbEI7SUFDSjtJQUVBLE1BQU1RLGVBQWUsQ0FBQ0M7UUFDbEJYLGVBQWVXLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQztJQUVBLHFCQUNJOzswQkFDQSw4REFBQ3JCLGlFQUFNQTtnQkFBQ3NCLFVBQVM7Ozs7OzswQkFDakIsOERBQUNDO2dCQUFLQyxXQUFXN0IsdUVBQVc7O2tDQUN4Qiw4REFBQ00sK0RBQUtBO3dCQUFDcUIsVUFBUzs7Ozs7O2tDQUNoQiw4REFBQ0c7d0JBQVFELFdBQVc3QiwrRUFBbUI7OzBDQUNuQyw4REFBQ2dDO2dDQUFJSCxXQUFXN0IsK0VBQW1COztrREFDL0IsOERBQUNrQzt3Q0FBR0wsV0FBVzdCLDRFQUFnQjtrREFBR1UsV0FBV00sS0FBSzs7Ozs7O2tEQUNsRCw4REFBQ1QsaUVBQU1BO3dDQUFDZ0IsY0FBY0E7Ozs7Ozs7Ozs7OzswQ0FFMUIsOERBQUNTO2dDQUFJSCxXQUFXN0IsNEVBQWdCOzBDQUV4QmMsY0FBY08sR0FBRyxDQUFDLENBQUNEO29DQUNmLHFCQUFPLDhEQUFDbkIsNkRBQUlBO3dDQUFrQm9DLGNBQWNwQjt3Q0FBWUQsT0FBT0ksS0FBS0osS0FBSzt3Q0FBRXNCLGFBQWFsQixLQUFLbUIsSUFBSTt3Q0FBRWpCLGFBQWFGLEtBQUtFLFdBQVc7dUNBQTlHRixLQUFLSixLQUFLOzs7OztnQ0FDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBOURNUDs7UUFJc0JELHdEQUFTQTs7O0tBSi9CQzs7QUF5RU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBUYXNrIGZyb20gXCIuLi9jb21wb25lbnRzL3Rhc2svdGFza1wiO1xuaW1wb3J0IHtnZXRJbmRleFBhZ2V9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRhc2tzIGZyb20gJy4uLy4uL2RhdGEvaW5kZXguanNvbic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCBBc2lkZSBmcm9tICdAL2NvbXBvbmVudHMvYXNpZGUvYXNpZGUnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgdXNlU2VhcmNoIGZyb20gJ0AvaG9va3MvdXNlU2VhcmNoJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdGFza3NTdGF0ZSxzZXRUYXNrc1N0YXRlXSA9IHVzZVN0YXRlKHRhc2tzKTtcbiAgICBjb25zdCBbc2VhcmNoU3RhdGUsc2V0U2VhcmNoU3RhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWFyY2hlZFRhc2tzXSA9IHVzZVNlYXJjaCh0YXNrcy50YXNrcyxzZWFyY2hTdGF0ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6dGFza3NTdGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICB0YXNrczpzZWFyY2hlZFRhc2tzXG4gICAgICAgICAgICB9XG4gICAgICAgIHNldFRhc2tzU3RhdGUobmV3U3RhdGUpO1xuICAgIH0sW3NlYXJjaGVkVGFza3NdKVxuXG4gICAgY29uc3QgaGFuZGxlVGFzayA9ICh0aXRsZSx0eXBlT2ZDbGljaykgPT4ge1xuICAgICAgICBpZiAodHlwZU9mQ2xpY2s9PT0nZGVsZXRlJykge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6dGFza3NTdGF0ZS50aXRsZSxcbiAgICAgICAgICAgICAgICB0YXNrczpzZWFyY2hlZFRhc2tzLmZpbHRlcigodGFzayk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sudGl0bGUhPT10aXRsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUYXNrc1N0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2ZDbGljaz09PSdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOnRhc2tzU3RhdGUudGl0bGUsXG4gICAgICAgICAgICAgICAgdGFza3M6c2VhcmNoZWRUYXNrcy5tYXAoKHRhc2spPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlZCA9ICF0YXNrLmlzQ29tcGxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFza1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRhc2tcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGFza3NTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoU3RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8SGVhZGVyIGxvZ29UZXh0PSdDcmVhdGl2ZSBEaWdpdGFsIFByb2R1Y3Rpb24nLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8QXNpZGUgbG9nb1RleHQ9J9Ch0L/QuNGB0L7QuiDQt9Cw0LTQsNGHJy8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50YXNrc1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm1haW5UaXRsZX0+e3Rhc2tzU3RhdGUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpblRhc2tzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRUYXNrcy5tYXAoKHRhc2spPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYXNrIGtleT17dGFzay50aXRsZX0gaGFuZGxlckNsaWNrPXtoYW5kbGVUYXNrfSB0aXRsZT17dGFzay50aXRsZX0gZGVzY3JpcHRpb249e3Rhc2sudGV4dH0gaXNDb21wbGV0ZWQ9e3Rhc2suaXNDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpbmRleFBhZ2UgPSBhd2FpdCBnZXRJbmRleFBhZ2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiBpbmRleFBhZ2UsXG4gICAgICAgIHJldmFsaWRhdGU6IDFcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbInN0eWxlcyIsIlRhc2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRhc2tzIiwiSGVhZGVyIiwiQXNpZGUiLCJTZWFyY2giLCJ1c2VTZWFyY2giLCJJbmRleCIsInRhc2tzU3RhdGUiLCJzZXRUYXNrc1N0YXRlIiwic2VhcmNoU3RhdGUiLCJzZXRTZWFyY2hTdGF0ZSIsInNlYXJjaGVkVGFza3MiLCJuZXdTdGF0ZSIsInRpdGxlIiwiaGFuZGxlVGFzayIsInR5cGVPZkNsaWNrIiwiZmlsdGVyIiwidGFzayIsIm1hcCIsImlzQ29tcGxldGVkIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvZ29UZXh0IiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJ0YXNrc1dyYXBwZXIiLCJkaXYiLCJ0aXRsZVdyYXBwZXIiLCJoMiIsIm1haW5UaXRsZSIsIm1haW5UYXNrcyIsImhhbmRsZXJDbGljayIsImRlc2NyaXB0aW9uIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});