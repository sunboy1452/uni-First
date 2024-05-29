import config from './config.js';

const install = (Vue, vm) => {
	Vue.prototype.$msg = function(title, duration = 2000, mask = false, icon = 'none') {
		if (!title) return;
		uni.showToast({
			title,
			duration,
			mask,
			icon
		});
	}
	Vue.prototype.$alert = function(content, callback, title = '温馨提示', showCancel = true) {
		uni.showModal({
			title: title,
			content: content,
			showCancel: showCancel,
			success(res) {
				if (res.confirm) {
					if (typeof callback === 'function') {
						callback();
					}
				} else if (res.cancel) {}
			}
		})
	}
	Vue.prototype.$config = config
	Vue.prototype.baseUrl = config.HTTP_REQUEST_URL
	Vue.prototype.log = function(e) {
		console.log(e)
	}
	Vue.prototype.$back = function() {
		uni.navigateBack()
	}
	Vue.prototype.$goHome = function() {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
	Vue.prototype.$goLogin = function() {
		uni.reLaunch({
			url: '/pages/my-sub/login'
		});
	}
	Vue.prototype.$link = function(url, type) {
		if (type == 1) {
			uni.switchTab({
				url: url
			})
		} else if (type == 2) {
			uni.reLaunch({
				url: url
			})
		} else {
			uni.navigateTo({
				url: url
			});
		}
	}

	Vue.prototype.getTime = function(time) { //年月日时分秒
		var now = new Date(time)
		var nian = now.getFullYear()
		var yue = (now.getMonth() + 1).toString().padStart(2, '0')
		var ri = now.getDate().toString().padStart(2, '0')
		var shi = now.getHours().toString().padStart(2, '0')
		var fen = now.getMinutes().toString().padStart(2, '0')
		var miao = now.getSeconds().toString().padStart(2, '0')
		return `${nian}-${yue}-${ri} ${shi}:${fen}:${miao}`
	}
}
export default {
	install
}