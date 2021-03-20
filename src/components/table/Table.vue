<template>
    <div class="overflow-auto">
        <table class="text-left table-auto w-full border-collapse bg-white shadow-md rounded">
            <table-header :columns="columns"/>
            <table-body :items="items" :columns="columns"/>
        </table>
    </div>
</template>
<script>
import TableBody from './TableBody.vue'
import TableHeader from './TableHeader.vue'
export default {
    name:"theTable",
    props:{
        items:{
            type:Array
        },
        columns:{
            type:Array
        }
    },
    components:{
        TableBody,
        TableHeader
    }
}
</script>