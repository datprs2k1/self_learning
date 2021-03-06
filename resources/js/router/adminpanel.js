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
const TestShow = () => import("../pages/admin/test/Show.vue");
const Question = () => import("../pages/admin/question/Index.vue");
const QuestionAdd = () => import("../pages/admin/question/Add.vue");
const QuestionEdit = () => import("../pages/admin/question/Edit.vue");
const Teacher = () => import("../pages/admin/teacher/Index.vue");
const TeacherAdd = () => import("../pages/admin/teacher/Add.vue");
const TeacherEdit = () => import("../pages/admin/teacher/Edit.vue");

const routes = [
    {
        path: "/adminpanel",
        name: "Admin",
        component: Admin,
        meta: {
            breadcrumb: "T???ng Quan",
        },
        children: [
            {
                path: "",
                component: DashboardAdmin,
                meta: {
                    title: "UTT SelfLearning: Qu???n Tr??? Vi??n",
                    requiresAuth: true,
                    requiredRole: "admin|teacher",
                },
            },
            {
                path: "department/add",
                component: DepartmentAdd,
                name: "department.add",
                meta: {
                    title: "Th??m Khoa",
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
                    title: "S???a Khoa",
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
                    title: "Danh S??ch Khoa",
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
                    title: "Th??m L???p",
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
                    title: "Danh S??ch L???p",
                    breadcrumb: "L???p",
                    requiresAuth: true,
                    requiredRole: "admin|teacher",
                },
            },
            {
                path: "class/edit/:id",
                component: ClassEdit,
                name: "class.edit",
                meta: {
                    title: "S???a L???p",
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
                    title: "Xem L???p",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "class.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin|teacher",
                },
            },
            {
                path: "student/add",
                component: StudentAdd,
                name: "student.add",
                meta: {
                    title: "Th??m Sinh Vi??n",
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
                    title: "Danh S??ch Sinh Vi??n",
                    breadcrumb: "Sinh Vi??n",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "student/edit/:id",
                component: StudentEdit,
                name: "student.edit",
                meta: {
                    title: "S???a Sinh Vi??n",
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
                    title: "Th??m M??n H???c",
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
                    title: "Danh S??ch M??n H???c",
                    breadcrumb: "M??n H???c",
                    requiresAuth: true,
                    requiredRole: "admin|teacher",
                },
            },
            {
                path: "subject/edit/:id",
                component: SubjectEdit,
                name: "subject.edit",
                meta: {
                    title: "S???a M??n H???c",
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
                    title: "Danh S??ch B??i Gi???ng",
                    breadcrumb: "B??i Gi???ng",
                    requiresAuth: true,
                    requiredRole: "admin|teacher",
                },
            },
            {
                path: "lesson/add",
                component: LessonAdd,
                name: "lesson.add",
                meta: {
                    title: "Th??m B??i Gi???ng",
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
                    title: "S???a B??i Gi???ng",
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
                    title: "Danh s??ch t??i li???u",
                    breadcrumb: "T??i Li???u",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "document/add",
                component: DocumentAdd,
                name: "document.add",
                meta: {
                    title: "Th??m t??i li???u",
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
                    title: "S???a t??i li???u",
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
                    title: "Danh s??ch ????? thi",
                    breadcrumb: "????? Thi",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "test/add",
                component: TestAdd,
                name: "test.add",
                meta: {
                    title: "Th??m ????? thi",
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
                    title: "S???a ????? thi",
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
                path: "test/show/:id",
                component: TestShow,
                name: "test.show",
                meta: {
                    title: "Xem ????? thi",
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
                    title: "Danh s??ch c??u h???i",
                    breadcrumb: "C??u H???i",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "question/add",
                component: QuestionAdd,
                name: "question.add",
                meta: {
                    title: "Th??m c??u h???i",
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
                    title: "S???a c??u h???i",
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
                path: "teacher",
                component: Teacher,
                name: "teacher.index",
                meta: {
                    title: "Danh s??ch gi???ng vi??n",
                    breadcrumb: "Gi???ng vi??n",
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "teacher/add",
                component: TeacherAdd,
                name: "teacher.add",
                meta: {
                    title: "Th??m gi???ng vi??n",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "teacher.index",
                        }
                    },
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
            {
                path: "teacher/edit/:id",
                component: TeacherEdit,
                name: "teacher.edit",
                meta: {
                    title: "S???a gi???ng vi??n",
                    breadcrumb() {
                        return {
                            label: this.$route.meta.title,
                            parent: "teacher.index",
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
