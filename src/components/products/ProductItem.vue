<template>
    <div class="bg-black rounded-sm overflow-hidden">
      <img class="object-cover w-auto h-auto sm:w-full lg:h-80 lg:w-80" :src="property.image" alt="product Image"/>
      <div class="py-3 sm:py-6">  
        <h4 class="font-sans text-sm sm:text-md text-white font-semibold break-words"> {{ property.title }}</h4>
        <div class="mt-2 text-xs sm:text-lg uppercase font-semibold text-gray-600">
            {{ property.price }}
        </div>
      </div>
      <button class="p-3 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-sans hover:bg-gray-900">
          <router-link to="/ProductDetails">BUY NOW</router-link>
      </button>
    </div>
</template>
<script>
export default {
    name:'product-item',
    props:{
        property:{  
            type:Object,
            required:true
        }
    },
    data() {
      return {

       }
    }
};
</script>
