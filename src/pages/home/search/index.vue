<template>
    <div class="search">
        <!--        -->
        <el-autocomplete clearable placeholder="请输入医院的名称" v-model="hosname"
                         :trigger-on-focus="false" :fetch-suggestions="fetchData"
                         @select="goDetail"/>
        <el-button type="primary" size="default" :icon="Search" @click="search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import {Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import {reqHospitalInfo} from "@/api/home";
import type {HospitalInfo} from "@/api/home/type.ts";
import {useRouter} from "vue-router";


// 创建路由器对象
let $router = useRouter();

// 收集医院的名字
let hosname = ref<string>('');
// 顶部组件的回调
const fetchData = async (keyword: string, cb: any) => {
    // 当用户输入完关键字,调用
    let result: HospitalInfo = await reqHospitalInfo(keyword);
    // 整理数据
    let showData = result.data.map(item => {
        return {
            value: item.hosname,
            hoscode: item.hoscode  // 医院的唯一标识符
        }
    })
    cb(showData);
}

// 点击推荐项目,进行详情页路由跳转
const goDetail = (item: any) => {
    // 页面跳转
    $router.push({
        path: 'hospital'
    })
}

</script>

<style scoped lang="scss">

.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  /* 使用深度选择器,修改组件样式*/
  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>