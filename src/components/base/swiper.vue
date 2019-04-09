<template>
    <div class="container">         
         <mt-swipe :auto="2000">

          <mt-swipe-item v-for="item in items" :key="item.id">

          <a :href="item.href" rel="external nofollow" >

           <img :src="item.url" class="img"/>

           <span class="desc"></span>

          </a>

          </mt-swipe-item>

         </mt-swipe>
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

   href: 'http://google.com',   url: '/static/lunbo1.jpg'

  }, {

   title: '我的名字',

   href: 'http://baidu.com',   url: '/static/lunbo2.jpg'

  }]

  }

 }

    
}
</script>
<style>
.container{
    width: 640px;
    height: 200px;
}

</style>


