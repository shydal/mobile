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
                <li v-for="item in coachList" :key="item.id" @click="tocoach(item.id)">
                    <a href="javacrript:void(0)">
                        <img :src="HTTP+ item.image" width="60%"/>
                    </a>
                    <div> <span > {{item.name}}</span></div>
                </li>               
            </ul>
        </div>
    
        <div class="fenye">
             <center>
                 <table cellspacing="0" cellpadding="0" border="0">
                    <form method="get" onsubmit="document.location = 'http://www.hkhxjx.com/news.asp?Classid=11&amp;Page='+ this.page.value;return false;"></form><tbody><tr>
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
export default {
     data(){
        return{
             coachList:null,
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
        this.$axios.get('/api/user/findUserList',
        {
            params: {
                pageIndex:this.pageIndex,
                pageSize:this.pageSize,
                name:this.value
            }
        }).then(function(data){       
            self.coachList = data.data.data.content;
            self.total =data.data.data.total;
            self.pageIndex=data.data.data.pageNumber;
            self.totalPages=data.data.data.totalPages;                 
        });
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
         tocoach(id){
         this.$router.push({
                        name: 'coach',
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
    margin: 0 0 0 3%;
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

