<template>
    <div class="flex justify-between">
            <div class="flex">
                <img  class="rounded-md w-20 h-20 sm:w-26 sm:h-26 object-fill" :src="product.image"/>
                <div class="px-2 sm:mx-10">
                    <p class="text-xs sm:text-base font-sans"> {{ product.name }} </p>
                    <p class="text-xs sm:text-sm font-sans text-gray-600">{{ product.size }}</p>
                </div>
            </div>
            <div>
                <p class="mb-5 text-sm sm:text-lg font-sans text-gray-900">{{ product.price }}</p>
                <div class="cursor-pointer">
                    <svg class="h-5 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                </div>
            </div>  
    </div>   
</template>
<script>
export default {
    name:"product-carts",
    props:{
        product:{
            type:Object,
            required:true
        }
    },
    data() {
        return {

        }
    }
}
</script>