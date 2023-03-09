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

// CRUD


// 拦截post请求，处理添加数据
Mock.mock('/api/data', 'post', (options) => {return classes.postClass(options)});

// 拦截put请求，处理修改数据
Mock.mock('/api/data', 'put', (options) => { return classes.putClass(options) });


// 模拟数据列表
const list = [
  { classId: 0, name: '张三', age: 18 },
  { classId: 1, name: '张三', age: 18 },
  { classId: 2, name: '李四', age: 20 },
  { classId: 3, name: '王五', age: 22 },
];


const deleteData = (id) => {
  const index = list.findIndex(item => item.classId === id);
  if (index !== -1) {
    list.splice(index, 1);
    return { success: true };
  } else {
    return { success: false, message: 'Not found' };
  }
};
const deleteClazz = (options) => {
  const clazz = JSON.parse(options.body);
  console.log('Delete clazz with id:', clazz.classId);

  if (isNaN(clazz.classId)) {
    return { success: false, message: '删除时发现无效id' };
  } else {
    return deleteData(clazz.classId);
  }
};
// 处理 /api/data 删除请求
Mock.mock('/api/data', 'delete', deleteClazz);



// assign Opr
Mock.mock(/assign\/teacher\/127/, assign.getAssignsByTeacher(127))

//file opr
Mock.mock('/file/student/127', 'get', files.getFilesByStudentId(127))

Mock.mock('/file/teacher/0', 'get', files.getAllFiles(0))
Mock.mock('/file/teacher/127', 'get', files.getAllFiles(127))

Mock.mock('/class/teacher', 'post', (options) => { return classes.getClassesByTeacherId(options)})
Mock.mock('/class/allInfo', 'post', (options) => { return classes.getAllClassesByAdmin(options)})
// Mock.mock('/class', 'post', (options) => { return classes.postClass(options)})
Mock.mock('/teacher/all', 'get', teachers.getAllTeachers())
Mock.mock('/teacher/map', 'get', teachers.getAllTeachersMapping())
Mock.mock('/student/teacher/127', 'get', students.getStudentsByTeacherId(127))

// basic Info
Mock.mock('/user/infoCard', 'get', userInfo.getInfoCard())
Mock.mock('/user/basicInfo', 'get', userInfo.getBasicInfo())
Mock.mock('/user/optionalInfo', 'get', userInfo.getOptionalInfo())
Mock.mock('/user/settings', 'get', userInfo.getSettings())
Mock.mock('/user/message', 'get', userInfo.getMessage())

