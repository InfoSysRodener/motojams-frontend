<template>
    <div>
        <modal :modal="open">
            <div class="bg-white w-11/12 h-auto rounded-md px-5 pt-10 pb-5 sm:w-1/2 sm:px-10"> 
                <div class="flex justify-between " slot="header">
                    <h1 class="text-lg font-bold text-gray-900 -mt-5">
                        Cart Summary
                    </h1>
                    <span @click="open = false" class=" sm:-mx-5 -mt-5 bg-gray-400 w-6 h-6 flex justify-center items-center shadow-sm rounded-full">
                      <svg class="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                    </span>
                </div>
                <hr class="m-5"/>
                <!-- products -->
                <product-carts class="h-48 overflow-auto" :products="products"/>

                <div class="border-gray-300 border-t my-5">
                  <div class="flex flex-row justify-between mt-5">
                      <p class="text-sm font-black font-sans md:text-md"> Cart Subtotal </p>
                      <p class="text-sm font-sans md:text-md"> 1000 </p>
                  </div>
                  <button class="mt-5 w-full p-2 text-white font-sans bg-gray-900 hover:bg-green-900  rounded-sm" @click="checkout">PROCEED TO CHECKOUT </button>
                </div>
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
    name: 'carts',
    data () {
      return {
        open:false,
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
          },
           {
            name:'ATLAS 2.0 CARBON HELMET - TOXIN',
            size:'XL',
            price:'1000',
            image:'https://picsum.photos/100/100'
          }
        ]
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
    destroy(){
      EventBus.$off('OPEN_SUMMARYCART_MODAL');
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