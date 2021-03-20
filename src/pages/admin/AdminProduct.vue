<template>
    <div>
      <nav-title title="product"/>
      <div>
        <Table :items="items" :columns="columns"/>
      </div>
    </div>
</template>
<script>
import navTitle from '../../components/navigations/title.vue'
import Table from '../../components/table/Table.vue'
export default {
    name:'admin_product',
    components:{
      navTitle,
      Table
    },
    data () {
        return {
            items:[
                {
                    name:'Helmet',
                    price:'1000',
                    brand:'spider',
                }
            ],
            columns:[
                {
                    id:1,
                    label:'name',
                    path:'name',
                },
                {
                    id:2,
                    label:'price',
                    path:'price'
                },
                {
                    id:3,
                    label:'brand',
                    path:'brand'
                },
                {
                    id:4,
                    label:'Action',
                    path:'action'
                }
            ]
        }
    },
    methods:{
        
    }
}
</script>