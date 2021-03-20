<template>
    <div>
        <product-list :products="properties"/>
       
    </div>
</template>
<script>
    import ProductList from '../components/products/ProductList.vue';

    export default {
        name:"shop",
        components: { 
            ProductList,
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
