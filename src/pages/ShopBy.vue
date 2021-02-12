<template>
    <div class="bg-pattern">
      <navigation />
        <div class="py-28">
            <product-list :products="properties"/>
        </div>  
      <footers />
      <carts/>
      <signin/>
    </div>
</template>
<script>
    import Footers from '../components/navigations/footer.vue'
    import navigation from '../components/navigations/nav.vue'
    import ProductList from '../components/products/ProductList.vue'
    import Carts from '../modals/carts.vue'
    import Signin from '../modals/signin.vue'

    export default {
        name:"shop-by",
        components: { 
            navigation,
            Footers,
            ProductList,
            Carts,
            Signin 
        }, 
        data() {
            return {
                 properties: [
                {
                    id:1,
                    image:"https://picsum.photos/230/230",
                    title:"RG1-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"3300",
                },
                {
                    id:2,
                    image:"https://picsum.photos/230/230",
                    title:"RG2-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"400",
                },
                {
                    id:3,
                    image:"https://picsum.photos/230/230",
                    title:"RG2-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"400",
                },
                {
                    id:4,
                    image:"https://picsum.photos/230/230",
                    title:"RG2-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"400",
                },
                {
                    id:5,
                    image:"https://picsum.photos/230/230",
                    title:"RG2-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"400",
                }
                ]
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