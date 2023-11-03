// 定义用户相关的仓库
import {defineStore} from "pinia";

// 创建一个用户仓库
const useUserStore = defineStore('User', {
    state: () => {
        return {
            visible: false,//用于控制用户对话框弹出
        }
    },
    actions: {},
    getters: {}
})

export default useUserStore;