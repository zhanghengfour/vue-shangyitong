<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visible" title="用户登录">
            <el-row>
                <!--        左侧结构        -->
                <el-col :span="12">
                    <div class="loginLeft">
                        <form>
                            <el-form-item label="账号:">
                                <el-input :prefix-icon="User" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item label="密码:">
                                <el-input :prefix-icon="Lock" placeholder="请输入手机验证码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button>获取验证码</el-button>
                            </el-form-item>
                        </form>
                        <div class="loginBottom">
                            <el-button type="primary">登录</el-button>
                            <el-button>微信扫码登录</el-button>
                            <el-button>微信</el-button>
                        </div>
                    </div>
                </el-col>
                <!--        右侧结构-->
                <el-col :span="12">432</el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
// 引入图标
import {User, Lock} from '@element-plus/icons-vue'
import {ref} from "vue";
// 获取user仓库的数据,控制模态窗的开关
import useUserStore from "@/store/modules/User.ts";

let userStore = useUserStore();

</script>

<script lang="ts">
export default {
    name: 'Login'
}
</script>

<style scoped lang="scss">

.login_container {
  :deep(.el-dialog__body) {
    border-top: 1px solid #ccc;
    border-buttom: 1px solid #ccc;
  }

  .loginLeft {
    border: 1px solid #ccc;
    padding: 20px;
  }
}

</style>