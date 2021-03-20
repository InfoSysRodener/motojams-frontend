import Vue from 'vue'
import Router from 'vue-router'
import StorageServices from './../storage';
import store  from '../store';
let storage = new StorageServices();

const Home = () => import('@/pages/Home');
const ShoppingCart = () => import('@/pages/ShoppingCart');
const Product = () => import('@/pages/Product');
const ProductDetails = () => import('@/pages/ProductDetails');
const Shop = () => import('@/pages/Shop');
const Shipping = () => import('@/pages/Shipping');
const Contact = () => import('@/pages/Contact');
const PrivatePolicy = () => import('@/pages/PrivatePolicy');
const TermsAndConditions = () => import('@/pages/TermsAndConditions');

import userRoute from './user';
import adminRoute from './admin';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    ...userRoute,
    ...adminRoute,
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/shopping-cart',
          name: 'shopping-cart',
          component: ShoppingCart
        }, 
        {
          path: '/product',
          name: 'product',
          component: Product
        },
        {
          path: '/product_details',
          name: 'product-details',
          component: ProductDetails
        },
        {
          path: '/shop',
          name: 'shop',
          component: Shop
        },
        {
          path:'/contact',
          name:'contact',
          component:Contact
        },
        {
          path:'/private-policy',
          name:'private-policy',
          component:PrivatePolicy
        },
        {
          path:'/terms-and-conditions',
          name:'terms-and-condition',
          component:TermsAndConditions
        }
      ]
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: Shipping,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach( async (to, from, next) => {
  //get token
  const token = await storage.get('token');

  if (to.matched.some(record => record.meta.usersAuth)){
    await store.dispatch('CHECK_AUTH_TOKEN',{token:token}).then(response => {
      next();
    }).catch(error => {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    });;
  }
  else if (to.matched.some(record => record.meta.requiresAuth && record.meta.isAdmin)) {  
   store.dispatch('CHECK_AUTH_TOKEN',{token:token}).then(response => {
      if(response.data.user.isAdmin){
        next();
      }
      else{
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      }
    }).catch(error => {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    });
  } else {
    next();
  }
})

export default router;