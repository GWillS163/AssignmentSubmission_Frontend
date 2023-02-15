import Mock from 'mockjs'
import dashboard from "@/api/mockData/dashboard";
import publicPage from "../api/mockData/public";
import menu from "@/api/mockData/menu.js"
import notice from "@/api/mockData/notice.js"
import teachers from "@/api/mockData/teacher.js"
import assign from "@/api/mockData/assign";
import files from "@/api/mockData/files";
import classes from "@/api/mockData/classes";
import students from "@/api/mockData/student";
import userInfo from "@/api/mockData/userInfo";
import navBarTop from "@/api/mockData/navBarTop";

// Navbar Top
Mock.mock('/user/getUserNavBarDrops', navBarTop.getUserNavBarDrops())
Mock.mock('/user/getNavBarNotices', navBarTop.getNavBarNotices())
Mock.mock('/user/getAssignStatuses', navBarTop.getAssignStatuses())

Mock.mock('/dashboard/getDashboardData', dashboard.getDashBoardData())
Mock.mock('/public/getTab1PublicAssigns', publicPage.getTab1PublicAssigns())
Mock.mock('/public/getTab2PublicAssigns', publicPage.getTab2PublicAssigns())
Mock.mock('/public/getTab3PublicAssigns', publicPage.getTab3PublicAssigns())
Mock.mock('/public/getTab4PublicAssigns', publicPage.getTab4PublicAssigns())

Mock.mock('/menu/getMenuPart1', menu.getMenuPart1())
Mock.mock('/menu/getMenuDataManage', menu.getMenuDataManage())
Mock.mock('/menu/getMenuDebugLink', menu.getMenuDebugLink())

Mock.mock(/manage\/notice/, notice.getNoticeData())

Mock.mock(/manage\/teacher\/center/, teachers.getOwnClazz())

Mock.mock(/manage\/teacher\/flags/, teachers.getFlags())
Mock.mock(/manage\/teacher\/assign/, teachers.getTeacherCenterAssigns())
// the "assignId" is a variable
Mock.mock(/assign\/1\/submit/, teachers.getClazzSubmitsByAssignId(1))
Mock.mock(/assign\/2\/submit/, teachers.getClazzSubmitsByAssignId(2))
Mock.mock(/assign\/1\/progress/, assign.getAssignProgress(1))
Mock.mock(/assign\/class\/0/, assign.getAssignsByClass(0))
Mock.mock(/assign\/class\/1909/, assign.getAssignsByClass(1909))


// assign Opr
Mock.mock(/assign\/teacher\/127/, assign.getAssignsByTeacher(127))

//file opr
Mock.mock('/file/student/127', 'get', files.getFilesByStudentId(127))

Mock.mock('/file/teacher/0', 'get', files.getAllFiles(0))
Mock.mock('/file/teacher/127', 'get', files.getAllFiles(127))

Mock.mock('/class/teacher/127', 'get', classes.getClassesByTeacherId(127))
Mock.mock('/teacher/all', 'get', teachers.getAllTeachers())
Mock.mock('/student/teacher/127', 'get', students.getStudentsByTeacherId(127))

// basic Info
Mock.mock('/user/infoCard', 'get', userInfo.getInfoCard())
Mock.mock('/user/basicInfo', 'get', userInfo.getBasicInfo())
Mock.mock('/user/optionalInfo', 'get', userInfo.getOptionalInfo())
Mock.mock('/user/settings', 'get', userInfo.getSettings())
Mock.mock('/user/message', 'get', userInfo.getMessage())
