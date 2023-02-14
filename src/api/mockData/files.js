export default {
    getFilesByStudentId(studentId) {
        let filesData = [];
        if (studentId === 127){
            filesData = [
        {
          id: 1,
          assignName: "JAVA基础与开发",
          subject: "Java",
          ddl: "2023-2-13 19:00:00",
          source: "桌面端提交",
          submitTime: "2022-7-17 17:46:37",

        },
        {
          id: 2,
          assignName: "孟骏清",
          subject: "数据结构",
          ddl: "2023-2-13 19:00:00",
          source: "Windows DesktopV2.1",
          submitTime: "2022-7-17 17:46:37",
        }
      ]
        }
        return {
            code: 200,
            data: {
                files:filesData
            }
        }
    },

    getAllFiles(teacherId) {
        let files = [];
        if (teacherId===127){
            files = [
        {
          userName: "张三",
          formatFileName: "张三-20210601-120000",
          size: "1.2MB",
          md5: "1234567890",
          submitTime: "2021-06-01 12:00:00",
        },
        {
          userName: "李四",
          formatFileName: "李四-20210601-120000",
          size: "1.2MB",
          md5: "1234567890",
          submitTime: "2021-06-01 12:00:00",
        }
      ]
        } else {
            files = []
        }
        return {
            code: 200,
            data: {
                files: files
            }
        }

    }
}