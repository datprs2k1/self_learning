import Admin from "../pages/admin/Index.vue";
import DashboardAdmin from "../pages/admin/Dashboard.vue";
import Lecturer from "../pages/lecturer/Index.vue";
import DashboardLecturer from "../pages/lecturer/Dashboard.vue";
import Student from "../pages/student/Index.vue";
import DashboardStudent from "../pages/student/Dashboard.vue";
import DepartmentAdd from "../pages/admin/department/Add.vue";
import DepartmentEdit from "../pages/admin/department/Edit.vue";
import Department from "../pages/admin/department/Index.vue";


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
        ],
    },
    {
        path: "/lecturer",
        name: "Lecturer",
        component: Lecturer,
        children: [
            {
                path: "",
                component: DashboardLecturer,
                meta: {
                    title: "UTT SelfLearning: Giảng Viên",
                    requiresAuth: true,
                    requiredRole: "lecturer",
                },
            }
        ],
    },
    {
        path: "/student",
        name: "Student",
        component: Student,
        children: [
            {
                path: "",
                component: DashboardStudent,
                meta: {
                    title: "UTT SelfLearning: Học Viên",
                    requiresAuth: true,
                    requiredRole: "student",
                },
            },
        ]
    },
];

export default routes;
