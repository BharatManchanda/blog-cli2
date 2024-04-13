import Home from '../Pages/Public/Home/Home.vue';
import Blog from '../Pages/Public/Blog/Blog.vue'
import About from '../Pages/Public/About/About.vue'
import Contact from '../Pages/Public/Contact/Contact.vue'
import BlogDetail from '../Pages/Public/Blog/BlogDetail.vue'
const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/blog',
        component: Blog
    },
    {
        path:'/blog-detail/:id',
        component: BlogDetail
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/contact-us',
        component: Contact
    },
];

export default routes;