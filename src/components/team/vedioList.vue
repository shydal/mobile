<template>
    <div>
        <form action="" v-on:submit.prevent="">
            <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="请输入搜索标题"
            @keyup.enter.native="search"
            class="font-size-8"
            style="width:100%;height:auto;"
            >
            </mt-search>
        </form>
        <div class="movie_list">
            <ul>
                <li v-for="item in videoList" :key="item.id" @click="toplayer(item.id)">
                    <a href="javacrript:void(0)">
                        <img :src="HTTP+ item.img" width="100%" height="100%"/>
                    </a>
                    <div> <span > {{item.title}}</span></div>
                </li>               
            </ul>
        </div>
    
        <div class="fenye">
             <center>
                 <table cellspacing="0" cellpadding="0" border="0">
                    <form method="get" ></form><tbody><tr>
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
                    <input type="button" value="GO" @click="search"> 共 {{totalPages}} 页
                    <!-- {{total}} 条信息 -->
                    </td>
                    </tr>
                    </tbody>
            </table>
        </center>
        </div> 
        <div style="height:60px"></div>    

    </div>
</template>
<script>
import { debug } from 'util';
export default {
     data(){
        return{
             videoList:null,
             subjectId:'3',
             pageIndex:1,
             pageSize:6,
             total:0,
             totalPages:0,
             value:null
        }
    },
    methods:{    
        search(){
         var self = this;
             this.$axios.get('/api/video/getVideoList',{
          params:{                           
                 subjectId:this.subjectId,
                 pageIndex:this.pageIndex,
                 pageSize:this.pageSize                        
            }
        } ).then((res)=>{
            if(res.data.state=='success'){             
                 self.videoList = res.data.data.content;
                    self.total =res.data.data.total;
                    self.pageIndex=res.data.data.pageNumber;
                    self.totalPages=res.data.data.totalPages;
            }else{
                self.videoList = null;
            }
        },);
        },
         next:function(){
            this.pageIndex=this.pageIndex+1;
            this.search();
        },
        pre:function(){
            this.pageIndex=this.pageIndex-1;
            this.search();
        },
        first:function(){
            this.pageIndex=1;
            this.search();
        },
        end:function(){
            this.pageIndex=this.totalPages;
            this.search();
        },
        toplayer(id){
                 this.$router.push({
                        name: 'player',
                        query: {
                        id: id
                        }
                    })
        }
    },
    created(){
        this.search();
    }
}
</script>

<style>
.movie_list {
    margin: 0px;
    padding: 0px;
    text-align: center;
}
.movie_list ul {
    margin: 0px;
    padding: 0px;
    overflow: hidden;
}
.movie_list ul li {
    width: 45%;
    margin: 0 0 0 5%;
    padding-top: 10px;
    float: left;
    position: relative;
    list-style-type :none;
}
a {
    cursor: pointer;
    color: #000;
    text-decoration: none;
    outline: 0 none;
    overflow: hidden;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -ms-transition: all .2s linear;
    transition: all .2s linear;
}
.text-ellipsis {
}
.fenye{ 
     width:100%;
     text-align:center; 
     height:20px; 
     line-height:20px;
    font-size:14px; 
      margin-top:10px;
      padding-top: 20px;
}
</style>


