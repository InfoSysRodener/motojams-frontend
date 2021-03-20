<template>
    <div>
      <product-item-details :product="product"/>
    </div>
</template>
<script>
import ProductItemDetails from '../components/products/ProductItemDetails.vue';
export default {
    name:"product-details",
    components:{
         ProductItemDetails,
    },  
    data () {
        return {
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
