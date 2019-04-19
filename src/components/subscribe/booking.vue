<template>
    <div>
         <div class="head">
        <mt-header fixed title="预约教练">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="jianjie">
            <div class="jpg">
                <img :src="'http://192.168.1.108:8081'+coach.image" width="50%">
                <div class="wenzi"> 
               <div class="info"><em><strong>姓名：</strong>{{coach.name}}</em><br></div>
               <div class="info">   <em ><strong>电话：</strong>{{coach.phone}}</em><br /> </div>
                <div class="info">  <em ><strong>驾照：</strong>{{coach.licenseType.type}}</em><br /></div>       
                </div>
            </div>
            <div class="title">个人介绍</div>
            <div class="intro">
                {{coach.intro}}
            </div>                    
        </div> 
        <div class="select">
            <div class="date">
                 选择预定日期 :
                    <select v-model="time" >
                    <option v-for="item in timeList" :value="item" :key="item">{{item}}
                    </option>
                    </select>
            </div>
            <div class="kemu">
                     选择科目 :
                    <select v-model="subjectId" >
                    <option value="2" >科目二</option>
                    <option value="3" >科目三</option>
                    </select>
            </div>
        </div>

        <div class="tables" >     
             <table   style="text-align:center" >	
                           
                            <tbody>
                                <tr>
                                    <td >
                                        <div id="1">
                                            <div><button v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[0]}" @click="setTimeBlock(1,$event)">8:00-9:00</button></div>
                                            <div v-if="activeList[0]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[0]">共可预约1人，已约0人</div>
                                        </div>
                                    </td> 
                                    <td >
                                        <div id="2">
                                            <div><button  v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[1]}" @click="setTimeBlock(2,$event)">9:00-10:00</button></div>
                                            <div v-if="activeList[1]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[1]">共可预约1人，已约0人</div>
                                        </div>
                                    </td> 
                                </tr>
                                <tr>
                                    <td>
                                        <div id="3">
                                            <div><button v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[2]}" @click="setTimeBlock(3,$event)">10:00-11:00</button></div>
                                            <div v-if="activeList[2]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[2]">共可预约1人，已约0人</div>
                                        </div>
                                    </td> 
                                    <td >
                                        <div id="4">
                                            <div><button v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[3]}" @click="setTimeBlock(4,$event)">11:00-12:00</button></div>
                                            <div v-if="activeList[3]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[3]">共可预约1人，已约0人</div>
                                        </div>
                                    </td>                                
                                </tr> 
                                <tr>
                                    <td >
                                        <div id="5">
                                            <div><button v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[4]}" @click="setTimeBlock(5,$event)">14:00-15:00</button></div>
                                            <div v-if="activeList[4]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[4]">共可预约1人，已约0人</div>
                                        </div>
                                    </td> 
                                    <td >
                                        <div id="6">
                                            <div><button v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[5]}" @click="setTimeBlock(6,$event)">15:00-16:00</button></div>
                                            <div v-if="activeList[5]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[5]">共可预约1人，已约0人</div>
                                        </div>
                                    </td> 
                                </tr>
                                <tr>
                                    <td>
                                        <div id="7">
                                            <div><button v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[6]}"  @click="setTimeBlock(7,$event)">16:00-17:00</button></div>
                                            <div v-if="activeList[6]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[6]">共可预约1人，已约0人</div>
                                        </div>
                                    </td> 
                                    <td >
                                        <div id="8">
                                            <div><button class="btn btn-primary" v-bind:class="{'btn btn-primary':true,'btn btn-danger':activeList[7]}"  @click="setTimeBlock(8,$event)">17:00-18:00</button></div>
                                            <div v-if="activeList[7]">共可预约1人，已约1人</div>
                                            <div v-if="!activeList[7]">共可预约1人，已约0人</div>
                                        </div>
                                    </td>                                
                                </tr>                             
                            </tbody>
              </table> 
            </div><!--fdfd-->

    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return {
             coach:null,
             timeList:[],
             time:null,
             timeBlock:null,
             subjectId:'2',
             parent:null ,          
             activeList:[],
        }
    },
    watch:{
        time:'findAppointListByBookingTime'      
    },
    methods:{ 
        
         //获取今天明天的时间
         getTime (AddDayCount) {
                    var dd = new Date();
                    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
                    var y = dd.getFullYear();
                    var month = dd.getMonth()+1;//获取当前月份的日期
                    var strDate = dd.getDate();
                    if (month >= 1 && month <= 9) {
                        month = "0" + month;
                    }
                    if (strDate >= 0 && strDate <= 9) {
                        strDate = "0" + strDate;
                    }
                    return y+"-"+month+"-"+strDate;
        },
        //设置时间列表
      setTimeList(){
            var today=this.getTime(0);
            var tomorrow=this.getTime(1);
            var after = this.getTime(2);
            this.timeList.push(today,tomorrow,after);
            this.time = today;
        },
         setTimeBlock(timeBlock,event){
            
            var classname = event.target.className;         
            if (classname === "btn btn-primary"){
                console.log(this.$store.state.id);
                var parameter= ({                 
                    userId:this.$store.state.id,
                    coachId:this.$route.query.id,
                    createTime:new Date(),
                    bookingTime:this.time,
                    timeBlock:timeBlock,
                    subjectId:this.subjectId
                });
              this.$axios.post('/api/appointment/booking',parameter).then((res)=>{
                  
                  if(res.data.state==="success"){
                    //   alert(res.data.data);
                    //   event.target.className="btn btn-danger"
                       this.$set(this.activeList,timeBlock-1 , true); 
                  }else{
                      alert(res.data.message);
                  }
              });
            }else{
                alert("这个时间段已经被预定！")
            }
        },

        findAppointListByBookingTime(){                
            this.activeList.length=0;                                        
            this.activeList.push(false,false,false,false,false,false,false,false);    
            var self =this; 
        $.ajax({ type:'get',
             url:'/api/appointment/findAppointList',
          data:{
                    bookingTime:this.time,
                    coachId:this.$route.query.id,
             },
           async:false, 
           dataType:'json', 
           success:function(res){               
              if(res.state==="success"){
                    var appList = res.data;
                   appList.forEach(item=>{                        
                         self.activeList[item.timeBlock-1] =true;                                          
                    });
              }
                }, 
            error:function(response){ 
                    alert("error"); 
                    } 
            });          
        }
    },
    created(){
        this.setTimeList();
         var self=this;      
         $.ajax({ type:'get',
             url:'/api/user/findUserById',
          data:{
                    id:this.$route.query.id,
             },
           async:false, 
           dataType:'json', 
           success:function(res){                               
               if(res.state==="success"){                
               self.coach =res.data                           
            }
                }, 
            error:function(response){ 
                    alert("error"); 
                    } 
            });         
    }   
}
</script>

