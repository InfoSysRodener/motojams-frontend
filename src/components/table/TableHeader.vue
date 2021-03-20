<template>
   <thead>
      <tr
        class="bg-blue-200"
      >
          <th 
            class="py-3 px-6 bg-grey-lightest font-black uppercase text-sm text-grey-dark border-b border-grey-light" 
            v-for="column in columns" :key="column.id">
            {{column.label}}
            </th>
      </tr>
    </thead>
</template>
<script>
    export default {
        name:"table-header",
        props:{
            columns:{
                type:Array,
                default:[
                    {
                        id:1,
                        path:'name',
                        label:'Name'
                    }
                ]
            }
        },
        data () {
            return {

            }
        }
    }
</script>