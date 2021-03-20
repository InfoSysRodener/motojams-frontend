<template>
    <tbody>
        <tr 
            v-for="item in items" 
           :key="item.name">
                <td
                class="py-4 px-6 border-b border-grey-light"
                v-for="column in columns" :key="column.id"
                > 
                    {{ item[column.label] }}
                </td>
        </tr>
    </tbody>
</template>
<script>
    export default {
        name:"table-body",
        props:{
            items:{
                type:Array
            },
            columns:{
                type:Array
            }
        },
        data () {
            return {

            }
        }
    }
</script>