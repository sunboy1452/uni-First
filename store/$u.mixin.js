// $u.mixin.js
import {
	mapState
} from 'vuex'
import store from "@/store"
import config from '@/common/config.js';
// 尝试将用户在根目录中的store/index.js的vuex的state变量，全部加载到全局变量中
let $uStoreKey = [];
try {
	$uStoreKey = store.state ? Object.keys(store.state) : [];
} catch (e) {}
module.exports = {
	created() {

	},
	computed: {
		// 将vuex的state中的所有变量，解构到全局混入的mixin中
		...mapState($uStoreKey)
	},
	data() {
		return {
			BarHeight: 20,
			windowHeight: 623,
			uploadUrl: '',
		};
	},
	watch: {},
	onLoad(options) {
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					this.BarHeight = res.statusBarHeight;
					this.windowHeight = res.windowHeight;
				}
			});
		}, 0);
		this.uploadUrl = config.baseUrl + '/file'
	},
	onShow(options) {},
	methods: {
		// 史诗级挂载
		setStore(name, value) {
			this.$store.commit('$uStore', {
				name,
				value
			})
		},
		getListName(list, num, id, name) {
			if (!list) {
				list = []
			}
			if (!id) {
				id = 'id'
			}
			if (!name) {
				name = 'name'
			}
			for (var i = 0; i < list.length; i++) {
				if (list[i][id] == num.toString()) {
					return list[i][name]
					break
				}
			}
		},
		isWeixin() {
			return navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1;
		}
	},
}
