<template>
    <div>
        <div class="head">
        <mt-header fixed title="报名">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        </div>
        <div class="tiaozhuan">
        <mt-cell title="教练列表" to="/team/coachList" is-link></mt-cell>
        <mt-cell title="学车视频" to="/team/video"  is-link></mt-cell>
        <mt-cell title="添加教练"  is-link></mt-cell>
        <mt-cell title="添加视频"  is-link></mt-cell>
    </div>
    </div>
</template>
<style>
.tiaozhuan{
    width: 100%;
    height: auto;
    padding-top: 30px;
}
</style>