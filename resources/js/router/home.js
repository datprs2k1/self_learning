import Index from "../pages/home/Index.vue";
import Home from "../pages/home/Home.vue";
import Login from "../pages/login/Index.vue";
import About from "../pages/home/About.vue";
import Courses from "../pages/home/Courses.vue";
import Contact from "../pages/home/Contact.vue";

const routers = [
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "",
                component: Home,
                meta: { title: 'Trang chủ' }
            },
            {
                path: "login",
                name: "Login",
                component: Login,
                meta: { title: 'UTT SelfLearning: Đăng nhập vào trang' }
            },
            {
                path: "about",
                component: About,
                meta: { title: 'UTT SelfLearning: Giới thiệu' }
            },
            {
                path: "courses",
                component: Courses,
                meta: { title: 'UTT SelfLearning: Danh mục khóa học' }
            },
            {
                path: "contact",
                component: Contact,
                meta: { title: 'UTT SelfLearning: Liên hệ' }
            },
        ]
    },
];

export default routers;
