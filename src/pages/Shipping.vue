<template>
    <div>
        <navigation />
        <div>
            
        </div>
        <footers/>
    </div>
</template>
<script>

    import navigation from '@/components/navigations/nav.vue'
    import Footers from '../components/navigations/footer.vue'

    export default {
        name:'shipping',
        components: { 
            navigation,
            Footers 
        },
        data () {
            return {

            }
        }
    }
</script>