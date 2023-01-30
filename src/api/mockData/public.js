export default {
    getTab1PublicAssigns: () => {
        return {
            code: 200,
            data: {

                  assigns: [
                    {
                      title: "Java1 第八次作业",
                      status: "正在收集",
                      ddl: "2022-7-17 20:00",
                      content: "将 文字放到 冰箱里分为几步？ 填写相应文字作为答案提交，文件不大于20MB。",
                      upload: "/upload/assignment/3289hd90",
                    },
                    {
                      title: "Week5 大数据合作",
                      status: "正在收集",
                      ddl: "2022-7-17 20:00",
                      content: "将 文字放到 冰箱里分为几步？ 填写相应文字作为答案提交，文件不大于20MB。",
                      upload: ""
                    },
                  ]
            },
        }
    },
    getTab2PublicAssigns: () => {
        return {
            code: 200,
            data: {
              titleBanner: [
                {
                  name: "已交作业",
                  num: "123+"
                },
                {
                  name: "未交作业",
                  num: "123+"
                },
                {
                  name: "提交率",
                  num: "45%"
                },
                {
                  name: "最近DDL",
                  num: "3"
                }
              ],
              assignViews: [
                {
                  title: "Week8 大作业",
                  ddl: "2023-2-15",
                  detailData: [
                    {
                      class: "1909",
                      progress: "96%",
                      colorClass: "bg-success"
                    },
                    {
                      class: "1910",
                      progress: "40%",
                      colorClass: "bg-warning"
                    }
                  ],
                  releaseTeacher: "KissesJun",
                  releaseTime: "2022-12-15",
                  releaseImg: "assets/img/assignmentImg.png",
                  detailUrl: "assignment/detail/32933"
                }
              ]
            }
        }
    },
    getTab3PublicAssigns: () => {
        return {
            code: 200,
            data: {
              titleBanner: [
                {
                  name: "已交作业",
                  value: "123+"
                },
                {
                  name: "未交作业",
                  value: "123+"
                },
                {
                  name: "提交率",
                  value: "89%"
                },
                {
                  name: "最近DDL",
                  value: "3"
                }
              ],
              classViews: [
                {
                  className: "1910班",
                  teacher: "KissesJun",
                  detailUrl: "https://www.baidu.com",
                  progressData: [
                    {
                      name: "Java基础",
                      value: "100%",
                      colorClass: "bg-success"
                    },
                    {
                      name: "Java基础2",
                      value: "40%",
                      colorClass: "bg-danger"
                    }
                  ],
                },
                {
                  className: "1909班",
                  teacher: "",
                  detailUrl: "https://www.baidu.com",
                  progressData: [
                    {
                      name: "Java基础",
                      value: "90%",
                      colorClass: "bg-info"
                    },
                    {
                      name: "Java基础2",
                      value: "70%",
                      colorClass: "bg-warn"
                    }
                  ],
                }
              ]
            }
        }
    },
    getTab4PublicAssigns: () => {
        return {
            code: 200,
            data: {
      tableData: [
        {
          name: "匿名",
          fileName: "软件工程-1909-孟骏清-19852331.docx",
          size: "3.2MB",
          type: "Windows DesktopV2.1",
          time: "2022-7-17 17:46:37",
          status: "已删除"
        },
        {
          name: "匿名",
          fileName: "软件工程-1909-李三-19852365.docx",
          size: "21MB",
          type: "网站",
          time: "2022-7-17 17:46:37",
          status: ""
        },
        {
          name: "匿名",
          fileName: "软件工程-1909-李三-19852365.docx",
          size: "21MB",
          type: "网站",
          time: "2022-7-17 17:46:37",
          status: ""
        },
        {
          name: "匿名",
          fileName: "软件工程-1909-李三-19852365.docx",
          size: "21MB",
          type: "网站",
          time: "2022-7-17 17:46:37",
          status: ""
        },
        {
          name: "匿名",
          fileName: "软件工程-1909-李三-19852365.docx",
          size: "21MB",
          type: "网站",
          time: "2022-7-17 17:46:37",
          status: ""
        },
        {
          name: "匿名",
          fileName: "软件工程-1909-李三-19852365.docx",
          size: "21MB",
          type: "网站",
          time: "2022-7-17 17:46:37",
          status: ""
        }
        ]

            }
        }
    }

}