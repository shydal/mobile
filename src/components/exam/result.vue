<template>
    <div>
        <div class="head">
            <mt-header fixed title="考试结果">
                <router-link to="/exam/index" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="mark">
             <font size="70px">{{this.$route.query.mark}}</font>
        </div>
        <div>
             <mt-cell title="查看错题" :to="'/exam/error?paperId='+paperId"  is-link></mt-cell>
             <mt-cell title="历史成绩" to='/exam/score' is-link></mt-cell>      
        </div>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/components/base/footer'
export default {
    data(){
        return {
            paperId:''
        }
    },
    created(){
      this.paperId =  this.$route.query.paperId;
     
    },
    components:{
        foot
    }
}
</script>

<style>
.mark{
    width: 100%;
    color: rgb(202, 76, 76);
    height: 150px;
    padding-top: 110px;   
    text-align: center;
}
</style>