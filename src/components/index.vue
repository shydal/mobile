<template>
    <div>
         <!-- <header>
			
			<div class="title">首页</div>
		</header> 
		 -->
		<!--文本主体-->
        <swiper></swiper>
		<section>
			 <div class="banner">
			 	
			 </div>
        	
		</section>
		<!--尾部-->
		<footer>
			<li class="tab">首页</li>
			<li class="tab">发现</li>
			<li class="tab">动态</li>
			<li class="tab">设置</li>
		</footer>


    </div>
</template>
<script>
 import swiper from '@/components/base/swiper.vue'
export default {
    data(){

    },
    components:{
        swiper
    }

}
</script>

<style>
@import "../assets/css/normal.css"
</style>
