<template>
	<view class="">
		<view class="h-20"></view>
		<fui-list-cell @click="$link('/pages/demo/cl-bottom-area')">
			<text style="min-width: 180rpx;">cl-bottom-area</text>
			<text class="f-28 text-909399"></text>
		</fui-list-cell>
		<fui-list-cell @click="$link('/pages/demo/cl-icon')">
			<text style="min-width: 180rpx;">cl-icon</text>
			<text class="f-28 text-909399"></text>
		</fui-list-cell>
		<fui-list-cell @click="$link('/pages/demo/page')">
			<text style="min-width: 180rpx;">刷新加载</text>
			<text class="f-28 text-909399"></text>
		</fui-list-cell>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped></style>
