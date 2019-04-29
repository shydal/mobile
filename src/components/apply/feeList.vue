<template>
<div>
    <div class="head">
        <mt-header fixed title="报名学车">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
     </div>
<div class="top">
<mt-navbar v-model="selected">
  <mt-tab-item id="1">报名材料</mt-tab-item>
  <mt-tab-item id="2">报名流程</mt-tab-item>
  <mt-tab-item id="3">我要报名</mt-tab-item>
</mt-navbar>
</div>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   <!-- <mt-field label="1.携带本人身份证及复印件3张"> </mt-field>
   <mt-field label="2.携带本人白底小一寸彩照18张"> </mt-field>
   <mt-field label="3.体检表"> </mt-field>
   <mt-field label="4.暂住证或者居住证"> </mt-field> -->
   <div class="text">
       <span>1.携带本人身份证及复印件3张</span>
   </div>
   <div class="text">
       <span>2.携带本人白底小一寸彩照18张</span>
   </div>
   <div class="text">
       <span>3.体检表</span>
   </div>
   <div class="text">
       <span>4.暂住证或者居住证</span>
   </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <div style="text-align:center">
       <img src="../../assets/imgs/process.jpg" width="80%"/>
   </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    
     <section>
         <div class="baoming">             
                <div class="baoming-item" v-for="item in license" :key="item.id">
                    <div class="fenli">
                        <div class="left">{{item.type}}&nbsp;&nbsp;￥{{item.money}}</div>
                        <div class="right"  ><mt-button type="primary"  @click.native="handleClick(item.id)">我要报名</mt-button></div>
                    </div>
                </div>
            </div>
            <div style="width:100%;height:50px"></div>
     </section>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
<script>
export default {
     data(){
        return{
            selected:'1',
            license:null
        }
    },
    methods:{
        handleClick(id){
           
            this.$router.push({
                name:'apply',
                 query: {
                        id: id
                        }
            });
       
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
}
</script>
<style>
.top{
     padding-top:30px;
}
.baoming{
  
    padding-top:10px;
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
.text{
    width: 100%;
    height: 50px;
    padding-top:20px;
    padding-left: 20px;
    border-bottom: 1px solid #e7e7e7;
}
</style>


