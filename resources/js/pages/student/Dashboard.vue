<template>
<div style="border-top: 4px solid #f58635">
     <div id="header">
        <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
                <div class="site-mobile-menu-close mt-3">
                    <span class="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div class="site-mobile-menu-body"></div>
        </div>
        <div class="container-fluid py-3 navbar-login">
            <div class="row w-100">
                <div class="col-md-8">
                    <div class="site-logo">
                        <a href="/"><img src="images/utt_selflearning.png" width="320px" alt="Image" class="img-fluid" /></a>
                    </div>
                </div>
                <div class="col-md-4 px-0">
                    <div class="row h-100">
                        <div class="col-md-9 p-0">
                            <b-dropdown id="dropdown-in-header" variant="primary">
                                <template #button-content>
                                    Họ tên
                                </template>
                                <b-dropdown-item-button>
                                    <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                                    Locked
                                    <span class="sr-only">(Click to unlock)</span>
                                </b-dropdown-item-button>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-group header="Choose options" class="small">
                                    <b-dropdown-item-button>
                                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                                        Option A
                                        <span class="sr-only">(Not selected)</span>
                                    </b-dropdown-item-button>
                                    <b-dropdown-item-button>
                                        <b-icon icon="check" aria-hidden="true"></b-icon>
                                        Option B
                                        <span class="sr-only">(Selected)</span>
                                    </b-dropdown-item-button>
                                    <b-dropdown-item-button>
                                        <b-icon icon="blank" aria-hidden="true"></b-icon>
                                        Option C
                                        <span class="sr-only">(Not selected)</span>
                                    </b-dropdown-item-button>
                                </b-dropdown-group>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item-button>Some action</b-dropdown-item-button>
                                <b-dropdown-item-button>Some other
                                    action</b-dropdown-item-button>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item-button variant="danger">
                                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                                    Delete
                                </b-dropdown-item-button>
                            </b-dropdown>
                        </div>
                        <div class="col-md-3 p-0">
                            <img src="images/person_1.jpg" alt="avatar" id="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header class="site-navbar site-navbar-target" role="banner" style="background-color: #3a454b; z-index: 1">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <div class="mr-auto">
                        <nav class="site-navigation position-relative text-right" role="navigation">
                            <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block p-0">
                                <li class="active">
                                    <a href="/" class="nav-link text-left home p-0 px-3 text-white"><span class="icon icon-home2"></span></a>
                                </li>
                                <li class="has-children">
                                    <a to="/about" class="nav-link text-left p-0 px-3 text-white"><span>Giới thiệu</span></a>
                                    <ul class="dropdown bg-secondary">
                                        <li>
                                            <a href="/about" class="nav-link text-left p-0 px-3 text-white"><span>Our Teacher</span></a>
                                        </li>
                                        <li>
                                            <a href="/about" class="nav-link text-left p-0 px-3 text-white"><span>Our Student</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" class="nav-link text-left p-0 px-3 text-white"><span>Tin tức</span></a>
                                </li>
                                <li>
                                    <a href="/courses" class="nav-link text-left p-0 px-3 text-white"><span>Khóa học</span></a>
                                </li>
                                <li>
                                    <a href="/contact" class="nav-link text-left p-0 px-3 text-white"><span>Liên hệ</span></a>
                                </li>
                                <li style="float: right">
                                    <a href="" class="nav-link text-left p-0 px-3 text-white">
                                        <b-icon icon="search"></b-icon>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="ml-auto">
                        <div class="social-wrap">
                            <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

    <div class="container-fluid" style="height: 1500px; width: 100%; margin-top: 48px">
        <div class="row h-100" style="padding-top: 24px">
            <div class="col-md-3 h-50">
                <h6>Bảng Điều Khiển</h6>
                <div class="w-100 mt-3 mb-3" style="
                            border-top: 3px solid #f58635;
                            padding: 12px;
                            border-radius: 3px;
                            box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
                        ">
                    <div class="px-3 pb-1">
                        <b-icon icon="diagram3-fill" style="
                                    color: #f58635;
                                    width: 24px;
                                    height: 24px;
                                "></b-icon>
                        <span style="
                                    margin-top: 1px;
                                    margin-left: 10px;
                                    font-weight: 700;
                                ">
                            Điều Hướng
                        </span>
                    </div>
                    <div class="left-sidebar px-3" style="border-top: 2px solid #dddddd">
                        <div class="row">
                            <div class="col-md-12 p-0 pt-3">
                                <h6 style="font-weight: 600">
                                    Bảng Điều Khiển
                                </h6>
                            </div>

                            <div class="col-md-12 p-0">
                                <b-tree-view :data="treeData"></b-tree-view>
                            </div>
                        </div>
                    </div>
                </div>
 <div class="w-100 mt-3 mb-3" style="
                            border-top: 3px solid #f58635;
                            padding: 12px;
                            border-radius: 3px;
                            box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
                        ">
                    <div class="px-3 pb-1">
                        <b-icon icon="volume-up-fill" style="
                                    color: #f58635;
                                    width: 24px;
                                    height: 24px;
                                "></b-icon>
                        <span style="
                                    margin-top: 1px;
                                    margin-left: 10px;
                                    font-weight: 700;
                                ">
                            Tin mới nhất
                        </span>
                    </div>
                    <div class="left-sidebar px-3" style="border-top: 2px solid #dddddd">
                        <div class="row">
                            <div class="col-md-12 p-0 pt-3" style="min-height:100px">
                                (Chưa có thông báo nào được gửi.)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 bg-light h-50"></div>
            <div class="col-md-3 bg-dark h-50"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            treeData: [{
                    id: 1,
                    name: "Học Trực Tuyến Cùng UTT",
                    children: [{
                            id: 3,
                            name: "Neptune",
                        },
                        {
                            id: 4,
                            name: "Stratus",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Khóa học của tôi",
                    children: [{
                            id: 3,
                            name: "Công nghệ thông tin",
                            children: [{
                                    id: 1,
                                    name: "Danh sách thành viên",
                                },
                                {
                                    id: 2,
                                    name: "Điểm số",
                                },
                                {
                                    id: 3,
                                    name: "Thông tin chung",
                                },
                                {
                                    id: 4,
                                    name: "Tuần 1",
                                    children: [{
                                            id: 1,
                                            name: "Bài học tự học",
                                        },
                                        {
                                            id: 2,
                                            name: "Tài liệu",
                                        },
                                        {
                                            id: 3,
                                            name: "Bài test",
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    name: "Tuần 2",
                                },
                                {
                                    id: 6,
                                    name: "Tuần 3",
                                },
                            ],
                        },
                        {
                            id: 4,
                            name: "Kỹ năng mềm",
                        },
                        {
                            id: 5,
                            name: "Các khoá học khác",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        logout() {
            axios.get("/api/logout").then(() => {
                window.location.pathname = "/home";
            });
        },
    },
};
</script>

<style scoped>
@import "../../../../public/css/fonts/flaticon/font/flaticon.css";
@import "../../../../public/css/fonts/icomoon/style.css";
@import "../../../../public/css/bootstrap.min.css";
@import "../../../../public/css/jquery-ui.css";
@import "../../../../public/css/owl.carousel.min.css";
@import "../../../../public/css/owl.theme.default.min.css";
@import "../../../../public/css/jquery.fancybox.min.css";
@import "../../../../public/css/bootstrap-datepicker.css";
@import "../../../../public/css/aos.css";
/* @import "../../../../public/css/jquery.mb.YTPlayer.min.css"; */
@import "../../../../public/css/style.css";
/* HEADER START */

    #header {
    background-image: linear-gradient(to bottom, #fff 0%, #f4f4f4 160%);
    background-repeat: repeat-x;
}

.navbar-login {
    min-height: 100px;
}

.icon-home2:before {
    font-size: 20px;
}

.home {
    background-color: #f58635;
}

.d-flex.align-items-center {
    height: 48px;
}

.site-menu {
    display: flex !important;
}

.site-menu>li {
    height: 48px;
    line-height: 48px;
}

.nav-link.text-left:hover {
    background-color: #f58635;
    transition-delay: 0.05s;
    transition-duration: 0.3s;
}

.nav-link.text-left.home:hover {
    background-color: #ffa500;
}

.home:hover>.icon.icon-home2 {
    color: white;
}

.dropdown.bg-secondary li a:hover {
    background-color: #f58635 !important;
    transition-delay: 0.05s;
    transition-duration: 0.35s;
}

.site-mobile-menu {
    background-color: #3a454b;
}

.site-nav-wrap li a {
    padding: 7px 1rem !important;
}

.site-mobile-menu-body .nav-link.text-left.home:hover {
    background-color: #ffa500;
}

.social-wrap {
    height: 48px;
}

.social-wrap>a {
    width: 48px;
    height: 48px;
}

#avatar {
    width: 64.86px;
    height: 100%;
    float: right;
    border-radius: 3px;
}

#dropdown-in-header {
    float: right;
    outline: none;
}

/* deep ghi đè */
::v-deep .dropdown-item {
    outline: none;
}

.container-fluid {
    padding-left: 68px;
    padding-right: 68px;
}

/* HEADER END */

.container-fluid {
    padding-left: 68px;
    padding-right: 68px;
}

/* LEFT SIDEBAR */
::v-deep .open>.ctx-menu {
    /* display: none; */
}

::v-deep .tree-node svg>.svg-icon {
    fill: unset !important;
    opacity: 0.65 !important;
}
</style>