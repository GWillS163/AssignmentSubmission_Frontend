import Mock from 'mockjs'
import dashboard from "@/api/mockData/dashboard";
import publicPage from "../api/mockData/public";

Mock.mock('/dashboard/getDashboardData', dashboard.getDashBoardData())
Mock.mock('/public/getTab1PublicAssigns', publicPage.getTab1PublicAssigns())