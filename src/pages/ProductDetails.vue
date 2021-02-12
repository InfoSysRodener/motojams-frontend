<template>
    <div class="bg-pattern">
      <navigation />
      <product-details :product="product"/>
      <product-list :header="header" :products="properties"/>
      <footers />
      <signin /> 
      <carts/> 
    </div>
</template>
<script>
import ProductDetails from '../components/products/ProductDetails.vue';
import navigation from '@/components/navigations/nav';
import footers from '../components/navigations/footer.vue';
import ProductItem from '../components/products/ProductItem.vue';
import Signin from '../modals/signin.vue';
import Carts from '../modals/carts.vue';
import ProductList from '../components/products/ProductList.vue';


export default {
    name:"productdetails",
    components:{
        ProductDetails,
        navigation,
        footers,
        ProductItem,
        Signin,
        Carts,
        ProductList 
    },  
    data () {
        return {
            header:"You might also like",
            product:{
                 id:1,
                image:"https://picsum.photos/230/230",
                title:"ADVERSE WEATHER LENS PACK",
                description:"LThe ultimate trio of lenses to cover all conditions! This pack includes 1 x Orange Overcast-Conditions-Lens, 1 x Yellow Low Light, Twilight-Conditions-Lens and 1 x Clear lens for full on night riding!",
                ratings:4,
                price:"3300",
                availability:true
            },
             properties: [
                {
                    id:1,
                    image:"https://picsum.photos/230/230",
                    title:"RG1-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"3300",
                }, {
                    id:2,
                    image:"https://picsum.photos/230/230",
                    title:"RG1-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"3300",
                },
                 {
                    id:3,
                    image:"https://picsum.photos/230/230",
                    title:"RG1-DX SNOW-SPORTS HELMET - FROSTBITE (2020)",
                    description:"",
                    ratings:4,
                    price:"3300",
                },
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