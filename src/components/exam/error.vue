<template>
    <div>
        <div class="head">
            <mt-header fixed title="错误解析">
                <router-link to="" slot="left">
                    <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
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
        <div class="explan">
            题目解析：{{answer}}
        </div>
        <div class="detail">
            {{explains}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            examList:[],
            question:'',
            url:'',
            item1:'',
            item2:'',
            item3:'',
            item4:'',
            count:0,
            answer:'',
            explains:''
        }
    },
    methods:{
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
            this.answer =  this.examList[this.count].answer;
            this.explains =  this.examList[this.count].explains; 
            document.getElementsByName("select")[0].checked=false;
            document.getElementsByName("select")[1].checked=false;                   
            document.getElementsByName("select")[2].checked=false;
            document.getElementsByName("select")[3].checked=false;           
            document.getElementById(this.examList[this.count].answer).checked =true; 

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
            this.answer =  this.examList[this.count].answer;
            this.explains =  this.examList[this.count].explains; 
            document.getElementsByName("select")[0].checked=false;
            document.getElementsByName("select")[1].checked=false;
            document.getElementsByName("select")[2].checked=false;
            document.getElementsByName("select")[3].checked=false;           
            document.getElementById(this.examList[this.count].answer).checked =true;                    
        }        
        
    },
    created(){
        var self = this;
        
        //通过试卷id获取错题
         this.$axios.get("/api/questionbank/questListBypaperId",
        {
            params: {              
                paperId:this.$route.query.paperId,           
            }
        }).then((res)=>{   
            
            self.examList = res.data.data;
            self.question  = self.examList[self.count].question;
            self.url  = self.examList[self.count].url;
            self.item1  = self.examList[self.count].item1;
            self.item2  = self.examList[self.count].item2;
            self.item3  = self.examList[self.count].item3;
            self.item4  = self.examList[self.count].item4;
            self.answer =  self.examList[self.count].answer;
            self.explains =  self.examList[self.count].explains; 
            self.$nextTick(function(){
                document.getElementById(this.examList[this.count].answer).checked =true; 
            });                         
        })
    }
}
</script>
<style>
.detail{
    padding-top: 10px;
}
.explan{
    padding-top: 20px
}
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








