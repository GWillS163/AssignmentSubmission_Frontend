import Mock from "mockjs";

export default {
    getAllClassesByAdmin(adminId) {
        console.log("mock getAllClassesByAdmin:", adminId);

        return {
            code: 200, data: {
                classes: [{
                    id: 1909, className: "管理员的计算机科学与技术1909", teacher_id: 0

                }, {
                    id: 1910, name: "管理员的计算机科学与技术1910", teacher: "李四"
                }]
            }
        }
    }, getClassesByTeacherId(teacherId) {
        console.log("mock getClassesByTeacherId:", teacherId);
        console.log(teacherId)
        let classes = [];
        if (teacherId === 127) {
            classes = [{
                id: 1909, className: "计算机科学与技术1909", teacher_id: 0

            }, {
                id: 1910, name: "计算机科学与技术1910", teacher: "李四"
            }]
        } else {
            classes = []
        }
        return {
            code: 200, data: {
                classes: classes
            }
        }
    }, putClass(clazz) {
        const id = clazz.url.split('/').pop();
        const data = JSON.parse(clazz.body);
        // const list = Mock.mock('@range(1, 10)', ['@integer(1, 100)']);
        const list = [{
            // write mock data here
            id: 1, name: "张三", age: "18",
        }, {
            id: 2, name: "李四", age: "19",
        }];
        const index = list.findIndex(item => item.id === id);
        if (index === -1) {
            return {
                code: 404, message: '修改时未找到该数据', data: null
            };
        } else {
            list.splice(index, 1, {
                id: data.id, name: data.name, age: data.age, gender: data.gender, address: data.address
            });
            return {
                code: 200, message: '修改成功', data: {
                    list
                }
            };
        }
    }, postClass(clazz) {
        console.log("调用了classes", clazz);
        const data = JSON.parse(clazz.body);
        const newItem = {
            id: Mock.mock('@integer(1, 100)'),
            name: data.name,
            age: data.age,
            gender: data.gender,
            address: data.address
        };
        const list = Mock.mock('@range(1, 10)', ['@integer(1, 100)']);
        // list.push(newItem.id);
        return {
            code: 200, message: '新数据添加成功', data: {
                // newItem, list
            }
        }

    }, deleteClass(clazz) {
        const id = clazz.url.split('/').pop();
        const list = Mock.mock('@range(1, 10)', ['@integer(1, 100)']);
        const index = list.findIndex(item => item.id === id);
        if (index === -1) {
            return {
                code: 404, message: '未找到该数据', data: null
            };
        } else {
            list.splice(index, 1);
            return {
                code: 200, message: '删除成功', data: {
                    list
                }
            };
        }
    }
}