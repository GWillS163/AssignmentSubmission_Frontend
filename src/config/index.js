
const env = "dev"
const baseApi = "http://localhost:8080"
const mockApi = "https://www.fastmock.site/mock/.../api"
export default {
    env,
    // mock 开关
    mock: true,
    baseApi,
    host: '192.168.227.203',
    port: 8080, // 可以被process.env.PORT覆盖，如果端口被使用，将确定一个空闲端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


}