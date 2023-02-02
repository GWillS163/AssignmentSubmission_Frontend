import Mock from 'mockjs'
import dashboard from "@/api/mockData/dashboard";
import publicPage from "../api/mockData/public";
import menu from "@/api/mockData/menu.js"

Mock.mock('/dashboard/getDashboardData', dashboard.getDashBoardData())
Mock.mock('/public/getTab1PublicAssigns', publicPage.getTab1PublicAssigns())
Mock.mock('/public/getTab2PublicAssigns', publicPage.getTab2PublicAssigns())
Mock.mock('/public/getTab3PublicAssigns', publicPage.getTab3PublicAssigns())
Mock.mock('/public/getTab4PublicAssigns', publicPage.getTab4PublicAssigns())

Mock.mock('/menu/getMenuPart1', menu.getMenuPart1())
Mock.mock('/menu/getMenuDataManage', menu.getMenuDataManage())
Mock.mock('/menu/getMenuDebugLink', menu.getMenuDebugLink())