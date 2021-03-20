
const UserAccount = () => import('@/pages/users/Account');
const UserAddress = () => import('@/pages/users/Address');
const UserOrders = () => import('@/pages/users/Orders');

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