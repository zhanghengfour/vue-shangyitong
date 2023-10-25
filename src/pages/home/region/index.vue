<template>
  <!--  地区组件-->
    <div class="region">
        <div class="content">
            <div class="left">
                地区:
            </div>
            <ul class="area">
                <li class="active">全部</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.region {
  margin: 5px 0;
  color: #7f7f7f;

  .content {
    display: flex;

    .left {
      margin-right: 10px;
      width: 67px;
    }

    .area {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 10px;
        margin-bottom: 5px;

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

