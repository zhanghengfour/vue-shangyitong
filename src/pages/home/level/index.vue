<template>
  <!--首页登记组件-->
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">
                等级:
            </div>
            <ul class="hospital">
                <li :class="{active:activeFlag===''}" @click="changeLevel('')">全部</li>
                <li :class="{active:activeFlag=== level.value}"
                    v-for="(level,index) in leverArr" :key="level.value" @click="changeLevel(level.value)">
                    {{ level.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reqHospitalLevelAndRegion} from "@/api/home/index.ts"
import {onMounted, ref} from "vue";
import type {HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";
// 定义一个数组,存储医院等级的数据
let leverArr = ref<HospitalLevelAndRegionArr>([]);
// 控制页面高亮的响应式数据
let activeFlag = ref<string>('');
// 挂载组件完毕
onMounted(() => {
    getLevel();
})
// 获取医院等级的数据
const getLevel = async () => {
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
    // 为医院等级的数组赋值
    if (result.code === 200) {
        leverArr.value = result.data;
    }
};
// 当通过条件查询改变医院等级的时候
const changeLevel = (level: string) => {
    // 高亮响应式存储医院等级数据
    activeFlag.value = level;
    // 触发自定义事件的时候,将医院等级参数,回传给父组件
    $emit('getLevel', level);
}

let $emit = defineEmits(['getLevel']);
</script>

<style scoped lang="scss">
.level {
  margin: 5px 0px;
  color: #7f7f7f;

  h1 {
    font-weight: 900;
    margin: 10px 0;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin: 0 10px;

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