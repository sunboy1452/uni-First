import http from '@/common/fui-request'
// 计划列表
export function OrderWork_DescribeByPage(data, loading, note) {
	return http.request({
		url: '/OrderWork/DescribeByPage',
		method: 'get',
		data
	})
}