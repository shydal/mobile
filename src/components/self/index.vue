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
       <template v-if="JSON.parse(this.$store.state.role)">   <mt-cell title="添加资讯" to="/news/addNews" v-if="JSON.parse(this.$store.state.role).roleName=='admin'"  is-link></mt-cell></template>
       <template v-if="JSON.parse(this.$store.state.role)">   <mt-cell title="确认报名" to="/self/confirm"  v-if="JSON.parse(this.$store.state.role).roleName=='admin'" is-link></mt-cell></template>
       <template v-if="JSON.parse(this.$store.state.role)">  <mt-cell title="我要评价" v-if="JSON.parse(this.$store.state.role).roleName=='student'" to="/self/comment"  is-link></mt-cell></template>
       <template v-if="JSON.parse(this.$store.state.role)">   <mt-cell title="我的预约" v-if="JSON.parse(this.$store.state.role).roleName=='student'||JSON.parse(this.$store.state.role).roleName=='coach'" to="/self/mybooking"  is-link></mt-cell></template>
         <mt-cell title="退出"  @click.native="exit"  is-link></mt-cell>

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
        exit(){
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("id");
          sessionStorage.removeItem("role");
          sessionStorage.removeItem("licenseId");
          this.$router.push('/');
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
