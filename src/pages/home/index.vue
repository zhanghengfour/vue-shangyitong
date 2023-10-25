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
                    <Card class="card" v-for='(item,index) in hasHospitalArr' :key="index" :hospitalInfo="item"></Card>
                </div>
                <!--分页器-->

                <div class="demo-pagination-block pagination">
                    <el-pagination
                            v-model:current-page=pageNo
                            v-model:page-size=pageSize
                            :page-sizes="[10, 20, 30, 40]"
                            :background="true"
                            layout=" prev, pager, next, jumper,->,total, sizes"
                            :total=total
                            @current-change="currentChange"
                            @size-change="sizeChange"
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
import Region from './region/index.vue';
import Card from "./card/index.vue";
// 引入组合式API函数
import {onMounted, ref} from 'vue';
import {reqHospital} from '@/api/home';

// 分页器页码
let pageNo = ref<number>(1);
// 一页展示多少条数据
let pageSize = ref<number>(10);
//  存储已有的医院的数据
let hasHospitalArr = ref([]);
//存储医院总个数
let total = ref(0);

// 组件挂载完毕之后:发送一次请求
onMounted(() => {
    getHospitalInfo();
});

// 获取已有医院的数据
const getHospitalInfo = async () => {
    //获取医院的数据,默认获取第一页,十个数据
    let result: any = await reqHospital(pageNo.value, pageSize.value);
    if (result.code == 200) {
        // 存储已有医院的数据
        hasHospitalArr.value = result.data.content;
        total.value = result.data.totalElements;
    }
    console.log(result)
}

// 分页器页面切换,页码发生变化之后回调
const currentChange = () => {
    getHospitalInfo();
}
// 分页器页码数量展示
const sizeChange = () => {
    getHospitalInfo();
}

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