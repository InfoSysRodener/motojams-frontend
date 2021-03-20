<template>
  <div class="relative">
    <div class="flex flex-col justify-center">
        <h1 class="mx-5 text-xl py-5 font-sans text-white font-black uppercase">Shopping Carts</h1>
        <div class="md:grid md:grid-cols-3 ">
          <!-- Carts -->
          <div class="bg-gray-200 rounded-sm mx-5 py-5 px-5 md:col-span-2">
            <p class="pb-2 px-1">Cart</p>
            <hr class="p-2 border-black"/>
            <product-carts :products="products"/>
          </div>
          <!-- Summary -->
          <div class="bg-gray-200 rounded-sm mx-5 py-5 px-5 mt-5 md:mt-0">
              <p class="pb-2 px-1">Summary</p>
              <hr class="p-2 border-gray-900" />
              <div class="flex justify-between items-center">
                  <p class="text-md font-sans  py-2"> Subtotal : </p>
                  <p>1000</p>
              </div>
              <div class="flex  justify-between items-center">
                  <p class="text-md font-sans  py-2"> Tax : </p>
                  <p>1000</p>
              </div>
                <hr class="my-3 border-black"/>
                <div class="flex  justify-between items-center">
                  <p class="text-black font-black font-sans  py-2"> ORDER TOTAL </p>
                  <p>1000</p>
                </div>
                <!-- Proceed to Checkout -->
                <div class="inset-x-0 bottom-0 fixed">
                  <div class="bg-black border-t border-white p-3 ">
                     <div class="flex mb-2 items-center"> 
                       <svg class="fill-current text-white h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
                       <p class="text-white font-sans px-2 ">Secure Checkout</p>
                     </div>
                     <button class="w-full p-3  text-white rounded-sm bg-green-600 font-sans">Proceed to Checkout</button>  
                  </div>
                </div>
            </div>
        </div>

    </div>
    <footers/>
  </div>
</template>

<script>
  import ProductCarts from '../components/products/ProductCarts.vue';
  export default {
    name: 'shopping-cart',
    components:{
      ProductCarts
    },
    data () {
      return {
        products:[
          {
            name:'ATLAS 2.0 CARBON HELMET - TOXIN',
            size:'XL',
            price:'1000',
            image:'https://picsum.photos/100/100'
          },
           {
            name:'ATLAS 2.0 CARBON HELMET - TOXIN',
            size:'XL',
            price:'1000',
            image:'https://picsum.photos/100/100'
          }
        ]
      }
    }
  }
</script>
