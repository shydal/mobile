<template>
    <div>
        <div class="head">
        <mt-header fixed title="报名">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="旧密码" placeholder="请输入旧密码" v-model="password"></mt-field>
        <mt-field label="新密码" type="password" placeholder="请输入新密码"  v-model="newPassword"></mt-field>
        <mt-field label="确认密码" type="password" placeholder="请确认密码"   v-model="confirm"></mt-field>
        </div>
        <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="submit">确认</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            password:null,
            newPassword:null,
            confirm:null,
            flag:false,//判断密码是否正确
        }
    },
    methods:{
        submit(){
            var self=this;
            if(this.newPassword != this.confirm){
                alert("两次密码不一样");
                return
            }
           $.ajax({ type:'get',
             url:'/api/user/detail',
          data:{
                    id:this.$store.state.id
             },
           async:false, 
           success:function(res){  
                             
               if(res.state==="success"){
                
               if(res.data.password != self.password){
                       alert("旧密码输入错误");                  
                }else{
                   self.flag = true;
                }
            }
                }, 
            error:function(response){ 
                    alert("error"); 
                    } 
            });
            if(this.flag){
                 self.flag = false;
               this.$axios.get('/api/user/updateById',{
                   params:{
                        id:this.$store.state.id,
                        password:this.newPassword
                   }
               }).then((res)=>{
                   if(res.data.state=='success'){
                       alert('修改密码成功');
                   }
               });
              
            }
            

            
        }
    }
}
</script>
<style>
.head{
    position: absolute;
}
.field{
    padding-top: 30px;
    position: relative;
}
.confirm{
    padding-top: 10px;
    text-align: center;
}
</style>
