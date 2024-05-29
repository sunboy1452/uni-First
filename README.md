# 项目介绍

## 主架构  [uniapp](https://uniapp.dcloud.io/)

###	介绍 
-	组件使用easycom模式 cl-*(可在pages里面修改)

###	plugins  
-	uni-app ->  [uniapp](https://uniapp.dcloud.net.cn/)
-	uni-app生态 ->  [dcloud](https://ext.dcloud.net.cn/)
-	通过 vue.config.js 配合此库，可以随心所欲的读取 pages.json 下的所有配置 -> [uni-read-pages](https://github.com/SilurianYang/uni-read-pages)(目前vue2)
-	路由 ->  [uni-simple-router](https://www.hhyang.cn/v2/start/quickstart.html)
-	ui框架 ->  [firstui](https://firstui.cn/)
-	api请求 ->  [firstui自带api请求](https://firstui.cn/)
-	图标 ->  [Iconfont](https://www.iconfont.cn/)

###	项目结构

```
├─apis					  // 接口管理
│  ├─http.api 		// 请求接口
├─common				  // 公共方法库
│  ├─config 			// 环境配置 (设置baseurl等)
│  ├─filters 			// 全局过滤器
│  ├─tools 				// 全局公共方法
│  ├─fui-request 	// 全局请求配置
│  └─router 			// 路由文件
├─components			// 组件库
│  ├─cl			      // easycom 自研组件 (示例使用可删除)
│  └─firstui			// firstui组件
├─js_sdk		    	// js_sdk
├─pages				   	// 页面源码
├─static				  // 静态文件
├─store					  // vuex
│  ├─$u.mixin			// store全局混入方法
│  └─index				// vuex
├─style				   	// 样式
├─util				   	// 其他js
```

### 依赖安装

1. 安装之前请移除下载后自带的package.json 使用下面代码安装依赖即可运行
2. 注意npm init -y时项目名称不能带特殊字符以及中文

```
npm init -y
npm i uni-simple-router uni-read-pages
```

