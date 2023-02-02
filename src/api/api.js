// API 总控， 替代每个组件内的链接

import request from '@/api/request'

export default {
    getDashBoardData() {
        return request({
            url: '/dashboard/getDashboardData',
            method: 'get',
            mock: true
        })
    },
    getTab1PublicAssigns() {
        return request({
            url: '/public/getTab1PublicAssigns',
            method: 'get',
            mock: true
        })
    },
    getTab2PublicAssigns() {
        return request({
            url: '/public/getTab2PublicAssigns',
            method: 'get',
            mock: true
        })
    },
    getTab3PublicAssigns() {
        return request({
            url: '/public/getTab3PublicAssigns',
            method: 'get',
            mock: true
        })
    },
    getTab4PublicAssigns() {
        return request({
            url: '/public/getTab4PublicAssigns',
            method: 'get',
            mock: true
        })
    },
    getMenuPart1() {
        return request({
            url: '/menu/getMenuPart1',
            method: 'get',
            mock: true
        })
    },
    getMenuDataManage() {
        return request({
            url: '/menu/getMenuDataManage',
            method: 'get',
            mock: true
        })
    },
    getMenuDebugLink() {
        return request({
            url: '/menu/getMenuDebugLink',
            method: 'get',
            mock: true
        })
    },
    getTestData(params) {
        return request({
            url: '/dashboard/getTestData',
            method: 'get',
            data: params,
            mock: true
        })
    }
}