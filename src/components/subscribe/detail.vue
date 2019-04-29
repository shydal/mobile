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
        <mt-field   type="textarea" rows="4" v-model="explains" readonly></mt-field>
        
        
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
    created(){
        var self = this;
         this.$axios.get('/api/appointment/findById',{
                  params: {               
                id:this.$route.query.id,                      
            }
            }).then((res)=>{
                 if(res.data.state=='success'){
                    //alert("提交成功");
                    self.explains = res.data.data.about;
                }
            });
    },
    mounted(){
      console.log(this.explains);
    }
}

</script>
<style>
.explains{
    padding-top: 40px;
    border-bottom: 1px solid gainsboro
}
</style>
