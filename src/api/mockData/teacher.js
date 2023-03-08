export default {
    getAllTeachersMapping() {
      return {
          code: 200,
          data: [
              {
                id: 127,
                name: "孟老师",
              },{
                id: 128,
                name: "赵老师",
              },{
                    id: 129,
                    name: "李老师",
              }
          ]
      }
    },
    getAllTeachers() {
        return {
            code: 200, data: {
                teachers: [{
                    name: "孟老师",
                    id: "19852331",
                    class: "1909班",
                    qq: "1274667113",
                    mail: "",
                    phone: "18801002716",
                    lastLogin: "2022-7-15 10:13:43",
                    registerTime: "2022-7-15 10:14:53"
                }, {
                    name: "赵老师",
                    id: "19852333",
                    class: "1909班",
                    qq: "280324329",
                    mail: "19852331@czjtu.edu.cn",
                    phone: "19901002839",
                    lastLogin: "2022-7-15 10:15:58",
                    registerTime: "2022-7-15 10:16:00"
                }]
            }
        }
    }, getOwnClazz() {
        return {
            code: 200, data: [{
                id: 1909, name: "1909班", teacher: "KissesJun",
            }, {
                id: 1910, name: "1910班", teacher: "KissesJun"
            }, {
                id: 1911, name: "1911班", teacher: "KissesJun"
            },]
        }
    }, getFlags() {
        return {
            code: 200,
            data: [{name: '已交作业', value: '123+'}, {name: '总提交率', value: '45%'}, {
                name: '未交文件',
                value: '23+'
            }, {name: '最近DDL', value: '3'}]
        }
    }, getTeacherCenterAssigns() {
        return {
            code: 200, data: [{
                // name: "第一次作业",
                // id: "tab-1",
                formData: {
                    isEditing: this.isEditing,
                    name: "第一次作业",
                    id: "tab-1",
                    clazz: "1909班,1908班",
                    desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
                    formatStr: "数据结构-<班级>-<学号>.docx",
                    ddl: "2022-07-02T17:52",
                    forClazz: [1909, 1910],
                    isPermitAny: true,
                    isPermitLate: true, // isPermitMulti: true,
                    isVarifyName: true,
                },

                progress: 90, recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",

                files: [{
                    name: "孟骏清",
                    formatName: "数据结构-1909班-19852333.docx",
                    size: "30.23MB",
                    md5: "fae0b27c451c728867a567e8c1bb4e53",
                    submitTime: "2022-7-2 17:52:87"
                }, {
                    name: "赵云龙",
                    formatName: "数据结构-1909班-19852334.docx",
                    size: "30.23MB",
                    md5: "fae0b27c451c728867a567e8c1bb4e53",
                    submitTime: "2022-7-2 17:52:87"
                }, {
                    name: "李翔",
                    formatName: "数据结构-1909班-19852335.docx",
                    size: "30.23MB",
                    md5: "fae0b27c451c728867a567e8c1bb4e53",
                    submitTime: "2022-7-2 17:52:87"
                }]
            }, {
                // name: "第一次作业",
                // id: "tab-1",
                formData: {
                    isEditing: this.isEditing,
                    name: "抄写作业",
                    id: "tab-186",
                    clazz: "1909班,1908班",
                    desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
                    formatStr: "数据结构-<班级>-<学号>.docx",
                    ddl: "2022-07-02T17:52",
                    forClazz: [1909, 1910],
                    isPermitAny: false,
                    isPermitLate: true, // isPermitMulti: true,
                    isVarifyName: false,
                },

                progress: 90, recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",

                files: [{
                    name: "孟骏清",
                    formatName: "数据结构-1909班-19852333.docx",
                    size: "30.23MB",
                    md5: "fae0b27c451c728867a567e8c1bb4e53",
                    submitTime: "2022-7-2 17:52:87"
                }, {
                    name: "赵云龙",
                    formatName: "数据结构-1909班-19852334.docx",
                    size: "30.23MB",
                    md5: "fae0b27c451c728867a567e8c1bb4e53",
                    submitTime: "2022-7-2 17:52:87"
                }, {
                    name: "李翔",
                    formatName: "数据结构-1909班-19852335.docx",
                    size: "30.23MB",
                    md5: "fae0b27c451c728867a567e8c1bb4e53",
                    submitTime: "2022-7-2 17:52:87"
                }]
            },


                {
                    formData: {
                        name: "第2次作业",
                        id: "tab-2",
                        clazz: "1909班,1908班",
                        desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
                        formatStr: "数据结构-<班级>-<学号>.docx",
                        ddl: "2022-07-02T17:52",
                        forClazz: [1909, 1910],
                        isPermitAny: true,
                        isPermitLate: true, // isPermitMulti: true,
                        isVarifyName: true,
                    },

                    progress: 30, recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",

                    files: [{
                        name: "孟骏清",
                        formatName: "数据结构-1909班-19852333.docx",
                        size: "30.23MB",
                        md5: "fae0b27c451c728867a567e8c1bb4e53",
                        submitTime: "2022-7-2 17:52:87"
                    }, {
                        name: "李翔",
                        formatName: "数据结构-1909班-19852335.docx",
                        size: "30.23MB",
                        md5: "fae0b27c451c728867a567e8c1bb4e53",
                        submitTime: "2022-7-2 17:52:87"
                    }]
                }]
        }
    }, getClazzSubmitsByAssignId(id) {
        let submits = []
        if (id === 1) {
            submits = [{
                clazz: 1909, progress: 100, detail: {
                    submit: ['王五', '赵六'], notSubmit: ['张三', '李四'],
                }
            }, {
                clazz: 1910, progress: 40, detail: {
                    submit: ['王五', '赵六'], notSubmit: ['张三', '李四'],
                }
            }]
        } else if (id === 2) {
            submits = [{
                clazz: 1909, progress: 100, detail: {}
            }, {
                clazz: 1910, progress: 40, detail: {}
            }]
        } else {
            submits = []
        }
        return {
            code: 200, data: [{
                clazz: 1909, progress: 100, detail: {}
            }, {
                clazz: 1910, progress: 40, detail: {}
            }]
        }
    }
}