<template>
	<view>
		<cl-tab :tabs="tabs" :height="100" name="name" :sliderWidth="40" :current="currentTab" color="#282828"
			@change="currentTabchange" selectedColor="#465cff" sliderBgColor="#465cff" :bold="true" isSticky :size="30"
			:unlined="true" v-if="tabs.length">
		</cl-tab>
		<view class="card"  v-for="(item, index) in list" :key="index">
			<view class="p-20">
				计划时间
			</view>
			<view class="p-20">
				计划时间
			</view>
			<view class="p-20">
				计划时间
			</view>
			<view class="p-20">
				计划时间
			</view>
		</view>

		<cl-loadmore :status="loadmore_status" v-if="list && list.length >= 1"></cl-loadmore>
		<template v-if="list && list.length == 0">
			<fui-empty src="/static/images/ph_order_empty.png" title="暂无相关数据"></fui-empty>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params: {
					Size: 20,
					Current: 1
				},
				list: undefined,
				loadmore_status: 1,
				tabs: [{
					name: '待发货',
					id: 1
				}, {
					name: '已发货',
					id: 2
				}],
				currentTab: 0
			};
		},
		onLoad(options) {
			this.getPage(1);
		},
		mounted() {

		},
		//页面下来刷新
		onPullDownRefresh() {
			this.getPage(1);
		},
		//页面上拉触底
		onReachBottom() {
			this.params.Current++;
			this.loadmore_status = 2;
			this.getPage();
		},
		methods: {
			getPage(pageNum) {
				if (pageNum) {
					this.params.Current = pageNum;
					uni.showLoading({
						title: '加载中...',
						mask: true
					});
				}
				this.$api.user.OrderWork_DescribeByPage({
					...this.params,
					loading: pageNum == 1 ? true : false
				}).then(res => {
					let list = res.List || [];
					if (list.length == 0) {
						this.loadmore_status = 3;
						this.params.page--;
					} else {
						this.loadmore_status = 1;
					}
					if (pageNum == 1) {
						this.list = [];
						this.list = list;
					} else {
						// 如果是下拉加载
						this.list = this.list.concat(list);
					}
					uni.stopPullDownRefresh();
					uni.hideLoading();
				});
			},
			currentTabchange(e) {
				this.currentTab = e.index;
				this.getPage(1);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.card {
		width: 710rpx;
		background: #ffffff;
		border-radius: 12rpx;
		margin: 20rpx 20rpx 0 20rpx;
	}
</style>