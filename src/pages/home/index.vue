<template>

    <div>
        <!--        首页轮播图结构-->
        <Carousel></Carousel>
        <!--    首页搜索医院的表单区域    -->
        <Search></Search>
        <!--        展示医院结构-->
        <el-row gutter="20">
            <el-col :span="18">
                <Level></Level>
                <Region></Region>
                <!--                展示医院信息-->
                <div class="hospital">
                    <Card class="card" v-for='item in 10' :key="item"></Card>
                </div>
                <!--分页器-->

                <div class="demo-pagination-block pagination">
                    <el-pagination
                            v-model:current-page="pageNo"
                            v-model:page-size="pageSize"
                            :page-sizes="[10, 20, 30, 40]"
                            :background="true"
                            layout=" prev, pager, next, jumper,->,total, sizes"
                            :total="400"
                    />
                </div>

            </el-col>

            <el-col :span="6">
            </el-col>
        </el-row>

    </div>

</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from "./region/index.vue";
import Card from "./card/index.vue";

// 分页器所需要的数据
import {ref} from "vue";
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示多少条数据
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    width: 48%;
    margin: 5px 0;
  }
}

.pagination {
  margin: 10px 0;
}
</style>