<template>
  <div>
    <navigation type="admin"/>
    <div class="py-28 pl-5">
      <nav-title v-if="$route.name === 'Admin'" title="dashboard"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from '../../components/navigations/nav.vue'
import navTitle from '../../components/navigations/title.vue'
  export default {
    name: 'home',
    components:{
      navigation,
      navTitle 
    },
    data () {
      return {
        msg: 'Welcome to the Admin Page'
      }
    }
  }
</script>