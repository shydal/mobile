<template>
<div>
    <div>
        <mt-header fixed title="个人中心">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="tiaozhuan">
        <mt-cell title="修改密码" to="/self/change" is-link></mt-cell>
        <mt-cell title="添加资讯" to="/news/addNews"  is-link></mt-cell>
        <mt-cell title="确认预约" to="/self/confirm"  is-link></mt-cell>


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
        hah(id){
            console.log("fjkd");
        }
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
