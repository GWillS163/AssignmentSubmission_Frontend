export default {
    getUserNavBarDrops() {
        return {
            code: 200,
            data: [{
                iconClass: 'fas fa-user fa-sm fa-fw me-2 text-gray-400',
                title: '个人信息',
                href: '#'
            }, {
                iconClass: 'fas fa-cogs fa-sm fa-fw me-2 text-gray-400',
                title: '设置',
                href: '#'
            }, {iconClass: 'fas fa-list fa-sm fa-fw me-2 text-gray-400', title: '活动日志', href: '#'},]
        }
    },
    getNavBarNotices() {
        return {
            code: 200, data: [{
                id: 1, title: "作业已被下载", avatar: "/../public/favicon.ico", content: "自动通知", time: "58m"
            }, {
                id: 2, title: "您有新的 新作业可提交", avatar: "/../public/favicon.ico", content: "自动通知", time: "1d"
            }, {
                id: 3,
                title: "【未交提醒】过期不候",
                avatar: "/../public/favicon.ico",
                content: "Morgan Alvarez",
                time: "2d"
            }, {
                id: 4,
                title: "欢迎初次使用AssignmentSubmission",
                avatar: "/../public/favicon.ico",
                content: "自动通知",
                time: "2w"
            }]
        }
    },

    getAssignStatuses() {
        return {
            code: 200, data: [{
                date: "2023-2-15 12:00:00",
                title: "A new monthly report is ready to download!",
                bgClass: "bg-primary",
                iconClass: "fas fa-file-alt text-white",
            }, {
                date: "2023-2-15 12:00:00",
                title: "Spending Alert: We've noticed unusually high spending for your account.",
                bgClass: "bg-success",
                iconClass: "fas fa-exclamation-triangle  text-white",
            }, {
                date: "2023-2-15 12:00:00",
                title: "Spending Alert: We've noticed unusually high spending for your account.",
                bgClass: "bg-warning",
                iconClass: "fas fa-donate text-white",
            }]
        }
    }

}