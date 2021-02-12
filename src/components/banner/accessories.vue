<template>
    <div class="h-screen bg-hero-pattern">
        <div class="flex justify-self-center">
          <h1 class="font-sans font-extrabold text-9xl text-white">
               {{ property.title }}
          </h1>
          <p> {{ property.description }} </p>
          <button class="p-5 bg-red-600 rounded-sm text-white" >
            <router-link to="/product">{{ property.link }}</router-link>   
          </button> 
        </div>     
    </div>
</template>
<script>
export default {
    name:"banner",
    props:{
        property:{
            type:Object,
            required:true
        }
    },
    data () {
        return {

        }
    }
}
</script>