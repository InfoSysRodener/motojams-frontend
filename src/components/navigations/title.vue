<template>
    <div class="flex items-center">
        <p class="text-xl font-black font-sans uppercase">
            {{title}}
        </p>
        <div class="border-gray-300 mx-5 w-full border-t"></div>
    </div>
</template>
<script>
export default {
    name:"nav-title",
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>