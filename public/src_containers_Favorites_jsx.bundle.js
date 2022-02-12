(self["webpackChunkredux_project"] = self["webpackChunkredux_project"] || []).push([["src_containers_Favorites_jsx"],{

/***/ "./src/components/Empty.jsx":
/*!**********************************!*\
  !*** ./src/components/Empty.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_styles_components_Empty_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/components/Empty.scss */ "./src/assets/styles/components/Empty.scss");
/* harmony import */ var _assets_static_images_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/static/images/empty.png */ "./src/assets/static/images/empty.png");




var Empty = function Empty() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "empty-img",
    src: _assets_static_images_empty_png__WEBPACK_IMPORTED_MODULE_2__.default,
    alt: "Rick"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "empty-text"
  }, "You haven't favorites.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Go and select you favorite characters."));
};

/* harmony default export */ __webpack_exports__["default"] = (Empty);

/***/ }),

/***/ "./src/components/FavoriteList.jsx":
/*!*****************************************!*\
  !*** ./src/components/FavoriteList.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_styles_components_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/components/FavoriteList.scss */ "./src/assets/styles/components/FavoriteList.scss");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Character */ "./src/components/Character.jsx");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Empty */ "./src/components/Empty.jsx");






var FavoriteList = function FavoriteList(props) {
  var favoriteCharacters = props.favoriteCharacters;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "characterList"
  }, !favoriteCharacters.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Empty__WEBPACK_IMPORTED_MODULE_4__.default, null) : favoriteCharacters.map(function (character) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Character__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: character.data.id,
      data: character.data
    });
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteCharacters: state.favoriteCharacters
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(FavoriteList));

/***/ }),

/***/ "./src/containers/Favorites.jsx":
/*!**************************************!*\
  !*** ./src/containers/Favorites.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_FavoriteList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FavoriteList */ "./src/components/FavoriteList.jsx");



var Favorites = function Favorites() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FavoriteList__WEBPACK_IMPORTED_MODULE_1__.default, null);
};

/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Empty.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Empty.scss ***!
  \******************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  margin: 0;\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", sans-serif; }\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: #65fafb;\n  font-family: \"Oswald\", sans-serif; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  min-height: calc(100vh - 300px); }\n\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.empty-img {\n  height: 225px; }\n\n.empty-text {\n  font-size: 35px;\n  font-family: \"Oswald\", sans-serif;\n  color: #65fafb;\n  text-align: center; }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/Empty.scss"],"names":[],"mappings":"AA2BA;EACE,sBAAsB,EAAA;;AAGxB;;EAEE,cAAc;EACd,qBAAqB,EAAA;;AAGvB;EACE,SAAS;EACT,yBC7BkB;ED8BlB,cC7BmB;ED8BnB,0CCrCuC,EAAA;;ADwCzC;;;;;;;EAOE,cC5CqB;ED6CrB,iCCjD+B,EAAA;;ADoDjC;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,+BAA+B,EAAA;;AE3DjC;EFCE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB,EAAA;;AEAzB;EACE,aAAa,EAAA;;AAGf;EACE,eAAe;EACf,iCDT+B;ECU/B,cDNqB;ECOrB,kBAAkB,EAAA","sourcesContent":["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.empty {\r\n  @include colCenCen;\r\n}\r\n\r\n.empty-img {\r\n  height: 225px;\r\n}\r\n\r\n.empty-text {\r\n  font-size: 35px;\r\n  font-family: $title-font;\r\n  color: $primary-color;\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/FavoriteList.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/FavoriteList.scss ***!
  \*************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  margin: 0;\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", sans-serif; }\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: #65fafb;\n  font-family: \"Oswald\", sans-serif; }\n\nfigure {\n  margin: 0;\n  padding: 0; }\n\nsection {\n  min-height: calc(100vh - 300px); }\n\n.favoriteList {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/FavoriteList.scss"],"names":[],"mappings":"AA2BA;EACE,sBAAsB,EAAA;;AAGxB;;EAEE,cAAc;EACd,qBAAqB,EAAA;;AAGvB;EACE,SAAS;EACT,yBC7BkB;ED8BlB,cC7BmB;ED8BnB,0CCrCuC,EAAA;;ADwCzC;;;;;;;EAOE,cC5CqB;ED6CrB,iCCjD+B,EAAA;;ADoDjC;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,+BAA+B,EAAA;;AE3DjC;EFcE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EEdnB,eAAe,EAAA","sourcesContent":["@import './Vars.scss';\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: $dark-color;\r\n  color: $light-color;\r\n  font-family: $text-font;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: $primary-color;\r\n  font-family: $title-font;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  min-height: calc(100vh - 300px);\r\n}\r\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\r\n\r\n//Fonts\r\n$title-font: 'Oswald', sans-serif;\r\n$text-font: 'Source Sans Pro', sans-serif;\r\n\r\n//Colors\r\n$primary-color: #65fafb;\r\n$secondary-color: #62c241;\r\n$success-color: #faf76a;\r\n$dark-color: #000000;\r\n$light-color: #ffffff;\r\n$danger-color: #fc859e;\r\n","@import '../App.scss';\r\n\r\n.favoriteList {\r\n  @include flexCenCen;\r\n  flex-wrap: wrap;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/static/images/empty.png":
/*!********************************************!*\
  !*** ./src/assets/static/images/empty.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80dc1a7d41a7c581ae4b953cb8210658.png");

/***/ }),

/***/ "./src/assets/styles/components/Empty.scss":
/*!*************************************************!*\
  !*** ./src/assets/styles/components/Empty.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Empty_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Empty.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/Empty.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Empty_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Empty_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/styles/components/FavoriteList.scss":
/*!********************************************************!*\
  !*** ./src/assets/styles/components/FavoriteList.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./FavoriteList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/FavoriteList.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FavoriteList_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_containers_Favorites_jsx.bundle.js.map