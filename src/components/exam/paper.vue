<template>
    <div>
        <div class="head">
            <mt-header fixed title="模拟考试">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="question">
            <div class="title">
              {{(count+1)+': '}}   {{question}}
            </div>
            <div class="imgs" v-if="url!=''">  <img :src="url" width="100%" height="150px"/></div>
            <ul>       
                <!-- name属性单选框保证选择一个            -->
                    <li>
                        <font><input type="radio" id="1" name="select" value="1" @click="submit($event)"> </font><label >A： {{item1}}</label>
                    </li>
                                                        <li>
                        <font><input type="radio" id="2" name="select" value="2"  @click="submit($event)"> </font><label >B： {{item2}}</label>
                    </li>
                     <li :class="{show:item3==''}">
                        <font><input type="radio" id="3" name="select" value="3" @click="submit($event)"> </font><label >C： {{item3}}</label>
                    </li>
                    <li :class="{show:item3==''}">
                        <font><input type="radio" id="4" name="select" value="4" @click="submit($event)"> </font><label >D： {{item4}}</label>
                    </li>
				</ul>
                <div class="updown">
                    <div class="back"><mt-button type="primary" @click.native="back()">上一题</mt-button></div>
                    <div class="next"><mt-button type="primary" @click.native="next()">下一题</mt-button></div>
                </div>
        </div>
        <div>
            <mt-tabbar >
  <mt-tab-item >
    <img slot="icon" src="../../assets/imgs/clock.png">
    {{currentTime}}
  </mt-tab-item>
  
  <mt-tab-item @click.native="tijiao">
    <img slot="icon" src="../../assets/imgs/submit.png">
    提交
  </mt-tab-item>
</mt-tabbar>
        </div>
    </div>
</template>
<script>

