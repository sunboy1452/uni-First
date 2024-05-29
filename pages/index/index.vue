
<template>
  <view class="fui-wrap">
    <view class=""> TOKEN :{{ TOKEN }} </view>
    <view>
      {{ new Date() | dayjs1 }}
    </view>
    <view class="">
      {{ dayjs1(new Date()) }}
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad(options) {},
  onShow() {},
  methods: {},
  onShareAppMessage() {},
};
</script>

<style lang="scss" scoped>
</style>