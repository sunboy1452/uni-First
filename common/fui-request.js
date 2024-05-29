import http from "@/components/firstui/fui-request";
import $config from "@/common/config.js";
import store from "@/store";
//初始化请求配置项
http.create({
    host: $config.baseUrl,
    header: {
        "content-type": "application/json",
    },
});
//请求拦截
let configData = {};
http.interceptors.request.use((config) => {
    configData = config;
    if (store.state.TOKEN) {
        config.header = {
            // 'token': store.state.TOKEN || '84e80ef7284b4f07a11c75b89b913462'
        };
    }
    //请求之前可在请求头中加入token等信息
    if (config.data.loading === false) {
        config.showLoading = false;
    } else {
        config.showLoading = true;
    }
    return config;
});
//响应拦截
http.interceptors.response.use((res) => {
    if ($config.debug) {
        var obj = Object.assign(configData.data, configData.params);
        console.log(
            "%c--------【" +
                configData.url +
                "】【" +
                configData.method +
                "】【" +
                res.statusCode +
                "】【" +
                configData.note +
                "】--------",
            "color: #aa00ff;font-size: 12px;font-weight: bold;"
        );
        console.log("【请求参数】", obj);
        console.log("【返回结果】", res.data);
    }

    if (res.statusCode == 200 || res.statusCode == 201) {
        let result = res.data;
        return result || {};
    } else if (res.statusCode == 401) {
        uni.reLaunch({
            url: "/pages/my-sub/login",
        });
    } else {
        let result = res.data;

        uni.showToast({
            title: result.Message || "服务正在来的路上,请稍后再试",
            duration: 3000,
            icon: "none",
        });
        return Promise.reject(result || {});
    }
});

export default http;
