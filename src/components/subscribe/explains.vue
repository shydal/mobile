<template>
    <div>
        <div class="head">
        <mt-header fixed title="取消订单原因">
            <router-link to="" slot="left">
                <mt-button icon="back"  @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="explains">
        <mt-field  placeholder="取消预约原因" type="textarea" rows="4" v-model="explains"></mt-field>
        
       
        </div>
          <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="submit">提交</mt-button>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            explains:''
        }
    },
    methods:{
        submit(){
             var self = this;           
            this.$axios.get("/api/appointment/updatebyId",{
                params: {               
                id:this.$route.query.id,
                status:0, 
                about:this.explains              
            }
            }).then((res)=>{
                if(res.data.state=='success'){
                    alert("提交成功");
                }
            });
        }
    }

}

</script>
<style>
.explains{
    padding-top: 40px;
    border-bottom: 1px solid gainsboro
}
</style>


