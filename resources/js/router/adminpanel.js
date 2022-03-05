import Admin from "../pages/admin/Index.vue";
import DashboardAdmin from "../pages/admin/Dashboard.vue";
import DepartmentAdd from "../pages/admin/department/Add.vue";
import DepartmentEdit from "../pages/admin/department/Edit.vue";
import Department from "../pages/admin/department/Index.vue";
import ClassAdd from "../pages/admin/class/Add.vue";
import ClassEdit from "../pages/admin/class/Edit.vue";
import Class from "../pages/admin/class/Index.vue";
import StudentAdd from "../pages/admin/student/Add.vue";
import StudentEdit from "../pages/admin/student/Edit.vue";
import Student from "../pages/admin/student/Index.vue";
import SubjectAdd from "../pages/admin/subject/Add.vue";
import SubjectEdit from "../pages/admin/subject/Edit.vue";
import Subject from "../pages/admin/subject/Index.vue";
import Lesson from "../pages/admin/lesson/Index.vue";
import LessonAdd from "../pages/admin/lesson/Add.vue";
import LessonEdit from "../pages/admin/lesson/Edit.vue";

const routes = [
    {
        path: "/adminpanel",
        name: "Admin",
        component: Admin,
        meta: {
            breadcrumb: "Tổng quan",
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
                    title: "Thêm khoa",
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
                    title: "Sửa khoa",
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
                    title: "Danh sách khoa",
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
                    title: "Thêm lớp",
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
                    title: "Danh sách lớp",
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
                    title: "Sửa lớp",
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
                    title: "Thêm sinh viên",
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
                    title: "Danh sách sinh viên",
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
                    title: "Sửa sinh viên",
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
                    title: "Thêm môn học",
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
                    title: "Danh sách môn học",
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
                    title: "Sửa môn học",
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
                    title: "Danh sách bài giảng",
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
                    title: "Thêm bài giảng",
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
                    title: "Sửa bài giảng",
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
        ],
    },
];

export default routes;
