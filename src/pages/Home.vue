<template>
  <div>
    <div class="h-10/12 bg-hero-pattern">
      <navigation/>
      <banner class="pt-32" :property="bannerProperty"/>
    </div>
    <div>
      <signin />
      <carts/>
      <navigationFooter />
    </div>
  </div>
</template>

<script>
  import navigation from '@/components/navigations/nav';
  import navigationFooter from '../components/navigations/footer.vue';
  import ProductItem from '../components/products/ProductItem.vue';
  import Banner from '../components/banner/banner.vue';
  import Carts from '../modals/carts.vue';
  import Signin from '../modals/signin.vue';


  export default {
    name: 'home',
    components:{
      navigation,
      navigationFooter,
      ProductItem,
      Banner,
      Carts,
      Signin
    },
    data () {
      return {
        bannerProperty:{
          title:"Jams Safety Gears & Accessories",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha"
        },
      }
    },
    methods:{
    
    }
  }
</script>
