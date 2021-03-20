<template>
    <div>
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
        <aside class="transform top-0 left-0 w-3/4 sm:w-4/12 lg:w-3/12 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            <!-- sidebar body -->
            <div class="flex flex-col items-center select-none">
                <img class="h-auto object-fill w-20 py-3 " src="@/assets/logoJams.png" alt="logo"/>
                <div class="border w-full my-3 border-gray-200"></div>
                <ul class="flex flex-col relative items-center w-full mt-3 active:bg-red">
                    <li @click="openLink(page)"
                        class="px-3 py-3 w-full border-b text-white text-sm font-bold font-sans uppercase tracking-wide cursor-pointer" 
                        v-for="page in pages" 
                        :key="page.name"
                    >
                        <span>{{page.name}} </span>

                        <svg v-if="page.sublinks" fill="currentColor" viewBox="0 0 20 20" 
                            :class="{'rotate-180': hover == page.name, 'rotate-0': !hover == page.name}" 
                            class="inline float-right content-end w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
                            </path>
                        </svg>
                        <div v-if="page.sublinks">
                            <ul  v-if="hover == page.name" class="z-50 pt-2">
                                    <li 
                                        class="capitalize text-white text-sm select-none" 
                                        @mouseover="hover = page.name" v-for="sublink in page.sublinks"
                                        :key="sublink.name" 
                                    >
                                        <a  
                                            @click.stop="openSublink(sublink)"
                                            class="block active:bg-gray-900 p-2 -mx-2" 
                                        >
                                            {{ sublink.name }}
                                        </a>
                                    </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            
            <!-- sidebar footer -->
            <div class="flex flex-col items-center bottom-0 w-full absolute">
                <button v-if="showFooter" @click="openAccount" class="text-white font-sans bg-transparent px-4 py-2 rounded-sm border mb-2 border-white">
                   Account
                </button>
                <button v-else @click="logoutAccount" class="flex items-center text-white font-sans bg-transparent px-4 py-2 rounded-sm border mb-2 border-white">
                   <svg  class="h-4 mr-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;version:1"><g><path d="M51.2 180h173.8c8.3 0 15-6.7 15-15s-6.7-15-15-15H51.2l19.4-19.4c5.9-5.9 5.9-15.4 0-21.2 -5.9-5.9-15.4-5.9-21.2 0L4.4 154.4c-0.3 0.3-0.7 0.7-1 1.1 -0.1 0.1-0.1 0.2-0.2 0.3 -0.2 0.3-0.5 0.6-0.7 0.9 -0.1 0.1-0.1 0.2-0.2 0.3 -0.2 0.3-0.4 0.6-0.6 1 0 0.1-0.1 0.1-0.1 0.2 -0.2 0.4-0.4 0.7-0.5 1.1 0 0 0 0.1-0.1 0.1 -0.2 0.4-0.3 0.8-0.4 1.2 0 0.1 0 0.1 0 0.2 -0.1 0.4-0.2 0.8-0.3 1.3 0 0.1 0 0.3-0.1 0.4 -0.1 0.4-0.1 0.7-0.2 1.1C0 164 0 164.5 0 165s0 1 0.1 1.5c0 0.4 0.1 0.7 0.2 1.1 0 0.1 0 0.3 0.1 0.4 0.1 0.4 0.2 0.9 0.3 1.3 0 0 0 0.1 0 0.2 0.1 0.4 0.3 0.8 0.4 1.2 0 0 0 0.1 0.1 0.1 0.2 0.4 0.3 0.8 0.5 1.1 0 0.1 0.1 0.1 0.1 0.2 0.2 0.3 0.4 0.7 0.6 1 0.1 0.1 0.1 0.2 0.2 0.3 0.2 0.3 0.4 0.6 0.7 0.9 0.1 0.1 0.1 0.2 0.2 0.3 0.3 0.4 0.6 0.7 1 1.1l45 45C52.3 223.5 56.2 225 60 225s7.7-1.5 10.6-4.4c5.9-5.9 5.9-15.4 0-21.2L51.2 180z"/><path d="M207.3 42.3c-40.9 0-79 20.3-101.9 54.3 -4.6 6.9-2.8 16.2 4.1 20.8 6.9 4.6 16.2 2.8 20.8-4.1 17.3-25.7 46.1-41.1 77-41.1C258.4 72.3 300 113.9 300 165s-41.6 92.7-92.7 92.7c-30.8 0-59.6-15.3-76.9-40.9 -4.6-6.9-14-8.7-20.8-4 -6.9 4.6-8.7 14-4 20.8 22.9 33.9 60.9 54.1 101.7 54.1C275 287.7 330 232.7 330 165S275 42.3 207.3 42.3z"/></g></svg>   
                    Log-out
                </button>
                <p class="text-white text-xs font-sans">© 2021 JAMS </p>
            </div>
        </aside>
    </div>
</template>
<script>

import EventBus from '@/eventBus';
import { AccountMixins } from '@/mixins';
export default {
    name:"sidebar",
    mixins:[AccountMixins],
    props:{
        type:{
            type:String,
            default:'customer'
        }
    },
    data(){
        return {
            hover:null,
            isOpen:false,
            showFooter:false,
            default_pages :[
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
            user_pages:[
                {
                    name:'My Account',
                    links:'/user'
                },
                {
                    name:'My Orders',
                    links:'/user/orders'
                },
                {
                    name:'Address',
                    links:'/user/address'
                }
                
            ],
            admin_pages:[
                { name:'Dashboard', links:'/admin'},
                { name:'Product', links:'/admin/product'},
                { name:'Orders' ,links:'/admin/orders'},
                { name:'User', links: '/admin/users'},
            ]
        }
    },
    methods:{
        openLink(page){
            this.hover = !this.hover ? page.name : this.hover === page.name ? null : page.name;
            if(page.links){
                this.$router.push(page.links).catch(()=>{});
            }
        },
        openSublink(page){
            // alert(page.name);
        }
    },
    computed:{
        pages(){
            switch(this.type){
                case 'user' :
                    return this.user_pages;
                case 'admin' :
                    return this.admin_pages;
                default: 
                    this.showFooter = true;
                    return this.default_pages;        
            }
        }
    },
    mounted(){
      EventBus.$on('OPEN_SIDEBAR', (value) => {
          this.isOpen = value;
      })
    },
    destroy(){
      EventBus.$off('OPEN_SIDEBAR');
    }
}
</script>