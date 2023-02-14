import Mock from 'mockjs'
import dashboard from "@/api/mockData/dashboard";
import publicPage from "../api/mockData/public";
import menu from "@/api/mockData/menu.js"
import notice from "@/api/mockData/notice.js"
import teacher from "@/api/mockData/teacher.js"
import assign from "@/api/mockData/assign";
import files from "@/api/mockData/files";

Mock.mock('/dashboard/getDashboardData', dashboard.getDashBoardData())
Mock.mock('/public/getTab1PublicAssigns', publicPage.getTab1PublicAssigns())
Mock.mock('/public/getTab2PublicAssigns', publicPage.getTab2PublicAssigns())
Mock.mock('/public/getTab3PublicAssigns', publicPage.getTab3PublicAssigns())
Mock.mock('/public/getTab4PublicAssigns', publicPage.getTab4PublicAssigns())

Mock.mock('/menu/getMenuPart1', menu.getMenuPart1())
Mock.mock('/menu/getMenuDataManage', menu.getMenuDataManage())
Mock.mock('/menu/getMenuDebugLink', menu.getMenuDebugLink())

Mock.mock(/manage\/notice/, notice.getNoticeData())

Mock.mock(/manage\/teacher\/center/, teacher.getOwnClazz())

Mock.mock(/manage\/teacher\/flags/, teacher.getFlags())
Mock.mock(/manage\/teacher\/assign/, teacher.getAssign())
// the "assignId" is a variable
Mock.mock(/assign\/1\/submit/, teacher.getClazzSubmitsByAssignId(1))
Mock.mock(/assign\/2\/submit/, teacher.getClazzSubmitsByAssignId(2))
Mock.mock(/assign\/1\/progress/, assign.getAssignProgress(1))
Mock.mock(/assign\/class\/0/, assign.getAssignsByClass(0))
Mock.mock(/assign\/class\/1909/, assign.getAssignsByClass(1909))


// assign Opr
Mock.mock(/assign\/teacher\/127/, assign.getAssignsByTeacher(127))

//file opr
Mock.mock('/file/student/127', 'get', files.getFilesByStudentId(127))

Mock.mock('/file/teacher/0', 'get', files.getAllFiles(0))
Mock.mock('/file/teacher/127', 'get', files.getAllFiles(127))
