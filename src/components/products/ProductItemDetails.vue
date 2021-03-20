<template>
    <div class="md:grid md:grid-cols-5 sm:flex-row items-center md:mx-5">
        <div class="pb-5 mb-5 md:mb-0 md:col-span-3 mx-5 flex flex-row md:flex-col overflow-x-scroll sm:w-full lg:overflow-x-hidden">
           <img class="h-60 w-auto mr-3 md:mr-0" src="https://picsum.photos/1030/430">
           <img class="h-60 w-auto" src="https://picsum.photos/1030/430">
        </div>
        <div class="w-full px-5  md:col-span-2">
          <div class="bg-black py-5 border-t border-b border-white md:border-0 rounded-sm  md:p-10">
            <h1 class="font-sans text-lg mb-5 font-black  text-white tracking-tight">{{ product.title }}</h1>
            <h2 class="font-sans text-white text-lg ">₱ {{ product.price }} </h2>
            <p class="font-sans text-white text-sm my-5">{{ product.description }}</p>
            <p class="font-sans text-md font-black text-white">Availability : <span class="text-green-600 text-lg"> {{ product.availability ? 'Available' : '' }} </span></p>
            <button ref="handleButtonRef" :class="{'fixed inset-x-0 bottom-0':  scrollButton }" class="w-full p-3 sm:relative  text-white bg-green-600 font-sans mt-10">
                ADD TO CART
            </button>  
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"product-item-detail",
    props:{
        product:{
            type:Object,
            required:true
        }
    },
    data () {
        return {
           windowHeight: window.innerHeight,
           buttonPosition:null,
           scrollingValue:null 
        }
    },
    created(){
       document.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(event){
            this.scrollingValue = event.target.scrollingElement.scrollTop;
        }
    },
    computed:{
        scrollButton(){
            let button = this.buttonPosition;
            let scroll = this.scrollingValue * 2;
            let height = this.windowHeight * 2;
          
            if(scroll > (button + height)){
              return true;
            }
            if(button < scroll){
               return false
            }
            else{
               return true
            }
        }
    },
    mounted(){
        this.buttonPosition = this.$refs['handleButtonRef'].getBoundingClientRect().top;
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>
<style scoped>
     ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
</style>