export default {
    getAssignsByClass(classId) {
        let classAssigns = [];
        if (classId === 1909) {
            classAssigns = [
          {
            name: "Java基础",
            progress: 100
          },
          {
            name: "Java基础2",
            progress: 60
          }
        ]
        }
        return {
            code: 200,
            data: classAssigns
        }
    },
    getAssignsByTeacher(teacherId) {
        let teacherAssigns = [];
        if (teacherId === 127){
            teacherAssigns = [
      {id: 5, assignName: '第五次数据结构 1', ddl:'2023-02-12 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',

      },
      {id: 3, assignName: '第五次数据结构 3', ddl:'2023-02-14 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',

      },
      {id: 2, assignName: '第五次数据结构 6', ddl:'2023-02-19 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',

      },
      {id: 1, assignName: '第五次数据结构 forever', ddl:' ', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',

      }
    ];
        } else if (teacherId === 111) {
            teacherAssigns = []
        } else {
            teacherAssigns = []
        }
        return {
            code:200,
            data: teacherAssigns
        }
    }
}