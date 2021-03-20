<template>
    <div>
        <div v-for="product in products" :key="product.id" class="flex justify-between py-3 select-none">
            <div class="flex">
                <img  class="rounded-md w-16 h-16 sm:w-20 sm:h-20 md:w-26 md:h-26 object-fill" :src="product.image"/>
                <div class="px-2 sm:mx-10">
                    <p class="text-xs sm:text-base font-sans"> {{ product.name }} </p>
                    <p class="text-xs sm:text-sm font-sans text-gray-600">{{ product.size }}</p>
                </div>
            </div>
            <div class="px-3">
                <p class="mb-5 text-sm sm:text-lg font-sans text-gray-900">{{ product.price }}</p>
                <div class="cursor-pointer">
                    <svg class="h-4 w-4 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                </div>
            </div>  
        </div>
    </div>   
</template>
<script>
export default {
    name:"product-carts",
    props:{
        products:{
            type:Array,
            required:true
        }
    },
    data() {
        return {

        }
    }
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