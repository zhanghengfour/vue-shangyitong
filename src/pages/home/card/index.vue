<template>
    <el-card class="box-card" shadow="hover">
        <!--        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>-->
        <div class="content">
            <div class="left">
                <div class="hospital_name">
                    北京市医院
                </div>
                <div class="tip">
                    <div class="level">
                        <svg t="1698210811575" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="6286" width="16" height="16">
                            <path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                                  p-id="6287"></path>
                        </svg>
                        <span>三级甲等</span>
                    </div>
                    <div class="time">
                        <svg t="1698210795062" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="5231" width="16" height="16">
                            <path d="M554.666667 537.6l115.2 115.2-29.866667 29.866667-128-128V341.333333h42.666667v196.266667z m-21.333334 358.4C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z"
                                  fill="#444444" p-id="5232"></path>
                        </svg>
                        <span>每早八点</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <img src="../../../assets/images/logo.png">
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import {} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;

  .left {
    width: 55%;

    .hospital_name {
      margin-top: 10px;
    }

    .tip {
      font-size: 12px;
      color: #7f7f7f;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .level, .time {
        display: flex;
        align-items: center;

        span {
          margin-left: 5px;
        }
      }
    }
  }

  .right {
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>