<template>
  <nav @mouseenter="hover = null" 
    class="bg-black py-3 border-b fixed border-white z-50 w-full select-none">
    <div class="flex items-center justify-between">
      <div @click="openSidebar" 
        class="block cursor-pointer ml-5"
        :class="{'sm:hidden': type === 'customer'}"
      >
        <svg class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </div>
      <img
        @click="redirectLogo" 
        class="h-16 object-fill w-auto sm:mx-10 cursor-pointer"
        src="@/assets/logoJams.png" alt="logo"
      />
      <ul 
        v-if="type !== 'admin'"
        class="hidden sm:flex flex-wrap relative flex-grow justify-center"
      >
          <li @mouseover="hover = page.name"
              class="mx-4 hover:text-gray-500 text-white text-sm font-bold font-sans uppercase tracking-wide cursor-pointer" 
              v-for="page in pages" 
              :key="page.name"
          >
            {{page.name}}
            <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': hover == page.name, 'rotate-0': !hover == page.name}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <div v-if="hover == page.name" class="absolute pt-5 z-50 bg-black rounded-b-md w-48 shadow-xl">
              <a @mouseover="hover = page.name" v-for="sublink in page.sublinks" 
                  :key="sublink.name" href="#" 
                  class="block text-white px-4 py-3  hover:bg-gray-600">
                  {{ sublink.name }}
              </a>
            </div>
          </li>
      </ul> 
      <div v-if="type !== 'admin'" class="flex flex-row gap-10 pr-5 sm:pr-10">
        <div @click="openAccount" v-if="type !== 'user'" class="hidden sm:flex cursor-pointer">
          <svg class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm7 4v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm11 9.14A15.93 15.93 0 0 0 10 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/></svg>
          <!-- <p class="ml-2 text-sm font-sans text-white">Sign in </p> -->
        </div>
        <div @click="openSummaryCart" v-if="toggleCartIcon" class="cursor-pointer relative">
          <svg class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
          <span class="absolute right-0 top-0 rounded-full bg-red-700 w-4 h-4 top right p-0 -mt-2 -mr-2 text-white font-mono text-xs  text-center">
            5
          </span>
        </div>
        <div v-if="type !== 'customer'" class="hidden md:block">
          <svg @click="logoutAccount" class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;version:1"><g><path d="M51.2 180h173.8c8.3 0 15-6.7 15-15s-6.7-15-15-15H51.2l19.4-19.4c5.9-5.9 5.9-15.4 0-21.2 -5.9-5.9-15.4-5.9-21.2 0L4.4 154.4c-0.3 0.3-0.7 0.7-1 1.1 -0.1 0.1-0.1 0.2-0.2 0.3 -0.2 0.3-0.5 0.6-0.7 0.9 -0.1 0.1-0.1 0.2-0.2 0.3 -0.2 0.3-0.4 0.6-0.6 1 0 0.1-0.1 0.1-0.1 0.2 -0.2 0.4-0.4 0.7-0.5 1.1 0 0 0 0.1-0.1 0.1 -0.2 0.4-0.3 0.8-0.4 1.2 0 0.1 0 0.1 0 0.2 -0.1 0.4-0.2 0.8-0.3 1.3 0 0.1 0 0.3-0.1 0.4 -0.1 0.4-0.1 0.7-0.2 1.1C0 164 0 164.5 0 165s0 1 0.1 1.5c0 0.4 0.1 0.7 0.2 1.1 0 0.1 0 0.3 0.1 0.4 0.1 0.4 0.2 0.9 0.3 1.3 0 0 0 0.1 0 0.2 0.1 0.4 0.3 0.8 0.4 1.2 0 0 0 0.1 0.1 0.1 0.2 0.4 0.3 0.8 0.5 1.1 0 0.1 0.1 0.1 0.1 0.2 0.2 0.3 0.4 0.7 0.6 1 0.1 0.1 0.1 0.2 0.2 0.3 0.2 0.3 0.4 0.6 0.7 0.9 0.1 0.1 0.1 0.2 0.2 0.3 0.3 0.4 0.6 0.7 1 1.1l45 45C52.3 223.5 56.2 225 60 225s7.7-1.5 10.6-4.4c5.9-5.9 5.9-15.4 0-21.2L51.2 180z"/><path d="M207.3 42.3c-40.9 0-79 20.3-101.9 54.3 -4.6 6.9-2.8 16.2 4.1 20.8 6.9 4.6 16.2 2.8 20.8-4.1 17.3-25.7 46.1-41.1 77-41.1C258.4 72.3 300 113.9 300 165s-41.6 92.7-92.7 92.7c-30.8 0-59.6-15.3-76.9-40.9 -4.6-6.9-14-8.7-20.8-4 -6.9 4.6-8.7 14-4 20.8 22.9 33.9 60.9 54.1 101.7 54.1C275 287.7 330 232.7 330 165S275 42.3 207.3 42.3z"/></g></svg>   
        </div> 
      </div>
    </div>
    
     <!-- sidebar -->
    <sidebar :type="type"/>
  </nav>
</template>

<script>
  import EventBus from '@/eventBus';
  import Sidebar from './sidebar.vue';
  import { AccountMixins } from '@/mixins';
  export default {
    name: 'navigation',
    mixins:[AccountMixins],
    components:{
        Sidebar,
    }, 
    props:{
        type:{
          type:String,
          default:'customer'
        }
    },
    data () { 
      return {
        pages :[
          { name:"helmet", sublinks:[
              { name:"fullface" , link:"" },
              { name:"halfface" , link:"" },
          ] },
          { name:"accessories", sublinks:[
              { name:"sticker" , link:"" },
              { name:"tube mask" , link:"" },
              { name:"helmet hook" , link:"" },
          ] }, 
          { name:"bag" , sublinks:[
              { name:"tacktical bag", link:"" },
              { name:"chest bag", link:"" },
              { name:"belt bag", link:"" },
              { name:"helmet bag" , link:"" },
          ] }
        ],
        isOpen:false,
        hover: null,
        isCartPage:false,
      }
    },
    methods:{
       redirectLogo(){
         if(this.type === 'user') return this.$router.push('/user').catch(()=>{});
         if(this.type === 'admin') return this.$router.push('/admin').catch(()=>{});

         return this.$router.push('/').catch(()=>{})
       },
       openSidebar(){
          EventBus.$emit('OPEN_SIDEBAR', !this.isOpen);
       },
       openSummaryCart(){
          EventBus.$emit('OPEN_SUMMARYCART_MODAL', true);
       },  
      
    },
    computed:{
      toggleCartIcon(){
          const pages = [
            'shipping',
            'cart'
          ]
          return !pages.some(page => page === (this.$router.currentRoute.name).toLowerCase())
      }  
    },
    mounted() {
    
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
      },
      // '$route' (to,from) {
      //    alert(to);
      //    this.$router.currentRoute
      // }
    }
  }
  }
</script>