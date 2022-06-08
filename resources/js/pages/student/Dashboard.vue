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
                            <a href="/"
                                ><img
                                    src="images/utt_selflearning.png"
                                    width="320px"
                                    alt="Image"
                                    class="img-fluid"
                            /></a>
                        </div>
                    </div>
                    <div class="col-md-4 px-0">
                        <div class="row h-100">
                            <div class="col-md-9 p-0">
                                <b-dropdown
                                    id="dropdown-in-header"
                                    variant="primary"
                                >
                                    <template #button-content>
                                        Họ tên
                                    </template>
                                    <b-dropdown-item-button>
                                        <b-icon
                                            icon="lock-fill"
                                            aria-hidden="true"
                                        ></b-icon>
                                        Locked
                                        <span class="sr-only"
                                            >(Click to unlock)</span
                                        >
                                    </b-dropdown-item-button>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-group
                                        header="Choose options"
                                        class="small"
                                    >
                                        <b-dropdown-item-button>
                                            <b-icon
                                                icon="blank"
                                                aria-hidden="true"
                                            ></b-icon>
                                            Option A
                                            <span class="sr-only"
                                                >(Not selected)</span
                                            >
                                        </b-dropdown-item-button>
                                        <b-dropdown-item-button>
                                            <b-icon
                                                icon="check"
                                                aria-hidden="true"
                                            ></b-icon>
                                            Option B
                                            <span class="sr-only"
                                                >(Selected)</span
                                            >
                                        </b-dropdown-item-button>
                                        <b-dropdown-item-button>
                                            <b-icon
                                                icon="blank"
                                                aria-hidden="true"
                                            ></b-icon>
                                            Option C
                                            <span class="sr-only"
                                                >(Not selected)</span
                                            >
                                        </b-dropdown-item-button>
                                    </b-dropdown-group>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item-button
                                        >Some action</b-dropdown-item-button
                                    >
                                    <b-dropdown-item-button
                                        >Some other
                                        action</b-dropdown-item-button
                                    >
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item-button variant="danger">
                                        <b-icon
                                            icon="trash-fill"
                                            aria-hidden="true"
                                        ></b-icon>
                                        Delete
                                    </b-dropdown-item-button>
                                </b-dropdown>
                            </div>
                            <div class="col-md-3 p-0">
                                <img
                                    src="images/person_1.jpg"
                                    alt="avatar"
                                    id="avatar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header
                class="site-navbar site-navbar-target"
                role="banner"
                style="background-color: #3a454b; z-index: 1"
            >
                <div class="container-fluid">
                    <div class="d-flex align-items-center">
                        <div class="mr-auto">
                            <nav
                                class="site-navigation position-relative text-right"
                                role="navigation"
                            >
                                <ul
                                    class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block p-0"
                                >
                                    <li class="active">
                                        <a
                                            href="/"
                                            class="nav-link text-left home p-0 px-3 text-white"
                                            ><span
                                                class="icon icon-home2"
                                            ></span
                                        ></a>
                                    </li>
                                    <li class="has-children">
                                        <a
                                            to="/about"
                                            class="nav-link text-left p-0 px-3 text-white"
                                            ><span>Giới thiệu</span></a
                                        >
                                        <ul class="dropdown bg-secondary">
                                            <li>
                                                <a
                                                    href="/about"
                                                    class="nav-link text-left p-0 px-3 text-white"
                                                    ><span>Our Teacher</span></a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="/about"
                                                    class="nav-link text-left p-0 px-3 text-white"
                                                    ><span>Our Student</span></a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            class="nav-link text-left p-0 px-3 text-white"
                                            ><span>Tin tức</span></a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="/courses"
                                            class="nav-link text-left p-0 px-3 text-white"
                                            ><span>Khóa học</span></a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="/contact"
                                            class="nav-link text-left p-0 px-3 text-white"
                                            ><span>Liên hệ</span></a
                                        >
                                    </li>
                                    <li style="float: right">
                                        <a
                                            href=""
                                            class="nav-link text-left p-0 px-3 text-white"
                                        >
                                            <b-icon icon="search"></b-icon>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="ml-auto">
                            <div class="social-wrap">
                                <a
                                    href="#"
                                    class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                                    ><span class="icon-menu h3"></span
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

        <div
            class="container-fluid"
            style="height: 1500px; width: 100%; margin-top: 48px"
        >
            <div class="row h-100" style="padding-top: 24px">
                <div class="col-md-3 h-50">
                    <h6>Bảng Điều Khiển</h6>
                    <div
                        class="w-100 mt-3 mb-3"
                        style="
                            border-top: 3px solid #f58635;
                            padding: 12px;
                            border-radius: 3px;
                            box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
                        "
                    >
                        <div class="px-3 pb-1">
                            <b-icon
                                icon="diagram3-fill"
                                style="
                                    color: #f58635;
                                    width: 24px;
                                    height: 24px;
                                "
                            ></b-icon>
                            <span
                                style="
                                    margin-top: 1px;
                                    margin-left: 10px;
                                    font-weight: 700;
                                "
                            >
                                Điều Hướng
                            </span>
                        </div>
                        <div
                            class="left-sidebar px-3"
                            style="border-top: 2px solid #dddddd"
                        >
                            <div class="row">
                                <div class="col-md-12 p-0 pt-3">
                                    <h6 style="font-weight: 600">
                                        Bảng Điều Khiển
                                    </h6>
                                </div>

                                <div class="col-md-12 p-0">
                                    <b-tree-view
                                        :data="treeData"
                                        :contextMenu="false"
                                        :contextMenuItems="contextMenuItems"
                                        @nodeSelect="nodeSelect"
                                        :renameNodeOnDblClick="false"
                                    ></b-tree-view>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-100 mt-3 mb-3"
                        style="
                            border-top: 3px solid #f58635;
                            padding: 12px;
                            border-radius: 3px;
                            box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
                        "
                    >
                        <div class="px-3 pb-1">
                            <b-icon
                                icon="volume-up-fill"
                                style="
                                    color: #f58635;
                                    width: 24px;
                                    height: 24px;
                                "
                            ></b-icon>
                            <span
                                style="
                                    margin-top: 1px;
                                    margin-left: 10px;
                                    font-weight: 700;
                                "
                            >
                                Tin mới nhất
                            </span>
                        </div>
                        <div
                            class="left-sidebar px-3"
                            style="border-top: 2px solid #dddddd"
                        >
                            <div class="row">
                                <div
                                    class="col-md-12 p-0 pt-3"
                                    style="min-height: 100px"
                                >
                                    (Chưa có thông báo nào được gửi.)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-6 h-50 rounded"
                    style="
                        border-top: 3px solid rgb(245, 134, 53);
                        box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px 2px;
                        padding-top: 12px;
                        margin-top: 35px;
                    "
                >
                    <div v-if="showQuestions">
                        <div v-for="(item, index) in questions" :key="item.id">
                            <h6>Câu {{ index + 1 }}: {{ item.question }}</h6>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    @change="setSelected"
                                    type="radio"
                                    v-model="selected[index]"
                                    :id="`exampleRadios1${index}`"
                                    :value="{ question_id: item.id, value: 1 }"
                                />
                                <label
                                    class="form-check-label"
                                    @change="setSelected"
                                    :for="`exampleRadios1${index}`"
                                >
                                    {{ item.answer_A }}
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    @change="setSelected"
                                    type="radio"
                                    v-model="selected[index]"
                                    :id="`exampleRadios2${index}`"
                                    :value="{ question_id: item.id, value: 2 }"
                                />
                                <label
                                    class="form-check-label"
                                    @change="setSelected"
                                    :for="`exampleRadios2${index}`"
                                >
                                    {{ item.answer_B }}
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    @change="setSelected"
                                    type="radio"
                                    v-model="selected[index]"
                                    :id="`exampleRadios3${index}`"
                                    :value="{ question_id: item.id, value: 3 }"
                                />
                                <label
                                    class="form-check-label"
                                    @change="setSelected"
                                    :for="`exampleRadios3${index}`"
                                >
                                    {{ item.answer_C }}
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    @change="setSelected"
                                    type="radio"
                                    v-model="selected[index]"
                                    :id="`exampleRadios4${index}`"
                                    :value="{ question_id: item.id, value: 4 }"
                                />
                                <label
                                    class="form-check-label"
                                    @change="setSelected"
                                    :for="`exampleRadios4${index}`"
                                >
                                    {{ item.answer_D }}
                                </label>
                            </div>
                        </div>
                        <div class="border-top mt-2">
                            <button
                                class="btn btn-primary mt-2 float-right"
                                @click="submit"
                            >
                                Nộp bài
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 h-50">
                    <div
                        style="
                            border-top: 3px solid rgb(245, 134, 53);
                            box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px 2px;
                            padding-top: 12px;
                            margin-top: 35px;
                            border-radius: 3px;
                        "
                    >
                        <span v-if="showTime" id="timer"></span>
                    </div>
                </div>
            </div>
        </div>
        <b-modal ref="modal_video" size="lg" hide-footer :title="subject_name">
            <LazyYoutube :src="this.video_path" maxWidth="100%" />
        </b-modal>
        <b-modal
            id="modal-danhsach"
            size="lg"
            :title="'Danh sách thành viên'"
            ref="modalDanhSach"
        >
            <div class="form-group">
                <b-table :items="myCourse.student" :fields="fields">
                    <template #cell(index)="row">
                        {{ row.index + 1 }}
                    </template>
                </b-table>
            </div>
            <template #modal-footer="{ ok, cancel }">
                <div>
                    <b-button variant="primary"> Xác nhận </b-button>
                    <b-button variant="secondary" @click="cancel()">
                        Hủy
                    </b-button>
                </div>
            </template>
        </b-modal>
        <b-modal
            id="modal-diemso"
            size="lg"
            :title="'Điểm số'"
            ref="modalDiemSo"
        >
            <div class="form-group">
                <b-table :items="result" :fields="results">
                    <template #cell(index)="row">
                        {{ row.index + 1 }}
                    </template>
                </b-table>
            </div>
            <template #modal-footer="{ ok, cancel }">
                <div>
                    <b-button variant="primary"> Xác nhận </b-button>
                    <b-button variant="secondary" @click="cancel()">
                        Hủy
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
setInterval(function () {
    var remaining = localStorage.endTime - new Date();
    if (remaining >= 0) {
        var seconds = Math.floor(remaining / 1000);
        $("#timer").text(new Date(seconds * 1000).toISOString().slice(14, 19));
    } else {
        // reset();
    }
}, 100);
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            fields: [
                {
                    key: "index",
                    label: "STT",
                },
                {
                    key: "code",
                    label: "MSV",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "name",
                    label: "Họ tên",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "email",
                    label: "Email",
                    class: "text-center",
                    sortable: true,
                },
            ],
            results: [
                {
                    key: "index",
                    label: "STT",
                },
                {
                    key: "week",
                    label: "Tuần",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "maxScore",
                    label: "Điểm",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "totalTime",
                    label: "Thời gian làm (phút)",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "created_at",
                    label: "Lần làm bài gần đây",
                    class: "text-center",
                    sortable: true,
                },
            ],
            showTime: false,
            treeData: [
                {
                    id: 1,
                    name: "Học Trực Tuyến Cùng UTT",
                    children: [
                        {
                            id: 3,
                            name: "Giới thiệu",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Khóa học của tôi",
                    children: [{}],
                },
            ],
            contextMenuItems: [
                { code: "DELETE_NODE", label: "Delete node" },
                {
                    code: "ADD_CHILD_NODE",
                    label: "Add child",
                },
            ],
            video_path: "",
            subject_name: "",
            questions: [],
            totalTime: 0,
            showQuestions: false,
            selected: [],
            result: [],
        };
    },
    async created() {
        await this.getMyCourse();
        await this.getLessons();
        this.treeData[1].children = this.myCourse.subject;
        this.treeData[1].children.forEach((element) => {
            element.children = [
                {
                    name: "Danh sách thành viên",
                    type: "danhsach",
                },
                {
                    name: "Điểm số",
                    type: "diemso",
                    class_id: this.myCourse.id,
                    subject_id: element.id,
                },
            ];
            for (let index = 0; index < element.weeks; index++) {
                element.children.push({
                    name: "Tuần " + (index + 1),
                    children: [
                        {
                            name: "Bài học tự học",
                            subject_id: element.id,
                            class_id: this.myCourse.id,
                            week: index + 1,
                            type: "slide",
                        },
                        {
                            name: "Video bài giảng",
                            subject_id: element.id,
                            class_id: this.myCourse.id,
                            week: index + 1,
                            type: "video",
                        },
                        {
                            name: "Bài test",
                            subject_id: element.id,
                            class_id: this.myCourse.id,
                            week: index + 1,
                            type: "test",
                        },
                    ],
                });
            }
            element.type = "subject";
        });
        if (sessionStorage.getItem("questions") != null) {
            this.questions = JSON.parse(sessionStorage.getItem("questions"));
            this.showQuestions = true;
            this.showTime = true;
        }
        if (sessionStorage.getItem("selected_test") != null) {
            this.selected = JSON.parse(sessionStorage.getItem("selected_test"));
        }
    },
    methods: {
        ...mapActions("student", ["getMyCourse"]),
        ...mapActions("lesson", ["getLessons"]),
        ...mapActions("student", ["getResult"]),
        logout() {
            axios.get("/api/logout").then(() => {
                window.location.pathname = "/home";
            });
        },
        nodeSelect(node, isSelected) {
            switch (node.data.type) {
                case "danhsach":
                    if (isSelected) {
                        this.$refs.modalDiemSo.hide();
                        this.$refs.modalDanhSach.show();
                    }
                    break;
                case "diemso":
                    if (isSelected) {
                        this.getResult({
                            subject_id: node.data.subject_id,
                            class_id: node.data.class_id,
                        }).then((data) => {
                            const result = data.filter(
                                (item) =>
                                    item.subject_id == node.data.subject_id &&
                                    item.class_id == node.data.class_id
                            );
                            this.result = result;

                            this.$refs.modalDanhSach.hide();
                            this.$refs.modalDiemSo.show();
                        });
                    }
                    break;
                case "subject":
                    break;
                case "slide":
                    if (
                        this.getSlidePath(
                            node.data.subject_id,
                            node.data.class_id,
                            node.data.week
                        ) != "" &&
                        isSelected
                    ) {
                        window.open(
                            `/files/${this.getSlidePath(
                                node.data.subject_id,
                                node.data.class_id,
                                node.data.week
                            )}`,
                            "_blank"
                        );
                    } else if (
                        !this.getSlidePath(
                            node.data.subject_id,
                            node.data.class_id,
                            node.data.week
                        ) &&
                        isSelected
                    ) {
                        this.$swal({
                            title: "Chưa có bài giảng",
                            type: "warning",
                            icon: "warning",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Thoát",
                        });
                    }
                    break;
                case "video":
                    try {
                        if (
                            this.getVideoPath(
                                node.data.subject_id,
                                node.data.class_id,
                                node.data.week
                            ) != null &&
                            isSelected
                        ) {
                            this.video_path = this.getVideoPath(
                                node.data.subject_id,
                                node.data.class_id,
                                node.data.week
                            );
                            this.subject_name = this.lessons.filter(
                                (lesson) =>
                                    lesson.subject_id == node.data.subject_id &&
                                    lesson.class_id == node.data.class_id &&
                                    lesson.week == node.data.week
                            )[0].name;
                            this.showModalVideo();
                        } else if (
                            !this.getVideoPath(
                                node.data.subject_id,
                                node.data.week,
                                node.data.week
                            ) &&
                            isSelected
                        ) {
                            this.$swal({
                                title: "Chưa có video",
                                type: "warning",
                                icon: "warning",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "Thoát",
                            });
                        }
                    } catch (error) {
                        this.$swal({
                            title: "Chưa có video",
                            type: "warning",
                            icon: "warning",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Thoát",
                        });
                    }
                    break;
                case "test":
                    if (
                        this.getQuestions(
                            node.data.subject_id,
                            node.data.class_id,
                            node.data.week
                        ) != [] &&
                        isSelected
                    ) {
                        this.showQuestions = false;
                        this.showTime = false;
                        if (this.questions.length > 0) {
                            this.$swal({
                                title: "Bạn muốn làm bài tập trắc nghiệm?",
                                text: `Có ${this.questions.length} câu hỏi trong vòng ${this.totalTime} phút`,
                                icon: "question",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Đồng ý",
                                cancelButtonText: "Hủy",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    this.showQuestions = true;
                                    this.showTime = true;
                                    var interval = this.totalTime * 60 * 1000;
                                    localStorage.endTime =
                                        +new Date() + interval;
                                    setInterval(() => {
                                        var remaining =
                                            localStorage.endTime - new Date();
                                        if (remaining < 0) {
                                            this.$store
                                                .dispatch(
                                                    "student/submitTest",
                                                    {
                                                        class_id:
                                                            this.questions[0]
                                                                .class_id,
                                                        subject_id:
                                                            this.questions[0]
                                                                .subject_id,
                                                        week: this.questions[0]
                                                            .week,
                                                        totalTime:
                                                            document.getElementById(
                                                                "timer"
                                                            ).innerText,
                                                        selected: this.selected,
                                                        lengthQuestions:
                                                            this.questions
                                                                .length,
                                                    }
                                                )
                                                .then((res) => {
                                                    console.log(res);
                                                    this.$swal({
                                                        title: "Nộp bài thành công",
                                                        text: `Điểm: ${res.scores}`,
                                                        type: "success",
                                                        icon: "success",
                                                        confirmButtonColor:
                                                            "#3085d6",
                                                        confirmButtonText:
                                                            "Thoát",
                                                    });
                                                    this.questions = [];
                                                    this.totalTime = 0;
                                                    this.selected = [];
                                                    this.showQuestions = false;
                                                    this.showTime = false;
                                                });
                                            localStorage.removeItem("endTime");
                                            sessionStorage.removeItem(
                                                "questions"
                                            );
                                            sessionStorage.removeItem(
                                                "selected_test"
                                            );
                                        }
                                    }, 100);
                                    sessionStorage.setItem(
                                        "questions",
                                        JSON.stringify(this.questions)
                                    );
                                }
                            });
                        } else {
                            this.$swal({
                                title: "Chưa có bài test",
                                type: "warning",
                                icon: "warning",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "Thoát",
                            });
                            this.questions = [];
                            this.totalTime = 0;
                        }
                    } else if (
                        !this.getQuestions(
                            node.data.subject_id,
                            node.data.class_id,
                            node.data.week
                        ) &&
                        isSelected
                    ) {
                        this.$swal({
                            title: "Chưa có bài test",
                            type: "warning",
                            icon: "warning",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Thoát",
                        });
                        this.questions = [];
                        this.totalTime = 0;
                    }
                    break;

                default:
                    break;
            }
        },
        getSlidePath(subject_id, class_id, week) {
            try {
                return this.lessons.filter(
                    (lesson) =>
                        lesson.subject_id == subject_id &&
                        lesson.class_id == class_id &&
                        lesson.week == week
                )[0].path;
            } catch (error) {
                return "";
            }
        },
        getVideoPath(subject_id, class_id, week) {
            try {
                return this.lessons.filter(
                    (lesson) =>
                        lesson.subject_id == subject_id &&
                        lesson.class_id == class_id &&
                        lesson.week == week
                )[0].video_path;
            } catch (error) {
                return "";
            }
        },
        showModalVideo() {
            this.$refs.modal_video.show();
        },
        getQuestions(subject_id, class_id, week) {
            try {
                this.questions = this.myCourse.question
                    .filter(
                        (question) =>
                            question.subject_id == subject_id &&
                            question.class_id == class_id &&
                            question.week == week
                    )
                    .sort(() => Math.random() - 0.5);
                this.totalTime = this.questions[0].total_time;
            } catch (error) {
                return [];
            }
        },
        setSelected() {
            sessionStorage.setItem(
                "selected_test",
                JSON.stringify(this.selected)
            );
        },
        submit() {
            this.$swal({
                title: "Bạn đã chắc chắn nộp bài?",
                text:
                    this.questions.length - this.selected.length > 0
                        ? `Có ${
                              this.questions.length - this.selected.length
                          } câu chưa được chọn`
                        : "",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Hủy",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store
                        .dispatch("student/submitTest", {
                            class_id: this.questions[0].class_id,
                            subject_id: this.questions[0].subject_id,
                            week: this.questions[0].week,
                            totalTime:
                                document.getElementById("timer").innerText,
                            selected: this.selected,
                            lengthQuestions: this.questions.length,
                        })
                        .then((res) => {
                            console.log(res);
                            this.$swal({
                                title: "Nộp bài thành công",
                                text: `Điểm: ${res.scores}`,
                                type: "success",
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "Thoát",
                            });
                            this.questions = [];
                            this.totalTime = 0;
                            this.selected = [];
                            this.showQuestions = false;
                            this.showTime = false;
                        });
                    localStorage.removeItem("endTime");
                    sessionStorage.removeItem("questions");
                    sessionStorage.removeItem("selected_test");
                }
            });
        },
    },
    computed: {
        ...mapGetters("student", ["myCourse"]),
        ...mapGetters("lesson", ["lessons"]),
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

.site-menu > li {
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

.home:hover > .icon.icon-home2 {
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

.social-wrap > a {
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
::v-deep .open > .ctx-menu {
    /* display: none; */
}

::v-deep .tree-node svg > .svg-icon {
    fill: unset !important;
    opacity: 0.65 !important;
}

.form-check {
    padding-left: 1.5em !important;
}
</style>
