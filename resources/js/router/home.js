const Index = () => import("../pages/home/Index.vue");
const Home = () => import("../pages/home/Home.vue");
const Login = () => import("../pages/login/Index.vue");
const About = () => import("../pages/home/About.vue");
const Courses = () => import("../pages/home/Courses.vue");
const Contact = () => import("../pages/home/Contact.vue");

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
