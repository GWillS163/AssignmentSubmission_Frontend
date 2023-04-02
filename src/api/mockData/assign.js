export default {
    getAssignsByClass(classId) {
        if (classId === 1909) {

            return {
                code: 200,
                data: [

                { // 未开始
                    id: 4,
                    name: '未开始mock作业1',
                    ddl: '',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                    progress: 90,
                    uploadEnable: false,
                    avatar: '../../../../public/favicon.ico',
                },
                {
                    // 进行中
                    id: 3,
                    name: '第五次数据结构 3',
                    ddl: '2023-06-14 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                    progress: 30,
                    uploadEnable: true,
                    avatar: '../../../../public/favicon.ico',
                },
                {
                    // 进行中
                    id: 33,
                    name: '第五次数据结构 3',
                    ddl: '2023-06-14 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                    progress: 30,
                    uploadEnable: true,
                    avatar: '../../../../public/favicon.ico',
                },
                {
                    // 即将截止
                    id: 2,
                    name: '第五次数据结构 6',
                    ddl: '2023-03-26 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                    progress: 20,
                    uploadEnable: true,
                },
                {
                    id: 1,
                    name: '第五次数据结构 forever',
                    ddl: '2023-02-12 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                    progress: 10,
                    uploadEnable: true,
                } ]
        }
        } else if (classId === 0) {

            return {
                code: 200,
                data: {
                        id: 10,
                        name: "期末大数据结课作业",
                        ddl: "2022-12-15 18:00",
                        releaseTeacher: "KissesJun",
                        releaseTime: "2022-12-15",
                        progress: 30

                    }
            }
        }
    },
    getAssignsByAdmin() {
        return {
            code: 200,
            data: [
                {
                    id: 5,
                },
                {
                    id: 4,
                }]
        }
    },
    getAssignsByTeacher(teacherId) {
        let teacherAssigns = [];
        if (teacherId === 127) {
            teacherAssigns = [
                {
                    id: 5,
                    assignName: '第五次数据结构 1',
                  name: "第一次作业",
                  classes: "1909,1910",
                  format: "数据结构-&lt;班级&gt;-&lt;姓名&gt;.docx",
                    ddl: '2023-02-12 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',

                },
                {
                    id: 3,
                    assignName: '第五次数据结构 3',
                    ddl: '2023-02-14 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                      name: "第二次作业",
                      classes: "1909,1910",
                      format: "数据结构3-&lt;班级&gt;-&lt;姓名&gt;.docx",

                },
                {
                    id: 2,
                    assignName: '第五次数据结构 6',
                    ddl: '2023-02-19 18:00',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                      name: "第二次作业",
                      classes: "1909,1910",
                      format: "数据结构3-&lt;班级&gt;-&lt;姓名&gt;.docx",

                },
                {
                    id: 1,
                    assignName: '第五次数据结构 forever',
                    ddl: ' ',
                    releaseTime: '2022-11-13 18:00',
                    releaseTeacher: 'KissesJun',
                      name: "第二次作业",
                      classes: "1909,1910",
                      format: "数据结构3-&lt;班级&gt;-&lt;姓名&gt;.docx",

                }
            ];
        } else if (teacherId === 111) {
            teacherAssigns = []
        } else {
            teacherAssigns = []
        }
        return {
            code: 200,
            data: teacherAssigns
        }
    },
    getAssignProgress(assignId) {
        let assignProgress = 0;
        if (assignId === 1) {
            assignProgress = 10
        } else if (assignProgress === 2) {
            assignProgress = 20
        } else {
            assignProgress = 99
        }
        return {
            code: 200,
            data: {
                progress: assignProgress
            }
        }
    },
}