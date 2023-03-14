// API 总控， 替代每个组件内的链接

import request from '@/api/request'

export default {
    testDownload() {
        return request({
            url: '/get-file',
            method: 'get',
            mock: false,
            isDownload: true,
            fileName: 'test.csv'
        })
    },
    // NavBar Top
    getUserNavBarDrops() {
        return request({
            url: '/user/getUserNavBarDrops',
            method: 'get',
            mock: true
        })
    },
    getNavBarNotices() {
        return request({
            url: '/user/getNavBarNotices',
            method: 'get',
            mock: true
        })
    },
    getAssignStatuses() {
        return request({
            url: '/user/getAssignStatuses',
            method: 'get',
            mock: true
        })
    },
    // NavBar Left
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
    getNoticeData() {
        return request({
            url: '/manage/notice',
            method: 'get' ,
            mock: true
        })
    },
    getOwnClazz() {
        return request({
            url: '/manage/teacher/center',
            method: 'get',
            mock: true
        })
    },
    getFlags() {
        return request({
            url: '/manage/teacher/flags',
            method: 'get',
            mock: true,
        })
    },
    getTeacherCenterAssigns(teacherId) {
        return request({
            url: '/manage/teacher/assign',
            method: 'get',
            mock: true
        })
    },
    getAssignProgress(assignId) {
      return request({
          url: '/assign/' + assignId + '/progress',
            method: 'get',
            mock: true
      })
    },
    getSubmitsByAssignId(assignId) {
        return request({
            url: '/assign/' + assignId + '/submit',
            method: 'get',
            mock: true
        })
    },
    getAssignsByClass(classId) {
        return request({
            url: '/assign/class/' + classId,
            method: 'get',
            mock:true
        })
    },
    getAssignsByTeacher(teacherId) {
        return request({
            url: '/assign/teacher/' + teacherId ,
            method: 'get',
            mock: true
        });
    },
    getFilesByStudentId(studentId) {
        return request({
            url: '/file/student/' + studentId,
            method: 'get',
            mock: true
        })
    },
    getAllFiles(teacherId) {
        return request({
            url: '/file/teacher/' + teacherId,
            method: 'get',
            mock: true
        })
    },
    getClassesByTeacherId(teacherId) {
        return request({
            // url: '/class/teacher/' + teacherId,
            url: '/class/teacher',
            method: 'post',
            // TODO: 这里不知道对不对
            params: teacherId,
            mock: false,
        })
    },
    getClassesByAdmin(adminId) {
        return request({
            // url: '/class/teacher/' + teacherId,
            url: '/class/allInfo',
            method: 'get',
            // put teacherId to post request
            params: {
                adminId: adminId
            },
            mock: false,
        })
    },
    getAllTeachers() {
        return request({
            url: '/teacher/all',
            method: 'get',
            mock: true
        })
    },
    getAllTeachersMapping() {
        return request({
            url: '/teacher/map',
            method: 'get',
            mock: false
        })
    },
    putClass(clazz) {
        console.log("put class")
        return request({
            url: '/class/' + clazz.id,
            method: 'put',
            mock: false,
            params: clazz
        })
    },
    postClass(clazz) {
        return request({
            url: '/class',
            method: 'post',
            mock: false,
            params: clazz
        })
    },
    deleteClass(clazzId) {
        return request({
            url: '/class/' + clazzId,
            method: 'delete',
            mock: false,
        })
    },
    getStudentsByTeacherId(teacherId) {
        return request({
            url: '/student/teacher/' + teacherId,
            method: 'get',
            mock: true
        })
    },
    // 获取个人信息页面的数据
    getInfoCard() {
      return request({
            url: '/user/infoCard',
            method: 'get',
            mock: true
      })
    },
    getBasicInfo() {
        return request({
            url: '/user/basicInfo',
            method: 'get',
            mock: true
        })
    },
    getOptionalInfo() {
        return request({
            url: '/user/optionalInfo',
            method: 'get',
            mock: true
        })
    },
    getSettings() {
        return request({
            url: '/user/settings',
            method: 'get',
            mock: true
        })
    },
    getMessage() {
        return request({
            url: '/user/message',
            method: 'get',
            mock: true
        })
    }
}