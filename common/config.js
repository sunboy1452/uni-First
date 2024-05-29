const CONFIG = {
	// 开发环境配置
	// H5切换开发环境需要到 manifest.json 源码视图  修改   需要跨域的域名 ! 
	development: {
		baseUrl: 'http://121.40.51.175:8002', // 开发环境-外网-刘庆庆
		// baseUrl: 'http://121.40.51.175:8001', // 开发环境-外网-谢毛
		debug: true,
		title: ""
	},
	// 生产环境配置
	production: {
		baseUrl: 'http://devinfo.etexe.cn', // 小程序开发
		debug: false,
		title: ""
	}
}
export default CONFIG[process.env.NODE_ENV];