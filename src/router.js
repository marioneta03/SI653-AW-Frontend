import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import DestinationDetails from "@/views/DestinationDetails";
import DestinationComments from "@/views/DestinationComments";
import DestinationTips from "@/views/DestinationTips";
import DestinationServices from "@/views/DestinationServices";

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: Home},
    {
        path: "/search", name: "search", component: () => import(/* webpackChunkName: "search" */ "@/views/Search"),
        children: [
            {path: 'result', name: 'result', component: DestinationDetails},
            {path: 'comments', name: 'comments', component: DestinationComments},
            {path: 'tips', name: 'tips', component: DestinationTips},
            {path: 'services', name: 'services', component: DestinationServices}
        ]
    },
    {path: "/explore", name: "explore", component: () => import(/* webpackChunkName: "explore" */ "@/views/Explore")},
    {
        path: "/favorite",
        name: "favorite",
        component: () => import(/* webpackChunkName: "favorite" */ "@/views/Favorite")
    },
    {
        path: "/register",
        name: "register",
        component: () => import(/* webpackChunkName: "register" */ "@/views/Register")
    },
    {path: "/login", name: "login", component: () => import(/* webpackChunkName: "login" */ "@/views/Login")},
    {path: "/profile", name: "profile", component: () => import(/* webpackChunkName: "profile" */ "@/views/Profile")},
    {path: "/help", name: "help", component: () => import(/* webpackChunkName: "help" */ "@/views/Help")},
    {path: "/terms", name: "terms", component: () => import(/* webpackChunkName: "terms" */ "@/views/Terms")},
    {
        path: "/error404",
        name: "error404",
        component: () => import(/* webpackChunkName: "error404" */ "@/views/Error404")
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
