<template>
    <div>
      <modal :modal="open">
         <div class="bg-white w-3/4 md:w-1/2 lg:w-1/3 h-auto rounded-md px-10 py-10"> 
            <div class="flex justify-between " slot="header">
                <h1 class="text-lg sm:text-2xl  font-sans font-bold text-gray-700 -mt-5">
                   {{ isSignin ? 'Log in to continue' : 'Sign up' }}
                </h1>
                <span @click="close" class="-mx-5 -mt-5 bg-gray-400 w-6 h-6 flex justify-center items-center shadow-sm rounded-full">
                  <svg class="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                </span>
            </div>
            <!-- sign in -->
            <div v-if="isSignin" class="mt-10">
              <button class="p-3 w-full font-sans rounded-sm tracking-widest uppercase btn-outline-primary">
                Facebook
              </button>
              <div class="mx-10 my-10 border border-gray-300">
                
              </div>
              <input class="p-3 my-2 w-full font-sans border-2 rounded-sm border-gray-500" type="email" placeholder="Email"/>
              <input class="p-3 my-2 w-full font-sans border-2 rounded-sm border-gray-500" type="password" placeholder="Password"/>
              <p class="text-gray-700 cursor-pointer hover:text-blue-900">Forgot Password ?</p>
              <button class="my-5 p-3 w-full font-sans rounded-sm text-white bg-gray-700 tracking-widest uppercase hover:bg-gray-900">
                Sign in
              </button>
              <a class="my-2 text-sm font-sans text-gray-900">
                Don't have an account? <span class="text-blue-700 cursor-pointer"  @click="isSignin = false">  Sign up </span>
              </a>
            </div>
            <!-- sign up -->
            <div v-else class="mt-10">
                <input class="p-3 my-2 w-full font-sans border-2 rounded-sm border-gray-500" type="email" placeholder="Email"/>
                <input class="p-3 my-2 w-full font-sans border-2 rounded-sm border-gray-500" type="text" placeholder="Username"/>
                <input class="p-3 my-2 w-full font-sans border-2 rounded-sm border-gray-500" type="password" placeholder="Password"/>
                <button class="my-5 p-3 w-full font-sans rounded-sm text-white bg-gray-700 tracking-widest uppercase hover:bg-gray-900">
                  Create Account
                </button>
                <a class="pt-10 text-sm font-sans text-gray-900">
                  Already have an account? <span class="text-blue-700 cursor-pointer"  @click="isSignin = true">  Sign in </span>
                </a>
            </div>
        </div>
      </modal>
    </div>
</template>
<script>
 import modal from '@/components/modal';
 import EventBus from '@/eventBus';
 export default {
    name: 'signin',
    components:{
      modal
    },
    data () {
      return {
          open:false,
          isSignin:true,
      }
    },
    methods:{
        close(){
          this.open = false;
          this.isSignin = true;
        }
    },
    mounted(){
      EventBus.$on('OPEN_SIGNIN_MODAL', (value) => {
          this.open = value;
      })
    },
    
  }
</script>