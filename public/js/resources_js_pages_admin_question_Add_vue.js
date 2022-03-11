"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_question_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/question/Add.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/question/Add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      question: {
        question: "",
        Ans_A: "",
        Ans_B: "",
        Ans_C: "",
        Ans_D: "",
        Correct_Ans: "",
        test_id: null
      },
      options: [{
        text: "A",
        value: "A"
      }, {
        text: "B",
        value: "B"
      }, {
        text: "C",
        value: "C"
      }, {
        text: "D",
        value: "D"
      }],
      errors: {},
      selected: null
    };
  },
  created: function created() {
    var _this = this;

    this.getTests();

    if (this.$route.params.test_id) {
      this.question.test_id = this.$route.params.test_id;
    }

    window.addEventListener("keyup", function (e) {
      if (e.key == "Enter") {
        _this.submit();
      }
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("test", ["getTests"])), {}, {
    submit: function submit() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this2.$store.dispatch("question/add", _this2.question);

              case 3:
                _this2.$swal({
                  title: "Thành công",
                  text: "Thêm thành công.",
                  icon: "success",
                  showConfirmButton: false,
                  position: "top-end",
                  timer: 1000,
                  width: 360
                });

                _this2.question = {
                  question: "",
                  Ans_A: "",
                  Ans_B: "",
                  Ans_C: "",
                  Ans_D: "",
                  Correct_Ans: "",
                  test_id: null
                };
                _this2.errors = {
                  question: "",
                  Ans_A: "",
                  Ans_B: "",
                  Ans_C: "",
                  Ans_D: "",
                  Correct_Ans: "",
                  test_id: ""
                };
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _this2.errors = _context.t0.response.data.errors;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("test", ["tests"]))
});

/***/ }),

/***/ "./resources/js/pages/admin/question/Add.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/question/Add.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_df4e527e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=df4e527e& */ "./resources/js/pages/admin/question/Add.vue?vue&type=template&id=df4e527e&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/question/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_df4e527e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_df4e527e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/question/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/question/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/question/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/question/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/question/Add.vue?vue&type=template&id=df4e527e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/question/Add.vue?vue&type=template&id=df4e527e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_df4e527e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_df4e527e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_df4e527e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=df4e527e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/question/Add.vue?vue&type=template&id=df4e527e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/question/Add.vue?vue&type=template&id=df4e527e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/question/Add.vue?vue&type=template&id=df4e527e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                  _c("form", [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Câu hỏi"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.question,
                              expression: "question.question",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.question },
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Nhập tên lớp.",
                            name: "name",
                          },
                          domProps: { value: _vm.question.question },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.question,
                                "question",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.question
                          ? _c(
                              "span",
                              {
                                staticClass: "error invalid-feedback",
                                attrs: { id: "exampleInputEmail1-error" },
                              },
                              [_vm._v(_vm._s(_vm.errors.question[0]))]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "dept" } }, [
                          _vm._v("Đáp án A"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.Ans_A,
                              expression: "question.Ans_A",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.Ans_A },
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Nhập tên lớp.",
                            name: "name",
                          },
                          domProps: { value: _vm.question.Ans_A },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.question,
                                "Ans_A",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.Ans_A
                          ? _c(
                              "span",
                              {
                                staticClass: "error invalid-feedback",
                                attrs: { id: "exampleInputEmail1-error" },
                              },
                              [_vm._v(_vm._s(_vm.errors.Ans_A[0]))]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "dept" } }, [
                          _vm._v("Đáp án B"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.Ans_B,
                              expression: "question.Ans_B",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.Ans_B },
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Nhập tên lớp.",
                            name: "name",
                          },
                          domProps: { value: _vm.question.Ans_B },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.question,
                                "Ans_B",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.Ans_B
                          ? _c(
                              "span",
                              {
                                staticClass: "error invalid-feedback",
                                attrs: { id: "exampleInputEmail1-error" },
                              },
                              [_vm._v(_vm._s(_vm.errors.Ans_B[0]))]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "dept" } }, [
                          _vm._v("Đáp án C"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.Ans_C,
                              expression: "question.Ans_C",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.Ans_C },
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Nhập tên lớp.",
                            name: "name",
                          },
                          domProps: { value: _vm.question.Ans_C },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.question,
                                "Ans_C",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.Ans_C
                          ? _c(
                              "span",
                              {
                                staticClass: "error invalid-feedback",
                                attrs: { id: "exampleInputEmail1-error" },
                              },
                              [_vm._v(_vm._s(_vm.errors.Ans_C[0]))]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "dept" } }, [
                          _vm._v("Đáp án D"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.Ans_D,
                              expression: "question.Ans_D",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.Ans_D },
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Nhập tên lớp.",
                            name: "name",
                          },
                          domProps: { value: _vm.question.Ans_D },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.question,
                                "Ans_D",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.Ans_A
                          ? _c(
                              "span",
                              {
                                staticClass: "error invalid-feedback",
                                attrs: { id: "exampleInputEmail1-error" },
                              },
                              [_vm._v(_vm._s(_vm.errors.Ans_D[0]))]
                            )
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "dept" } }, [
                            _vm._v("Đáp án đúng"),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("b-form-radio-group", {
                            staticClass: "mb-3",
                            attrs: {
                              id: "btn-radios-2",
                              options: _vm.options,
                              "button-variant": "outline-primary",
                              name: "radio-btn-outline",
                              buttons: "",
                            },
                            model: {
                              value: _vm.question.Correct_Ans,
                              callback: function ($$v) {
                                _vm.$set(_vm.question, "Correct_Ans", $$v)
                              },
                              expression: "question.Correct_Ans",
                            },
                          }),
                          _vm._v(" "),
                          _vm.errors.Correct_Ans
                            ? _c(
                                "span",
                                {
                                  staticClass: "error invalid-feedback",
                                  attrs: { id: "exampleInputEmail1-error" },
                                },
                                [_vm._v(_vm._s(_vm.errors.Correct_Ans[0]))]
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "dept" } }, [
                            _vm._v("Tên đề thi"),
                          ]),
                          _vm._v(" "),
                          _c("b-form-select", {
                            class: { "is-invalid": _vm.errors.test_id },
                            attrs: {
                              options: _vm.tests,
                              "text-field": "name",
                              "value-field": "id",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "first",
                                fn: function () {
                                  return [
                                    _c(
                                      "b-form-select-option",
                                      { attrs: { value: null, disabled: "" } },
                                      [_vm._v("-- Chọn khoa --")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                            model: {
                              value: _vm.question.test_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.question, "test_id", $$v)
                              },
                              expression: "question.test_id",
                            },
                          }),
                          _vm._v(" "),
                          _vm.errors.test_id
                            ? _c(
                                "span",
                                {
                                  staticClass: "error invalid-feedback",
                                  attrs: { id: "exampleInputEmail1-error" },
                                },
                                [_vm._v(_vm._s(_vm.errors.test_id[0]))]
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.submit()
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                    Xác nhận\n                  "
                          ),
                        ]
                      ),
                    ]),
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