<template src="./register.html"></template>
<style src="./register.css" scoped></style>
<script>
export default {
   data(){
       return {
           message:'',
           error:false, 
           username:'',
           phone:'',
           gender:'M',
           password:'',
           repassword:'',
           error:'',
       }
   },
   methods:{
       register(){
             this.yanzhen();
            if(this.error===false)
            {
                var param =({
                username:this.username,
                password:this.password, 
                phone:this.phone, 
                gender:this.gender,
                status:1, 
                roleId:1,
                })
                
                var self=this;
                this.$axios.post('/api/user/register',param).then((res)=>{
                      self.error=true;
                      self.message="注册成功,3秒后自动跳转登录界面"
                     setTimeout(() => {
                      self.$router.push("/login");
                   },3000);    
                });
            }else{

            }

       },
       ifUserExist() {       
            var param = ({
                  username: this.username
                });
            this.$axios.get('/api/user/userExist', {
              params:param
            }).then((res) => {
                console.log("sdf");
              res = res.data;            
               if(res.state === 'success') {
                  this.error = true; 
                 this.message = '此账号已被注册！';
                return;
              } else {
                  this.error = false; 
                 this.message = '';
              }
            });
        },
       yanzhen(){
           this.error = false;
            var reg_phone = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(this.username == '' || this.username == null) {
              this.error = true;
              this.message = '用户名不能为空！';             
              return;
            } else if(!reg_phone.test(this.phone)) {
                this.error = true;
                this.message = '请确认您输入的是否为手机号？';
                return;
            } else if(this.password == '' || this.password == null){
               this.error = true;
               this.message = '用户密码不能为空！';
                return;
            } else if(!/^(\w){6,20}$/.test(this.password)) {
              this.error = true;
              this.message = '密码为6-20位！';
              return;
            } else if(this.password != this.repassword) {
                this.error = true;
              this.message = '两次密码不一致！';
              return;
            }else {
                this.error = false;
                this.message = '';
              }
       }
   }
}
</script>
