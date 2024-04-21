import Home from '../Pages/Public/Home/Home.vue';
import Blog from '../Pages/Public/Blog/Blog.vue'
import About from '../Pages/Public/About/About.vue'
import Contact from '../Pages/Public/Contact/Contact.vue'
import BlogDetail from '../Pages/Public/Blog/BlogDetail.vue'
import Dashboard from '../Pages/Admin/Dashboard/Dashboard.vue'
import Report from '../Pages/Admin/Report/Report.vue'
import Message from '../Pages/Admin/Message/Message.vue'
import Category from '../Pages/Admin/Category/Category.vue'
import AdminBlog from '../Pages/Admin/Blog/Blog.vue'

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
        component: Dashboard,
    },
    {
        path:'/admin/category',
        meta:'AdminLayout',
        component: Category,
    },
    {
        path:'/admin/blog',
        meta:'AdminLayout',
        component: AdminBlog,
    },
    {
        path:'/admin/message',
        meta:'AdminLayout',
        component: Message,
    },
    {
        path:'/admin/report',
        meta:'AdminLayout',
        component: Report,
    },
];

export default routes;