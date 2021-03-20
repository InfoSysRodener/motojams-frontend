<template>
    <div>
        <div class="h-72 w-auto  lg:w-6/12 lg:h-96 rounded-sm">   
            <LeafMap />
        </div>
            
    </div>
</template>
<script>
import LeafMap from '../components/map.vue'
export default {
    name:'contacts',
    components:{
        LeafMap,
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    
</style>