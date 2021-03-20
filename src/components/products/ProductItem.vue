<template>
    <div class="bg-black rounded-sm overflow-hidden">
      <img class="object-cover w-auto h-auto sm:w-full lg:h-72 lg:w-72" :src="item.image" alt="product Image"/>
      <div class="py-3 sm:py-6">  
        <h4 class="font-sans text-sm sm:text-md text-white font-semibold break-words"> {{ item.name }}</h4>
        <div class="mt-2 text-xs sm:text-lg uppercase font-semibold text-gray-600">
            {{ item.price }}
        </div>
      </div>
      <button class="p-3 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-sans hover:bg-gray-900">
          <router-link to="product_details">BUY NOW</router-link>
      </button>
    </div>
</template>
<script>
export default {
    name:'product-item',
    props:{
        item:{  
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
