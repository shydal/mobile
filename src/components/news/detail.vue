<template>
    <div>
        <div>
            <mt-header fixed title="新闻中心">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
        </div>


    <div class="n_s_title"><p>{{announce.title}}</p></div>  
      <div class="n_s_xinxi"><p>上传时间:{{announce.createTime}} <font color="#FF0000"></font></p></div>
      <div class="n_s_text" v-html="announce.detail">
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            announce:null,
        }
    },
    created(){
        var self = this;
          console.log(this.$route.query.id);
          this.$axios.get('/api/announcement/findAnnounceById',{
               params: {
                id:this.$route.query.id
               }
          }).then((res)=>{
             if(res.data.state=='success'){              
                self.announce = res.data.data;
             }
          });
    }
}
</script>
<style>
.n_s_title {
    padding-top: 30px;
    text-align: center; 
    width: 100;
    font-size: 18px;
    font-weight: bold;
}
.n_s_xinxi {
    text-align: center;
   
    width: 100%;
    font-size: 14px;
    background: #CCC;
    height: 30px;
    margin-top: 20px;
    line-height: 32px;
}
.n_s_text {
    
    line-height: 30px;
    width: 100;
    font-size: 14px;
    text-align: justify;
    margin-top: 20px;
}
.fenye{   
     width:100%;
     text-align:center; 
     height:20px; 
     line-height:20px;
      padding-top:10px; 
      font-size:14px; 
      margin-top:10px;
}
</style>



