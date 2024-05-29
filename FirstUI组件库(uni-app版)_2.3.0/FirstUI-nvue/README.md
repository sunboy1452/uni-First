# First UI 快速上手

使用 First UI 前，请确保你已经学习并熟练使用过 [uni-app](https://uniapp.dcloud.io/) 。

### 安装

#### 方式一 ：通过 npm 安装

<div class="fui-sub__text">使通过 npm 安装，需要先通过 vue-cli 创建 uni-app 项目，<a href="https://uniapp.dcloud.io/quickstart-cli" target="_blank">详见</a> 。</div>

```js
// # Using npm
npm install firstui-uni
```

#### 方式二 ：通过下载代码

<div class="fui-sub__text">通过 <a target="_blank" href="https://github.com/FirstUI/FirstUI">GitHub</a> 或者 <a target="_blank" href="https://www.firstui.cn/">FirstUI官网(VIP)</a> 下载 First UI 的代码，然后 将 components/firstui/ 目录拷贝到自己的项目中。</div>

```js
// # GitHub
git clone https://github.com/FirstUI/FirstUI.git
```

#### 方式三 ：选择需要的模块引入

<div class="fui-sub__text">下载 First UI 的代码，在 components/firstui/ 目录下找到需要的组件拷贝到自己的项目中。</div>

### 如何使用

按照以下的方式使用组件，以 `Button` 为例，其它组件在对应的文档页查看。

<div class="fui-doc__card">
 <div class="fui-doc__title">第一种：在页面中引用、注册</div>
 
``` js
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
export default {
	components:{
		fuiButton
	}
}
```
</div>

<div class="fui-doc__card fui-mbtm">
 <div class="fui-doc__title">第二种：easycom组件规范</div>
<div class="fui-sub__text">传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。easycom将其精简为一步，如果不了解easycom，可先查看 <a href="https://uniapp.dcloud.io/collocation/pages?id=easycom" target="_blank">官网文档</a> 。</div>

在 `pages.json` 中 添加配置：

```js
// 下载安装时配置
"easycom": {
		"autoscan": true,
		"custom": {
			"fui-(.*)": "@/components/firstui/fui-$1/fui-$1.vue"
		}
	}

// 使用npm安装时配置（配置完成后重新编译运行）
"easycom": {
		"autoscan": true,
		"custom": {
			"fui-(.*)": "firstui-uni/firstui/fui-$1/fui-$1.vue"
		}
	}
```

</div>

### 使用组件

引入组件后，可以在 页面 中直接使用组件

```html
<fui-button text="默认按钮"></fui-button>
```

### 相关链接

官网地址：[https://www.firstui.cn](https://www.firstui.cn)

文档地址：[https://doc.firstui.cn](https://doc.firstui.cn)

GitHub 地址：[https://github.com/FirstUI/FirstUI](https://github.com/FirstUI/FirstUI)

### 更新日志

#### V2.3.0（2024-02-19）

-   新增 Number 数字 组件，DigitalNumbers 字体。

-   新增 BackgroundImage 背景图 组件。

-   新增常用的基础样式 class，用于页面布局，详见文档。

-   Barcode 条形码 组件优化，新增支持类型：Code128，微信小程序端改为 type=2d 实现。

-   Qrcode 二维码 组件优化，微信小程序端改为 type=2d 实现。

-   Circle 圆形进度条 组件优化，微信小程序端改为 type=2d 实现。

-   Fab 浮动按钮 组件优化，增加按钮 openType 属性支持， openType 属性详见官网 button 按钮文档介绍。

-   Utils 工具 类组件优化，新增部分方法：生成随机颜色，金额转大写等。

-   ShareSheet 分享面板 组件优化，新增部分属性以及事件，详见文档。

-   Button 按钮 组件优化，新增部分属性以及事件，详见文档。

-   Vtabs 纵向选项卡 组件优化，新增 @scrolltolower 事件（仅 linkage=false 时有效）。

-   Select 选择器 组件优化，新增 @change 事件（仅 type=select 时有效）。

-   StatusBar 状态栏 组件优化，新增属性设置当 isFixed 为 true 时是否默认占位，防止高度塌陷，详见文档使用。

-   Table 表格 组件优化，修复值为 0 时重置成空的问题。

-   Tabbar 标签栏 组件优化，修复设置字体图标大小可能不居中的问题。

-   ActionSheet 上拉菜单 组件优化，部分逻辑调整。

-   BottomNavbar 底部导航栏 组件优化，部分逻辑调整。

-   DigitalKeyboard 数字键盘 组件优化，部分逻辑调整。

-   Footer 页脚 组件优化，部分逻辑调整。

-   Gallery 画廊 组件优化，部分逻辑调整。

-   LicensePlate 车牌号键盘 组件优化，部分逻辑调整。

-   SafeArea 底部安全区域组件优化，部分逻辑调整。

-   Select 选择器 组件优化，部分逻辑调整。

-   ShareSheet 分享面板 组件优化，部分逻辑调整。

-   Tabbar 标签栏 组件优化，部分逻辑调整。

-   Drawer 抽屉 组件优化，部分逻辑调整。

-   Modal 模态框 组件优化，部分逻辑调整。

-   BottomPopup 底部弹出层 组件优化，部分逻辑调整。

-   SegmentedControl 分段器 组件示例优化，新增自定义高度示例。

-   Lazyload 图片懒加载 组件优化修复已知问题。

-   Dialog 对话框 组件优化，默认标题改为 提示。

-   WhiteSpace 上下间距 组件优化，默认值调整为 8，16，24rpx。

-   Switch 开关选择器 组件优化，新增插槽支持设置圆形按钮内显示内容，仅 type=switch 有效，nvue 暂不支持。

-   DatePicker 日期时间选择器 组件优化，区间选择加入属性判断点击确认按钮是否自动赋值开始日期或结束日期，切换区间按钮显示对应开始日期时间或结束日期时间。

-   Poster 绘制分享海报 组件优化，绘制图片支持设置是否等比裁剪参数，来保证图片不会变形，详见文档。

-   Table 表格 组件优化，修复小程序端固定高度内容可能显示不全的问题。

-   Switch 开关 组件优化，修复小程序端底部出现间隙导致无法居中问题。

-   Request 网络请求 组件 优化，timeout 值调整，大于 2000ms 时生效。

-   全局配置文件（fui-config）调整。

-   修复其他已知问题。

#### V2.2.0（2023-11-09）

-   Poster 绘制分享海报 组件优化，新增支持绘制二维码，详见文档数据配置说明。

-   FormItem 表单项组件优化，结构调整，部分样式优化。

-   Input 输入框 组件优化，新增属性设置文本对齐方式，代替 textRight 属性。

-   Calendar 日历 组件优化，新增支持设置 badge 角标。

-   Icon 图标 组件优化，调整部分逻辑。

-   Tabbar 标签栏 组件优化，内置 fui-icon 图标组件，支持使用字体图标代替图片图标。

-   Input 输入框 组件优化，修复在选择模式下组件设置 disabled 时部分浏览器点击无法选择的问题。

-   Lottie 动画组件优化，修复已知问题。

-   SingleInput 单输入框组件优化，修复编译到支付宝小程序 Android 端无法输入的问题。

-   Form 组件优化，新增方法单独校验某个字段信息，新增方法清除所有校验信息（结合 FormItem 组件使用时有效），支持 rules 数据由 FormItem 组件传入。

-   FormItem 表单项组件优化，支持传入 rules 数据，新增部分方法，具体查看文档。

-   Animation 动画 组件 优化，修复已知问题。

-   FormItem 表单项组件优化，修复当不结合 Form 组件单独使用时报警告的问题。

-   HorizontalScroll 横向滚动的视图容器 组件优化，调整部分平台滚动条动画效果。

-   Input 输入框 组件优化，修复部分平台初始化设置默认值时 placeholder 未消失重叠的问题。

-   Textarea 多行输入框 组件优化，修复部分平台初始化设置默认值时 placeholder 未消失重叠的问题。

-   修复其他已知问题。

#### V2.1.0（2023-10-18）

-   新增 WhiteSpace 上下间距 组件。

-   新增 WingBlank 左右间距 组件。

-   Preview 表单预览 组件优化，按钮数据新增 disabled 属性控制是否禁用点击。

-   DataTag 标签选择 组件优化，新增 nowrap 属性设置标签列表是否强制一行显示（注：外层需自行加横向滚动容器）。

-   Utils 工具 类组件新增方法 formatTimeAgo（日期格式化为多久以前），如 刚刚，20 秒前，1 分钟前，3 天前，3 个月前等。

-   Form 表单校验 组件 与 FormItem 表单项组件优化，新增校验提示显示方式，当校验有错误时提示信息可显示在出错的 FormItem 项。

-   Picker 选择器 组件优化，新增默认插槽自定义标题部分显示内容。

-   IndexList 索引列表 组件优化，新增触底事件。

-   Skeleton 骨架屏 组件优化，支持在自定义组件内使用，需调用方法显示骨架，具体参考文档说明。

-   SwipeAction 滑动菜单 组件优化，新增属性设置点击按钮不立即关闭菜单。

-   Input 输入框 组件优化，新增属性 disabledStyle 设置是否启用禁用状态下的样式（与正常输入框样式略有区别）。

-   Textarea 多行输入框 组件优化，新增属性 disabledStyle 设置是否启用禁用状态下的样式（与正常多行输入框样式略有区别）。

-   Table 表格 组件优化，新增部分属性优化数据为空时显示状态。

-   Text 文本 组件优化，修复已知问题。

-   Steps 步骤条 组件优化，新增部分属性，调整部分样式显示。

-   ActionSheet 上拉菜单 组件优化，优化 nvue 端安全区域适配问题。

-   Tabbar 标签栏 组件优化，修复已知问题。

-   ShareSheet 分享面板 组件优化，优化 nvue 端安全区域适配问题。

-   SearchBar 搜索栏 组件优化，新增 fixed 属性。

-   Picker 选择器 组件优化，修复抖音小程序 change 事件可能不触发的问题。

-   DatePicker 日期时间选择器 组件优化，修复抖音小程序 change 事件可能不触发的问题。

-   Input 输入框 组件优化，修复已知问题。

-   Textarea 多行输入框 组件优化，修复已知问题。

-   全局配置文件（fui-config）调整。

-   修复其他已知问题。

#### V2.0.0（2023-07-17）

-   新增组件在 nvue 下使用示例 FirstUI-nvue，vue 版本示例保持不变，使用组件请先阅读文档提示，建议按文档提示使用。

-   DataTag 标签选择组件优化，change 事件新增返回 options 数据 item 项。

-   LoadAni 加载动画 组件优化，新增支持 nvue，使用方法一致，详见文档。

-   Calendar 日历 组件优化，新增属性设置最多可选天数，详见文档描述。

-   Preview 表单预览 组件优化，list 内容新增点击事件，并新增方法修改点击行的内容值，详见文档描述。

-   Badge 徽章 组件优化，修复传中文被截断的问题。

-   Picker 选择器 组件优化，nvue 下默认值设置逻辑调整，部分样式调整。

-   DatePicker 日期时间选择器 组件优化，nvue 下默认值设置逻辑调整，部分样式调整。

-   ImageCropper 图片裁剪 组件优化，调整部分数据类型，修复初始化传入图片位置可能显示不正确的问题。

-   Text 文本 组件优化，修复 nvue 端无法换行的问题。

-   Grid 宫格 组件优化，新增部分属性，修复 nvue 端数据过多可能导致不显示的问题。

-   Input 输入框 组件优化，修复 nvue 端 ios 无法输入的问题，此问题是由于解决 android 端点击事件无法冒泡导致。

-   Preview 表单预览 组件优化，修复 nvue 端内容文本可能不换行的问题。

-   Card 卡片 组件优化，调整 nvue 端部分属性。

-   Layout 栅格布局（fui-row）组件优化，修复.nvue 页面编译到非 app 页面布局排版不正确的问题。

-   Textarea 多行输入框 组件优化，调整部分逻辑。

-   Sticky 吸顶容器 组件优化，调整部分逻辑。

-   Spin 旋转动画组件优化，调整部分逻辑。

-   ShareSheet 分享面板 组件优化，调整部分逻辑。

-   Rate 评分 组件优化，调整部分逻辑，新增方法重置组件。

-   Loading 加载 组件优化，调整部分逻辑。

-   LoadMore 加载更多 组件优化，调整部分逻辑。

-   Lazyload 图片懒加载 组件优化，调整部分逻辑。

-   IndexList 索引列表 组件优化，调整部分逻辑。

-   HorizontalScroll 横向滚动的视图容器 组件优化，调整部分逻辑。

-   Fab 浮动按钮 组件优化，调整部分逻辑。

-   Drawer 抽屉 组件优化，调整部分逻辑。

-   Circle 圆形进度条 组件优化，调整部分逻辑。

-   Backdrop 遮罩层 组件优化，调整部分逻辑。

-   Cascader 级联选择器 组件优化，修复 nvue 下超出一屏可能无法滚动的问题。

-   Select 选择器 组件优化，调整部分样式。

-   Switch 开关 组件优化，修复已知问题。

-   SearchBar 搜索栏组件优化，搜索按钮文本传空则可隐藏此按钮。

-   Pagination 分页器 组件优化，修复已知问题。

-   Tabs 标签页 组件优化，修复已知问题。

-   Steps 步骤条 组件优化，修复已知问题。

-   Tag 标签 组件优化，新增属性设置是否需要边框。

-   Result 结果页 组件优化，修复已知问题。

-   Input 输入框 组件优化，修复 nvue 下获取焦点 focus 属性控制可能不生效的问题。

-   Textarea 多行输入框 组件优化，修复 nvue 下获取焦点 focus 属性控制可能不生效的问题。

-   Skeleton 骨架屏 组件优化，nvue 端加入动画效果。

-   优化部分已知问题。

#### V1.9.9（2023-06-25）

-   新增 [WEEX 文档](https://weex.firstui.cn/)，方便.nvue 开发 App 时查阅相关文档，更多文档可查看 uniapp 官方文档。

-   新增 Section 标题栏 组件。

-   新增 BannerArc 横幅底部圆弧 组件。

-   Select 选择器 组件优化，新增属性设置 options 数据中约定的 text 和 src 的 key 值。

-   Preview 表单预览 组件优化，新增属性设置内容文本对齐方式。

-   DatePicker 日期时间选择器 组件优化，最大值和最小值格式优化，支持传入年、年-月、年-月-日。

-   Tabbar 标签栏 组件优化，非 nvue 端新增属性设置是否返回异形屏底部安全区域固定高度。

-   Table 表格 组件优化，新增排序功能，详见示例程序以及文档说明。

-   Calendar 日历 组件优化，新增方法设置日历当前月份自定义描述内容。

-   Input 输入框 组件优化，修复安卓 nvue 端点击事件无法冒泡问题。

-   Footer 页脚 组件优化，修复小程序端样式警告问题。

-   Avatar 头像 组件优化，修复已知问题，图片缩放模式默认值调整。

-   SearchBar 搜索栏 组件优化，修复 H5 端可能需要点两次才能弹起键盘的问题。

-   SwipeAction 滑动菜单 组件优化，新增 marginTop、marginBottom 属性。

-   Loading 加载 组件优化，新增属性设置遮罩背景颜色。

-   ShareSheet 分享面板 组件优化，增加按钮 openType 属性支持， openType 属性详见官网 button 按钮文档介绍。

-   NavBar 导航栏 组件优化，新增属性设置当 isFixed 为 true 时是否默认占位，防止高度塌陷，详见文档使用。

-   Radio 单选框 组件优化，修复已知问题。

-   Preview 表单预览 组件优化，修复部分样式可能在 vue3 下不生效的问题。

-   Panel 面板 组件优化，修复部分样式可能在 vue3 下不生效的问题。

-   Layout 栅格布局 组件（fui-row）组件优化，修复部分样式可能在 vue3 下不生效的问题。

-   Table 表格 组件优化，修复已知问题。

-   Steps 步骤条 组件优化，修复已知问题。

-   Fab 浮动按钮 组件优化。

-   MovableView 可移动的视图容器 组件优化。

-   Input 输入框 组件优化，非 Nvue 端边框颜色默认可通过 css 变量修改。

-   Textarea 多行输入框 组件优化，非 Nvue 端边框颜色默认可通过 css 变量修改。

-   List 列表 组件优化。

-   Vtabs 纵向选项卡 组件优化。

-   Collapse 折叠面板 组件优化。

-   Lazyload 图片懒加载 组件优化，优化已知问题。

-   Waterfall 瀑布流 组件优化。

-   Drawer 抽屉 组件优化，修复 Nvue 端报错问题。

-   Picker 选择器 组件优化，修复已知问题。

-   DatePicker 日期时间选择器 组件优化，修复 nvue 端判断出错导致 change 事件未触发问题。

-   Input 输入框 组件优化，优化 type=number 时，增加安全整数的范围的判断。

-   Button 按钮 组件优化。

-   优化部分已知问题。

#### V2.3.0（2023-05-29）

-   新增 MovableView 可移动的视图容器 组件。

-   新增 HorizontalScroll 横向滚动的视图容器 组件。

-   全局配置 fui-config 新增部分内容，详见文档。

-   优化 vue3 下，Nvue 中使用 Vuex 的相关 API 报错的问题。

-   Waterfall 瀑布流 组件优化，新增属性设置图片高度。当图片高度已知且固定时可直接设置值，可有效缩短渲染时间。

-   Button 按钮 组件优化，优化 vue3 下结合原生表单提交问题。

-   FormField 表单数据传递 组件优化，移除 vue3 下 behaviors 限制。

-   CheckBox 复选框组件 优化，优化 vue3 下结合原生表单提交获取值问题。

-   Radio 单选框 组件优化，优化 vue3 下结合原生表单提交获取值问题。

-   Switch 开关 组件优化，移除 vue3 下 behaviors 限制。

-   Textarea 多行输入框 组件优化，移除 vue3 下 behaviors 限制。

-   Input 输入框 组件优化，移除 vue3 下 behaviors 限制。

-   Button 按钮 组件优化， 新增 btnSize 属性设置按钮大小，优先级高于 width 和 height 属性。

-   Form 表单校验 组件 与 FormItem 表单项组件优化，新增属性 labelWeight 设置 label 字重，默认使用全局配置。

-   Textarea 多行输入框 组件优化，属性 textareaBorder 为 true 时，支持设置边框颜色，支持设置圆角时显示边框。

-   Input 输入框 组件优化，属性 inputBorder 为 true 时，支持设置边框颜色，支持设置圆角时显示边框。

-   Rate 评分 组件优化，优化组件嵌套在 Drawer 抽屉 组件中使用时距离计算错误的问题，当使用非 FirstUI 抽屉组件时需调用 setParentWidth 方法修正，详见文档。

-   Picker 选择器 组件优化，修复已知问题。

-   DatePicker 日期时间选择器 组件优化，修复已知问题。

-   SearchBar 搜索栏 组件优化，新增默认插槽可自定左侧展示内容，如返回箭头。

-   OverflowHidden 内容超出隐藏 组件示例优化。

-   DatePicker 日期时间选择器 组件优化，区间选择时逻辑调整，未选则时点击确认按钮会默认赋值当前选项。

-   Table 表格 组件优化，新增多选功能，详见文档。

-   Avatar 头像 组件优化，新增 block 属性设置是否为块状元素，修复当为行内元素时外层容器底部可能出现间隙的问题。

-   Steps 步骤条 组件优化，新增属性设置当前步骤的状态及颜色，新增属性设置线条是否加粗。

-   Fab 浮动按钮 组件优化，新增属性 isDrag 设置是否可以拖拽移动位置。

-   Upload 图片上传 组件优化，新增扩展方法进行上传，为了更好的满足更多场景需求，详见文档及示例。

-   UploadVideo 视频上传 组件优化，新增扩展方法进行上传，为了更好的满足更多场景需求，详见文档及示例。

-   SearchBar 搜索栏 组件优化，修复 H5 及部分平台点击一次无法弹起键盘的问题，修复设置 value 值初始化错误的问题。

-   Gallery 画廊 组件优化，修复描述文本可能不显示的问题。

-   BubbleBox 气泡框 组件优化，right 属性默认值改为 0。

-   Select 选择器 组件优化，修复已知问题。

-   Alert 警告框 组件优化，Nvue 端 type 主色默认使用 fui-config 中配置的颜色。

-   Badge 徽章 组件优化，Nvue 端 type 主色默认使用 fui-config 中配置的颜色。

-   Button 按钮 组件优化，Nvue 端 type 主色默认使用 fui-config 中配置的颜色。

-   Calendar 日历 组件优化，主色默认使用 fui-config 中配置的颜色。

-   Cascader 级联选择器 组件优化，Nvue 端主色默认使用 fui-config 中配置的颜色。

-   CheckBox 复选框组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Circle 圆形进度条 组件优化，主色默认使用全局配置（fui-config）颜色。

-   CountdownVerify 验证码倒计时 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   DataTag 标签选择组件优化，主色默认使用全局配置（fui-config）颜色。

-   DatePicker 日期时间选择器 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Dialog 对话框 组件优化，主色默认使用全局配置（fui-config）颜色。

-   DigitalKeyboard 数字键盘 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   DigitalRoller 数字滚轮 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   DropdownList 下拉菜单 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   DropdownMenu 下拉菜单 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Fab 浮动按钮 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Footer 页脚 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Form 表单校验 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   FormItem 表单项组件优化，主色默认使用全局配置（fui-config）颜色。

-   IndexList 索引列表 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Input 输入框 组件优化，主色默认使用全局配置（fui-config）颜色。

-   LicensePlate 车牌号键盘 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Link 超链接 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   LoadMore 加载更多 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Modal 模态框 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   NoticeBar 通告栏 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Pagination 分页器 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Picker 选择器 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Progress 进度条 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   PuzzleVerify 滑块拼图验证 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Radio 单选框 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Rate 评分 组件优化，主色默认使用全局配置（fui-config）颜色。

-   Result 结果页 组件优化，Nvue 端 type 主色默认使用全局配置（fui-config）颜色。

-   RotateVerify 旋转验证 组件优化，主色默认使用全局配置（fui-config）颜色。

-   SearchBar 搜索栏 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   SegmentedControl 分段器 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Select 选择器 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   SingleInput 单输入框组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   SlideVerify 滑动验证 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Slider 滑块 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   SliderCaptcha 滑块拼图验证 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Steps 步骤条 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   SwipeAction 滑动菜单 组件优化，主色默认使用全局配置（fui-config）颜色。

-   SwiperDot 轮播图指示点组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Switch 开关 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Tabbar 标签栏 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Table 表格 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Tabs 标签页 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Tag 标签 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Text 文本 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Textarea 多行输入框组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   UploadVideo 视频上传 组件优化，主色默认使用全局配置（fui-config）颜色。

-   Vtabs 纵向选项卡 组件优化，Nvue 端主色默认使用全局配置（fui-config）颜色。

-   Icon 图标 组件优化，全局配置中新增 color 配置。

-   List 列表 组件优化，新增全局配置。

-   优化部分已知问题。

#### V1.9.5（2023-05-04）

-   新增 Link 超链接 组件。

-   新增 Lottie 动画组件。

-   快手小程序支持优化，文档相应调整。

-   Upload 图片上传 组件优化，新增属性设置边框，圆角值，加号字体大小等。

-   UploadVideo 视频上传 组件优化，新增属性设置边框，圆角值，加号字体大小等。

-   Text 文本 组件优化，新增 unShrink 属性，设置 flex 布局下取消收缩。

-   SingleInput 单输入框组件优化，修复已知问题。

-   Circle 圆形进度条 组件优化，修复 vue3 下编译到头条/抖音小程序不显示的问题。

-   Poster 绘制分享海报 组件优化，修复 vue3 下编译到头条/抖音小程序不显示的问题。

-   Qrcode 二维码 组件优化，修复 vue3 下编译到头条/抖音小程序不显示的问题。

-   Barcode 条形码 组件优化，修复 vue3 下编译到头条/抖音小程序不显示的问题。

-   Autograph 手写签名 组件优化，修复 vue3 下编译到头条/抖音小程序不显示的问题。

-   SliderCaptcha 滑块拼图验证 组件优化，修复 vue3 下编译到头条/抖音小程序不显示的问题。

-   DataTag 标签选择组件优化，新增属性设置默认边框颜色。

-   Pagination 分页器 组件优化，新增页码展示类型。

-   SwipeAction 滑动菜单 组件优化，修复已知问题。

-   Drag 拖拽排序 组件优化，修复 vue2 编译到 app 端初始化异常的问题。

-   ChatBar 聊天栏 优化，修复已知问题。

-   Circle 圆形进度条 组件优化，非 Nvue 端支持设置渐变色。

-   SearchBar 搜索栏 组件优化，新增 reset 方法，设置组件回到初始化状态。

-   SearchBar 搜索栏 组件优化，Nvue 端样式调整，修复 Nvue 端点击可能无法直接弹起键盘的问题。

-   Calendar 日历 组件优化，修复 Nvue 端可能不显示的问题。

-   SlideVerify 滑动验证 组件优化，修复 vue3 下非 nvue 运行到 app 端多次操作时滑动出现卡顿问题。

-   RotateVerify 旋转验证 组件优化，修复 vue3 下非 nvue 运行到 app 端多次操作时滑动出现卡顿问题。

-   SliderCaptcha 滑块拼图验证 组件优化，修复 vue3 下非 nvue 运行到 app 端多次操作时滑动出现卡顿问题。

-   PuzzleVerify 滑块拼图验证 组件优化，修复 vue3 下非 nvue 运行到 app 端多次操作时滑动出现卡顿问题。

-   Picker 选择器 组件优化，Nvue 端支持暗黑模式。

-   DatePicker 日期时间选择器 组件优化，Nvue 端支持暗黑模式。

-   Picker 选择器 组件优化，操作过快可能导致返回值更新不正确的问题，部分问题需更新开发工具版本至 Hbuilder X 3.7.13.20230411-alpha+。

-   Picker 选择器 组件优化，新增 isClose 属性设置点击确认按钮后是否立即关闭选择弹框，设置为 false 需要自行关闭（@change 事件中需要对选择值做校验时可使用）。

-   DatePicker 日期时间选择器 组件优化，新增 isClose 属性设置点击确认按钮后是否立即关闭选择弹框，设置为 false 需要自行关闭（@change 事件中需要对选择值做校验时可使用）。

-   Select 选择器 组件优化，属性（props） options 新增 disabled 属性控制是否禁用选择。

-   Barcode 条形码 页面示例优化，调整输入框值判断出错的问题（输入框 type=number 时返回的是 Number 类型值）。

-   Button 按钮 组件优化，新增小程序端部分事件，具体查看文档介绍。

-   Circle 圆形进度条 组件优化，修复 vue2 下 H5 端运行控制台报错的问题。

#### V1.9.1（2023-04-04）

-   SwipeAction 滑动菜单 组件优化，修复 Nvue 端滑动关闭时报错的问题。

-   InputNumber 数字输入框 组件优化，去除谷歌浏览器 pc 端自带默认箭头。

-   Select 选择器 组件优化，修复 Nvue 端编译部分机型可能会出现 header 高度不正确的问题。

-   Switch 开关 组件优化，修复 vue3 下编译到 H5 可能点击不能触发选中的问题。

-   Modal 模态框 组件优化，修复 Nvue 下 Android 端点击按钮不触发事件的问题。

-   SwipeAction 滑动菜单 组件优化，修复 vue3 下 H5 端禁用滑动失效的问题。

-   Drag 拖拽排序 组件优化，修复 vue3 下 wxs 方法无法与 data 数据混用导致事件失效的问题，此 bug 为 uni-app 编译问题，后续若官方修复再进行优化调整。

-   Select 选择器 组件优化，item 项图片新增属性设置背景色和裁剪、缩放方式。

-   Grid 宫格 组件优化，item 项（fui-grid-item）新增 click 事件，原 fui-grid 组件事件不变。

-   DatePicker 日期时间选择器 组件优化，修复设置 最小值（minDate）和 最大值（maxDate）显示不正确的问题。

-   BubbleBox 气泡框 组件优化，position 值为 absolute 时，支持设置 left（right）、top（bottom）值。

#### V1.9.0（2023-03-17）

-   新增 聊天模板 A，项目包含验证码登录、注册、选择国家或地区、输入验证码、聊天列表、聊天、联系人、个人中心、个人信息、通知等页面（物料）。

-   新增 聊天模板 B，项目包含小程序一键登录、手机号一键登录、手机验证码登录、聊天、首页、个人中心、我要合作、个人信息、支付状态、会员等页面（物料）。

-   FilterBar 筛选栏 组件优化，新增属性 coexist 设置 dropdown、text、switch 等类型筛选条件是否不互斥，可查看示例演示。

-   CheckBox 复选框组件优化，修复 vue3 下编译到 H5 可能点击不能触发选中的问题。

-   Radio 单选框 组件优化，修复 vue3 下编译到 H5 可能点击不能触发选中的问题。

-   Picker 选择器 组件优化，修复属性 value 传值为 Number 类型时出现警告的问题。

-   Tabs 标签页 组件优化，新增 center 属性设置底部滑块是否居中显示。

-   FormItem 表单项组件优化，新增 asteriskPosition 属性设置必填星号位置，新增 labelAlign 属性设置 label 对齐方式，默认使用全局配置。

-   Textarea 多行输入框组件优化，新增 radius 属性设置圆角值。

-   Input 输入框 组件 新增 passwod 类型示例，可显示或隐藏密码。

-   Layout 栅格布局 组件优化，修复 Nvue 端 css 编译报警告的问题。

-   DatePicker 日期时间选择器 组件优化，修复已知问题。

-   Tabs 标签页 组件优化，修复可能导致页面卡住不显示的问题。

-   IndexList 索引列表 组件优化，修复并优化已知问题。

-   SingleInput 单输入框组件优化，修复 nvue 中可能出现输入框无法获取焦点问题。

-   组件文档搜索优化，能快速定位到搜索内容。

-   修复其他已知问题。

#### V1.8.0（2023-01-31）

-   UploadVideo 视频上传 组件优化，修复 H5 端无法播放非 https 地址视频的问题。

-   Layout 栅格布局 组件优化，修复 Nvue 端 css 编译报错的问题。

-   Input 输入框 组件优化，修复 input 组件 type=digit 时，小数部分无法录入 0 问题。

-   Input 输入框 组件优化，App 与 H5 端 password 属性使用 v-bind 动态绑定，为 false 时，不添加 password 属性。

-   Input 输入框 组件优化， 新增 readonly 属性，与 disabled 不同的是 readonly 属性保留了清空按钮使用，readonly 优先级高于 disabled。

-   Form 表单校验 组件 与 FormItem 表单项优化，可在 Form 组件设置部分 props 统一控制 FormItem 中部分样式，优先级：FormItem 组件 props > Form 组件 props > 全局属性。

-   Picker 选择器 组件优化，修复多级联动选择时设置默认值可能部分列不生效问题。

-   DatePicker 日期时间选择器 组件优化，新增属性 valueEnd，优化区间选择时默认值设置，起始日期与结束日期默认值分别使用属性 value 与 valueEnd，设置默认值后可直接点击确认按钮返回。

-   Calendar 日历 组件优化，新增属性 isMultiple，用于控制是否一次性加载一年的日历数据。

-   Upload 图片上传 组件优化，新增默认插槽用于自定义上传加号图标。

-   UploadVideo 视频上传 组件优化，新增默认插槽用于自定义上传加号图标。

-   Switch 开关 组件优化。

-   Cascader 级联选择器 组件优化。

-   Drag 拖拽排序 组件优化，修复编译到微信小程序端内容超过一屏页面无法滚动的问题。

-   Avatar 头像 组件优化，新增图片加载出错时 @error 事件以及新增属性 errorSrc 配置图片加载失败时的默认图。

-   Table 表格 组件优化，修复 vue3 下事件未声明报警告的问题。

-   Table 表格 组件增加列渲染方法，可根据当前列数据设置单元格内的文本颜色。

-   Table 表格 header 属性增加 align 配置，优先级大于属性 align。

-   DataTag 标签选择组件优化，新增默认选中示例。

-   DataTag 标签选择组件优化，新增 multipleMin 属性，仅多选时有效，当选择数小于最小值时不可反选。

-   DataTag 标签选择组件优化，当 options 传值为对象数组时，对象中新增属性 isAll 可设置其中一个为全选按钮标签，与其他标签操作互斥，仅多选时有效。

-   Drawer 抽屉 组件优化，新增 radius 属性设置圆角值。

-   Modal 模态框 组件优化，修复已知问题，新增 padding 属性。

-   Tabs 标签页 组件优化，修复 vue3 + Nvue 下文字可能不显示的问题。

-   Request 网络请求 组件 优化，get 请求支持参数值为数组，详见文档。

-   Animation 动画 组件 属性 styles 参数传值优化，默认值写入组件方法内部，styles 仅做替换合并使用。

-   Textarea 多行输入框组件已知问题优化。

#### V1.7.0（2022-09-28）

-   新增 WATERFALL 瀑布流加载 布局内容（VIP）。

-   新增 TOP TAB 顶部选项卡 布局内容（VIP）。

-   新增 NEWS LIST 新闻列表 布局内容（VIP）。

-   新增 PRODUCT LIST 商品列表 布局内容（VIP）。

-   新增 MAP 地图 布局内容-线路规划（VIP）。

-   新增 ROLL HORIZONTAL 横向滚动 布局内容（VIP）。

-   新增 UploadVideo 视频上传 组件（VIP 组件）。

-   新增 FormItem 表单项 组件（VIP 组件）。

-   Label 标签 组件优化。

-   Card 卡片 组件优化，新增 footerLine 属性。

-   InputNumber 数字输入框 组件优化，修复最小值设为负数不生效的问题，新增 type 属性当设值为 text 则可输入负号小数点等。

-   Panel 面板 组件优化，新增属性配置数据源键值（key）。

-   Preview 表单预览 组件优化，新增属性配置数据源键值（key），修复部分兼容问题。

-   Input 输入框 组件优化，新增 min 和 max 属性，当 type=number、type=digit、number 属性为 true 时生效。

-   LicensePlate 车牌号键盘 组件优化，新增方法 changeKeyboard 切换键盘显示。

-   ImageCropper 图片裁剪 组件优化，修复已知 bug。

-   Grid 宫格 组件优化。

-   Textarea 多行输入框组件已知问题优化。

-   Input 输入框 组件已知问题优化。

-   Text 文本 组件优化，新增部分属性（props）。

-   Button 按钮 组件优化，修复 nvue 端样式 background 加!important 报错的问题。

-   Waterfall 瀑布流 组件优化，请参考【布局-瀑布流】示例做加载刷新操作。

-   DatePicker 日期时间选择器 组件优化，修复 type=1 时设置默认值失效的问题，修复区间选择设置起始日期文本出错的问题。

-   Landscape 压屏窗 组件优化，新增属性支持 absolute 定位，以便用于其他组件内。

-   Validator 表单验证（JS）组件优化，支持校验所有元素并返回所有错误信息。

-   Form 表单校验 组件优化，支持校验所有元素并返回所有错误信息。

-   Radio 单选框 组件优化，修复 Nvue 端 vue3 下可能显示不正确的问题。

-   Checkbox 复选框 组件优化，修复 Nvue 端 vue3 下可能显示不正确的问题。

-   Switch 开关 组件优化，修复 Nvue 端 vue3 下可能显示不正确的问题。

-   OverflowHidden 内容超出隐藏 组件优化，新增部分属性。

-   Lazyload 图片懒加载 组件优化，新增部分属性。

-   修复部分已知问题。

#### V1.6.0（2022-06-26）

-   新增组件全局配置，目前仅针对部分常用组件处理，详见文档 [全局配置]。

-   新增 Text 文本组件。

-   新增 spin 旋转动画组件（VIP 组件）。

-   新增 SafeArea 底部安全区域组件（VIP 组件）。

-   新增 DataTag 标签选择组件（VIP 组件）。

-   新增 SubmitBar 提交订单栏 布局内容（VIP）。

-   新增 GoodsBar 商品导航栏 布局内容（VIP）。

-   新增 ChatBar 聊天栏 布局内容（VIP）。

-   新增 RollNews 滚动消息 布局内容（VIP）。

-   新增 CardSwiper 卡片轮播 布局内容（VIP）。

-   BubbleBox 气泡框 组件优化，新增内容插槽（content），可自定义气泡框内容；新增属性 padding，用于调整气泡框内置内容 item 项 padding 值。

-   LoadMore 加载更多 组件优化，新增属性 state 控制组件显示状态。

-   Backdrop 遮罩层 组件优化，Nvue 端去除 v-if 使用，修复 fixed 定位时遮挡位置靠后的 fixed 元素问题；Nvue 端新增属性 full，当组件放置根元素下且为 absolute 定位时可设置遮罩铺满屏幕。

-   Poster 绘制分享海报 组件优化，修复编译到微信小程序功能失效的问题。

-   Qrcode 二维码 组件优化，修复编译到微信小程序功能失效的问题。

-   Barcode 条形码 组件优化，修复编译到微信小程序功能失效的问题。

-   Autograph 手写签名 组件优化，修复编译到微信小程序功能失效的问题。

-   Table 表格 组件优化，修复设置图片类型显示错误的问题。

-   Textarea 多行输入框组件优化，调整 maxlength 设为-1 时，双向绑定不生效的问题。

-   Button 按钮 组件优化，默认调整为细边框（0.5px）。

-   Picker 选择器 组件优化，修复已知问题。

-   DatePicker 日期时间选择器 组件优化，修复已知问题。

-   Badge 徽章 组件优化，修复 Nvue 端可能出现文本被截断的情况。

-   优化若干已知问题。

#### V1.5.0（2022-05-18）

-   新增 Vtabs 纵向选项卡 组件（VIP 组件）。

-   新增 PuzzleVerify 滑块拼图验证 组件（VIP 组件），此组件为 SliderCaptcha 滑块拼图验证 组件的功能补充。[详见](https://forum.firstui.cn/d/48)

-   新增 Drag 拖拽排序 组件（VIP 组件）。

-   新增 ImageCropper 图片裁剪 组件（VIP 组件）。

-   新增 Table 表格 组件（VIP 组件）。

-   Utils 工具 类组件新增函数节流方法使用案例。

-   Badge 徽章 组件优化，新增 max 属性，当值超过 max 时使用+号代替，仅为数字时有效。

-   SingleInput 单输入框组件优化，新增清空方法重置输入值（结合原生键盘时使用）。

-   Button 按钮 组件优化，修复微信小程序端@click 事件中调用 wx.getUserProfile 无效的问题以及在 subNVue 中点击事件失效的问题。

-   Form 表单校验 示例新增其他表单元素，满足更多表单需求。

-   Icon 图标 组件优化，新增支持自定义图标，详见文档说明。

-   DropdownMenu 下拉菜单 组件优化，支持 nvue。

-   Input 输入框 组件优化 ，新增 number 属性，修复 v-model.number 在小程序平台值未转化为 Number 类型问题。

-   修复 Grid 宫格 组件 ref 被误删除导致报错的问题。

-   修复并优化 Circle 圆形进度条 组件在 nvue 端出错的问题。

-   修复 vue2 下使用 wxs 初始化时可能报错的问题。

-   ActionSheet 上拉菜单 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   BottomNavbar 底部导航栏 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   BottomPopup 底部弹出层 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   DigitalKeyboard 数字键盘 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   Footer 页脚 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   Gallery 画廊 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   LicensePlate 车牌号键盘 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   Select 选择器 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   ShareSheet 分享面板 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   Tabbar 标签栏 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

-   BottomPopup 底部弹出层 组件优化，优化 Nvue 下设置顶部圆角值时 IOS 底部偶尔出现圆角的问题。

-   优化若干已知问题。

#### V1.4.0（2022-03-16）

-   新增 Circle 圆形进度条 组件（VIP 组件）。

-   新增 Skeleton 骨架屏 组件（VIP 组件）。

-   新增 CubicBezier 贝塞尔曲线 组件（VIP 组件）。

-   新增 SlideVerify 滑动验证 组件（VIP 组件）。

-   新增 RotateVerify 旋转验证 组件（VIP 组件）。

-   新增 SliderCaptcha 滑块拼图验证 组件（VIP 组件）。

-   新增 OverflowHidden 内容超出隐藏 组件（VIP 组件）。

-   新增 Backtop 回到顶部 组件（VIP 组件）。

-   新增 Lazyload 图片懒加载 组件（VIP 组件）。

-   新增 Waterfall 瀑布流 组件（VIP 组件）。

-   优化部分组件在 vue3 下显示异常，控制台报出警告的问题。

-   优化 Upload 图片上传 组件。新增属性设置删除图片时是否弹框确认；图片上传数到达限制数 max 时隐藏选择框。

-   修复 Preview 表单预览 组件改变数据页面不更新的 bug。

-   优化 Button 按钮 组件在 Nvue 以及 PC 中的点击效果。

-   优化 Card 卡片 组件在 Nvue 中样式显示不正确的问题。

-   优化 Message 消息提示 组件，部分 props 属性可在 show 方法中传值覆盖。

-   优化 Select 选择器 组件，修复单选时设置默认选中项无效的问题。

-   优化 CountDown 倒计时 组件，修复初始化传 0 触发倒计时结束事件的问题。

-   修复 Layout 栅格布局 组件属性 gutter 不生效的 bug。

-   修复 InputNumber 数字输入框 组件在 vue3 下 blur 事件未在 emits 中申明的问题。

-   优化若干已知问题。

#### V1.3.0（2021-12-31）

-   新增 Calendar 日历 组件（VIP 组件）。

-   新增 Cascader 级联选择器 组件（VIP 组件）。

-   新增 Slider 滑块 组件（VIP 组件）。

-   新增 Rate 评分 组件（VIP 组件）。

-   新增 Select 选择器 组件（VIP 组件）。

-   新增 Upload 图片上传 组件（VIP 组件）。

-   新增 Gallery 画廊 组件（VIP 组件）。

-   新增 BubbleBox 气泡框 组件（VIP 组件）。

-   新增 BottomNavbar 底部导航栏 组件（VIP 组件）。

-   新增 CountDown 倒计时 组件（VIP 组件）。

-   新增 CopyText 长按复制 组件（VIP 组件）。

-   新增 Timer 计时器 组件（VIP 组件）。

-   新增 Qrcode 二维码 组件（VIP 组件）。

-   新增 Barcode 条形码 组件（VIP 组件）。

-   新增 Autograph 手写签名 组件（VIP 组件）。

-   修复 Textarea 多行输入框 组件回车无法换行的问题。

-   优化 Request 网络请求 组件，新增加载中提示信息配置项。

-   优化 Icon 图标 组件，新增部分图标。

-   优化若干已知问题。

#### V1.2.0（2021-11-22）

-   新增 Tabbar 标签栏 组件（VIP 组件）。

-   新增 ActionSheet 上拉菜单 组件。

-   新增 Toast 轻提示 组件。

-   新增 Dialog 对话框 组件。

-   新增 DropdownMenu 下拉菜单 组件。

-   新增 DropdownList 下拉菜单 组件。

-   新增 Modal 模态框 组件（VIP 组件）。

-   新增 Landscape 压屏窗 组件（VIP 组件）。

-   新增 Message 消息提示 组件（VIP 组件）。

-   新增 BottomPopup 底部弹出层 组件。

-   新增 TopPopup 顶部弹出层 组件。

-   新增 Drawer 抽屉 组件。

-   新增 NoticeBar 通告栏 组件（VIP 组件）。

-   新增 TimeAxis 时间轴 组件（VIP 组件）。

-   新增 Steps 步骤条 组件（VIP 组件）。

-   新增 Progress 进度条 组件（VIP 组件）。

-   新增 Collapse 折叠面板 组件。

-   新增 SwiperDot 轮播图指示点 组件（VIP 组件）。

-   新增 DigitalRoller 数字滚轮 组件（VIP 组件）。

-   新增 DigitalKeyboard 数字键盘 组件（VIP 组件）。

-   新增 LicensePlate 车牌号键盘 组件（VIP 组件）。

-   新增 CountdownVerify 验证码倒计时 组件（VIP 组件）。

-   新增 Sticky 吸顶容器 组件（VIP 组件）。

-   新增 Fab 浮动按钮 组件（VIP 组件）。

-   新增 ShareSheet 分享面板 组件（VIP 组件）。

-   新增 FilterBar 筛选栏 组件（VIP 组件）。

-   新增 SwipeAction 滑动菜单 组件。

-   新增 Picker 选择器 组件（VIP 组件）。

-   新增 DatePicker 日期时间选择器 组件（VIP 组件）。

-   新增 门户模板（物料）。

-   优化掉部分组件中对头条小程序做兼容的冗余代码。

-   优化若干已知问题。

#### V1.1.0（2021-09-07）

-   调整组件对 vue3 支持与 uni-app 官方一致。

-   新增 Panel 面板 组件（VIP 组件）。

-   新增 Preview 表单预览 组件（VIP 组件）。

-   新增 Empty 缺省页 组件。

-   新增 SegmentedControl 分段器 组件。

-   新增 Pagination 分页器 组件。

-   新增 NavBar 导航栏 组件（VIP 组件）。

-   新增 Tabs 标签页 组件。

-   新增 Tag 标签 组件。

-   新增 Backdrop 遮罩层 组件。

-   新增 Result 结果页 组件（VIP 组件）。

-   新增 Avatar 头像 组件。

-   新增 Form 表单校验 组件（VIP 组件）。

-   新增 Validator 表单验证（JS）组件（VIP 组件）。

-   新增 SingleInput 单输入框 组件（VIP 组件）。

-   新增 IndexList 索引列表 组件（VIP 组件）。

-   新增 SearchBar 搜索栏 组件（VIP 组件）。

-   新增 登录（A）模板（物料）。

-   新增 登录（B）模板（物料）。

-   新增 登录（C）模板（物料）。

-   新增 登录（D）模板（物料）。

-   优化若干已知问题。

#### V1.0.0（2021-08-02）

-   新增 Color 色彩 ，First UI 用色指南。

-   新增 Icon 图标 组件，First UI 字体图标库。

-   新增 Button 按钮 组件。

-   新增 Footer 页脚 组件。

-   新增 Animation 动画 组件。

-   新增 StatusBar 状态栏 组件。

-   新增 Layout 栅格布局 组件（fui-row 和 fui-col）。

-   新增 Grid 宫格 组件（fui-grid 和 fui-grid-item）。

-   新增 List 列表 组件（fui-list 和 fui-list-cell）。

-   新增 Card 卡片 组件。

-   新增 Input 输入框 组件。

-   新增 InputNumber 数字输入框 组件。

-   新增 Label 标签 组件。

-   新增 FormField 表单数据传递 组件（微信/百度/QQ 小程序）。

-   新增 Radio 单选框 组件。

-   新增 Checkbox 复选框 组件。

-   新增 Switch 开关 组件。

-   新增 Textarea 多行输入框 组件。

-   新增 Loading 加载 组件。

-   新增 LoadAni 加载动画 组件（VIP 组件）。

-   新增 Badge 徽章 组件。

-   新增 Alert 警告框 组件。

-   新增 Divider 分割线 组件。

-   新增 LoadMore 加载更多 组件。

-   新增 Clipboard 复制文本 组件（VIP 组件）。

-   新增 Request 网络请求 组件（VIP 组件）。

-   新增 Utils 工具 类组件。

-   新增 Poster 绘制分享海报 组件（VIP 组件）。
