<template>
    <div>
         <div class="head">
            <mt-header fixed title="视频播放">
                <router-link to="" slot="left">
                    <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="title">
            {{video.title}}
        </div>
        <div>
            <div>
                <video controls  id="my-video_html5_api" class="vjs-tech" preload="auto" :poster="HTTP+ video.img"  :src="HTTP+ video.video" width="100%" height="100%"></video>               
                </div>
        </div>
        <div class="duration">
             {{video.duration}}
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
            
            
        }
       
    },
    methods:{
    
        
    },
    created(){

        var self = this;
        
        this.selectId = this.$route.query.id;
         this.$axios.get('/api/video/findVideoById',{
               params: {
                id:this.$route.query.id
               }
          }).then((res)=>{
             if(res.data.state=='success'){  
                             
                self.video = res.data.data;
                self.title = res.data.data.title;
             }
          });
         

          
    },
    components:{
        foot
    }
   
}
</script>
<style>
.title{
    padding-top: 40px;
}
</style>


