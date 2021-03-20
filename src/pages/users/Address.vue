<template>
    <div>
      <nav-title title="address"/>
     

      <carts/>
    </div>
</template>
<script>
import navTitle from '../../components/navigations/title.vue'
import Carts from '../../modals/carts.vue'

export default {
  components: { Carts, navTitle },
    name:"user_address",
    data () {
        return {
         
        }
    }
}
</script>