<template>
<div>
       <div class="head">
        <mt-header fixed title="添加新闻咨询">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="标题" placeholder="请输入标题" v-model="title" @blur.native="verify"></mt-field>
          <div class="type">
             咨询类型 
            <select v-model="category" >
                <option value="1" >通知公告</option>
                <option value="2" >行业动态</option>
                <option value="3" >学车指南</option>
            </select>
        </div>
        </div>
        <div class="wenben">
         <quill-editor :options="editorOption"
                v-model="detail"  @blur.native="verify"
               > 
        </quill-editor> 
        </div>
         <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="save">添加</mt-button>
        </div>
</div>  
</template>
<script>
    import { quillEditor } from 'vue-quill-editor'
     export default {
    	data() {
            return {   
                  title:null,
                    detail:null,
                    category:'1',
                    
                     editorOption:{
                    modules:{
                        toolbar:[
                          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                           ['blockquote', 'code-block']
                        ]
                    }
                }               
            }
        },
        methods: {
            verify(){
                if(!this.title){
                    alert("请输入标题");
                    return false;
                }
                 if(!this.detail){
                    alert("请输入内容");
                    return false;
                }
                return true;
            },
            save: function() { 
                if(!this.verify()){
                        return ;
                }            
                var self = this
                var params=({
                    title:this.title,
                    detail:this.detail,
                    userId:this.$store.state.id,
                    category:this.category
                });
                this.$axios.post('/api/announcement/save', params).then(function(data){
               if(data.data.state == 'success'){
                   alert(添加成功);
               }
               self.title = null;
               self.detail = null;                                       
                });
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
.type{
     width: 100%;
    height: 35px;
    padding-top:10px ;
    border-top: 1px solid gainsboro
}
.wenben{
    width: 100%;
}
</style>


