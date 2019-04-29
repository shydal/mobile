<template>
    <div>
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
    </div>

</template>
<script>
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
         

          
    }
   
}
</script>

