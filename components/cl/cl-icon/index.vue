<template>
	<view :class="'iconfont ' + type" :style="{ color: color, 'line-height': size + 'rpx', 'font-size': size + 'rpx' }" @click="_onClick" />
</template>

<script>
export default {
	name: 'UniIcon',
	props: {
		type: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#303133'
		},
		size: {
			type: [Number, String],
			default: 32
		}
	},
	methods: {
		_onClick() {
			this.$emit('click');
		}
	}
};
</script>

<style>
@import './iconfont.css';
.iconfont {
	display: inline-block;
	font-weight: 400;
}
</style>
