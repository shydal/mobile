<template>
    <div>
        <div class="head">
        <mt-header fixed title="我的预约">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="container">
            <mt-navbar class="page-part" v-model="selected">
                <mt-tab-item id="1">成功预约</mt-tab-item>
                <mt-tab-item id="0">失败预约</mt-tab-item>               
            </mt-navbar>
            <div class="booking">
                <div class="booking-item" v-for="item in appointList" :key="item.id">
                   <img :src="HTTP+item.user.image" width="20%" />
                    <div class="desciption">
                              <div class="wenzi">姓名：{{item.user.name}}</div>                           
                              <div  class="wenzi" v-if="item.timeBlock=='1'">练车时间：{{item.bookingTime}} 8:00-9:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='2'">练车时间：{{item.bookingTime}} 9:00-10:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='3'">练车时间：{{item.bookingTime}} 10:00-11:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='4'">练车时间：{{item.bookingTime}} 11:00-12:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='5'">练车时间：{{item.bookingTime}} 14:00-15:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='6'">练车时间：{{item.bookingTime}} 15:00-16:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='7'">练车时间：{{item.bookingTime}} 16:00-17:00</div>
                              <div  class="wenzi" v-if="item.timeBlock=='8'">练车时间：{{item.bookingTime}} 17:00-18:00</div>
                              <div class="wenzi">电话：{{item.user.phone}} 
                                  <template v-if="timeright(item.bookingTime,item.timeBlock) && selected=='1' "><mt-button  size="small" type="danger" @click.native="cancel(item.id)" >取消订单</mt-button> </template>
                                   <template v-if="timeright(item.bookingTime,item.timeBlock)==false && selected=='1' "><mt-button  size="small" type="primary"  @click.native="finish(item.id)">订单完成</mt-button> </template>   
                                   <template v-if="selected=='0'"><mt-button  size="small" type="primary" @click.native="detail(item.id)">详情</mt-button></template>     
                              </div>
                    </div>
                </div>
            
                </div>                
            </div>   
        </div>
   
</template>
<script>
import { Z_DEFAULT_COMPRESSION } from 'zlib';

export default {
     inject:['reload'],
    data(){
       return{
           selected:'1',
           appointList:null,
       }
    },
    computed:{
        change(){
            return{
                selected:this.selected,
            }
        }
    },
    methods:{
        cancel(id){
             this.$router.push({
                        name: 'explains',
                        query: {
                        id: id
                        }
                    })
        },
        finish(id){
               this.$axios.get("/api/appointment/updatebyId",{
                params: {               
                id:id,
                status:'2',                         
            }
            }).then((res)=>{
                if(res.data.state=='success'){
                    alert("操作成功");
                }
            });
            this.reload();           
        },
        detail(id){
             this.$router.push({
                        name: 'explain',
                        query: {
                        id: id
                        }
          })
        },
        timeright(time,timeBlock){
            var timenode='';
            if(timeBlock=='1'){
                timenode = time +'09:00:00';
            }else if(timeBlock=='2'){
                 timenode = time +'10:00:00';
            }else if(timeBlock=='3'){
                 timenode = time +'11:00:00';
            }else if(timeBlock=='4'){
                 timenode = time +'12:00:00';
            }else if(timeBlock=='5'){
                 timenode = time +'14:00:00';
            }else if(timeBlock=='6'){
                 timenode = time +'15:00:00';
            }else if(timeBlock=='7'){
                 timenode = time +'16:00:00';
            }else if(timeBlock=='8'){
                 timenode = time +'17:00:00';
            }else {
                return false;
            }
            var date = new Date(timenode);
           if(new Date()<date){
               return true;
           }else{
               return false;
           }
            return false;
        },
        getAll(){
             var self = this;
        this.$axios.get("/api/appointment/getList",{
            params: {
                id:this.$store.state.id,
                status:this.selected,           
            }
        }).then((res)=>{       
            if(res.data.state =='success'){              
                self.appointList = res.data.data;
            }
        });
        }

    },
     watch:{
        change:function(){
          this.getAll();
        }
    },
    created(){
       this.getAll();
    }
    
}
</script>
<style>
.confirm{
    padding-top: 10px;
    text-align: center;
}
.container{
    padding-top: 40px;
}
.booking{
    padding-top:10px;
}
.booking-item{
    padding-bottom: 10px;
    overflow: hidden;
}
.desciption{
   float: right;
}
.wenzi{
  padding: 5px;
}

</style>


