<template>
    <div class="flex flex-col sm:flex-row items-center pt-28 pb-5">
        <div class="pb-5 flex flex-row overflow-x-scroll  sm:w-full lg:overflow-x-hidden">
           <img class="h-60 w-auto px-5" src="https://picsum.photos/630/430">
        </div>
        <div class="w-full px-5 sm:w-2/3 ">
          <h1 class="font-sans text-lg mb-5 font-black  text-white tracking-tight">{{ product.title }}</h1>
          <h2 class="font-sans text-white text-lg ">₱ {{ product.price }} </h2>
          <p class="font-sans text-white text-sm my-5">{{ product.description }}</p>
          <p class="font-sans text-md font-black text-white">Availability : <span class="text-green-600 text-lg"> {{ product.availability ? 'Available' : '' }} </span></p>
          <button class="w-full p-3 text-white bg-green-600 font-sans mt-10">ADD TO CART</button>  
        </div>
    </div>
</template>
<script>
export default {
    name:"product-detail",
    props:{
        product:{
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