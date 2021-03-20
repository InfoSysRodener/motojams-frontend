import HTTP from '../helper/http_common';

const state = {
    products:[],
}

const getters = {
    ALL(state){
        return state.products;
    }
}

const mutations =  {
    SET_PRODUCTS(state,payload){
        state.products = payload;
    },
    ADD_PRODUCTS(state,payload){
        state.products.push(payload);
    }
}

const  actions = {
    async GET(context,payload){
       await HTTP.get('products').then(response => {
         context.commit('SET_PRODUCTS',response.data);
       }).catch(error => {
         console.log(error);
       });
    }, 
    async POST(context,payload){
        await HTTP.post('products',payload).then(response => {
            context.commit('ADD_PRODUCTS',response);
        }).catch(error => {
            console.log(error);
        })
    }
}



export default {
    state,
    getters,
    mutations,
    actions
}