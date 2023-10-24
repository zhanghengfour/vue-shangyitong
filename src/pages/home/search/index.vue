<template>
    <div class="search">
        <!--        -->
        <el-autocomplete
                v-model="state1"
                :fetch-suggestions="querySearch"
                clearable
                class="inline-input w-50"
                placeholder="Please Input"
                @select="handleSelect"
        />
        <el-button type="primary" size="default" @click="search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.search{
    width: 100%;
    height: 50px;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>