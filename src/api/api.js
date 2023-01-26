// API 总控

import request from '@/api/request'

export default {
    getDashBoardData() {
        return request({
            url: '/dashboard/getDashboardData',
            method: 'get',
            mock: true
        })
    },
    // getTab1PublicAssigns() {
    //     return request({
    //         url: '/public/getTab1PublicAssigns',
    //         method: 'get',
    //         mock: true
    //     })
    // },
    getTestData(params) {
        return request({
            url: '/dashboard/getTestData',
            method: 'get',
            data: params,
            mock: true
        })
    }
}