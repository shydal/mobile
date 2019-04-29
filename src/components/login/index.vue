<template src="./login.html"></template>
<style src="./login.css" scoped></style>
<script>
export default {
    data(){
        return{
            message:'',
            error:false,                         
            username:'',
            password:'',        
        }
    },
    methods:{
        register(){
            this.$router.push('/register');
        },
        login: function() {
                var self = this 
               var ruleform = ({
                   username:this.username,
                   password:this.password,
               });
                this.$axios.post('/api/user/logins', ruleform,{emulateJSON:true}).then((res)=>{                  
                if(res.data.state=="success"){                                  
                        self.$store.commit('handle',{
                            username:res.data.data.username,
                             id:res.data.data.id,
                            licenseId:res.data.data.licenseId,
                            role:JSON.stringify(res.data.data.role)
                        });   
                        this.$router.push("/");                         
                }else{                   
                    self.message="用户名或密码错误!";
                    self.error=true;                
                }
                });            
            },
    },
     watch:{
                username:function(newValue,OldValue){
                        this.error=false
                 },
                  password:function(newValue,OldValue){
                        this.error=false
                 }
            }
    
}
</script>
