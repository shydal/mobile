<template>
    <div class = 'wrap_box'>
       
        <p style="height:200px">
           
         <mt-swipe :auto="2000">

          <mt-swipe-item v-for="item in items" :key="item.id">

          <a :href="item.href" rel="external nofollow" >

           <img :src="item.url" class="img"/>

           <span class="desc"></span>

          </a>

          </mt-swipe-item>

         </mt-swipe>

        </p>


    </div>
</template>
<script>
 import {Swipe, SwipeItem} from 'mint-ui'
 import 'mint-ui/lib/style.css'
export default {
    components: {

  'mt-swipe': Swipe,

  'mt-swipe-item': SwipeItem

 },

 data () {

  return {

  items: [{

   title: '你的名字',

   href: 'http://google.com',   url: 'http://localhost:8080/static/lunbo.jpg'

  }, {

   title: '我的名字',

   href: 'http://baidu.com',   url: 'http://localhost:8080/static/lunbo2.jpg'

  }]

  }

 }

    
}
</script>
<style>
.wrap_box {
    max-width: 640px;
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
}
</style>


