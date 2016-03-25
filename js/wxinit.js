$(function() {
	var u = window.location.href
	var c = GetQueryString("code")
	var openid
	$.get("http://tswx.tv2stb.com/jsapi/uac", {
			url: u,
			code: c
		},
		function(res) {
			openid = res.openid
			var aid = res.appid
			var ts = res.timestamp
			var ns = res.noncestr
			var sign = res.signature
			init(aid, ts, ns, sign)
	},'json')


	function init(appid, timestamp, noncestr, signature) {
		wx.config({
			debug: false, 			// 开启调试模式
			appId: appid, 			// 第三方app唯一标识
			timestamp: timestamp, 	// 生成签名的时间戳
			nonceStr: noncestr, 	// 生成签名的随机串
			signature: signature, 	// 签名
			jsApiList: [			// API LIST
				"onMenuShareTimeline",
				"onMenuShareAppMessage",
				"onMenuShareQQ",
				"onMenuShareWeibo",
				"onMenuShareQZone",
				"startRecord",
				"stopRecord",
				"onVoiceRecordEnd",
				"playVoice",
				"pauseVoice",
				"stopVoice",
				"onVoicePlayEnd",
				"uploadVoice",
				"downloadVoice",
				"chooseImage",
				"previewImage",
				"uploadImage",
				"downloadImage",
				"translateVoice",
				"getNetworkType",
				"openLocation",
				"getLocation",
				"hideOptionMenu",
				"showOptionMenu",
				"hideMenuItems",
				"showMenuItems",
				"hideAllNonBaseMenuItem",
				"showAllNonBaseMenuItem",
				"closeWindow",
				"scanQRCode",
				"chooseWXPay",
				"openProductSpecificView",
				"addCard",
				"chooseCard",
				"openCard"
			]
		})
	}

	//jsapi ready callback
	wx.ready(function(res) {

	})
})
