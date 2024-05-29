<template>
	<view>
		<fui-input :bottomLeft="0" borderTop placeholder="请输入文本" v-model="name_search"></fui-input>

		<fui-grid>
			<fui-grid-item v-for="(item, index) in list.data.filter(data => !name_search || data.includes(name_search))"  :key="index">
				<view class="flex-direction justify-center align-center bg-fff h-full" @click="copy(item)">
					<cl-icon :type="item" class="p-10" :size="34"></cl-icon>
					<view class="f-20 " style="max-width: 200rpx;">{{ item }}</view>
				</view>
			</fui-grid-item>
		</fui-grid>
	</view>
</template>
<script>
import uniCopy from '@/js_sdk/xb-copy/uni-copy.js';
export default {
	data() {
		return { list: { data: [] }, name_search: '' };
	},
	methods: {
		copy(content) {
			console.log(content);
			uniCopy({
				content: content,
				success: res => {
					uni.showToast({
						title: res,
						icon: 'none'
					});
				},
				error: e => {
					uni.showToast({
						title: e,
						icon: 'none',
						duration: 3000
					});
				}
			});
		}
	},
	mounted() {
		this.list = {
			data: [
				'icon-duoshanghupc-shuomingdanchuang',

				'icon-duoshanghupc-daohuotongzhi',

				'icon-duoshanghupc-baozhang',

				'icon-dianpu',

				'icon-dengjitubiao',

				'icon-daifahuo-xingerenzhongxin',

				'icon-erweima-xingerenzhongxin',

				'icon-quanbudingdan-xingerenzhongxin',

				'icon-xiaoxi-xingerenzhongxin',

				'icon-daipingjia-xingerenzhongxin',

				'icon-a-shouhoutuikuan-xingerenzhongxin',

				'icon-daifukuan-xingerenzhongxin',

				'icon-fapiao2',

				'icon-shouhou-tuikuan-lan',

				'icon-daipingjia-lan',

				'icon-daishouhuo-lan',

				'icon-daifukuan-lan',

				'icon-daifahuo-lan',

				'icon-daifahuo-ju',

				'icon-daifukuan-ju',

				'icon-daishouhuo-ju',

				'icon-shouhou-tuikuan-ju',

				'icon-daipingjia-ju',

				'icon-daishouhuo-fen',

				'icon-daipingjia-fen',

				'icon-daifukuan-fen',

				'icon-a-shouhoutuikuan-fen',

				'icon-daifahuo-fen',

				'icon-daifahuo-lv',

				'icon-shouhou-tuikuan-lv',

				'icon-daifukuan-lv',

				'icon-daishouhuo-lv',

				'icon-daipingjia-lv',

				'icon-daishouhuo',

				'icon-daipingjia',

				'icon-daifahuo',

				'icon-daifukuan',

				'icon-a-shouhoutuikuan',

				'icon-gouwuche-yangshi1',

				'icon-gouwuche-yangshi2',

				'icon-rilitubiao',

				'icon-tishi1',

				'icon-daituihuo1',

				'icon-shenqingzhong',

				'icon-fanyong',

				'icon-zizhizhengjian',

				'icon-fenxiaodengji',

				'icon-yijujue',

				'icon-tuikuanzhong1',

				'icon-tuikuanshibai',

				'icon-tuikuanchenggong',

				'icon-tuikuanzhong11',

				'icon-yiwancheng',

				'icon-yituikuan1',

				'icon-tuikuan1',

				'icon-tuihuo',

				'icon-shenhe',

				'icon-shangchuantupian1',

				'icon-shouye7',

				'icon-shengqian',

				'icon-xiaolian1',

				'icon-fangda',

				'icon-dianjichoujiang',

				'icon-7jinianban',

				'icon-lingquyouhuiquananniu',

				'icon-qiandaochenggonganniu',

				'icon-s-xianshimiaosha',

				'icon-s-pintuan1',

				'icon-s-kanjia1',

				'icon-s-pingguo',

				'icon-s-weixindenglu1',

				'icon-s-yanzhengmadenglu1',

				'icon-s-mimadenglu1',

				'icon-s-yanzhengma',

				'icon-pengyouquan',

				'icon-jifenzhongxin',

				'icon-s-chongzhijilu',

				'icon-s-xiaofeijilu',

				'icon-s-zhangdanjilu',

				'icon-s-kefu',

				'icon-s-bianji',

				'icon-s-pintuan',

				'icon-s-kanjia',

				'icon-s-miaosha',

				'icon-fanhui1',

				'icon-kefu3',

				'icon-shouye6',

				'icon-chakanditu',

				'icon-haowuquan1',

				'icon-haowuquan',

				'icon-gengduozhankai1',

				'icon-biaoqing2',

				'icon-huashu1',

				'icon-tupian2',

				'icon-huifang',

				'icon-zhibozhong',

				'icon-huangguan3',

				'icon-huiyuan2',

				'icon-fapiao1',

				'icon-cha3',

				'icon-shezhi1',

				'icon-tianjia1',

				'icon-bianji3',

				'icon-jiahao2',

				'icon-shanchu3',

				'icon-fuzhikouling',

				'icon-kefujiedai',

				'icon-miaosha1',

				'icon-bianji2',

				'icon-qingkonghuancun',

				'icon-shijian1',

				'icon-wenhao1',

				'icon-zhanghaomima',

				'icon-erweima2',

				'icon-guanji',

				'icon-tupian1',

				'icon-biaoqing1',

				'icon-guanbi5',

				'icon-shengyinjingyinxianxing',

				'icon-shengyinyinliang',

				'icon-pingjia1',

				'icon-xialazhankai',

				'icon-cha2',

				'icon-fanhuishouye',

				'icon-gengduo3',

				'icon-fenxiang1',

				'icon-sousuo5',

				'icon-huiyuan1',

				'icon-gou',

				'icon-gouwuche6',

				'icon-you1',

				'icon-zuo1',

				'icon-vip12',

				'icon-youhuiquan1',

				'icon-kefu21',

				'icon-yue1',

				'icon-huiyuanzhongxin',

				'icon-kanjiajilu',

				'icon-dizhixinxi',

				'icon-wodetuiguang',

				'icon-wodeshoucang',

				'icon-huidaodingbu1',

				'icon-saoyisao',

				'icon-jiageshaixuanshang',

				'icon-jiageshaixuanxia',

				'icon-shouji1',

				'icon-gengduo2',

				'icon-cha1',

				'icon-fasong',

				'icon-gengduozhankai',

				'icon-biaoqing',

				'icon-huashu',

				'icon-tupian',

				'icon-mima',

				'icon-zhanghao',

				'icon-fanhui',

				'icon-jinru2',

				'icon-shangpinxinxi',

				'icon-tuichu',

				'icon-jiaoyidingdan',

				'icon-sousuo4',

				'icon-xuanzhong5',

				'icon-VIP2',

				'icon-pinzhong',

				'icon-hanghuo',

				'icon-zhifa',

				'icon-dijia',

				'icon-gerenzhongxin-xuanzhong',

				'icon-xuanzhong4',

				'icon-zanwumiaosha',

				'icon-shangchuantupian',

				'icon-fuwu',

				'icon-tuikuantishi',

				'icon-erweima-youxia',

				'icon-erweimabianjiao',

				'icon-weixindenglu1',

				'icon-zhanghaodenglu1',

				'icon-shangjiashijian',

				'icon-jiageshaixuan',

				'icon-gengduofenlei',

				'icon-weixuan',

				'icon-xuanzhong11',

				'icon-pingjia',

				'icon-guanbi4',

				'icon-pinzhongqiquan',

				'icon-dijiachangxuan',

				'icon-zhengpinhanghuo',

				'icon-dizhi-tianjia',

				'icon-shanchu2',

				'icon-yue',

				'icon-weixinzhifu1',

				'icon-shangpinshuliang-jian',

				'icon-shangpinshuliang-jia',

				'icon-xuanzhong3',

				'icon-dizhixiala',

				'icon-jinru1',

				'icon-shenqingtuikuan',

				'icon-peihuo',

				'icon-xiadan',

				'icon-wancheng',

				'icon-fukuan',

				'icon-fahuo',

				'icon-saoma',

				'icon-tishi',

				'icon-xiala2',

				'icon-VIP1',

				'icon-yishoucang',

				'icon-shoucang2',

				'icon-kefu2',

				'icon-fapiao',

				'icon-fapiaoguanli',

				'icon-jinru',

				'icon-sousuo3',

				'icon-dingbu-gouwuche',

				'icon-huidaodingbu',

				'icon-cedaohang-gouwuche',

				'icon-weixin4',

				'icon-lianxikefu',

				'icon-zuo-miaosha',

				'icon-you-miaosha',

				'icon-zuo',

				'icon-you',

				'icon-shoucangbenzhan',

				'icon-lianxishangjia',

				'icon-dingwei',

				'icon-fenlei2',

				'icon-wode',

				'icon-shouye5',

				'icon-gouwuche5',

				'icon-jianhao1',

				'icon-jiahao1',

				'icon-yanzhengma1',

				'icon-shouji',

				'icon-cha',

				'icon-shoujihao',

				'icon-qiye',

				'icon-yonghu3',

				'icon-yanzhengma',

				'icon-shangpin',

				'icon-qiandao2',

				'icon-yaoqing',

				'icon-tuihuozhong',

				'icon-shenhezhong1',

				'icon-daituihuo',

				'icon-yihexiao',

				'icon-yijujue1',

				'icon-gengduo1',

				'icon-tuikuan',

				'icon-xiaoxi',

				'icon-erweima1',

				'icon-kefu1',

				'icon-guanzhu',

				'icon-xiangji',

				'icon-zhuyi-copy',

				'icon-pingfen',

				'icon-yingyongAPP_o',

				'icon-yizhan_o',

				'icon-shaixuan',

				'icon-shangjiadingdan',

				'icon-shouye4',

				'icon-jinbi2',

				'icon-jinbi',

				'icon-zuobiao',

				'icon-jianhao',

				'icon-jiahao',

				'icon-zhibojieshux',

				'icon-zhibo',

				'icon-VIP',

				'icon-tuiguang',

				'icon-geren1',

				'icon-gouwuche4',

				'icon-fenlei1',

				'icon-shouye3',

				'icon-geren',

				'icon-gouwuche3',

				'icon-fenlei',

				'icon-shouye2',

				'icon-mzshopping',

				'icon-gongneng',

				'icon-gerenzhongxin-copy',

				'icon-shouye1-copy',

				'icon-gerenzhongxin',

				'icon-shouye1',

				'icon-gouwuche2',

				'icon-fenleiyemian',

				'icon-gouwuche2-copy',

				'icon-fenleiyemian-copy',

				'icon-tonghua',

				'icon-youjian',

				'icon-dadianhua01',

				'icon-paihang',

				'icon-weizhi',

				'icon-paihang1',

				'icon-shuoming1',

				'icon-dianhau',

				'icon-shijian',

				'icon-huabanfuben',

				'icon-jian',

				'icon-jia',

				'icon-xiugai',

				'icon-anniu_jiantouzhankai_o',

				'icon-jiantou_xiayiye_o',

				'icon-jiantou_shangxiaqiehuan_o',

				'icon-shangxiazhankai_o',

				'icon-dianhua_o',

				'icon-yunshangchuan_o',

				'icon-bingtu_o',

				'icon-baoguo_huanbaohe_o',

				'icon-baoguo_quxiaoshouhuo_o',

				'icon-baoguo_shouhuo_o',

				'icon-baoguo_lingjian_o',

				'icon-baoguo_shouna_o',

				'icon-xianxiazhifu',

				'icon-icon_im_keyboard',

				'icon-tupian-',

				'icon-icon_im_face',

				'icon-yuezhifu',

				'icon-yuezhifu1',

				'icon-weixinzhifu',

				'icon-zhifubao',

				'icon-haibao',

				'icon-weixin3',

				'icon-crmeb1',

				'icon-crmeb',

				'icon-xuanzhong2',

				'icon-shujutongji',

				'icon-xiangxishuju',

				'icon-gengduo',

				'icon-up',

				'icon-yonghu2',

				'icon-zhinengkefu-',

				'icon-xiangshang1',

				'icon-xiangxia2',

				'icon-code_',

				'icon-code_1',

				'icon-phone_',

				'icon-xiala',

				'icon-shezhi',

				'icon-bianji1',

				'icon-shoucang1',

				'icon-jiazai',

				'icon-2',

				'icon-tuandui',

				'icon-jinbi1',

				'icon-guanbi3',

				'icon-wenti',

				'icon-ziyuan-xianxing',

				'icon-yonghu1',

				'icon-dingdan',

				'icon-suozi',

				'icon-quanxianguanlisuozi',

				'icon-lingxing',

				'icon-miaosha',

				'icon-hebingxingzhuang',

				'icon-kanjia1',

				'icon-qiandai',

				'icon-tongji',

				'icon-erweima',

				'icon-icon34',

				'icon-yinhangqia',

				'icon-yituikuan',

				'icon-tuikuanzhong',

				'icon-sousuo2',

				'icon-caidan',

				'icon-icon25201',

				'icon-shitixing',

				'icon-kongxinxing',

				'icon-pintuanchenggong',

				'icon-pintuanshibai',

				'icon-laba',

				'icon-xiaolian',

				'icon-kanjia',

				'icon-shuoming',

				'icon-mingxi',

				'icon-tishengfenzhi',

				'icon-guanbi2',

				'icon-yuandianxiao',

				'icon-webicon318',

				'icon-tianjiadizhi',

				'icon-shanchu',

				'icon-weixin2',

				'icon-icon-test',

				'icon-guanbi1',

				'icon-shoucang',

				'icon-kefu',

				'icon-biankuang',

				'icon-zhuangshixian',

				'icon-jishuzhichi',

				'icon-xuanzhong1',

				'icon-weixuanzhong',

				'icon-xiangshang',

				'icon-xiangxia',

				'icon-cuxiaoguanli',

				'icon-shanchu1',

				'icon-caigou-xianxing',

				'icon-caigou',

				'icon-yingyongchengxu-xianxing',

				'icon-yingyongchengxu',

				'icon-shouye',

				'icon-shouye-xianxing',

				'icon-yonghu-xianxing',

				'icon-yonghu',

				'icon-sousuo',

				'icon-sousuo1',

				'icon-kefu_o',

				'icon-liwu_o',

				'icon-huobiliu_o',

				'icon-jinbi_o',

				'icon-gerentouxiang_o',

				'icon-qunzu_o',

				'icon-shoucang_o',

				'icon-didiandingwei_o',

				'icon-xiangyou',

				'icon-jingpintuijian',

				'icon-xinpin',

				'icon-remen',

				'icon-xiangzuo',

				'icon-ditu',

				'icon-guanbi',

				'icon-liulan',

				'icon-shenhezhong',

				'icon-chongzhi',

				'icon-iconfontguanbi',

				'icon-zhekou',

				'icon-duihao2',

				'icon-duihao',

				'icon-jingyanzhi',

				'icon-wuliu',

				'icon-pintuan-copy',

				'icon-arrow',

				'icon-pintuan',

				'icon-youhuiquan',

				'icon-gouwuche1',

				'icon-pailie',

				'icon-tupianpailie',

				'icon-xiazai5',

				'icon-weixin1',

				'icon-gouwuche',

				'icon-jiantou',

				'icon-huiyuan',

				'icon-xuanzhong',

				'icon-complete',

				'icon-xiala1',

				'icon-dizhi',

				'icon-weixin',

				'icon-fenxiang',

				'icon-bianji',

				'icon-huangguan',

				'icon-huangguan1',

				'icon-huangguan2'
			]
		};
	}
};
</script>

<style></style>
