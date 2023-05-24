import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../views/home-page/HomePage.vue';
// users
import Login from '../views/users/Login.vue';

// navbar
import CartLunchP2 from '../views/navbar/CartLunchP2.vue';
import CartLunchP8 from '../views/navbar/CartLunchP8.vue';
import CartLunchP1 from '../views/navbar/CartLunchP1.vue';
// register customers
import CartLunchP5 from '../views/register-customer/CartLunchP5.vue';
import CartLunchP5_1 from '../views/register-customer/CartLunchP5_1.vue';
import CartLunchP5_2 from '../views/register-customer/CartLunchP5_2.vue';
// management order information
import CartLunchP10 from '../views/manage-order-information/CartLunchP10.vue';
import CartLunchP13 from '../views/manage-order-information/CartLunchP13.vue';
import CartLunchP13_2 from '../views/manage-order-information/CartLunchP13_2.vue';
import CartLunchP13_3 from '../views/manage-order-information/CartLunchP13_3.vue';
import CartLunchP9 from '../views/manage-order-information/CartLunchP9.vue';
// order history
import MyPageTop from '../views/order-history/MyPageTop.vue';
import Monthly from '../views/order-history/Monthly.vue';
import Daily from '../views/order-history/Daily.vue';
import DailyDetails from '../views/order-history/DailyDetails.vue';
import Question from '../views/order-history/Question.vue';


const routes = [
    {
      path: '/',
      component: HomePage,
      name: 'home',
    },

    {
      path: '/users',
      children: [
        {
          path: '/users/login',
          component: Login,
          name: 'login',
        }
      ]
    },

    {
      path: '/navbar',
      children: [
        {
          path: '/navbar/cart-lunch_p2',
          component: CartLunchP2,
          name: 'cart-lunch_p2',
        },
        {
          path: '/navbar/cart-lunch_p8',
          component: CartLunchP8,
          name: 'cart-lunch_p8',
        },
        {
          path: '/navbar/cart-lunch_p1',
          component: CartLunchP1,
          name: 'cart-lunch_p1',
        }
      ]
    },

    {
      path: '/register-customers',
      children: [
        {
          path: '/register-customers/cart-lunch_p5',
          component: CartLunchP5,
          name: 'cart-lunch_p5',
        },
        {
          path: '/register-customers/cart-lunch_p5_1',
          component: CartLunchP5_1,
          name: 'cart-lunch_p5_1',
        },
        {
          path: '/register-customers/cart-lunch_p5_2',
          component: CartLunchP5_2,
          name: 'cart-lunch_p5_2',
        },
      ]
    },

    {
      path: '/manage-order-information',
      children: [
        {
          path: '/manage-order-information/cart-lunch_p10',
          component: CartLunchP10,
          name: 'cart-lunch_p10',
        },
        {
          path: '/manage-order-information/cart-lunch_p13',
          component: CartLunchP13,
          name: 'cart-lunch_p13',
        },
        {
          path: '/manage-order-information/cart-lunch_p13_2',
          component: CartLunchP13_2,
          name: 'cart-lunch_p13_2',
        },
        {
          path: '/manage-order-information/cart-lunch_p13_3',
          component: CartLunchP13_3,
          name: 'cart-lunch_p13_3',
        },
        {
          path: '/manage-order-information/cart-lunch_p9',
          component: CartLunchP9,
          name: 'cart-lunch_p9',
        }
      ]
    },

    {
      path: '/order-history',
      children: [
        {
          path: '/order-history/my-page-top',
          component: MyPageTop,
          name: 'my-page-top',
        },
        {
          path: '/order-history/monthly',
          component: Monthly,
          name: 'monthly',
        },
        {
          path: '/order-history/daily',
          component: Daily,
          name: 'daily',
        },
        {
          path: '/order-history/daily-details',
          component: DailyDetails,
          name: 'daily-details',
        },
        {
          path: '/order-history/question',
          component: Question,
          name: 'question',
        }
      ]
    }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router