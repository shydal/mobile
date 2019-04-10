<template>
    <div>
        <div class="head">
        <mt-header fixed title="报名">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="field">
        <mt-field label="姓名" placeholder="请输入性名" v-model="name"></mt-field>
        <mt-field label="身份证号" placeholder="身份证号"  v-model="email"></mt-field>
        <mt-field label="证件照" type="file"  v-model="name"></mt-field>
        </div>
        <div class="confirm">
              <mt-button type="primary" width="100%">确认报名</mt-button>
        </div>
    </div>
</template>
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
</style>

