<template>
    <div class="search">
        <!--        -->
        <el-autocomplete
                clearable
                placeholder="请输入医院的名称"
        />
        <el-button type="primary" size="default" :icon="Search" @click="search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import {Search} from "@element-plus/icons-vue";
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