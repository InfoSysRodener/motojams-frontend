<template>
  <div>
    <div class="h-10/12 bg-pattern">
      <navigation/>
      <div class="pt-20">
          <router-view></router-view>
          <banner  v-if="this.$route.name === 'Home'" class="pt-32" :property="bannerProperty"/>
      </div>
    </div>
    <signin />
    <carts/>
    <navigationFooter />
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
<style scoped>
    .bg-pattern {
       background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23f0d718' fill-opacity='0.04'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); 
     }
</style>
