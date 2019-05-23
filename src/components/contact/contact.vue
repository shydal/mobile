<template>
    <div>
        <div class="head">
        <mt-header fixed title="联系我们">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div>
             <div class="nyhelp">
                        <div class="contact_text">
                        <strong>掌上驾校机动车驾驶员培训有限公司</strong><br>
                        电话：0791-88257-867<br>
                        地址：江西省南昌市青山湖区南京东路（南昌大学旁） <br>
                        <strong>招生热线：</strong><br>                        
                        88257867 南昌大学招生热线
                        </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/components/base/footer'
export default {
   components:{
       foot
   } 
}
</script>

<style>
.nyhelp {
    padding-top: 30px;
    width: 100%;
    height: auto;
    font-size: 14px;
    line-height: 25px;
}
.contact_text {
    font-size: 14px;
    line-height: 25px;
}

</style>

