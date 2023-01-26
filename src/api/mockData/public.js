export default {
    getTab1PublicAssigns: () => {
        return {
            code: 200,
            data: {
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    "data|7": [{
                        "苹果": "@integer(1000, 5000)",
                        "小米": "@integer(1000, 5000)",
                        "华为": "@integer(1000, 5000)",
                        "oppo": "@integer(1000, 5000)",
                        "vivo": "@integer(1000, 5000)",
                        "一加": "@integer(1000, 5000)",
                    }]
                },
            },
        }
    }

}