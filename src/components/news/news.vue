<template>
    <div>
        <div>
            <mt-header fixed title="新闻中心">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="top">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">通知公告</mt-tab-item>
            <mt-tab-item id="2">行业动态</mt-tab-item>
            <mt-tab-item id="3">学车指南</mt-tab-item>
            </mt-navbar>
        </div>

        <!-- <mt-search v-model="value">
            <mt-cell
                v-for="item in result"
                :title="item.title"
                :value="item.value"
                :key="item.id">
            </mt-cell>
       </mt-search>
        -->

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

         <!-- <mt-cell :to="toAnnounce(item.id)"
                v-for="item in result"
                :title="item.title"
                :value="item.createTime"
                :key="item.id" 
                >
        </mt-cell> -->
        <div class="news-item" v-for="item in result" :key="item.id" @click="toAnnounce(item.id)">
            <div class="titles">
                {{item.title}}
            </div>
            <div class="time">
                <div class="time-right"><font size="2">{{item.createTime}}</font></div>
            </div>
        </div>

        


<!-- tab-container -->
        <!-- <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            123
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        12
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
           123 
        </mt-tab-container-item>
        </mt-tab-container> -->
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'1',
            value:null,
            pageIndex:1,
            pageSize:5,
            total:0,
            totalPages:0,
            result:null,
        }
    },
    computed:{
        change(){
            return{
                selected:this.selected,
            }
        }
    },
    methods:{
        search(){
        var self = this;
        this.$axios.get('/api/announcement/findAnnounceList',
        {
            params: {
                pageIndex:this.pageIndex,
                pageSize:this.pageSize,
                category:this.selected,
                searchValue:this.value
            }
        }).then(function(data){  
            self.result = data.data.data.content;
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
         toAnnounce: function (id){
           // this.$store.commit('setAnnounceId', id);
           
           this.$router.push({
                        name: 'detail',
                        query: {
                        id: id
                        }
                    })
        }
    },

    watch:{
        change:function(){
          this.search();
        }
    },
    created(){
        this.search();
    },
}
</script>

<style>
.top{
    padding-top: 30px;
}
.fenye{
    
     width:100%;
     text-align:center; 
     height:20px; 
     line-height:20px;
      padding-top:10px; 
      font-size:14px; 
      margin-top:10px;
}

.news-item{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e7e7e7;
}
.titles{
    padding-left: 10px;
    padding-top: 10px;
    height: 20px;
}
.time{
     overflow: hidden;
}
.time-right{
    float: right;
    padding-right: 20px;
}
</style>

