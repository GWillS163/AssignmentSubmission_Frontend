export default {
    getStudentsByTeacherId(teacherId) {
        let students = [];
        if (teacherId === 127) {
            students = [{
                    name: "孟骏清",
                    id: "19852331",
                    class: 1909,
                    qq: "1274667113",
                    mail: "gwills@qq.com",
                    phone: "18801002716",
                    lastLogin: "2022-7-15 10:13:43",
                    registerTime: "2022-7-15 10:14:53"
                }, {
                    name: "赵云龙",
                    id: "19852333",
                    class: 1909,
                    qq: "280324329",
                    mail: "19852331@czjtu.edu.cn",
                    phone: "19901002839",
                    lastLogin: "2022-7-15 10:15:58",
                    registerTime: "2022-7-15 10:16:00"
                }]
        } else {
            students = []
        }
        return {
            code: 200,
            data: {
                students: students
            }
        }
    }
}