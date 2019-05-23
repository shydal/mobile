<template>
    <div class="container">         
         <mt-swipe :auto="2000">

          <mt-swipe-item v-for="item in items" :key="item.id">

          <a :href="item.href" rel="external nofollow" >

           <img :src="item.url" class="img" @click="about"/>

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

       href: '/about/about',   url: '/static/lunbo1.jpg'

      }, {

       title: '我的名字',

       href: '/about/about',   url: '/static/lunbo2.jpg'

      }]

      }

    },
    methods:{
        about(){
              this.$router.push({
                name:'about',
            });
        }
    }
   
}
</script>
<style>
.container{
    width: 100%;
    height: 150px;
}
.img {
    width: 100%;
    height: 150px;
}
</style>


