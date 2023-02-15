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
    getTeacherAssigns(teacherId) {
        return request({
            url: '/assign/teacher/' + teacherId,
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
            url: '/class/teacher/' + teacherId,
            method: 'get',
            mock: true,
        })
    },
    getAllTeachers() {
        return request({
            url: '/teacher/all',
            method: 'get',
            mock: true
        })
    },
    getStudentsByTeacherId(teacherId) {
        return request({
            url: '/student/teacher/' + teacherId,
            method: 'get',
            mock: true
        })
    },
}