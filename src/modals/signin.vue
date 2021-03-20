<template>
    <div>
      <modal :modal="open">
         <div class="bg-white w-11/12 md:w-1/2 lg:w-1/3 h-auto rounded-md px-8 py-5"> 
            <div class="flex justify-between py-5" slot="header">
                <h1 class="text-lg sm:text-2xl  font-sans font-bold text-gray-700 -mt-5">
                   {{ isSignin ? 'Sign In' : 'Sign Up' }}
                </h1>
                <span @click="close" class="-mt-5 bg-gray-400 w-6 h-6 flex justify-center items-center shadow-sm rounded-full">
                  <svg class="w-3 h-3 cursor-pointer fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                </span>
            </div>
            <!-- sign in -->
            <div v-if="isSignin" class="md:mt-5">
              <button class="p-2 lg:p-3 mb-5 flex w-full font-sans rounded-sm tracking-widest uppercase btn-outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 mt-1 fill-current hover:text-white" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                <p class="m-auto"> 
                    Facebook 
                </p>
              </button>
              
              <!-- <hr class="md:mt-10 mx-10 p-3 border-gray-300" /> -->
              
              <FormulateForm
                name="signin"
                key="signin"
                @submit="atSignIn"
                v-model="loginValue"
              >
                <FormulateInput 
                    label="Email" 
                    name="email"
                    type="email" 
                    validation="^email"
                    error-behavior="submit"
                />
                <FormulateInput 
                    label="Password" 
                    name="password"
                    type="password"
                    error-behavior="submit" 
                />
                <div class="text-xs text-gray-400 font-sans my-3">
                  This site is protected by reCAPTCHA and the Google
                  <a class="text-blue-700" href="https://policies.google.com/privacy">Privacy Policy</a> and
                  <a class="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                </div>
                <p class="text-gray-700 my-2 cursor-pointer text-sm hover:text-blue-900">Forgot Password ?</p>
                <FormulateInput 
                  type="submit"
                  label="Sign In"
                />
                <a class="text-sm font-sans text-gray-900">
                  Don't have an account? <span class="text-blue-700 cursor-pointer"  @click="isSignin = false">  Sign up </span>
                </a>
              </FormulateForm>
            </div>
            <!-- sign up -->
            <div v-else>
              <FormulateForm
                name="signup"
                key="signup"
                @submit="atSignUp"
                v-model="registerValue"
                #default="{ isLoading }"
              >
                  <FormulateInput 
                      label="Email" 
                      name="email" 
                      type="email" 
                      validation="^required|email"
                      error-behavior="submit"
                  />
                  <FormulateInput 
                      label="Password" 
                      name="passwords"
                      type="password" 
                      validation="^required|min:5,length|matches:/[0-9]/"
                      :validation-messages="{
                        matches: 'Password must contain at least number.'
                      }"
                      error-behavior="submit"
                  />
                  <FormulateInput 
                      label="Confirm Password" 
                      name="password_confirm"
                      type="password"
                      help="Just re-type what you entered above"
                      validation="^required|confirm"
                      validation-name="Password confirmation"
                      error-behavior="submit"
                  />
                  <FormulateInput 
                      type="submit"
                      :disabled="isLoading"
                      :label="isLoading ? 'Loading...' : 'Create Account'"
                  />
               
                  <a class="pt-10 text-sm font-sans text-gray-900">
                    Already have an account? <span class="text-blue-700 cursor-pointer"  @click="isSignin = true">  Sign in </span>
                  </a> 
              </FormulateForm>
            </div>
        </div>
      </modal>
    </div>
</template>
<script>
 import modal from '@/components/modal';
 import EventBus from '@/eventBus';
 import { mapActions } from 'vuex';
 export default {
    name: 'signin',
    components:{
      modal,
    },
    data () {
      return {
          open:false,
          isSignin:true,
          loginValue:{
            email:null,
            password:null
          },
          registerValue:{
            email:null,
            password:null
          }
      }
    },
    methods: {
        ...mapActions([
          'LOGIN',
          'REGISTER'
        ]),


        close(){
          this.open = false;
          this.isSignin = true;
        },

        async atSignIn(data){
          await this.LOGIN(data).then(response =>{
              if(response.data.isAdmin){
                this.$router.push('/admin');
              }
              this.$router.push('/user');
          }).catch(error => {
              
          });
       },

        async atSignUp(data){
          const {password_confirm, ...registerValue } = data;
          await this.REGISTER(registerValue);  
        },


        async recaptcha() {
          // (optional) Wait until recaptcha has been loaded.
          await this.$recaptchaLoaded();

          // Execute reCAPTCHA with action "login".
          const token = await this.$recaptcha('login');
          
          console.log(token);
          // Do stuff with the received token.
        },

        

    },
    mounted(){
      EventBus.$on('OPEN_SIGNIN_MODAL', (value) => {
          this.open = value;
      })
    },
    
  }
</script>