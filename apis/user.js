import http from '@/common/fui-request'
// 登录
export function login(data, loading, note) {
	return http.request({
		url: '/Login',
		method: 'post',
		data
	})
}

// 计划列表
export function OrderWork_DescribeByPage(data, loading, note) {
	return http.request({
		url: '/OrderWork/DescribeByPage',
		method: 'get',
		data
	})
}