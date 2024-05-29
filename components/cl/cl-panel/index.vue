<template>
	<view class="cl-panel">
		<view class="cl-panel-hd">
			<slot name="head"></slot>
		</view>
		<view class="cl-panel-body">
			<slot></slot>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		gap: {
			type: Boolean,
			default: true
		},
		// 整个tabbar的背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// tabbar的高度，默认50px，单位任意，如果为数值，则为rpx单位
		height: {
			type: [String, Number],
			default: '100rpx'
		},
		// 是否显示顶部的横线
		borderTop: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.cl-panel {
	background-color: #fff;
	overflow: hidden;
	border-top-left-radius: 12rpx;
	border-top-right-radius: 12rpx;
	border-bottom-left-radius: 12rpx;
	border-bottom-right-radius: 12rpx;
}
</style>
