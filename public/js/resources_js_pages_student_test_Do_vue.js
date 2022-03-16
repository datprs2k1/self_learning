"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_student_test_Do_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/test/Do.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/test/Do.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      selected: []
    };
  },
  created: function created() {
    this.getTest(this.$route.params.id);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("question", ["getTest"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("test", ["checkTest"])), {}, {
    getResult: function getResult() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.checkTest({
                  id: _this.$route.params.id,
                  selected: _this.selected
                });

              case 3:
                result = _context.sent;

                _this.$swal({
                  title: "Kết quả",
                  text: "Bạn đã làm đúng " + result.result + " câu trong " + result.total + " câu",
                  icon: "success",
                  showConfirmButton: false,
                  position: "top-end",
                  timer: 2000,
                  width: 360
                });

                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("question", ["questions"]))
});

/***/ }),

/***/ "./resources/js/pages/student/test/Do.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/student/test/Do.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Do_vue_vue_type_template_id_ea8081ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Do.vue?vue&type=template&id=ea8081ca& */ "./resources/js/pages/student/test/Do.vue?vue&type=template&id=ea8081ca&");
/* harmony import */ var _Do_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Do.vue?vue&type=script&lang=js& */ "./resources/js/pages/student/test/Do.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Do_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Do_vue_vue_type_template_id_ea8081ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Do_vue_vue_type_template_id_ea8081ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/student/test/Do.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/student/test/Do.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/student/test/Do.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Do_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Do.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/test/Do.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Do_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/student/test/Do.vue?vue&type=template&id=ea8081ca&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/student/test/Do.vue?vue&type=template&id=ea8081ca& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Do_vue_vue_type_template_id_ea8081ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Do_vue_vue_type_template_id_ea8081ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Do_vue_vue_type_template_id_ea8081ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Do.vue?vue&type=template&id=ea8081ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/test/Do.vue?vue&type=template&id=ea8081ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/test/Do.vue?vue&type=template&id=ea8081ca&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/test/Do.vue?vue&type=template&id=ea8081ca& ***!
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
    _c(
      "div",
      { staticClass: "content-wrapper" },
      [
        _c("Breadcrumbs"),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card card-primary" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      [
                        _vm._l(_vm.questions, function (question, index) {
                          return _c(
                            "div",
                            {
                              key: question.id,
                              staticClass: "form-group mb-3",
                            },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v(
                                  "Câu " +
                                    _vm._s(index + 1) +
                                    ": " +
                                    _vm._s(question.question)
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                [
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: { value: "A" },
                                      model: {
                                        value: _vm.selected[index],
                                        callback: function ($$v) {
                                          _vm.$set(_vm.selected, index, $$v)
                                        },
                                        expression: "selected[index]",
                                      },
                                    },
                                    [_vm._v("A: " + _vm._s(question.Ans_A))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: { value: "B" },
                                      model: {
                                        value: _vm.selected[index],
                                        callback: function ($$v) {
                                          _vm.$set(_vm.selected, index, $$v)
                                        },
                                        expression: "selected[index]",
                                      },
                                    },
                                    [_vm._v("B: " + _vm._s(question.Ans_B))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: { value: "C" },
                                      model: {
                                        value: _vm.selected[index],
                                        callback: function ($$v) {
                                          _vm.$set(_vm.selected, index, $$v)
                                        },
                                        expression: "selected[index]",
                                      },
                                    },
                                    [_vm._v("C: " + _vm._s(question.Ans_C))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: { value: "D" },
                                      model: {
                                        value: _vm.selected[index],
                                        callback: function ($$v) {
                                          _vm.$set(_vm.selected, index, $$v)
                                        },
                                        expression: "selected[index]",
                                      },
                                    },
                                    [_vm._v("D: " + _vm._s(question.Ans_D))]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "success",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.getResult.apply(null, arguments)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                    Kết thúc\n                  "
                            ),
                          ]
                        ),
                      ],
                      2
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c("aside", { staticClass: "control-sidebar control-sidebar-dark" }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);