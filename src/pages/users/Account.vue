<template>
    <div>
      <navigation :type="type"/>
        <div class="py-28 px-5">
            <nav-title v-if="$route.name === 'Account'" title="account"/>
            <router-view></router-view>
        </div>
      <footers />
      <carts/>
    </div>
</template>
<script>
import footers from '../../components/navigations/footer.vue'
import navigation from '../../components/navigations/nav.vue'
import navTitle from '../../components/navigations/title.vue'
import Carts from '../../modals/carts.vue'
export default {
  components: { navigation, Carts, footers, navTitle },
    name:"account",
    data () {
        return {
            type:'user'
        }
    }
}
</script>