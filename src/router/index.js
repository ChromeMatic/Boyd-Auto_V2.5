import { createWebHistory, createRouter } from 'vue-router'
import homePage from '../Pages/Landing.vue';
import Dealer from '../Pages/Dealer.vue';
import CustomerPage from '../Pages/Customer.vue';
import LoginPage from "../Pages/Login.vue";
import SignupPage from "../Pages/SignUp.vue"
import Details from "../Pages/Details.vue"

const routes = [

    {
        path: '/',
        name: 'home',
        component: homePage
    },

    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },

    {
        path: '/register',
        name: 'signup',
        component: SignupPage
    },


    {
        path: '/dealer',
        name: 'dealer',
        component: Dealer
    },

    {
        path: '/customer',
        name: 'customer',
        component: CustomerPage
    },

    {
        path: '/details',
        name: 'detail',
        component: Details
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;