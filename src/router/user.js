
const UserAccount = () => import('@/pages/users/account');
const UserAddress = () => import('@/pages/users/address');
const UserOrders = () => import('@/pages/users/orders');

export default [
    {
        path: '/user',
        name: 'Account',
        component: UserAccount,
        meta: { 
            usersAuth: true,
        },
        children:[
            {
                path:'/user/address',
                name:'UserAddress',
                component:UserAddress,
                meta: { 
                    usersAuth: true,
                },
            }, 
            {
                path:'/user/orders',
                name:'UserOrders',
                component:UserOrders,
                meta: { 
                    usersAuth: true,
                }
            }
        ]
    }
]