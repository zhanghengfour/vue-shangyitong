<template>
    <div class="container">
        <!--展示顶部组件-->
        <HospitalTop/>
        <!--展示路由组件-->
        <div class="content">
            <router-view></router-view>
        </div>
        <!--展示顶部组件-->
        <HospitalBottom/>
        <!--   登录组件    -->
        <Login/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        margin-top: 70px;
        width: 1200px;
        min-height: 700px;
    }
}
</style>