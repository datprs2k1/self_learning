"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ "./resources/js/services/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      department: 0,
      classes: 0,
      student: 0,
      teacher: 0
    };
  },
  created: function created() {
    this.getDepartmentCount();
    this.getClassCount();
    this.getStudentCount();
    this.getTeacherCount();
  },
  methods: {
    getDepartmentCount: function getDepartmentCount() {
      var _this = this;

      _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/department/count").then(function (response) {
        _this.department = response.data;
      });
    },
    getClassCount: function getClassCount() {
      var _this2 = this;

      _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/class/count").then(function (response) {
        _this2.classes = response.data;
      });
    },
    getStudentCount: function getStudentCount() {
      var _this3 = this;

      _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/student/count").then(function (response) {
        console.log(response.data);
        _this3.student = response.data;
      });
    },
    getTeacherCount: function getTeacherCount() {
      var _this4 = this;

      _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/teacher/count").then(function (response) {
        _this4.teacher = response.data;
      });
    }
  },
  mounted: function mounted() {
    var plugin = document.createElement("script");
    plugin.setAttribute("src", "../../../../admin/plugins/jquery/jquery.min.js");
    document.head.appendChild(plugin);
    var plugin1 = document.createElement("script");
    plugin1.setAttribute("src", "../../../../admin/plugins/jquery-ui/jquery-ui.min.js");
    document.head.appendChild(plugin1);
    var plugin2 = document.createElement("script");
    plugin2.setAttribute("src", "../../../../admin/plugins/bootstrap/js/bootstrap.bundle.min.js");
    document.head.appendChild(plugin2);
    var plugin3 = document.createElement("script");
    plugin3.setAttribute("src", "../../../../admin/plugins/chart.js/Chart.min.js");
    document.head.appendChild(plugin3);
    var plugin4 = document.createElement("script");
    plugin4.setAttribute("src", "../../../../admin/plugins/sparklines/sparkline.js");
    document.head.appendChild(plugin4);
    var plugin5 = document.createElement("script");
    plugin5.setAttribute("src", "../../../../admin/plugins/jqvmap/jquery.vmap.min.js");
    document.head.appendChild(plugin5);
    var plugin6 = document.createElement("script");
    plugin6.setAttribute("src", "../../../../admin/plugins/jqvmap/maps/jquery.vmap.usa.js");
    document.head.appendChild(plugin6);
    var plugin7 = document.createElement("script");
    plugin7.setAttribute("src", "../../../../admin/plugins/jquery-knob/jquery.knob.min.js");
    document.head.appendChild(plugin7);
    var plugin8 = document.createElement("script");
    plugin8.setAttribute("src", "../../../../admin/plugins/moment/moment.min.js");
    document.head.appendChild(plugin8);
    var plugin9 = document.createElement("script");
    plugin9.setAttribute("src", "../../../../admin/plugins/daterangepicker/daterangepicker.js");
    document.head.appendChild(plugin9);
    var plugin10 = document.createElement("script");
    plugin10.setAttribute("src", "../../../../admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js");
    document.head.appendChild(plugin10);
    var plugin11 = document.createElement("script");
    plugin11.setAttribute("src", "../../../../admin/plugins/summernote/summernote-bs4.min.js");
    document.head.appendChild(plugin11);
    var plugin12 = document.createElement("script");
    plugin12.setAttribute("src", "../../../../admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js");
    document.head.appendChild(plugin12); // let plugin13 = document.createElement('script');
    // plugin11.setAttribute('src', '../../../../admin/dist/js/adminlte.min.js');
    // document.head.appendChild(plugin13);

    var plugin14 = document.createElement("script");
    plugin14.setAttribute("src", "../../../../admin/dist/js/pages/dashboard.js");
    document.head.appendChild(plugin14);
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/admin/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1456335b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1456335b& */ "./resources/js/pages/admin/Dashboard.vue?vue&type=template&id=1456335b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1456335b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_1456335b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Dashboard.vue?vue&type=template&id=1456335b&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/admin/Dashboard.vue?vue&type=template&id=1456335b& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1456335b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1456335b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1456335b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=1456335b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Dashboard.vue?vue&type=template&id=1456335b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Dashboard.vue?vue&type=template&id=1456335b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/Dashboard.vue?vue&type=template&id=1456335b& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.is("admin") ? _c("h1", [_vm._v("Admin")]) : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "content-wrapper" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c("div", { staticClass: "small-box bg-info" }, [
                _c("div", { staticClass: "inner" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.department))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Khoa")]),
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c("div", { staticClass: "small-box bg-success" }, [
                _c("div", { staticClass: "inner" }, [
                  _c("h3", [
                    _vm._v(
                      "\n                  " +
                        _vm._s(_vm.classes) +
                        "\n                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Lớp")]),
                ]),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c("div", { staticClass: "small-box bg-warning" }, [
                _c("div", { staticClass: "inner" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.teacher))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Giảng viên")]),
                ]),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-6" }, [
              _c("div", { staticClass: "small-box bg-danger" }, [
                _c("div", { staticClass: "inner" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.student))]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Sinh viên")]),
                ]),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("aside", { staticClass: "control-sidebar control-sidebar-dark" }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v("Dashboard")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Dashboard v1"),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-bag" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
      _vm._v("More info "),
      _c("i", { staticClass: "fas fa-arrow-circle-right" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-stats-bars" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
      _vm._v("More info "),
      _c("i", { staticClass: "fas fa-arrow-circle-right" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-person-add" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
      _vm._v("More info "),
      _c("i", { staticClass: "fas fa-arrow-circle-right" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-pie-graph" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
      _vm._v("More info "),
      _c("i", { staticClass: "fas fa-arrow-circle-right" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);