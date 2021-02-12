<template>
  <div>
    <navigation />
    <div class="flex flex-col justify-center pt-24 pb-20">

        <h1 class="mx-5 text-xl py-5 font-sans font-black uppercase">Shopping Carts</h1>
         <!-- Carts -->
        <div class="bg-gray-300 rounded-sm mx-5 p-3">
          <p class="py-3 px-1">Cart</p>
          <hr class="p-2 border-black"/>
          <product-carts :product="product"/>
        </div>
         <!-- Summary -->
        <div class="bg-gray-300 rounded-sm mx-5 p-3 mt-5">
          <p class="py-3 px-1">Summary</p>
          <hr class="p-2 border-black" />
          <div>
            <table>
              <tbody>
                <tr>
                  <td class="w-full py-2">Subtotal:</td>
                  <td >3000</td>
                </tr>
                <tr>
                  <td class="w-full py-2">Tax:</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td class="w-full py-2">Order Total:</td>
                  <td>3000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Proceed to Checkout -->
        <div class="flex flex-row justify-center mt-10">
          <button class="text-white bg-green-700 p-3 w-full mx-5 rounded-sm">Proceed to Checkout</button>
        </div>
    </div>
    <footers/>
  </div>
</template>

<script>
  import Navigation from '@/components/navigations/nav';
  import Footers from '@/components/navigations/footer.vue';
  import ProductCarts from '../components/products/ProductCarts.vue';
  export default {
    name: 'cart-page',
    components:{
      Navigation,
      Footers,
      ProductCarts
    },
    data () {
      return {
        product:{
            name:'ATLAS 2.0 CARBON HELMET - TOXIN',
            size:'XL',
            price:'1000',
            image:'https://picsum.photos/100/100'
        }
      }
    }
  }
</script>