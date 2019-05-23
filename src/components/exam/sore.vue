<template>
    <div>
        <div class="head">
            <mt-header fixed title="历史成绩">
                <router-link to="" slot="left">
                    <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div>
             <table class="table">	
                            <thead>
                                <tr>
                                <th>姓名</th>
                                <th>科目</th>
                                <th>分数</th>
                                <th>类型</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in scoreList" :key="item.id">
                                    <td>{{item.username}}</td> 
                                    <td>{{item.subject.name}}</td> 
                                    <td>{{item.mark}}</td> 
                                    <td v-if="item.type==1">正式考试</td> 
                                    <td v-if="item.type==2">模拟考试</td> 
                                </tr>                              
                            </tbody>
                        </table> 
        </div>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/components/base/footer'
export default {
    data(){
        return {
            scoreList:null
        }

    },
    created(){
        var self = this;
        this.$axios.get("/api/score/getList",
        {
            params: {              
                userId:this.$store.state.id, 
                                        
            }
        }).then((res)=>{
            if(res.data.state="success"){
                self.scoreList = res.data.data;
            }
        });

    },
    components:{
        foot
    }
}
</script>
<style>
.table{
    width: 100%;
    height: auto;
    padding-top: 40px;
    text-align: center
}
.table tr td{
    padding-top:10px;
    padding-bottom: 1px solid;
}
</style>


