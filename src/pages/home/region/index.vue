<template>
  <!--  地区组件-->
    <div class="region">
        <div class="content">
            <div class="left">
                地区:
            </div>
            <ul class="area">
                <li :class="{active:regionFlag === ''}" @click="changeRegion('')">全部</li>
                <li :class="{active:regionFlag === region.value}"
                    v-for="(region,index) in regionArr" :key="region.value" @click="changeRegion(region.value)">
                    {{ region.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reqHospitalLevelAndRegion} from "@/api/home";
import {onMounted, ref} from "vue";
import {HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";

// 存放地区的数组
let regionArr = ref<HospitalLevelAndRegionArr>([]);
// 响应式高亮标志
let regionFlag = ref<string>('');
// 当页面加载之后,获取地区数据
onMounted(() => {
    getRegion();
})

// 获取页面地区数据
const getRegion = async () => {
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin');
    if (result.code === 200) {
        regionArr.value = result.data;
    }
}

// 当点击地区的时候,响应式显示
const changeRegion = (region: string) => {
    regionFlag.value = region;
    // 触发自定义事件的时候,将医院等级参数,回传给父组件
    $emit('getRegion', region);
}
let $emit = defineEmits(['getRegion']);


</script>

<style scoped lang="scss">
.region {
  margin: 10px 0;
  color: #7f7f7f;

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      width: 55px;
    }

    .area {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 10px;
        margin-bottom: 10px;

        &.active {
          color: #55a6fe;
        }
      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }


}
</style>

