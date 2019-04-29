<template>
    <div>
        <div class="head">
        <mt-header fixed title="评价">
            <router-link to="" slot="left">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="教练姓名"  v-model="user.name"></mt-field>
        
        </div>
        <div>
            评分：
                <select  v-model="star">
                    <option value="1"><font color="yellow">★</font></option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="2">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>
        </div>
        <div class="area"><mt-field   type="textarea" rows="4" v-model="detail" ></mt-field></div>
        <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="submit">提交信息</mt-button>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            user:null,
            star:'5',
            detail:'',
        }
    },
    methods:{
        submit(){
            
             var self = this;
            var params = ({
                userId:this.$store.state.id,
                coachId:this.$route.query.id,
                createTime:new Date(),
                detail:this.detail,
                star:this.star,
                apid:this.$route.query.apid

            });
            this.$axios.post("/api/comment/save",params).then ((res)=>{
                alert("感谢您对教练的评价");
            })
            this.$router.back(-1);
        }
    },
    created(){
        var self  = this;
        console.log(self.$store.state.userId);
         this.$axios.get('/api/user/findUserById',
        {
            params: {
              //  id:self.$store.state.userId,
               id:this.$route.query.id,
            }
        }).then((res)=>{
            
            if(res.data.state==="success"){
               self.user =res.data.data
            }
        });
    }
    
}
</script>

<style>
.area{
    padding-top: 10px;
    border-bottom: 1px solid gainsboro;
}
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

