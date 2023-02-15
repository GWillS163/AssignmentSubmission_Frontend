export default{
    getInfoCard() {
        return {
            code: 200,
            data: {
                infoCard: [
                        {name: '注册时间', value: '2022-12-17'},
                        {name: '上交作业', value: '43'},
                        {name: '上次登录', value: '2022-12-17'},
                        {name: '登录IP', value: '10.23.23.5'},
                    ]
            }
        }
    },
    getBasicInfo() {
        return {
            code: 200,
            data: {
                basicInfo: {
            name: "张三",
            id: "201900000000",
            email: "19852333@nk.edu.com",
            password: "",
          }
            }
        }
    },
    getOptionalInfo() {
        return {
            code: 200,
            data: {
                optionalInfo: {
        class: "1909",
        phone: "18888888888",
      }
            }
        }
    },
    getSettings() {
        return {
            code: 200,
            data: {
                settings: [
                          {name: '本站站内通知', key: 'siteNotice', isChecked: true, isDisabled:true, help: '仅在网站内可查看'},
                          {name: '开启RSS订阅', key: 'rssNotice', isChecked: false, isDisabled:true, help: '更新时会收到windows系统通知'},
                          {name: '接收邮件通知', key: 'emailNotice', isChecked: true, isDisabled:false, help: '更新时会收到邮件通知'},
                      ]
        }
        }
    },
    getMessage() {
        return {
            code: 200,
            data: {
                message: {
                    text: "欢迎使用本系统！",
                    isChecked: true,
                }
            }
        }
    }
}