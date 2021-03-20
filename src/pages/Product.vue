<template>
    <div> 
        <div class="mx-5 grid grid-cols-2 md:grid-cols-4 gap-1 ">
            <div class="flex justify-center pt-5" 
                 v-for="product in getAllProducts" 
                 :key="product.id" >
                <product-item :item="product" />
            </div>
        </div>
    </div>
</template>
<script>
    import ProductItem from '../components/products/ProductItem.vue';
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name:"product",
        components:{
            ProductItem,
        },
        data () {
            return {
               
            }
        },
        methods:{
            ...mapActions('products', { getProduct:'GET'})
        },
        computed:{
            ...mapGetters({
                getAllProducts:'products/ALL'
            })
        },
        mounted(){
           this.getProduct();
        }
    }
</script>
