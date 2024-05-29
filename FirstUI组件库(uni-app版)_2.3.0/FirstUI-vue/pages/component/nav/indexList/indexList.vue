<template>
  <view class="fui-wrap">
    <view class="fui-page__hd">
      <view class="fui-page__title fui-align__center" @tap="vip"
        >IndexList
        <image src="/static/images/index/light/icon_member_3x.png"></image>
      </view>
      <view class="fui-page__desc"
        >IndexList 索引列表，用于通讯录、城市选择的索引选择器。</view
      >
    </view>
    <view class="fui-page__bd">
      <fui-button
        type="gray"
        btn-size="medium"
        text="基础使用"
        bold
        :margin="['24rpx']"
        @click="href(1)"
      >
      </fui-button>
      <fui-button
        type="gray"
        btn-size="medium"
        text="带选择操作"
        bold
        @click="href(2)"
      >
      </fui-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容");
    },
    href(type) {
      let url =
        type == 1 ? "../indexList-A/indexList-A" : "../indexList-B/indexList-B";
      this.fui.href(url);
    },
  },
};
</script>

<style>
.fui-page__bd {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>