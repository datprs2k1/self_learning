"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_home_js"],{

/***/ "./resources/js/router/home.js":
/*!*************************************!*\
  !*** ./resources/js/router/home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Index = function Index() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_home_Index_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/Index.vue */ "./resources/js/pages/home/Index.vue"));
};

var Home = function Home() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_home_Home_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/Home.vue */ "./resources/js/pages/home/Home.vue"));
};

var Login = function Login() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_login_Index_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/login/Index.vue */ "./resources/js/pages/login/Index.vue"));
};

var About = function About() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_home_About_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/About.vue */ "./resources/js/pages/home/About.vue"));
};

var Courses = function Courses() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_home_Courses_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/Courses.vue */ "./resources/js/pages/home/Courses.vue"));
};

var Contact = function Contact() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_home_Contact_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/Contact.vue */ "./resources/js/pages/home/Contact.vue"));
};

var routers = [{
  path: "/",
  component: Index,
  children: [{
    path: "",
    component: Home,
    meta: {
      title: 'Trang chủ'
    }
  }, {
    path: "login",
    name: "Login",
    component: Login,
    meta: {
      title: 'UTT SelfLearning: Đăng nhập vào trang'
    }
  }, {
    path: "about",
    component: About,
    meta: {
      title: 'UTT SelfLearning: Giới thiệu'
    }
  }, {
    path: "courses",
    component: Courses,
    meta: {
      title: 'UTT SelfLearning: Danh mục khóa học'
    }
  }, {
    path: "contact",
    component: Contact,
    meta: {
      title: 'UTT SelfLearning: Liên hệ'
    }
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routers);

/***/ })

}]);