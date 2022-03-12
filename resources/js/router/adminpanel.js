const Admin = () => import("../pages/admin/Index.vue");
const DashboardAdmin = () => import("../pages/admin/Dashboard.vue");
const DepartmentAdd = () => import("../pages/admin/department/Add.vue");
const DepartmentEdit = () => import("../pages/admin/department/Edit.vue");
const Department = () => import("../pages/admin/department/Index.vue");
const ClassAdd = () => import("../pages/admin/class/Add.vue");
const ClassEdit = () => import("../pages/admin/class/Edit.vue");
const Class = () => import("../pages/admin/class/Index.vue");
const ClassShow = () => import("../pages/admin/class/Show.vue");
const StudentAdd = () => import("../pages/admin/student/Add.vue");
const StudentEdit = () => import("../pages/admin/student/Edit.vue");
const Student = () => import("../pages/admin/student/Index.vue");
const SubjectAdd = () => import("../pages/admin/subject/Add.vue");
const SubjectEdit = () => import("../pages/admin/subject/Edit.vue");
const Subject = () => import("../pages/admin/subject/Index.vue");
const Lesson = () => import("../pages/admin/lesson/Index.vue");
const LessonAdd = () => import("../pages/admin/lesson/Add.vue");
const LessonEdit = () => import("../pages/admin/lesson/Edit.vue");
const Document = () => import("../pages/admin/document/Index.vue");
const DocumentAdd = () => import("../pages/admin/document/Add.vue");
const DocumentEdit = () => import("../pages/admin/document/Edit.vue");
const Test = () => import("../pages/admin/test/Index.vue");
const TestAdd = () => import("../pages/admin/test/Add.vue");
const TestEdit = () => import("../pages/admin/test/Edit.vue");
const Question = () => import("../pages/admin/question/Index.vue");
const QuestionAdd = () => import("../pages/admin/question/Add.vue");
const QuestionEdit = () => import("../pages/admin/question/Edit.vue");


const routes = [
    {
        path: "/adminpanel",
        name: "Admin",
        component: Admin,
        meta: {
            breadcrumb: "Tổng Quan",
        },
        children: [
            {
                path: "",
                component: DashboardAdmin,
                meta: {
                    title: "UTT SelfLearning: Quản Trị Viên",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "department/add",
                component: DepartmentAdd,
                name: "department.add",
                meta: {
                    title: "Thêm Khoa",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "department.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "department/edit/:id",
                component: DepartmentEdit,
                name: "department.edit",
                meta: {
                    title: "Sửa Khoa",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "department.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "department",
                component: Department,
                name: "department.index",
                meta: {
                    title: "Danh Sách Khoa",
                    breadcrumb: "Khoa",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "class/add",
                component: ClassAdd,
                name: "class.add",
                meta: {
                    title: "Thêm Lớp",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "class.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "class",
                component: Class,
                name: "class.index",
                meta: {
                    title: "Danh Sách Lớp",
                    breadcrumb: "Lớp",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "class/edit/:id",
                component: ClassEdit,
                name: "class.edit",
                meta: {
                    title: "Sửa Lớp",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "class.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "class/show/:id",
                component: ClassShow,
                name: "class.show",
                meta: {
                    title: "Xem Lớp",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "class.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "student/add",
                component: StudentAdd,
                name: "student.add",
                meta: {
                    title: "Thêm Sinh Viên",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "student.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "student",
                component: Student,
                name: "student.index",
                meta: {
                    title: "Danh Sách Sinh Viên",
                    breadcrumb: "Sinh Viên",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "student/edit/:id",
                component: StudentEdit,
                name: "student.edit",
                meta: {
                    title: "Sửa Sinh Viên",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "student.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "subject/add",
                component: SubjectAdd,
                name: "subject.add",
                meta: {
                    title: "Thêm Môn Học",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "subject.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "subject",
                component: Subject,
                name: "subject.index",
                meta: {
                    title: "Danh Sách Môn Học",
                    breadcrumb: "Môn Học",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "subject/edit/:id",
                component: SubjectEdit,
                name: "subject.edit",
                meta: {
                    title: "Sửa Môn Học",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "subject.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "lesson",
                component: Lesson,
                name: "lesson.index",
                meta: {
                    title: "Danh Sách Bài Giảng",
                    breadcrumb: "Bài Giảng",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "lesson/add",
                component: LessonAdd,
                name: "lesson.add",
                meta: {
                    title: "Thêm Bài Giảng",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "lesson.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "lesson/edit/:id",
                component: LessonEdit,
                name: "lesson.edit",
                meta: {
                    title: "Sửa Bài Giảng",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "lesson.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "document",
                component: Document,
                name: "document.index",
                meta: {
                    title: "Danh sách tài liệu",
                    breadcrumb: "Tài Liệu",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "document/add",
                component: DocumentAdd,
                name: "document.add",
                meta: {
                    title: "Thêm tài liệu",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "document.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "document/edit/:id",
                component: DocumentEdit,
                name: "document.edit",
                meta: {
                    title: "Sửa tài liệu",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "document.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "test",
                component: Test,
                name: "test.index",
                meta: {
                    title: "Danh sách đề thi",
                    breadcrumb: "Đề Thi",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "test/add",
                component: TestAdd,
                name: "test.add",
                meta: {
                    title: "Thêm đề thi",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "test.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "test/edit/:id",
                component: TestEdit,
                name: "test.edit",
                meta: {
                    title: "Sửa đề thi",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "test.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "question",
                component: Question,
                name: "question.index",
                meta: {
                    title: "Danh sách câu hỏi",
                    breadcrumb: "Câu Hỏi",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "question/add",
                component: QuestionAdd,
                name: "question.add",
                meta: {
                    title: "Thêm câu hỏi",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "question.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "question/edit/:id",
                component: QuestionEdit,
                name: "question.edit",
                meta: {
                    title: "Sửa câu hỏi",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "question.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
        ],
    },
];

export default routes;
