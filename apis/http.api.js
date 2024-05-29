import http from '@/common/fui-request'
import * as user from './user.js';

// api 接口管理
const install = (Vue, vm) => {
	Vue.prototype.$api = {
		user,
		api: (data) => http.request({
			url:data.url,
			method: data.method||'get',
			data: {
				...data.data
			}
		}),
	};
}
export default {
	install
}