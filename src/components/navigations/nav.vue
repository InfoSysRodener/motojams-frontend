<template>
  <nav @mouseenter="hover = null" class="bg-black py-3 border-b border-white flex fixed z-10 w-full items-center justify-between">
    <div @click="isOpen = true" class="block cursor-pointer ml-5 sm:hidden">
        <svg class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </div>
    <img class="h-16 object-fill w-auto sm:mx-10" src="@/assets/logoJams.png" alt="logo"/>
     <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside class="transform top-0 left-0 min-w-3/4 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <!-- sidebar body -->
          <div class="flex flex-col items-center">
              <img class="h-auto object-fill w-20 py-3 " src="@/assets/logoJams.png" alt="logo"/>
              <div class="border w-full my-3 border-gray-200"></div>
              <ul class="flex flex-col relative w-full">
                <li @click="hover = page.name"
                    class="px-4 pb-3 mt-3 w-full hover:text-gray-400 text-white text-sm font-bold font-sans uppercase tracking-wide cursor-pointer" 
                    v-for="page in pages" 
                    :key="page.name"
                >
                  {{page.name}}
                  <svg fill="currentColor" viewBox="0 0 20 20" 
                      :class="{'rotate-180': hover == page.name, 'rotate-0': !hover == page.name}" 
                      class="inline float-right content-end w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
                      </path>
                  </svg>
                   <div v-if="hover == page.name" class="relative pt-3">
                    <a @mouseover="hover = page.name" v-for="sublink in page.sublinks" 
                        :key="sublink.name" 
                        class="block capitalize text-white text-sm py-2">
                        {{ sublink.name }}
                    </a>
                   </div>   
                </li>
              </ul>
          </div>
          
          <!-- sidebar footer -->
          <div class="flex flex-col items-center bottom-0 w-full absolute">
            <button @click="openSignIn" class="text-white font-sans bg-transparent px-4 py-2 rounded-sm border mb-2 border-white">
              Account
            </button>
            <p class="text-white text-xs font-sans">© 2021 JAMS </p>
          </div>
    </aside>
    <ul class="hidden sm:flex flex-wrap relative">
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
    <div class="flex flex-row gap-10 pr-5 sm:pr-10">
      <div @click="openSignIn" class="hidden sm:flex cursor-pointer">
         <svg class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm7 4v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm11 9.14A15.93 15.93 0 0 0 10 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/></svg>
         <!-- <p class="ml-2 text-sm font-sans text-white">Sign in </p> -->
      </div>
        <div @click="openSummaryCart" v-if="this.$router.currentRoute.name !== 'Cart'" class="cursor-pointer">
        <svg class="h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
      </div> 
    </div>
  </nav>
</template>

<script>
  import EventBus from '@/eventBus';

  export default {
    name: 'navigation',
    props:[],
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
       openSignIn(){
          EventBus.$emit('OPEN_SIGNIN_MODAL', true);
       },
       openSummaryCart(){
          EventBus.$emit('OPEN_SUMMARYCART_MODAL', true);
       },
      //  keydown(e){
      //     if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      //  }
      
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