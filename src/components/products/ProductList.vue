<template>
    <div class="py-5 mx-5">
          <p class="my-5 font-sans text-white capitalize text-2xl">{{ header }}</p>
          <div class="flex flex-row overflow-x-scroll lg:overflow-x-hidden pb-10">
            <div class="mr-2 w-auto" v-for="property in products" :key="property.id" >
                <product-item class="w-60 h-auto lg:w-full" :property="property" />
            </div>
          </div>
      </div>
</template>
<script>
    import ProductItem from "./ProductItem.vue"
    export default {
        name:"product-list",
        components: { ProductItem },
        props:{
            header:{
                type:String,
                default:"Recommeded to you"
            },
            products:{
                type:Array,
                required:true
            }
        },
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