const Student = () => import("../pages/student/Index.vue");
const Dashboard = () => import('../pages/student/Dashboard.vue');
const DoTest = () => import('../pages/student/test/Do.vue');


const routes = [
    {
        path: "/student",
        name: "student",
        component: Student,
        meta: {
            breadcrumb: "Tổng Quan",
        },
        children: [
            {
                path: "",
                component: Dashboard,
                meta: {
                    title: "UTT SelfLearning: Quản Trị Viên",
                    requiresAuth: true,
                },
            },
            {
                path: "test/:id",
                component: DoTest,
                name: "test.do",
                meta: {
                    title: "Làm bài thi",
                    breadcrumb: "Bài thi",
                    requiresAuth: true,
                },
            },

        ],
    },
];

export default routes;
