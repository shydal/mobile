<template>
    <mt-tabbar  fixed>
  <mt-tab-item id="tab1">
    <img slot="icon" src="../../assets/imgs/homeSelect.png" @click="index">
    首页
  </mt-tab-item>
  <mt-tab-item id="tab2" v-if="this.$store.state.id==null">
 <img slot="icon" src="../../assets/imgs/login.png" @click="login">
    登陆
  </mt-tab-item>
  <mt-tab-item id="tab3" v-if="this.$store.state.id">
 <img slot="icon" src="../../assets/imgs/login.png" @click="self">
    我的
  </mt-tab-item>

</mt-tabbar>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  //  watch: {
  //   $route(to, from) {
  //       console.log(to);
  //       console.log(from);
  //   }
  // },
  //  beforeRouteUpdate (to, from, next) {
  //  console.log('fds')
  //   },
  created(){
    
  },
  methods:{
    login(){
         this.$router.push({
                name:'login',
          });
    },
    self(){
         this.$router.push({
                name:'self',
          });
    },
     index(){
         this.$router.push({
                name:'index',
          });
    }
  }
  
}
</script>


