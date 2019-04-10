<template>
    <div class="container">    
        <section>
            <swiper></swiper>
        </section>
        <!-- <section>
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

            

        </section> -->
        <section>
            <div class="category">              
                <div class="category-item">
                  <div>  <img src="../assets/imgs/about.png"/></div>
                        <span> 关于驾校</span>
                </div>
                <div class="category-item">
                <div>    <img src="../assets/imgs/news.png"/></div>
                    <span> 新闻中心</span>
                </div>
                <div class="category-item">
                <div>    <img src="../assets/imgs/baoming.png"/></div>
                        <span> 报名学车</span>
                </div>
                <div class="category-item">
                  <div>  <img src="../assets/imgs/team.png"/></div>
                    <span>教学团队</span>

                </div>
                <div class="category-item">
                  <div>  <img src="../assets/imgs/exam.png"/></div>
                    <span> 模拟考试</span>
                </div>
                <div class="category-item">
                  <div>  <img src="../assets/imgs/booking.png"/></div>
                    <span> 预约教练</span>
                </div>
                <div class="category-item">
                  <div>  <img src="../assets/imgs/help.png"/></div>
                    <span> 帮助中心</span>
                </div>
                <div class="category-item">
                  <div>  <img src="../assets/imgs/about.png"/></div>
                    <span> 关于驾校</span>
                </div>
            </div>
        </section>
        <section>
            <div class="title">报名学车</div>
            <div class="baoming">
              
                <div class="baoming-item" v-for="item in license" :key="item.id">
                    <div class="fenli">
                        <div class="left">{{item.type}}&nbsp;&nbsp;￥{{item.money}}</div>
                        <div class="right"><mt-button type="primary">我要报名</mt-button></div>
                    </div>
                </div>
            </div>
            <div style="width:100%;height:50px"></div>
        </section>
        <div style="height:"></div>
    </div>
</template>
<script>
 import swiper from '@/components/base/swiper.vue'
export default {
    data(){
        return{
            license:null
        }
    },
    created(){
         var self=this;
        this.$axios.get('/api/license/findLicenseList').then((res)=>{ 
            if(res.data.state==='success') {
                self.license=res.data.data;
                
                            
            }                    
        });
    },
    components:{
        swiper,
    }
}
</script>

<style>

.container{ 
    max-width: 100%;
    margin: 0 auto;
    height: auto;
    position: relative;
    /* overflow: hidden; */  
}
.title{
    padding-top:10px ;
    width: 100%;
    height: 30px;  
    border-bottom: 1px solid #e7e7e7;
    margin-left:10px; 
}
.category{
    border-bottom: 10px solid #e7e7e7;
    padding-top: 20px;
    overflow: hidden;
}
.category-box{
    display: table;
    width: 100%;
}
.category-item{
    width: 25%;
    height: 85px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    float: left;
    padding-bottom: 10px;
}
.baoming{
    border-bottom: 10px solid #e7e7e7;
   
    overflow: hidden;
}
.baoming-item{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #e7e7e7;
}
.fenli{
    width: 100%;
    overflow: hidden;
}
.left{
    float:left;
   
    margin-top: 20px;
    margin-left:20px;
}
.right{
    float:right;
    margin-top: 10px;
    margin-right: 20px;
}
</style>





