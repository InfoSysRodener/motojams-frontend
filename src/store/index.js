import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from './helper/http_common';
import StorageServices from './../storage';
const storage = new StorageServices;

Vue.use(Vuex);


const requireContext = require.context('./modules', true, /.*\.js$/)

const modules = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
  )
  .reduce((modules, [name, module]) => {
    if (module.default.namespaced === undefined) {
      module.default.namespaced = true
    }

    return { ...modules, [name]: module.default }
  }, {});

  

export default new Vuex.Store({
  state: {
    users:{}
  },
  mutations: {
    SET_USERS(state,payload){
        state.users = payload;
    }
  },
  actions:{
    LOGIN(context,payload){
      return new Promise(async (resolve,reject) => {
        await HTTP.post('users/login',payload).then( async (response) => {
          context.commit('SET_USERS',response.data);
          storage.set('token',response.headers['x-auth-token']);
          storage.set('users',response.data);
          resolve(response);
        }).catch(error => {
            reject(error);
        });
      });
    },  
    REGISTER(context,payload){
      return new Promise(async (resolve,reject) => {
        await HTTP.post('users/register',payload).then( async (response) => {
          context.commit('SET_USERS', response.data);
          storage.set('token',response.headers['x-auth-token']);
          storage.set('users',response.data);
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      });
    },
    CHECK_AUTH_TOKEN(context,payload){
      return new Promise(async(resolve,reject) => {
         await HTTP.post('checkAuthToken',payload).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
      });
    }
  },
  modules
});