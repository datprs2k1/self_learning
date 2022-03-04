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

const routes = [
    {
        path: "/adminpanel",
        name: "Admin",
        component: Admin,
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
                    requiresAuth: true,
                    requiredRole: "admin",
                },
            },
        ],
    },
];

export default routes;