<style>
.tables{
    padding-top: 20px;
    width: 100%;
    height: auto;
}
.tables{
    width: 100%;
    height: auto;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.select{
    width: 100%;
    height: auto;
    padding-top: 10px;
    overflow: hidden;
}
.kemu{
    display: block;
    float: right;
}
.date{
    display: inblockline;
    float: left;
}
.jianjie{
    width: 100%;
    padding-top: 30px;
}
.jpg{
 padding: 5px;
 width: 100%;
 display: block;
 overflow: hidden;
}
.wenzi{
padding: 10px;
 float: right;
 display: inline;
}
.info{
    padding-top: 30px;
    width: 100%;
    height: 50px;
}
.intro{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid;
}
.title{
    padding-top:10px ;
    width: 100%;
    height: 30px;  
    border-bottom: 1px solid #e7e7e7;
    margin-left:10px; 
}
.jl_pingjia {
    float: left;
    width: 100%;
    min-height: 100px;
    overflow: hidden;
    margin-top: 20px;
}
.pj_list {
    width: 100%;
    height: auto;
    margin-top: 10px;
    float: left;
    overflow: hidden;
}
.pj_list ul{
    margin-top: 0px;
    padding-left: 5px;
}
.pj_list ul li {
    border-bottom: #CCC dashed 1px;
    height: auto;   
    padding-bottom: 10px;
    margin-bottom: 10px;
    width: 100%;
    overflow: hidden;
}
.pj_list div {
    float: right;
    width: 100%;
    line-height: 25px;
    border-left: #CCC 1px solid;
    padding-left: 15px;
}
.pingfen {
    color: #d8661e;
}
.time {
    float: right;
    padding-right:20px; 
}

.pjtext {
    width: 100%;
    height: 80px;
    margin-top: 10px;
    border: #CCC 1px solid;
}

.jlpj_con {
    float: left;
    padding: 10px;
    width: 100%;
    height: 200px;
    border: #CCC solid 1px;
    border-top: #f16b11 solid 1px;
    margin-top: 20px;
}
.name {
    float: left;
    display: block;
    font-family: "微软雅黑";
    font-size: 16px;
    color: #f16b11;
}
.fenye{   
     width:100%;
     text-align:center; 
     height:20px; 
     line-height:20px; 
      font-size:14px; 
      padding-bottom: 20px;
}

</style>

