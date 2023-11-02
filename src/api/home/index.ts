// 统一管理首页模块接口
import {request} from '@/utils/request.ts';
import type {HospitalInfo, HospitalLevelAndRegionResponseData, HospitalResponseData} from '@/api/home/type.ts'

// 通过枚举管理首页模块的接口地址
enum API {
    HOSPITAL_URL = '/hosp/hospital/',
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    // 根据医院的关键字,获取医院的数据进行展示地址
    HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'
}

// 获取医院的数据
export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);

// 获取医院的等级或者医院的地区
export const reqHospitalLevelAndRegion = (dicCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dicCode);

// 根据医院的关键字,获取医院的数据进行展示
export const reqHospitalInfo = (hosname: string) => request.get<any,HospitalInfo>(API.HOSPITALINFO_URL + hosname);

