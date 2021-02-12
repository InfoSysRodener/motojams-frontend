<template>
    <div class="h-auto border-t-2 border-white bg-black pb-1 pl-3 sm:px-10 ">
      <div class="flex flex-col sm:flex-row sm:justify-between mt-5 text-white pl-2" >
          <div class="max-w-sm">
            <img class="h-24" src="@/assets/logoJams.png"/>
            <p class="text-xs sm:text-sm font-sans w-3/4 break-words mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha
            </p>
          </div>
          <div class="grid grid-rows-1 sm:grid-cols-3 gap-2 md:gap-16 tracking-wider">
             <div v-for="item in items" :key="item.name">
                <p class="font-black font-sans text-xs sm:text-sm my-5 mr-5 uppercase"> {{item.name}} </p>
                <ul> 
                  <li class="hover:text-gray-800 cursor-pointer font-sans text-xs mt-2 capitalize" v-for="product in item.sublinks" :key="product.name">
                    {{ product.name }}
                  </li>
                </ul>
             </div>
          </div>
      </div>
      <div class="flex flex-col-reverse  sm:flex-row sm:justify-between mb-1 mt-20 text-white text-xs sm:text-sm">
        <p class="font-sans tracking-tight mt-5 ml-1">© 2021 present
            <span class="font-tight font-extrabold font-sans "> JAMS Safety Gears</span>
            <span>. All right reserved </span>
        </p>
        <ul class="grid grid-cols-3 sm:flex gap-1 sm:mt-5">
            <li class="font-sans mx-1 font-tight cursor-pointer hover:text-gray-800" v-for="list in Lists" :key="list.name">{{ list.name }}</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    name:'footers',
    data () {
        return {
            Lists:[
                { name:"Contact",link:""},
                { name:"Private Policy",link:""},
                { name:"Term & Condition",link:""},
            ],
            items :[
                { name:"helmet", sublinks:[
                    { name:"fullface" , link:"" },
                    { name:"halfface" , link:"" },
                ] },
                { name:"accessories", sublinks:[
                    { name:"sticker" , link:"" },
                    { name:"tube mask" , link:"" },
                    { name:"helmet hook" , link:"" },
                ] }, 
                { name:"bag" , sublinks:[
                    { name:"tacktical bag", link:"" },
                    { name:"chest bag", link:"" },
                    { name:"belt bag", link:"" },
                    { name:"helmet bag" , link:"" },
                ] }
            ],
        }
    }
}
</script>