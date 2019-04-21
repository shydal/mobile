
<template>
    <div>
        <div class="head">
        <mt-header fixed title="确认报名">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <section>
         <div class="baoming">             
                <div class="baoming-item" v-for="item in userList" :key="item.id">
                    <div class="fenli">
                        <div class="left">{{item.name}}</div>
                        <div class="right"  ><mt-button type="primary"  @click.native="handleClick(item)">确认报名</mt-button></div>
                    </div>
                </div>
            </div>
            <div style="width:100%;height:50px"></div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userList:null,
        }
    },
    methods:{
        handleClick(item){
             var param = (
                {
                  userId:item.id,
                  licenseId: item.licenseId
                }
            );
            this.$axios.post('/api/fee/save',param).then((res)=>{
                if(res.data.state==='success') {
                alert("缴费成功");           
                } else {
                   alert("缴费失败"); 
                }  
            });


        },
        confirmList(){
            var self = this;
            this.$axios.get('/api/user/confirmList').then((res)=>{
                if(res.data.state=='success'){
                        self.userList = res.data.data
                }
           });
        }

    },
    created(){
        this.confirmList();
    }
}
</script>
<style>
.top{
     padding-top:40px;
}
.baoming{
  
    padding-top:40px;
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



