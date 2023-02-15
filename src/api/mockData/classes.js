export default {
    getClassesByTeacherId(teacherId) {
        let classes = [];
        if (teacherId === 127) {
            classes = [
                {
                    id: 1909,
                    name: "计算机科学与技术1909",
                    teacher: "张三"

                },
                {
                    id: 1910,
                    name: "计算机科学与技术1910",
                    teacher: "李四"
                }
            ]
        } else {
            classes = []
        }
        return {
            code: 200,
            data: {
                classes: classes
            }
        }
    }
}