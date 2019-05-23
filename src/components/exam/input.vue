<template>
    <div>
        <div class="head">
        <mt-header fixed title="成绩录入">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="用户名" :value="this.$store.state.username" readonly></mt-field>
        <mt-field label="驾照类型" :value="user.licenseType.type"   readonly></mt-field>
        <mt-field label="科目" :value="subject" v-model="subjectId" readonly></mt-field>
        <mt-field label="分数" v-model="mark" ></mt-field>
        </div>
        <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="tijiao">提交</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            subject:null,
            mark:null,
            subjectId:null,
            user:null,
        }
    },
    methods:{
        tijiao(){        
            var reg = new RegExp("^(\\d|[1-9]\\d|100)$");
            
           if(!reg.test(this.mark)) {
               alert("请输入0-100");
               return
           }
            var params=({
                userId:this.$store.state.id,
                subjectId:this.subjectId,
                username:this.$store.state.username,
                type:'1', 
                mark:this.mark              
            })
            this.$axios.post('/api/score/save',params).then((res)=>{
                if(res.data.state=='success'){
                    alert("提交成功");
                }
            });
        }        
    },

    created(){

        var self = this;
        this.$axios.get('/api/state/findStatebyUserId',
        {
            params: {
                userId:self.$store.state.id,               
            }
        }).then((res)=>{
            if(res.data.state =="success"){
                if(res.data.data.subjectId=="1"){
                    this.subject = "科目一";
                }else if(res.data.data.subjectId=="2"){
                        this.subject = "科目二";
                }else if(res.data.data.subjectId=="3"){
                        this.subject = "科目三";
                }else if(res.data.data.subjectId=="4"){
                        this.subject = "科目四";
                }
                this.subjectId=res.data.data.subjectId;
            }
        });
         this.$axios.get('/api/user/findUserById',
        {
            params: {
                id:self.$store.state.id,               
            }
        }).then((res)=>{
            
            if(res.data.state =="success"){
                
                self.user = res.data.data;
            }
        });

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


