<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="goHome">
                <img src="../../assets/images/logo.png" alt="logo">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login" @click="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入路由变量
import useUserStore from "@/store/modules/User.ts";
import {useRouter} from "vue-router";
// 创建路由变量
let $router = useRouter();
// 创建user仓库数据
let userStore = useUserStore();
// 跳转到首页
const goHome = () => {
    $router.push({
        path: 'home'
    })
}

// 跳转登录页面
const login = () => {
    userStore.visible = true;
}

</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  /*以下两行不知道什么意思*/
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;

      .help {
        margin-right: 10px;
      }

      .login {

      }
    }
  }
}
</style>