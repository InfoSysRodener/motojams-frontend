
const Admin = () => import('@/pages/admin/Admin');
const Product = () => import('@/pages/admin/AdminProduct');
const Orders = () => import('@/pages/admin/AdminOrders');
const Users = () => import('@/pages/admin/AdminUser');

export default [
    {
        path:'/admin',
        name:'Admin',
        component: Admin,
        children:[
            {
                path:'/admin/product',
                name:'AdminProduct',
                component: Product,
                meta: { 
                    requiresAuth: true,
                    isAdmin:true
                 }
            },
            {
                path:'/admin/orders',
                name:'AdminOrders',
                component: Orders,
                meta: { 
                    requiresAuth: true,
                    isAdmin:true
                }
            },
            {
                path:'/admin/users',
                name:'AdminUsers',
                component: Users,
                meta: { 
                    requiresAuth: true,
                    isAdmin:true
                }
            }   
        ],
        meta: { requiresAuth: true, isAdmin:true }
    }
]