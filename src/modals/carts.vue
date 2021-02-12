<template>
    <div>
        <modal :modal="open">
            <div class="bg-white w-5/6  h-auto rounded-md px-5 pt-10 pb-5 sm:w-1/2 sm:px-10"> 
                <div class="flex justify-between " slot="header">
                    <h1 class="text-lg font-bold text-gray-900 -mt-5">
                        Cart Summary
                    </h1>
                    <span @click="open = false" class=" sm:-mx-5 -mt-5 bg-gray-400 w-6 h-6 flex justify-center items-center shadow-sm rounded-full">
                      <svg class="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                    </span>
                </div>
                <div class="border-gray-300 border my-5"></div>
                    <product-carts :product="product"/>
                <div class="border-gray-300 border my-5"></div>
               <button class="w-full p-2 text-white font-sans bg-gray-900 hover:bg-green-900  rounded-md" @click="checkout">PROCEED TO CHECKOUT </button>
            </div>
        </modal>
    </div>
</template>

<script>
  import modal from "@/components/modal.vue"
  import EventBus from '@/eventBus';
  import ProductCarts from '@/components/products/ProductCarts';
  export default {
    components: { modal, ProductCarts },
    name: 'cart',
    data () {
      return {
        open:false,
        product:{
            name:'ATLAS 2.0 CARBON HELMET - TOXIN',
            size:'XL',
            price:'1000',
            image:'https://picsum.photos/100/100'
        }
      }
    },
    methods:{
        checkout(){
          this.$router.push('/cart');
        }
    },
    mounted(){
      EventBus.$on('OPEN_SUMMARYCART_MODAL', (value) => {
          this.open = value;
      })
    },
  }
</script>