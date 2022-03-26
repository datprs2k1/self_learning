"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_lesson_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/lesson/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/lesson/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      subject: {},
      weeks: [],
      lesson: {
        name: "",
        path: null,
        video_path: "",
        test_id: null,
        week: null,
        subject_id: null,
        class_id: null
      },
      number_question: 0,
      questions: [],
      errors: {}
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.$route.query.c_id && _this.$route.query.s_id)) {
                _context.next = 5;
                break;
              }

              _this.lesson.class_id = _this.$route.query.c_id;
              _this.lesson.subject_id = _this.$route.query.s_id;
              _context.next = 6;
              break;

            case 5:
              return _context.abrupt("return", _this.$router.push({
                name: "404"
              }));

            case 6:
              _context.next = 8;
              return _this.getCLASS(_this.lesson.class_id);

            case 8:
              _context.next = 10;
              return _this.getSubject();

            case 10:
              _context.next = 12;
              return _this.getWeeks();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("CLASS", ["getCLASS"])), {}, {
    getSubject: function getSubject() {
      for (var i = 0; i < this.CLASS.subject.length; i++) {
        if (this.CLASS.subject[i].id == this.lesson.subject_id) {
          this.subject = this.CLASS.subject[i];
        }
      }
    },
    getWeeks: function getWeeks() {
      for (var i = 0; i < this.subject.weeks; i++) {
        var object = {
          week: i + 1,
          lessons: []
        };
        this.weeks.push(object);
      }
    },
    getCurrentLesson: function getCurrentLesson(week) {
      var _this2 = this;

      var lesson = this.CLASS.lesson.filter(function (item) {
        return item.week == week && item.subject_id == _this2.lesson.subject_id && item.class_id == _this2.lesson.class_id;
      });

      if (lesson.length != 0) {
        this.lesson = lesson[0];
        this.lesson.path = null;
      } else {
        this.lesson.name = "";
        this.lesson.path = null;
        this.lesson.video_path = "";
        this.lesson.week = week;
      }
    },
    getCurrentQuestions: function getCurrentQuestions(week) {
      var _this3 = this;

      var questions = this.CLASS.question.filter(function (item) {
        return item.week == week && item.subject_id == _this3.lesson.subject_id && item.class_id == _this3.lesson.class_id;
      });

      if (questions.length != 0) {
        this.questions = questions;
        this.number_question = questions.length;
      } else {
        this.questions = [];
      }
    },
    setEmptyLesson: function setEmptyLesson() {
      this.lesson.name = null;
      this.lesson.path = null;
      this.lesson.video_path = "";
      this.lesson.week = null;
      this.errors = {};
    },
    submitSlide: function submitSlide() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                formData = new FormData();
                formData.append("name", _this4.lesson.name);
                formData.append("path", _this4.lesson.path);
                formData.append("video_path", null);
                formData.append("week", _this4.lesson.week);
                formData.append("subject_id", _this4.lesson.subject_id);
                formData.append("class_id", _this4.lesson.class_id);
                formData.append("type", "slide");
                _context2.next = 11;
                return _this4.$store.dispatch("lesson/add", formData);

              case 11:
                _this4.$swal({
                  title: "Thành công",
                  icon: "success",
                  showConfirmButton: false,
                  position: "top-end",
                  timer: 1000,
                  width: 360
                });

                _this4.setEmptyLesson();

                _this4.$refs.modalSlide.hide();

                _this4.getCLASS(_this4.lesson.class_id);

                _context2.next = 20;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                _this4.errors = _context2.t0.response.data.errors;

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }))();
    },
    submitVideo: function submitVideo() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                formData = new FormData();
                formData.append("video_path", _this5.lesson.video_path);
                formData.append("week", _this5.lesson.week);
                formData.append("subject_id", _this5.lesson.subject_id);
                formData.append("class_id", _this5.lesson.class_id);
                formData.append("type", "video");
                _context3.next = 9;
                return _this5.$store.dispatch("lesson/add", formData);

              case 9:
                _this5.$swal({
                  title: "Thành công",
                  icon: "success",
                  showConfirmButton: false,
                  position: "top-end",
                  timer: 1000,
                  width: 360
                });

                _this5.setEmptyLesson();

                _this5.$refs.modalVideo.hide();

                _this5.getCLASS(_this5.lesson.class_id);

                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                _this5.errors = _context3.t0.response.data.errors;

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }))();
    },
    getSlide: function getSlide(week) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var slide;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this6.getCLASS(_this6.lesson.class_id);

              case 2:
                slide = _this6.CLASS.lesson.filter(function (item) {
                  return item.week == week && item.subject_id == _this6.lesson.subject_id && item.class_id == _this6.lesson.class_id;
                });

                if (slide.length == 0) {
                  _this6.$swal({
                    title: "Chưa có nội dung slide",
                    icon: "info",
                    width: 480
                  });
                } else {
                  if (slide[0].path == null) {
                    _this6.$swal({
                      title: "Chưa có nội dung slide",
                      icon: "info",
                      width: 480
                    });
                  } else {
                    _this6.lesson = slide[0];
                    window.open("../files/" + _this6.lesson.path, "_blank");
                  }
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getVideo: function getVideo(week) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var video;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this7.getCLASS(_this7.lesson.class_id);

              case 2:
                video = _this7.CLASS.lesson.filter(function (item) {
                  return item.week == week && item.subject_id == _this7.lesson.subject_id && item.class_id == _this7.lesson.class_id;
                });

                if (video.length == 0) {
                  _this7.$swal({
                    title: "Chưa có nội dung video",
                    icon: "info",
                    width: 480
                  });
                } else {
                  if (video[0].video_path == null) {
                    _this7.$swal({
                      title: "Chưa có nội dung video",
                      icon: "info",
                      width: 480
                    });
                  } else {
                    _this7.lesson = video[0];

                    _this7.$refs.modalViewVideo.show();
                  }
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    createQuestion: function createQuestion() {
      this.questions = [];

      for (var i = 0; i < this.number_question; i++) {
        var question = {
          id: i,
          question: "",
          correct_Answer: "",
          answer_A: "",
          answer_B: "",
          answer_C: "",
          answer_D: "",
          lesson_id: this.lesson.id,
          week: this.lesson.week,
          subject_id: this.lesson.subject_id,
          class_id: this.lesson.class_id
        };
        this.questions.push(question);
      }
    },
    addQuestions: function addQuestions() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                formData = new FormData();
                formData.append("questions", JSON.stringify(_this8.questions));
                _context6.next = 5;
                return _this8.$store.dispatch("question/add", formData);

              case 5:
                _this8.$swal({
                  title: "Thành công",
                  icon: "success",
                  showConfirmButton: false,
                  position: "top-end",
                  timer: 1000,
                  width: 360
                });

                _this8.setEmptyLesson();

                _this8.$refs.modalQuestion.hide();

                _this8.getCLASS(_this8.lesson.class_id);

                _context6.next = 14;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                _this8.errors = _context6.t0.response.data.errors;

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }))();
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("CLASS", ["CLASS"])),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/pages/admin/lesson/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/lesson/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_1548b0f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1548b0f8&scoped=true& */ "./resources/js/pages/admin/lesson/Index.vue?vue&type=template&id=1548b0f8&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/lesson/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1548b0f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_1548b0f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1548b0f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/lesson/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/lesson/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/lesson/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/lesson/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/lesson/Index.vue?vue&type=template&id=1548b0f8&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/admin/lesson/Index.vue?vue&type=template&id=1548b0f8&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1548b0f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1548b0f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1548b0f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=1548b0f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/lesson/Index.vue?vue&type=template&id=1548b0f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/lesson/Index.vue?vue&type=template&id=1548b0f8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/lesson/Index.vue?vue&type=template&id=1548b0f8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "content-wrapper" }, [
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: { "overflow-x": "auto" },
                  },
                  [
                    _c("p", [_vm._v("Lớp " + _vm._s(_vm.CLASS.name))]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Môn " +
                          _vm._s(_vm.subject.name) +
                          " (" +
                          _vm._s(_vm.subject.code) +
                          ")"
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { md: "1" } }),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { staticClass: "my-1", attrs: { md: "10" } },
                          _vm._l(_vm.weeks, function (item) {
                            return _c(
                              "div",
                              { key: item.week },
                              [
                                _c(
                                  "b-list-group",
                                  { staticClass: "mb-5" },
                                  [
                                    _vm._v(
                                      "\n                        Tuần " +
                                        _vm._s(item.week) +
                                        "\n                        "
                                    ),
                                    _c(
                                      "b-list-group-item",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.getSlide(item.week)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-graduation-cap fa-lg text-success",
                                        }),
                                        _vm._v(
                                          "Slide bài giảng\n                          " +
                                            _vm._s(item.week) +
                                            "\n                          "
                                        ),
                                        _c(
                                          "b-button",
                                          {
                                            directives: [
                                              {
                                                name: "b-modal",
                                                rawName:
                                                  "v-b-modal.modal-slide",
                                                modifiers: {
                                                  "modal-slide": true,
                                                },
                                              },
                                            ],
                                            staticClass:
                                              "float-right p-0 pl-1 btn-warning btn-sm",
                                            on: {
                                              click: function ($event) {
                                                $event.stopPropagation()
                                                return _vm.getCurrentLesson(
                                                  item.week
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-edit",
                                            }),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-list-group-item",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.getVideo(item.week)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-video fa-lg text-danger",
                                        }),
                                        _vm._v(
                                          "\n                          Video bài giảng\n                          " +
                                            _vm._s(item.week) +
                                            "\n                          "
                                        ),
                                        _c(
                                          "b-button",
                                          {
                                            directives: [
                                              {
                                                name: "b-modal",
                                                rawName:
                                                  "v-b-modal.modal-video",
                                                modifiers: {
                                                  "modal-video": true,
                                                },
                                              },
                                            ],
                                            staticClass:
                                              "float-right p-0 pl-1 btn-warning btn-sm",
                                            on: {
                                              click: function ($event) {
                                                $event.stopPropagation()
                                                return _vm.getCurrentLesson(
                                                  item.week
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-edit",
                                            }),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-list-group-item",
                                      { attrs: { href: "#" } },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "\n                              fas\n                              fa-file-invoice fa-lg\n                              mr-2\n                              text-warning\n                            ",
                                        }),
                                        _vm._v(
                                          "\n                          Bài luyện tập\n                          " +
                                            _vm._s(item.week) +
                                            "\n                          "
                                        ),
                                        _c(
                                          "b-button",
                                          {
                                            directives: [
                                              {
                                                name: "b-modal",
                                                rawName: "v-b-modal.modal-test",
                                                modifiers: {
                                                  "modal-test": true,
                                                },
                                              },
                                            ],
                                            staticClass:
                                              "float-right p-0 pl-1 btn-warning btn-sm",
                                            on: {
                                              click: function ($event) {
                                                $event.stopPropagation()
                                                _vm.getCurrentLesson(item.week)
                                                _vm.getCurrentQuestions(
                                                  item.week
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-edit",
                                            }),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "1" } }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modalSlide",
                        attrs: {
                          id: "modal-slide",
                          size: "lg",
                          title: "Slide Bài Giảng Tuần " + _vm.lesson.week,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "modal-footer",
                            fn: function (ref) {
                              var ok = ref.ok
                              var cancel = ref.cancel
                              return [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "primary" },
                                        on: { click: _vm.submitSlide },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Xác nhận\n                      "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "secondary" },
                                        on: {
                                          click: function ($event) {
                                            return cancel()
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Hủy\n                      "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Tên bài giảng",
                              "label-for": "name-input",
                            },
                          },
                          [
                            _c("b-form-input", {
                              class: {
                                "is-invalid": _vm.errors.name,
                              },
                              attrs: { id: "name-input", required: "" },
                              model: {
                                value: _vm.lesson.name,
                                callback: function ($$v) {
                                  _vm.$set(_vm.lesson, "name", $$v)
                                },
                                expression: "lesson.name",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.name
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.name[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Nội dung",
                              "label-for": "slide-input",
                            },
                          },
                          [
                            _c("b-form-file", {
                              class: {
                                "is-invalid": _vm.errors.path,
                              },
                              attrs: { id: "slide-input", plain: "" },
                              model: {
                                value: _vm.lesson.path,
                                callback: function ($$v) {
                                  _vm.$set(_vm.lesson, "path", $$v)
                                },
                                expression: "lesson.path",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.path
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.path[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modalVideo",
                        attrs: {
                          id: "modal-video",
                          size: "lg",
                          title: "Video Bài Giảng Tuần " + _vm.lesson.week,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "modal-footer",
                            fn: function (ref) {
                              var ok = ref.ok
                              var cancel = ref.cancel
                              return [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "primary" },
                                        on: { click: _vm.submitVideo },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Xác nhận\n                      "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "secondary" },
                                        on: {
                                          click: function ($event) {
                                            return cancel()
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Hủy\n                      "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Nội dung",
                              "label-for": "slide-input",
                            },
                          },
                          [
                            _c("b-form-input", {
                              class: {
                                "is-invalid": _vm.errors.video_path,
                              },
                              attrs: { required: "" },
                              model: {
                                value: _vm.lesson.video_path,
                                callback: function ($$v) {
                                  _vm.$set(_vm.lesson, "video_path", $$v)
                                },
                                expression: "lesson.video_path",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.video_path
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.video_path[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        this.lesson.video_path != null
                          ? _c(
                              "div",
                              { staticClass: "d-flex justify-content-center" },
                              [
                                _c("LazyYoutube", {
                                  attrs: { src: this.lesson.video_path },
                                }),
                              ],
                              1
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modalViewVideo",
                        attrs: {
                          id: "modal-view-video",
                          size: "lg",
                          title: "Video Bài Giảng Tuần " + _vm.lesson.week,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "modal-footer",
                            fn: function (ref) {
                              var ok = ref.ok
                              var cancel = ref.cancel
                              return [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "danger" },
                                        on: {
                                          click: function ($event) {
                                            return ok()
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Đóng\n                      "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      },
                      [
                        _c("b-form-group", [
                          this.lesson.video_path != null
                            ? _c(
                                "div",
                                {
                                  staticClass: "d-flex justify-content-center",
                                },
                                [
                                  _c("LazyYoutube", {
                                    attrs: {
                                      src: this.lesson.video_path,
                                      autoplay: true,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modalTest",
                        attrs: {
                          id: "modal-test",
                          size: "lg",
                          title: "Bài Luyện Tập Tuần " + _vm.lesson.week,
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "modal-footer",
                            fn: function (ref) {
                              var ok = ref.ok
                              var cancel = ref.cancel
                              return [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "primary" },
                                        on: { click: _vm.addQuestions },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Xác nhận\n                      "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "secondary" },
                                        on: {
                                          click: function ($event) {
                                            return cancel()
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Hủy\n                      "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Nhập số câu hỏi",
                              "label-for": "name-input",
                            },
                          },
                          [
                            _c("b-form-input", {
                              class: {
                                "is-invalid": _vm.errors.name,
                              },
                              attrs: {
                                id: "name-input",
                                type: "number",
                                required: "",
                                min: "1",
                              },
                              on: {
                                update: function ($event) {
                                  return _vm.createQuestion()
                                },
                              },
                              model: {
                                value: _vm.number_question,
                                callback: function ($$v) {
                                  _vm.number_question = $$v
                                },
                                expression: "number_question",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.questions.length > 0
                          ? _c(
                              "div",
                              _vm._l(_vm.questions, function (question, index) {
                                return _c(
                                  "div",
                                  { key: question.id },
                                  [
                                    _c(
                                      "b-form-group",
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "question" } },
                                          [
                                            _vm._v(
                                              "Câu hỏi " + _vm._s(index + 1)
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "question",
                                            required: "",
                                          },
                                          model: {
                                            value: question.question,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                question,
                                                "question",
                                                $$v
                                              )
                                            },
                                            expression: "question.question",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: "Đáp án",
                                          "label-for": "name-input",
                                        },
                                      },
                                      [
                                        _c("div", { staticClass: "row mb-3" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    "aria-describedby":
                                                      _vm.ariaDescribedby,
                                                    value: "A",
                                                  },
                                                  model: {
                                                    value:
                                                      question.correct_Answer,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "correct_Answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.correct_Answer",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "answer_A",
                                                      },
                                                    },
                                                    [_vm._v("Đáp án A")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      id: "answer_A",
                                                      required: "",
                                                    },
                                                    model: {
                                                      value: question.answer_A,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          question,
                                                          "answer_A",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "question.answer_A",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    "aria-describedby":
                                                      _vm.ariaDescribedby,
                                                    name: "answer",
                                                    value: "B",
                                                  },
                                                  model: {
                                                    value:
                                                      question.correct_Answer,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "correct_Answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.correct_Answer",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "answer_B",
                                                      },
                                                    },
                                                    [_vm._v("Đáp án B")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      id: "answer_B",
                                                      required: "",
                                                    },
                                                    model: {
                                                      value: question.answer_B,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          question,
                                                          "answer_B",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "question.answer_B",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    "aria-describedby":
                                                      _vm.ariaDescribedby,
                                                    name: "answer_C",
                                                    value: "C",
                                                  },
                                                  model: {
                                                    value:
                                                      question.correct_Answer,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "correct_Answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.correct_Answer",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "answer_C",
                                                      },
                                                    },
                                                    [_vm._v("Đáp án C")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      id: "answer_C",
                                                      required: "",
                                                    },
                                                    model: {
                                                      value: question.answer_C,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          question,
                                                          "answer_C",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "question.answer_C",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-md-6" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    "aria-describedby":
                                                      _vm.ariaDescribedby,
                                                    name: "answer_D",
                                                    value: "D",
                                                  },
                                                  model: {
                                                    value:
                                                      question.correct_Answer,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        question,
                                                        "correct_Answer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "question.correct_Answer",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "answer_D",
                                                      },
                                                    },
                                                    [_vm._v("Đáp án D")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      id: "answer_D",
                                                      required: "",
                                                    },
                                                    model: {
                                                      value: question.answer_D,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          question,
                                                          "answer_D",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "question.answer_D",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Bảng Khoa")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);