<template>
    <div class="container">    
        <section>
            <swiper></swiper>
        </section>
        <section>
            <div class="gongneng">
                <div class="small">
                    <img src="../assets/imgs/about.png"/>
                    关于驾校
                </div>
                 <div class="small">
                    <img src="../assets/imgs/about.png"/>
                    关于驾校
                </div>
                 <div class="small">
                    <img src="../assets/imgs/about.png"/>
                    关于驾校
                </div>               
            </div>

        </section>

    </div>
</template>
<script>
 import swiper from '@/components/base/swiper.vue'
export default {
    data(){
        return{}
    },
    components:{
        swiper,
    }

}
</script>
<style>
.container{ 
    max-width: 640px;
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
    text-align:center;
}
.gongneng{
    width: 100%;
    height: 80px;
   
}
.small{
    width: 60px;
    height: 80px;
    display: inline;
}
</style>





