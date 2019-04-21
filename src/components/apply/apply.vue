<template>
    <div>
        <div class="head">
        <mt-header fixed title="报名">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="姓名" placeholder="请输入真实性名" v-model="name"></mt-field>
        <mt-field label="身份证号" placeholder="身份证号"  v-model="idCard"></mt-field>
        <mt-field label="证件照" type="file" @change.native="upload($event)"></mt-field>
        </div>
        <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="submit">提交信息</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:null,
            idCard:null,
            image:null,           
        }
    },
    methods:{
         upload(event){        
          this.image = event.target.files[0];
          console.log(this.image);
        },
        submit(){
             let formData = new FormData();         
            formData.append('name', this.name);
             formData.append('id', this.$store.state.id);
            formData.append('idCard', this.idCard);
            formData.append('image',this.image); 
            formData.append('licenseId',this.$route.query.id);                     
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            this.$axios.post('/api/user/wanshan',formData,config).then((res)=>{
                alert("报名成功待确认");
            });
           
        }
    }
}
</script>

<style>
.head{
    position: absolute;
}
.field{
    padding-top: 30px;
    position: relative;
}
.confirm{
    padding-top: 10px;
    text-align: center;
}
</style>

