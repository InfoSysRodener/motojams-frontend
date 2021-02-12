import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Admin from '@/pages/admin/Admin'
import Product from '@/pages/Product'
import ProductDetails from '@/pages/ProductDetails'
import ShopBy from '@/pages/ShopBy'
import Shipping from '@/pages/Shipping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }, 
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/productDetails',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: Shipping
    },
    {
      path: '/shopby',
      name: 'Shopby',
      component: ShopBy
    }
  ]
});