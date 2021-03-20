<template>
    <div class="h-full bg-image bg-gray-200 bg-cover bg-no-repeat">
        <div class="flex justify-center sm:justify-start px-5 sm:pt-32">
          <h1 class="w-3/4 font-sans font-extrabold text-5xl lg:text-8xl text-gray-100">
               {{ property.title }}
          </h1>
        </div>
        <div class="flex justify-start py-20 px-16">
            <div class="p-1"></div>
            <router-link to="/shop">
                <button class="p-6 px-5 sm:px-10 rounded-sm tracking-widest font-sans font-black bg-gradient-to-r from-red-700 to-red-900  text-white" >
                    SHOP NOW  
                </button> 
            </router-link> 
        </div>     
    </div>
</template>
<script>
export default {
    name:"banner",
    props:{
        property:{
            type:Object,
            required:true
        }
    },
    data () {
        return {

        }
    }
}
</script>
<style scoped>
    .bg-image{
        background-image: url('../../assets/Banner.png');
        z-index: -1;
    }
</style>