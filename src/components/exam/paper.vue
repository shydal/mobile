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
                     <li v-if="item3!=''">
                        <font><input type="radio" id="3" name="select" value="3" @click="submit($event)"> </font><label >C： {{item3}}</label>
                    </li>
                    <li v-if="item3!=''">
                        <font><input type="radio" id="4" name="select" value="4" @click="submit($event)"> </font><label >D： {{item4}}</label>
                    </li>
				</ul>
                <div class="updown">
                    <div class="back"><mt-button type="primary" @click.native="back()">上一题</mt-button></div>
                    <div class="next"><mt-button type="primary" @click.native="next()">下一题</mt-button></div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            examList:[],
            info:[],//答案数组
            question:'',
            url:'',
            item1:'',
            item2:'',
            item3:'',
            item4:'',
            count:0
        }
    },
    methods:{
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
           if(this.info[this.count]){  
               //设置上一题单选框的答案
               document.getElementById(this.info[this.count]).checked =true;
           }else{
               //清空上一题的单选框的缓存
               document.getElementsByName("select")[0].checked=false;
               document.getElementsByName("select")[1].checked=false;
               if(this.item3!=''){
                    document.getElementsByName("select")[2].checked=false;
                    document.getElementsByName("select")[3].checked=false;
               }
               
           }
           this.question  = this.examList[this.count].question;
           this.url  = this.examList[this.count].url;
           this.item1  = this.examList[this.count].item1;
           this.item2  = this.examList[this.count].item2;
           this.item3  = this.examList[this.count].item3;
           this.item4  = this.examList[this.count].item4;
        },
        back(){          
            if(this.count==0){
                alert("当前已是第一题");
                return
            }
            this.count = this.count-1;
            if(this.info[this.count]){
               document.getElementById(this.info[this.count]).checked =true;
           }else{
               document.getElementsByName("select").get(0).checked=false;
               document.getElementsByName("select").get(1).checked=false;
              if(this.item3!=''){
                    document.getElementsByName("select")[2].checked=false;
                    document.getElementsByName("select")[3].checked=false;
               }
           }
           this.question  = this.examList[this.count].question;
           this.url  = this.examList[this.count].url;
           this.item1  = this.examList[this.count].item1;
           this.item2  = this.examList[this.count].item2;
           this.item3  = this.examList[this.count].item3;
           this.item4  = this.examList[this.count].item4;
        }
    },
    created(){ 
        var self = this;           
       this.$axios.get("/api/questionbank/getQuestionList",
        {
            params: {              
                subjectId:this.$route.query.subjectId,
                licenseId:this.$route.query.licenseId,              
            }
        }).then((res)=>{           
            self.examList = res.data.data;
           this.question  = this.examList[this.count].question;
           this.url  = this.examList[this.count].url;
           this.item1  = this.examList[this.count].item1;
           this.item2  = this.examList[this.count].item2;
           this.item3  = this.examList[this.count].item3;
           this.item4  = this.examList[this.count].item4;                              
        })
        
    }
}
</script>
<style>
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


