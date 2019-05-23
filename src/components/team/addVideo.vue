<template>
    <div>
        <div class="head">
        <mt-header fixed title="添加视频">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="名称" placeholder="请输入标题" v-model="title"></mt-field>
             <div class="type">
             驾照类型 
            <select v-model="subjectId" >
            <option value="2" >科目二</option>
             <option value="3" >科目三</option>
            </select>
        </div>
        
        <mt-field label="视频" type="file" id="video" accept="video/avi,video/mp4,video/flv,video/3gp,video/swf" @change.native="get($event)"></mt-field>
        </div>
         <video controls  id="vedioPlayer"  class="vjs-tech" preload="auto"  width="100%" height="100%"></video>               
        <div class="confirm">
              <mt-button type="primary" width="100%" @click.native="submit">确认</mt-button>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/components/base/footer'
export default {
    data(){
        return{
            video:null,
            img:'',
            duration:null,
            title:null,
            subjectId:null,
        }
    },
    methods:{
         //将视频时长转换为xx:xx:xx 格式
        submit(){
             let formData = new FormData();
            formData.append('video', this.video);
            formData.append('subjectId',this.subjectId);
            formData.append('img', this.img);
            formData.append('duration', this.duration);
            formData.append('title',this.title);
            formData.append('createBy',this.$store.state.id);
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            this.$axios.post('/api/video/save',formData,config).then((res)=>{

            });

        },
         formatDuraton(time){
             time = Math.floor(time);
                if(time > -1){
                    var hour = Math.floor(time/3600);
                    var min = Math.floor(time/60) % 60;
                    var sec = time % 60;
                    if(hour < 10) {
                        time = '0'+ hour + ":";
                    } else {
                        time = hour + ":";
                    }
 
                    if(min < 10){
                        time += "0";
                    }
                    time += min + ":";
 
                    if(sec < 10){
                        time += "0";
                    }
                    time += sec;
                }
                return time;
            },
        get(e){
            var self = this;
            var files = document.getElementById('video');
            
            // this.video = files.files[0];
         this.video =   e.target.files[0];          
            var videofiles = document.getElementById('vedioPlayer');
            var url = getFileURL( e.target.files[0]);
             if(url) {
                videofiles.src = url;
            }
             function getFileURL(file) {
                var getUrl = null;
                if(window.createObjectURL != undefined) { // basic
                    getUrl = window.createObjectURL(file);
                } else if(window.URL != undefined) { // mozilla(firefox)
                    getUrl = window.URL.createObjectURL(file);
                } else if(window.webkitURL != undefined) { // webkit or chrome
                    getUrl = window.webkitURL.createObjectURL(file);
                }
                return getUrl;
             }
        //定时器 视频下载需要时间 导致时长为NaA 
        setTimeout(()=>{
            
            var videofiles = document.getElementById('vedioPlayer');
            self.duration = self.formatDuraton(videofiles.duration);//获取视频时长
            const canvas = document.createElement('canvas');//用cavas 获取视频的封面
            const ctx = canvas.getContext('2d');
             ctx.drawImage(videofiles, 0, 0, 267, 147);
        
            self.img = canvas.toDataURL('image/png');

             console.log(self.duration);
             console.log(self.img);
        },800);
        }
    },
    components:{
        foot
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
.type{
     width: 100%;
    height: 35px;
    padding-top:10px ;
    border-top: 1px solid gainsboro
}
</style>



