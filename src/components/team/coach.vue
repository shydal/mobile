<template>
    <div>
         <div class="head">
        <mt-header fixed title="教练简介">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="jianjie">
            <div class="jpg">
                <img :src="'http://192.168.1.108:8081'+coach.image" width="50%">
                <div class="wenzi"> 
               <div class="info"><em><strong>姓名：</strong>{{coach.name}}</em><br></div>
               <div class="info">   <em ><strong>电话：</strong>{{coach.phone}}</em><br /> </div>
                <div class="info">  <em ><strong>驾照：</strong>{{coach.licenseType.type}}</em><br /></div>       
                </div>
            </div>
            <div class="title">个人介绍</div>
            <div class="intro">
                {{coach.intro}}
            </div>                    
        </div> 

         <div class="jl_pingjia" v-if="commentList.length != 0"><!--教练评价-->
                <div class="jlsp_top"><em>教练评价</em></div>
                <div class="pj_list">
                    <ul>
                        <li  v-for="item in commentList" :key="item.id"><em class="name">{{item.user.username}}</em>
                            <div>
                                <span class="pingfen" v-if="item.star=='1'">评分：★</span>
                                <span class="pingfen" v-if="item.star=='2'">评分：★★ </span>
                                <span class="pingfen" v-if="item.star=='3'">评分：★★★ </span>
                                <span class="pingfen" v-if="item.star=='4'">评分：★★★★ </span>
                                <span class="pingfen" v-if="item.star=='5'">评分：★★★★★  </span>
                                <div style="padding-top:5px;padding-bottom:5px">{{item.detail}}</div>
                                <i class="time">{{item.createTime}}</i>
                            </div>
                        </li>
                    </ul>
                     <div class="fenye">
                         <center><table cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                            <tr>
                                <td align="right">
                                    <template v-if="pageIndex<=1">
                                    首页
                                    上一页  
                                    </template> 
                                    <template v-if="pageIndex>1">
                                    <a href="javascript:void(0)" @click="first">首页</a>
                                    <a href="javascript:void(0)" @click="pre">上一页</a> 
                                    </template> 
                                    <template v-if="pageIndex>=totalPages">
                                    下一页 
                                    尾页 
                                    </template> 
                                    <template v-else>
                                    <a href="javascript:void(0)" @click="next">下一页</a>
                                    <a href="javascript:void(0)" @click="end">尾页</a> 
                                    </template> 
                                    第&nbsp;<input tyep="TEXT" name="page" size="2" v-model="pageIndex" maxlength="4" >&nbsp;页
                                    <input type="button" value="GO" @click="submit"> 共 {{totalPages}} 页
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </center>
                     </div>
                    <!--分页 -->
                </div>
               
            </div>



    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return {
             coach:null,
             commentList:null,
             pageIndex:1,
             pageSize:5,
             total:0,
             totalPages:0,
        }
    },
    methods:{ 
        submit: function(){
            var self=this;
            
        this.$axios.get('/api/comment/findCommentList',
        {
            params: {
                pageIndex:self.pageIndex,
                pageSize:self.pageSize,
                coachId:self.coach.id
            }
        }).then(function(data){   
                
            self.commentList = data.data.data.content;
            
           
            self.total =data.data.data.total;
            self.pageIndex=data.data.data.pageNumber;
            self.totalPages=data.data.data.totalPages;                 
        });
        },
        next:function(){
            this.pageIndex=this.pageIndex+1;
            this.submit();
        },
        pre:function(){
            this.pageIndex=this.pageIndex-1;
            this.submit();
        },
        first:function(){
            this.pageIndex=1;
            this.submit();
        },
        end:function(){
            this.pageIndex=this.totalPages;
            this.submit();
        },

       
    },
    created(){
         var self=this;      
         $.ajax({ type:'get',
             url:'/api/user/findUserById',
          data:{
                    id:this.$route.query.id,
             },
           async:false, 
           dataType:'json', 
           success:function(res){                               
               if(res.state==="success"){
                
               self.coach =res.data             
               
            }
                }, 
            error:function(response){ 
                    alert("error"); 
                    } 
            });
            this.submit();
    }

    
}
</script>

<style>
.jianjie{
    width: 100%;
    padding-top: 30px;
}
.jpg{
 padding: 5px;
 width: 100%;
 display: block;
 overflow: hidden;
}
.wenzi{
padding: 10px;
 float: right;
 display: inline;
}
.info{
    padding-top: 30px;
    width: 100%;
    height: 50px;
}
.intro{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid;
}
.title{
    padding-top:10px ;
    width: 100%;
    height: 30px;  
    border-bottom: 1px solid #e7e7e7;
    margin-left:10px; 
}
.jl_pingjia {
    float: left;
    width: 100%;
    min-height: 100px;
    overflow: hidden;
    margin-top: 20px;
}
.pj_list {
    width: 100%;
    height: auto;
    margin-top: 10px;
    float: left;
    overflow: hidden;
}
.pj_list ul{
    margin-top: 0px;
    padding-left: 5px;
}
.pj_list ul li {
    border-bottom: #CCC dashed 1px;
    height: auto;   
    padding-bottom: 10px;
    margin-bottom: 10px;
    width: 100%;
    overflow: hidden;
}
.pj_list div {
    float: right;
    width: 100%;
    line-height: 25px;
    border-left: #CCC 1px solid;
    padding-left: 15px;
}
.pingfen {
    color: #d8661e;
}
.time {
    float: right;
    padding-right:20px; 
}

.pjtext {
    width: 100%;
    height: 80px;
    margin-top: 10px;
    border: #CCC 1px solid;
}

.jlpj_con {
    float: left;
    padding: 10px;
    width: 100%;
    height: 200px;
    border: #CCC solid 1px;
    border-top: #f16b11 solid 1px;
    margin-top: 20px;
}
.name {
    float: left;
    display: block;
    font-family: "微软雅黑";
    font-size: 16px;
    color: #f16b11;
}
.fenye{   
     width:100%;
     text-align:center; 
     height:20px; 
     line-height:20px; 
      font-size:14px; 
      padding-bottom: 20px;
}

</style>

