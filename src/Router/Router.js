import Home from '../Pages/Public/Home/Home.vue';
import Blog from '../Pages/Public/Blog/Blog.vue'
const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/blog',
        component: Blog
    }
];

export default routes;