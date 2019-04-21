<template>
    <div>
        <div class="head">
        <mt-header fixed title="添加教练">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="真实姓名" placeholder="请输入真实姓名"  v-model="name"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号"  v-model="phone"></mt-field>
        <div class="gender">
               性别 <input type="radio" name="optionsRadios" id="optionsRadios1" v-model="gender" value="M" >男
        <input type="radio" name="optionsRadios" id="optionsRadios2"  v-model="gender" value="F">女
        </div>
        <div class="type">
         驾照类型 
            <select v-model="type" >
            <option v-for="item in licenseTypeList" :value="item.id" :key="item.id">{{item.type}}
            </option>
            </select>
        </div>
            <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="intro"></mt-field>
        
        <mt-field label="证件照" type="file" @change.native="upload($event)"></mt-field>
        </div>
        <div class="confirm">
              <mt-button type="primary" width="100%" @click="add">确认报名</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            licenseTypeList:null,
            username:null,
            name:null,
            phone:null,
            intro:null,
            gender:'M',
            type:null,
            image:null,
        }
    },
    methods:{
        upload(event){        
          this.image = event.target.files[0];
          console.log(this.image);
        },
        add(){
            let formData = new FormData();
            formData.append('username', this.username);
            formData.append('name', this.name);
            formData.append('phone', this.phone);
            formData.append('gender',this.gender);
            formData.append('intro',this.intro);
            formData.append('image',this.image);
            formData.append('password','123456');
            formData.append('roleId','2');
            formData.append('type',this.type);       
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            this.$axios.post('/api/user/addCoach',formData,config).then((res)=>{
                alert("添加成功");
            });
            
        }
    },
     created:function() {
        var self=this;
        this.$axios.get('/api/license/findLicenseList').then((res)=>{ 
            if(res.data.state==='success') {
                self.licenseTypeList=res.data.data;
                self.type=self.licenseTypeList[0].id;                
            }                    
        });
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
.gender{
    width: 100%;
    height: 35px;
    padding-top:10px ;
    border-top: 1px solid gainsboro
}
.type{
     width: 100%;
    height: 35px;
    padding-top:10px ;
    border-top: 1px solid gainsboro
}
</style>