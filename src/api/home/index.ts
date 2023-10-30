// 统一管理首页模块接口
import {request} from '@/utils/request.ts';
import type {HospitalResponseData} from '@/api/home/type.ts'

// 通过枚举管理首页模块的接口地址
enum API {
    HOSPITAL_URL = '/hosp/hospital/'
}

// 获取医院的数据
export const reqHospital = (page: number, limit: number) => request.get<any,HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`);
