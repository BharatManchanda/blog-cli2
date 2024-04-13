import Home from '../Pages/Public/Home/Home.vue';
import Blog from '../Pages/Public/Blog/Blog.vue'
import About from '../Pages/Public/About/About.vue'
import Contact from '../Pages/Public/Contact/Contact.vue'
import BlogDetail from '../Pages/Public/Blog/BlogDetail.vue'
const routes = [
    {
        path:'/',
        meta:'PublicLayout',
        component: Home,
    },
    {
        path:'/blog',
        meta:'PublicLayout',
        component: Blog,
    },
    {
        path:'/blog-detail/:id',
        meta:'PublicLayout',
        component: BlogDetail
    },
    {
        path:'/about',
        meta:'PublicLayout',
        component: About,
    },
    {
        path:'/contact-us',
        meta:'PublicLayout',
        component: Contact,
    },
    {
        path:'/admin/dashboard',
        meta:'AdminLayout',
        component: Contact,
    },
    {
        path:'/admin/category',
        meta:'AdminLayout',
        component: Contact,
    },
    {
        path:'/admin/blog',
        meta:'AdminLayout',
        component: Contact,
    },
    {
        path:'/admin/message',
        meta:'AdminLayout',
        component: Contact,
    },
    {
        path:'/admin/report',
        meta:'AdminLayout',
        component: Contact,
    },
];

export default routes;