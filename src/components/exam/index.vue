<template>
<div>
    <div>
        <mt-header fixed title="模拟考试">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="tiaozhuan">
        <mt-cell title="c1驾照 科目一" to="/exam/paper?licenseId=5&subjectId=1" is-link></mt-cell>
        <mt-cell title="c1驾照 科目四" to="/exam/paper?licenseId=5&subjectId=5"  is-link></mt-cell>
        <mt-cell title="成绩录入"  to= "/exam/score" is-link></mt-cell>
        <mt-cell title="历史成绩"  is-link></mt-cell>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        // hah(id){
        //     console.log("fjkd");
        // }
    }  
}
</script>

<style>
.tiaozhuan{
    width: 100%;
    height: auto;
    padding-top: 30px;
}
</style>

