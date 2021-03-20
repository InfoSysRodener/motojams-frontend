<template>
    <div class="bg-pattern">
        <div class="bg-black py-3 border-b mb-5 mt-28 sm:mt-0 border-white flex justify-between w-full items-center">
            <img @click="$router.push('/')" class="mx-5 h-16 object-fill w-auto sm:mx-10 cursor-pointer" src="@/assets/logoJams.png" alt="logo"/>
            <svg class="mx-5 h-5 fill-current text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm7 4v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm11 9.14A15.93 15.93 0 0 0 10 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/></svg>
        </div>
        <div class="md:grid md:grid-cols-3 sm:mx-5">
            <div class="md:col-span-2 mx-5">
                <div class="bg-white rounded-sm p-5">
                    <!-- shipping address -->
                    <p class="text-lg py-3">Shipping Address</p>
                    <hr class="py-3 border-gray-400"/>
                    <Address />
                    <FormulateInput
                      v-model="isHaveBilling"
                      type="checkbox"
                      label="I have a different billing address"
                    />
                    <!-- billing address -->
                    <div v-if="isHaveBilling">
                      <p class="text-lg py-3">Billing Address</p>
                      <hr class="py-3 border-gray-400"/>
                      <Address />
                    </div>
                </div>
                <!-- Shipping Methods -->
                <div class="bg-white rounded-sm p-5 mt-5">
                    <p class="text-lg py-3">Shipping Methods</p>
                    <hr class="py-3 border-gray-400"/>
                </div>
                <!-- stripe payment -->
                <div class="bg-white rounded-sm p-5 mt-5">
                    <p class="text-lg py-3">Payment Methods</p>
                    <hr class="py-3 border-gray-400"/>

                </div>
            </div>
            <div class="bg-gray-100 rounded-sm md:col-span-1 fixed inset-x-0 top-0 sm:relative">
                <div class="p-3">
                    <div @click="showMoreCart = !showMoreCart" class="flex justify-between">
                      <div class="flex items-center mb-2 ">
                        <svg class="h-5 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                        <p class="font-black text-lg uppercase px-1">
                            Cart
                        </p>
                      </div>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': showMoreCart, 'rotate-0': !showMoreCart}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                    <hr class="pb-3 border-gray-500"/>

                    <!-- products -->
                    <div v-if="showMoreCart">
                        <product-carts class="h-32 overflow-auto" :products="products"/>
                        <hr class="my-3 border-gray-500"/>
                        <div class="flex justify-between items-center">
                            <p class="text-sm font-sans  py-2"> Cart Subtotal </p>
                            <p>1000</p>
                        </div>
                        <div class="flex  justify-between items-center">
                            <p class="text-sm font-sans  py-2"> Shipping </p>
                            <p>1000</p>
                        </div>
                    </div>
                    <div class="flex  justify-between items-center">
                    <p class="font-black text-sm font-sans py-2">Order Total</p>
                    <p>1000</p>
                </div>
            </div>
            </div>
        </div>
        <div class="mt-10 mx-5">
             <button class="w-full p-3 text-white rounded-sm bg-green-600 font-sans">
                PLACE ORDER
            </button>
        </div>
        <div class="mt-5 sm:hidden">
            <img src="@/assets/coverJams.jpg"/>
        </div>
    </div>
</template>
<script>
    import ProductCarts from '../components/products/ProductCarts.vue';
    import Address from '../components/address.vue';
    export default {
        name:'shipping',
        components: { 
            ProductCarts,
            Address
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
                ],
                isHaveBilling:false,
                showMoreCart:false
            }
        },
         beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
              next()
            } else {
              next(false)
            }
        }
    }
</script>
<style scoped>
    .bg-pattern {
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23f0d718' fill-opacity='0.04'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); 
     }  
</style>