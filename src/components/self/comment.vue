<template>
    <div>
        <div class="head">
        <mt-header fixed title="我要评价">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
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
                                   <mt-button  size="small" type="primary" @click.native="detail(item.coachId,item.id)">评价</mt-button>     
                              </div>
                    </div>
                </div>            
             </div>                           
    </div>
</template>
<script>
export default {
    data(){
        return{
            appointList:null,
        } 
    },
    methods:{
        detail(id,apid){
             this.$router.push({
                        name: 'addComment',
                        query: {
                        id: id,
                        apid:apid,
                        }
                    })

        },
        getAll(){
            var self = this;
            this.$axios.get("/api/appointment/getList",{
                params: {
                    id:this.$store.state.id,
                    status:'2',           
                }
            }).then((res)=>{       
                if(res.data.state =='success'){              
                    self.appointList = res.data.data;
                }
            });
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
    padding-top:40px;
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

