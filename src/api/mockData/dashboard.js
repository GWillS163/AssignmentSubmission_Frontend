export default {
    getDashBoardData: () => {
        return {
            code: 200,
            data: {

                titleCards: [
                    {
                        name: "在库作业",
                        value: 10,
                        icon: "fas fa-calendar"
                    },
                    {
                        name: "在库文件",
                        value: 10,
                        icon: "fas fa-database"
                    },
                    {
                        name: "收集进度",
                        value: "50%",
                        icon: "fas fa-comments"
                    },
                    {
                        name: "在库作业",
                        value: 18,
                        icon: "fas fa-clipboard-list"
                    }
                ],
                assignProgress: [
                    {
                        "name": "高级操作系统",
                        "collectProgress": 10,
                        "collectStatus": "10/100",
                        "collectColor": "bg-danger",
                        // "collectedFiles": 10,
                        // "totalFiles": 100,
                        // "collectColor": "bg-danger",
                        //
                        // "startDateTime": "2023-01-01 00:00:00",
                        // "endDateTime": "2023-01-21 23:59:59",
                        "ddlProgress": 23,
                        "ddlStatus": "46/200",
                        "ddlColor": "bg-success",
                    },
                    {
                        "name": "JAVA8",
                        "collectProgress": 10,
                        "collectStatus": "10/100",
                        "collectColor": "bg-danger",

                        "ddlProgress": 23,
                        "ddlStatus": "46/200",
                        "ddlColor": "bg-success",
                    }

                ]
            }
        }
    }

}