export default {
    
    data(){
        return{
            examList:[],//试题列表
            info:[],//答案数组
            question:'',
            url:'',
            item1:'',
            item2:'',
            item3:'',
            item4:'',
            count:0,
            maxTime:1800,
            currentTime:'',
            paperId:'',//试卷id
            mark:0,//分数
        }
    },
    methods:{

        // 提交核心代码
        save(){
              var self = this;
            
           var answerList=[];
           for(var m=0; m<this.info.length;m++){
               if(this.info[m]){
                    var question = ({
                    userId:this.$store.state.id,
                    answer:this.info[m],
                    questionId:this.examList[m].id,
                    paperId:this.paperId
                    });
                    //计算分数
                    if(this.info[m] == this.examList[m].answer){
                        this.mark = this.mark + 5;
                    }
                    answerList.push(question);
               }

           }
            $.ajax({ 
            type:'post',
            url:'/api/answer/save',
            data:JSON.stringify(answerList),         
            contentType: "application/json", 
           success:function(res){            
                }, 
            error:function(response){ 
                    alert("error"); 
                    } 
            });

            var params = ({
                 subjectId:this.$route.query.subjectId,
                 userId:this.$store.state.id,
                 paperId:this.paperId,
                 username:this.$store.state.username,
                 mark:this.mark,
                 type:'2'
            });
            this.$axios.post('/api/score/save',params).then((res)=>{
                //alert("ghjk");
            });


        },


        //提交试卷
        tijiao(){
            if(this.currentTime=='00:00'){
              this.save();      
            return
            }           
           for(var i=0;i<this.examList.length;i++){             
               if(!this.info[i]){
                    alert("题目还没有做完");
                    return;
               }
           }
           this.save();  

            this.$router.push({
                        name: 'result',
                        query: {
                        mark: this.mark,
                        paperId:this.paperId
                        }
                    });


        },

        submit(event){
            this.info.length = this.examList.length;
            this.info[this.count] = event.target.value;//记录答案
        },
        next(){
            
            var count = this.count+1;
            if(count==this.examList.length){
                alert("没有更多的题目了");
                return
            }          
           this.count = this.count+1;
            this.question  = this.examList[this.count].question;
           this.url  = this.examList[this.count].url;
           this.item1  = this.examList[this.count].item1;
           this.item2  = this.examList[this.count].item2;
           this.item3  = this.examList[this.count].item3;
           this.item4  = this.examList[this.count].item4;
               document.getElementsByName("select")[0].checked=false;
               document.getElementsByName("select")[1].checked=false;                   
                     document.getElementsByName("select")[2].checked=false;
                    document.getElementsByName("select")[3].checked=false;
                 
                 
           if(this.info[this.count]){  
               //设置上一题单选框的答案
               document.getElementById(this.info[this.count]).checked =true;
           }else{
               //清空上一题的单选框的缓存
                      
           }
          
        },
        back(){  
                   
            if(this.count==0){
                alert("当前已是第一题");
                return
            }
            this.count = this.count-1;
           this.question  = this.examList[this.count].question;
           this.url  = this.examList[this.count].url;
           this.item1  = this.examList[this.count].item1;
           this.item2  = this.examList[this.count].item2;
           this.item3  = this.examList[this.count].item3;
           this.item4  = this.examList[this.count].item4;
           document.getElementsByName("select")[0].checked=false;
           document.getElementsByName("select")[1].checked=false;
           document.getElementsByName("select")[2].checked=false;
           document.getElementsByName("select")[3].checked=false;           
            if(this.info[this.count]){
               document.getElementById(this.info[this.count]).checked =true;
           }else{
            
           }
         
        },
        timeCountDown(){         
        var min;
        var sec;
        if(this.maxTime>=0){
          min = Math.floor(this.maxTime / 60);
          sec = Math.floor(this.maxTime % 60);  
           min = min > 9 ? min : '0' + min
           sec = sec > 9 ? sec : '0' + sec
           this.currentTime = min + ':' +sec;
            self.maxTime--;
        }else{
               clearInterval(timer);
               alert("时间到，结束!");
        }     
        }
    },
    created(){ 
        var self = this; 
        var paperName='';
        if(this.$route.query.licenseId=='5') {
            paperName = "掌上驾校模拟考试 C1 2019";
        }
        if(this.$route.query.subjectId=='1'){
             paperName = paperName +"科目一试卷";
        }else{
             paperName = paperName +"科目四试卷";
        }
        var params=({
            subjectId:this.$route.query.subjectId,
            licenseId:this.$route.query.licenseId,
            paperState:'未提交',
            paperName:paperName,
            duration:30,
            sumMark:100,
            startTime:new Date()
        });
        this.$axios.post("/api/paper/save",params).then((res)=>{
            self.paperId = res.data.data;
        });


        //获取试题         
       this.$axios.get("/api/questionbank/getQuestionList",
        {
            params: {              
                subjectId:this.$route.query.subjectId,
                licenseId:this.$route.query.licenseId,              
            }
        }).then((res)=>{           
            self.examList = res.data.data;
           self.question  = self.examList[self.count].question;
           self.url  = self.examList[self.count].url;
           self.item1  = self.examList[self.count].item1;
           self.item2  = self.examList[self.count].item2;
           self.item3  = self.examList[self.count].item3;
           self.item4  = self.examList[self.count].item4;                              
        })
       
         var timer = setInterval(function(){
            var min;
            var sec;
        if(self.maxTime>=0){           
          min = Math.floor(self.maxTime / 60);
          sec = Math.floor(self.maxTime % 60);  
           min = min > 9 ? min : '0' + min
           sec = sec > 9 ? sec : '0' + sec
           self.currentTime = min + ':' +sec;
           self.maxTime--;
        }else{
               clearInterval(timer);
               self.save();
               alert("时间到，结束!");
                self.$router.push({
                        name: 'result',
                        query: {
                        mark: self.mark,
                        paperId:self.paperId
                        }
                    });
        }     
       }, 1000); 
       
    }
}
</script>
<style>
.show{
    display: none;
}
.updown{
    width: 100%;
    overflow: hidden;
}
.back{
    float: left;  
}
.next{
   float: right; 
}
.title{
    width: 100%;
    height: auto;
    padding-top: 40px;
}
.imgs{
    padding-top: 20px;
}
.question ul li{
 padding-top:10px;
 list-style-type :none;
}
.question ul{
    padding-left: 20px;
}
</style>


