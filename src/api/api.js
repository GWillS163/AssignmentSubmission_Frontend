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

    getCardsData() {
        return request({
            url: '/dashboard/titleCards',
            method: 'get',
            mock: false
        })
    },
    getAssignsData() {
        return request({
            url: '/dashboard/assignProgress',
            method: 'get',
            mock: false
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
            url: '/assign/public',
            method: 'get',
            mock: false
        })
    },
    getTab2PublicAssignsBanner() {
        return request({
            url: '/assign/public/tab2AssignBanner',
            method: 'get',
            mock: false
        })
    },
    getTab3AssignsProgressByClassId(classId) {
        return request({
            url: '/assign/class/'+ classId +'/progress',
            method: 'get',
            mock: false
        })
    },

    getTab3PublicAssigns() {
        return request({
            url: '/public/getTab3PublicAssigns',
            method: 'get',
            mock: true
        })
    },
    getTab3PublicAssignsRecords() {
        return request({
            url: '/public/getTab3PublicAssignsRecords',
            method: 'get',
            mock: true
        })
    },
    getTab4SubmitsRecords() {
        return request({
            url: '/myFile/public',
            method: 'get',
            mock: false
        })
    },

    // Tab5 umlRecord
    getUmlRecords() {
        return request({
            url: '/uml/withoutHide',
            method: 'get',
            mock: false
        })
    },
    refreshSingleUmlRecord(umlId) {
        return request({
            url: '/uml/' + umlId + '/refresh',
            method: 'get',
            mock: false
        })
    },
    postUmlRecord(userInputForm) {
        return request({
            url: '/uml',
            method: 'post',
            mock: false,
            params: userInputForm
        })
    },
    deleteUmlId(umlId) {
        return request({
            url: '/uml/' + umlId,
            method: 'put',
            mock: false,
        })
    },
    rerunUmlCode(record) {
        return request({
            url: '/uml/' + record.id + '/runUmlCode',
            method: 'post',
            mock: false,
            params: record,
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
            url: '/dashboard/notices',
            method: 'get' ,
            mock: false
        })
    },
    getOwnClazz(teacherId) {
        return request({
            url: '/class/teacher/' + teacherId,
            method: 'get',
            mock: false
        })
    },
    getAllClazz() {
        return request({
            url: '/class',
            method: 'get',
            mock: false
        })
    },
    getFlags() {
        return request({
            url: '/manage/teacher/flags',
            method: 'get',
            mock: true,
        })
    },

    // Teacher Center
    getTitleAssignBanner(teacherId) {
        return request({
            url: '/assign/teacher/assignBanner/' + teacherId,
            method: 'get',
            mock: false
        })
    },
    getTeacherCenterAssigns(teacherId) {
        return request({
            url: '/assign/teacher/' + teacherId,
            method: 'get',
            mock: false
        })
    },
    getAssignFiles(assignId) {
        return request({
            url: '/myFile/assign/' + assignId,
            method: 'get',
            mock: false
        })
    },
    getAssignClazzCount(clazzId) {
      return request({
          url: '/student/map/class/' + clazzId,
            method: 'get',
            mock: false
      })
    },
    getAssignProgress(assignId) {
      return request({
          url: '/assign/' + assignId + '/progress',
            method: 'get',
            mock: false
      })
    },
    getMenu(loginForm) {
        console.log("loginForm", loginForm)
        return {
            code: 200,
            data:
                {
                    role: 'admin',
                    menu: [
                        {
                            name: 'Dashboard',
                            icon: 'dashboard',
                            path: '/dashboard',
                        }
                        ],
                    token: 'admin-token',
                },
        }
      return request({
            url: '/menu',
            method: 'get',
            mock: false
      })
    },
    getSubmitsByAssignId(assignId) {
        return request({
            url: '/assign/' + assignId + '/submit',
            method: 'get',
            mock: true
        })
    },



    // Student Center
    getAssignsMapByClassesId(classesId) {
        return request({
            url: '/assign/map/class/' + classesId,
            method: 'get',
            mock: false
        })
    },
    getAssignsByClass(classId){

        return request({
            // url: '/assign/class/' + classId,
            url: '/assign/class/1909',
            // url: '/assign/public',
            method: 'get',
            mock: false
        })
    },

    getPublicAssign() {
        return request({
            url: '/assign/public',
            method: 'get',
            mock: false
        })
    },

    getUsersMapByClassesId(classesId) {
        return request({
            url: '/student/map/class/' + classesId,
            method: 'get',
            mock: false
        })
    },


    // Assign
    getAssignsMapping() {
        return request({
            url: '/assign/map',
            method: 'get',
            mock: false
        })
    },
    getAssignsByAdmin() {
        return request({
            url: '/assign',
            method: 'get',
            mock: false
        })
    },
    getAssignsByTeacher(teacherId) {
        return request({
            url: '/assign/teacher/' + teacherId ,
            method: 'get',
            mock: false
        });
    },
    postAssign(assign) {
        return request({
            url: '/assign',
            method: 'post',
            mock: false,
            params: assign,
        })
    },
    putAssign(assign) {
        return request({
            url: '/assign/' + assign.id,
            method: 'put',
            mock: false,
            params: assign,
        })
    },
    deleteAssign(assign) {
        return request({
            url: '/assign/' + assign.id,
            method: 'delete',
            mock: false,

        })
    },



    getFilesByStudentId(studentId) {
        return request({
            url: '/myFile/student/' + studentId,
            method: 'get',
            mock: false
        })
    },



    getAllFiles(teacherId) {
        return request({
            url: '/myFile',
            method: 'get',
            mock: false,

        })
    },
    postFile(file) {
        return request({
            url: '/myFile',
            method: 'post',
            mock: false,
            params: file,
        })
    },
    putFile(file) {
        return request({
            url: '/myFile/' + file.fileId,
            method: 'put',
            mock: false,
            params: file,
        })
    },
    deleteFile(file) {
        return request({
            url: '/myFile/' + file.fileId,
            method: 'delete',
            mock: false,

        })
    },


    // Teacher
    getAllTeachersMapping() {
        return request({
            url: '/teacher/map',
            method: 'get',
            mock: false
        })
    },
    getAllTeachers() {
        return request({
            url: '/teacher',
            method: 'get',
            mock: false
        })
    },
    postTeacher(teacher) {
        console.log(teacher)
        return request({
            url: '/teacher',
            method: 'post',
            mock: false,
            params: teacher
        })
    },
    putTeacher(teacher) {
        return request({
            url: '/teacher/' + teacher.id,
            method: 'put',
            mock: false,
            params: {
                id: teacher.id,
                name: teacher.name,
            }
        })
    },
    deleteTeacher(teacherId) {
        return request({
            url: '/teacher/' + teacherId,
            method: 'delete',
            mock: false,
        })
    },

    // CLass
    getClassesByTeacherId(teacherId) {
        return request({
            // url: '/class/teacher/' + teacherId,
            url: '/class/teacher',
            method: 'post',
            // TODO: 这里不知道对不对，应该不对
            params: teacherId,
            mock: false,
        })
    },
    getClassesByAdmin(userInfo) {
        return request({
            // url: '/class/teacher/' + teacherId,
            url: '/class',
            method: 'get',
            // put teacherId to post request
            params: userInfo,
            mock: false,
        })
    },
    getClassesMap(userInfo) {
        return request({
            // url: '/class/teacher/' + teacherId,
            url: '/class/map',
            method: 'get',
            // put teacherId to post request
            params: userInfo,
            mock: false,
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

    // Student MG
    getUsersMapping() {
        return request({
            url: '/student/map',
            method: 'get',
            mock: false
        })
    },
    getStudentsByTeacherId(teacherId) {
        return request({
            url: '/student/teacher/' + teacherId,
            method: 'get',
            mock: true
        })
    },
    getStudentsByAdmin() {
        return request({
            url: '/student/allInfo',
            method: 'get',
            mock: false
        })
    },
    postStudent(student) {
        return request({
            url: '/student',
            method: 'post',
            mock: false,
            params: student,
        })
    },
    putStudent(student) {
        return request({
            url: '/student',
            method: 'put',
            mock: false,
            params: student
        })
    },
    deleteStudent(student) {
        return request({
            url: '/student/' + student.userId,
            method: 'delete',
            mock: false,
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