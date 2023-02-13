import Mock from 'mockjs'
import dashboard from "@/api/mockData/dashboard";
import publicPage from "../api/mockData/public";
import menu from "@/api/mockData/menu.js"
import notice from "@/api/mockData/notice.js"
import teacher from "@/api/mockData/teacher.js"
import assign from "@/api/mockData/assign";

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

Mock.mock(/teacher\/127\/assign/, assign.getAssignsByTeacher(127))


