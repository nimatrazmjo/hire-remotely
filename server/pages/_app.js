"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/top-nav/top-nav.component.js

function TopNavComponent() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "bg-emerald-500 py-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "flex mx-10 text-white",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-semibold text-xl tracking-tight",
                children: " Hire Remotely "
            })
        })
    }));
}
/* harmony default export */ const top_nav_component = (TopNavComponent);

;// CONCATENATED MODULE: ./pages/_app.js



/* harmony default export */ const _app = (({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-screen flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(top_nav_component, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
});


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(779));
module.exports = __webpack_exports__;

})();