<template>
	<view class="">
		<view
			class="area"
			:style="{
				height: height
			}"
		></view>
		<view
			class="cl-bottom-area-box"
			@touchmove.stop.prevent="() => {}"
			:style="{
				backgroundColor: bgColor
			}"
			:class="{
				'u-border-top': borderTop
			}"
		>
			<view
				class="cl-bottom-area"
				:style="{
					height: height
				}"
			>
				<slot></slot>
			</view>
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
			default: '120rpx'
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
.area {
	width: 100%;
	box-sizing: border-box;
	padding-bottom: env(safe-area-inset-bottom);
}
.cl-bottom-area-box {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 0 25rpx;
	background: #fff;
	z-index: 1000;
	box-sizing: border-box;
	padding-bottom: env(safe-area-inset-bottom);
}
.cl-bottom-area {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
