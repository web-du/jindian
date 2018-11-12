
// const API_ROOT = 'https://www.jindianim.com';
const API_ROOT = 'https://uat.jindianim.com';
// const API_ROOT = 'https://app.jindianim.com';

const URL_TYPE = {
	'ADMIN': 'admin',
	'USER': 'user',
	'PUBLIC': 'public',
	'FILE': 'file'
}
const URL_METHOD = {
	GET: 'get',
	POST: 'post',
}
const urls={
	/*********通用类接口**********/
	getCategoryAndTag: {
		path: '/rpc?clazz=ApiCommonController&method=getCategoryAndTag',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '获取书签列表'
	},

    getIndexSearchParams: {
		path: '/rpc?clazz=ApiCommonController&method=getIndexSearchParams',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '获取删选条件'
	},

    sendVerifyCode: {
		path: '/rpc?clazz=ApiCommonController&method=sendVerifyCode',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '发送验证码 手机/邮箱'
	},
	/*********通用类接口**********/


	/**********书籍类接口***********/
	getSearchList: {
		path: '/rpc?clazz=ApiBookController&method=getSearchList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '用户登录'
	},

	getMyEvaluateList: {
		path: '/rpc?clazz=ApiBookController&method=getKeywordSearchList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '关键字搜索'
	},

    getHotSearchKeyword: {
		path: '/rpc?clazz=ApiBookController&method=getHotSearchKeyword',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '搜索热搜词'
	},

	getBookInfo: {
		path: '/rpc?clazz=ApiBookController&method=getBookInfo',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '书籍详情'
	},

	getAuthorBooks: {
		path: '/rpc?clazz=ApiBookController&method=getAuthorBooks',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '获取作者数据'
	},

	getSimilarBooks: {
		path: '/rpc?clazz=ApiBookController&method=getSimilarBooks',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '获取同类书籍'
	},
	getAuthorBooksMore: {
		path: '/rpc?clazz=ApiBookController&method=getAuthorBooksMore',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '获取作者书籍更多'
	},

    getPopularList: {
		path: '/rpc?clazz=ApiIndexController&method=getPopularList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '畅销精选'
	},

    getNewRecommendList: {
		path: '/rpc?clazz=ApiIndexController&method=getNewRecommendList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '签约新作'
	},

    getEditorRecommendList: {
		path: '/rpc?clazz=ApiIndexController&method=getEditorRecommendList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '编辑推荐'
	},

    getLatestUpdateList: {
		path: '/rpc?clazz=ApiIndexController&method=getLatestUpdateList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '最近更新'
	},

    getBookFansRankList: {
		path: '/rpc?clazz=ApiBookController&method=getBookFansRankList',
		type: URL_TYPE.USER,
		method: URL_METHOD.GET,
		commonts: '获取书籍粉丝排行'
	},





	/**********获取排行接口***********/
    getRankList: {
        path: '/rpc?clazz=ApiIndexController&method=getRankList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取排行榜'
    },

	/**********获取免费类接口***********/
    getNewFreeList: {
        path: '/rpc?clazz=ApiIndexController&method=getNewFreeList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '新书免费'
    },
    getLimitFreeList: {
        path: '/rpc?clazz=ApiIndexController&method=getLimitFreeList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '限时免费'
    },

    getBestFreeList: {
        path: '/rpc?clazz=ApiIndexController&method=getBestFreeList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '免费精品'
    },

    /**********全本接口***********/
    getBestEndList: {
        path: '/rpc?clazz=ApiIndexController&method=getBestEndList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '完结金榜'
    },

    getRecentEndList: {
        path: '/rpc?clazz=ApiIndexController&method=getRecentEndList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取最新完结'
    },

    /**********发现接口***********/
    getSearchRankList: {
        path: '/rpc?clazz=ApiIndexController&method=getSearchRankList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '大家都在搜'
    },

    getBoyFavoriteList: {
        path: '/rpc?clazz=ApiIndexController&method=getBoyFavoriteList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取男生最爱'
    },

    getGirlFavoriteList: {
        path: '/rpc?clazz=ApiIndexController&method=getGirlFavoriteList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取女生最爱'
    },






    /***********评论类接口************/
	getCommentList: {
		path: '/rpc?clazz=ApiCommentController&method=getCommentList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '获取评论列表'
	},

    addPraise: {
		path: '/rpc?clazz=ApiCommentController&method=addPraise',
		type: URL_TYPE.USER,
		method: URL_METHOD.GET,
		commonts: '评论点赞/点踩'
	},

    addComment: {
		path: '/rpc?clazz=ApiCommentController&method=addComment',
		type: URL_TYPE.USER,
		method: URL_METHOD.GET,
		commonts: '评论发表/回复'
	},


    getCommentDetail: {
		path: '/rpc?clazz=ApiCommentController&method=getCommentDetail',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '查询评论详情'
	},

    /***********书评类接口************/
	getReviewList: {
		path: '/rpc?clazz=ApiReviewController&method=getReviewList',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '书论区'
	},

    reviewAddPraise: {
		path: '/rpc?clazz=ApiReviewController&method=addPraise',
		type: URL_TYPE.USER,
		method: URL_METHOD.GET,
		commonts: '书评点赞/点踩'
	},

    addReview: {
		path: '/rpc?clazz=ApiReviewController&method=addReview',
		type: URL_TYPE.USER,
		method: URL_METHOD.GET,
		commonts: '书评发表/回复'
	},

    getReviewDetail: {
		path: '/rpc?clazz=ApiReviewController&method=getReviewDetail',
		type: URL_TYPE.PUBLIC,
		method: URL_METHOD.GET,
		commonts: '书评详情'
	},


    /***********用户类接口************/
    login: {
        path: '/rpc?clazz=ApiUserController&method=login',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '登录'
    },

    getAccountCoin: {
        path: '/rpc?clazz=ApiUserController&method=getAccountCoin',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取当前余额'
    },

    getAccountInfo: {
        path: '/rpc?clazz=ApiUserController&method=getAccountInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '帐户基本信息'
    },

    getCommentMessageList: {
        path: '/rpc?clazz=ApiMessageController&method=getCommentMessageList',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取消息列表'
    },

    getMessageTypeInfo: {
        path: '/rpc?clazz=ApiMessageController&method=getMessageTypeInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取通知列表'
    },

    getFansValList: {
        path: '/rpc?clazz=ApiUserController&method=getFansValList',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取我的粉丝列表'
    },

    getUserTaskInfo: {
        path: '/rpc?clazz=ApiUserController&method=getUserTaskInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '我的任务'
    },

    getSignState: {
        path: '/rpc?clazz=ApiUserController&method=getSignState',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取签到状态'
    },

    signToday: {
        path: '/rpc?clazz=ApiUserController&method=signToday',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '签到'
    },

    bindEmail: {
        path: '/rpc?clazz=ApiUserController&method=bindEmail',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '绑定邮箱'
    },

    modifyPassword: {
        path: '/rpc?clazz=ApiUserController&method=modifyPassword',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '修改密码'
    },

    findPassword: {
        path: '/rpc?clazz=ApiUserController&method=findPassword',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '找回密码'
    },

    getAppSetting: {
        path: '/rpc?clazz=ApiUserController&method=getAppSetting',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取APP设置'
    },

    updateAppSetting: {
        path: '/rpc?clazz=ApiUserController&method=updateAppSetting',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '更新APP设置'
    },

    getAppReadSetting: {
        path: '/rpc?clazz=ApiUserController&method=getAppReadSetting',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取阅读设置'
    },

    updateAppReadSetting: {
        path: '/rpc?clazz=ApiUserController&method=updateAppReadSetting',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '更新阅读设置'
    },

    getMembershipInfo: {
        path: '/rpc?clazz=ApiUserController&method=getMembershipInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取会员中心信息'
    },

    getBindState: {
        path: '/rpc?clazz=ApiUserController&method=getBindState',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取邮箱绑定状态'
    },

    getUserInfo: {
        path: '/rpc?clazz=ApiUserController&method=getUserInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取用户资料'
    },

    updateUserInfo: {
        path: '/rpc?clazz=ApiUserController&method=updateUserInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '修改用户资料'
    },

    uploadAvatar: {
        path: '/rpc?clazz=ApiUserController&method=uploadAvatar',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '上传用户头像'
    },

    getAutoSubscribeState: {
        path: '/rpc?clazz=ApiUserController&method=getAutoSubscribeState',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取自动订阅状态'
    },

    updateAutoSubscribeState: {
        path: '/rpc?clazz=ApiUserController&method=updateAutoSubscribeState',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '设置自动订阅'
    },

    getChargeRecordList: {
        path: '/rpc?clazz=ApiUserController&method=getChargeRecordList',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '充值记录'
    },

    getPayRecordList: {
        path: '/rpc?clazz=ApiUserController&method=getPayRecordList',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '消费记录'
    },

    getPrizeDrawTimes: {
        path: '/rpc?clazz=ApiUserController&method=getPrizeDrawTimes',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取抽奖次数'
    },

    getPrizeList: {
        path: '/rpc?clazz=ApiUserController&method=getPrizeList',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取抽奖奖品列表'
    },

    getPrizeDrawResult: {
        path: '/rpc?clazz=ApiUserController&method=getPrizeDrawResult',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取抽奖结果'
    },

    getMessageListByType: {
        path: '/rpc?clazz=ApiMessageController&method=getMessageListByType',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取通知详情'
    },

    deleteMessages: {
        path: '/rpc?clazz=ApiMessageController&method=deleteMessages',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '删除消息'
    },

    getUserAgreement: {
        path: '/rpc?clazz=ApiCommonController&method=getUserAgreement',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取用户协议'
    },


    /***********作者类接口************/
    getBookList: {
        path: '/rpc?clazz=ApiAuthorController&method=getBookList',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取作品列表'
    },

    getAuthorMessageTypeInfo: {
        path: '/rpc?clazz=ApiAuthorController&method=getMessageTypeInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取作家通知'
    },

    getAuthorMessageListByType: {
        path: '/rpc?clazz=ApiAuthorController&method=getMessageListByType',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取作家通知详情'
    },



    /***********书架类接口************/
    getBookShelfIndex: {
        path: '/rpc?clazz=ApiCollectController&method=getBookShelfIndex',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '书架书籍列表'
    },

    addFavorite: {
        path: '/rpc?clazz=ApiCollectController&method=addFavorite',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '收藏加入书架'
    },

    deleteFavorite: {
        path: '/rpc?clazz=ApiCollectController&method=deleteFavorite',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '删除收藏'
    },

    /***********打赏接口************/
    getGiftList: {
        path: '/rpc?clazz=ApiCommonController&method=getGiftList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取打赏列表'
    },

    addRewardGift: {
        path: '/rpc?clazz=ApiPayController&method=addRewardGift',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '打赏作者'
    },

    /***********支付接口************/
    createAlipayOrder4App: {
        path: '/rpc?clazz=ApiPayController&method=createAlipayOrder4App',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '创建支付宝订单'
    },

    /***********阅读接口************/
    getReadInfo: {
        path: '/rpc?clazz=ApiBookController&method=getReadInfo',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取书籍阅读详情'
    },

    getChapterContent: {
        path: '/rpc?clazz=ApiBookController&method=getChapterContent',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '阅读下一章/上一章'
    },

    addBookMark: {
        path: '/rpc?clazz=ApiBookController&method=addBookMark',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '添加书签'
    },

    getBookMarkList: {
        path: '/rpc?clazz=ApiBookController&method=getBookMarkList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取书签列表'
    },

    deleteBookMark: {
        path: '/rpc?clazz=ApiBookController&method=deleteBookMark',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '删除标签'
    },

    getBookCatalog: {
        path: '/rpc?clazz=ApiBookController&method=getBookCatalog',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '书籍目录'
    },

    getChapterContentByPercent: {
        path: '/rpc?clazz=ApiBookController&method=getChapterContentByPercent',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '百分比获取书籍章节'
    },

    getChapterSubscribeInfo: {
        path: '/rpc?clazz=ApiPayController&method=getChapterSubscribeInfo',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取章节订阅费用'
    },

    subscribeChapter: {
        path: '/rpc?clazz=ApiPayController&method=subscribeChapter',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '订阅章节'
    },

    getAutoSubscribeState: {
        path: '/rpc?clazz=ApiUserController&method=getAutoSubscribeState',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '获取是否自动订阅'
    },

    updateAutoSubscribeState: {
        path: '/rpc?clazz=ApiUserController&method=updateAutoSubscribeState',
        type: URL_TYPE.USER,
        method: URL_METHOD.GET,
        commonts: '更新是否自动订阅'
    },

    reportChapter: {
        path: '/rpc?clazz=ApiBookController&method=reportChapter',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '举报章节'
    },

    getApplepayProductList: {
        path: '/rpc?clazz=ApiPayController&method=getApplepayProductList',
        type: URL_TYPE.PUBLIC,
        method: URL_METHOD.GET,
        commonts: '获取苹果支付产品价格'
    },

}



//
// const myHttp = {
//     ajax(options) {
//         var url = API_ROOT + options.url;
//         var successCallback = options.success || function (res) {
//         };
//         var params = options.params;
//         $.ajax({
//             type: "POST",
//             data: params,
//             async: true,
// 			headers:options.headers,
//             dataType: "json",
//             url: url,
//             contentType: "text/plain",
//
//             beforeSend: function (res) {
//                 // res.setRequestHeader("jd-token", "Chenxizhang");
//             },
//             success: function (res) {
//                 successCallback(res);
//             },
//             error: function (res) {
//                 //console.log(res)
//
//             }
//         });
//     },
//     get(options) {
//
//     },
//     post(options) {
//
//     },
// }



function myHttp(options){
    var url = API_ROOT + options.url;
    var params = options.params;
    var successCallback = options.success || function (res) {};
    $.ajax({
        type: "POST",
        data: params,
        async: true,
        headers:options.headers,
        dataType: "json",
        url: url,
        contentType: "text/plain",
        beforeSend: function (res) {
            // res.setRequestHeader("jd-token", "Chenxizhang");
        },
        success: function (res) {
            successCallback(res);
        },
        error: function (res) {
            //console.log(res)
        }
    });
}




 function getQueryString(url,name) {
    var reg = new RegExp("([^|&]|[^|?])" + name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    var arr=[];
    var turl = null;
    if(reg.test(url)){
        turl = (reg.exec(url));
    }else if(reg_rewrite.test(url)){
        turl = (reg_rewrite.exec(url));
    }

    for(var i in turl){
        arr[i] = turl[i];
    }
    return (arr[2]);
}

function tojson(arr){
	if(!arr.length) return null;

	var i = 0;
	len = arr.length,
	array = [];
	for(;i<len;i++){
		array.push({"projectname":arr[i][0],"projectnumber":arr[i][1]});
	}
	return JSON.stringify(array);

}


//加载分页
if (!NeuF) var NeuF = {};
NeuF.ScrollPage = function (obj, options, callback) {
    var _defaultOptions = { delay: 500, marginBottom: 50 };
    options = $.extend(_defaultOptions, options);
    this.isScrolling = false; //是否在滚动
    this.oriPos = 0; //原始位置
    this.curPos = 0; //当前位置
    var me = this; //顶层
    var $obj = (typeof obj == "string") ? $("#" + obj) : $(obj);

    $obj.scroll(function (ev) {
        me.curPos = $obj.scrollTop();
        if ($(window).height() + $(window).scrollTop() >= $(document.body).height() - options.marginBottom) {
            if (me.isScrolling == true) return;
            me.isScrolling = true;
            setTimeout(function () { me.isScrolling = false;}, options.delay); //重复触发间隔毫秒;
            if (typeof callback == "function") callback.call(null, me.curPos - me.oriPos);
        };
        me.oriPos = me.curPos;
    });
};


var u = navigator.userAgent, app = navigator.appVersion;
// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
if(!NATIVE) var NATIVE = {};

//一级页面跳转首页
NATIVE.toIndex2 = function (){
    if(isiOS){
        ToHome(1);
    }else{
        jindianwebjs.ToHome(1);
    }
}

//其他子页面跳转首页
NATIVE.toIndex = function (){
    if(isiOS){
        TaskToHome(1);
    }else{
        jindianwebjs.TaskToHome(1);
    }
}

//关闭webview 首页进入其他h5返回时调用
NATIVE.closeWinView = function (){
    if(isiOS){
        closeWinView(false);
    }else{
        jindianwebjs.closeWinView(false);
    }

}

//设置亮度 i : 0-255
NATIVE.saveScreenBrightness = function (i){
    if(isiOS){
        saveScreenBrightness(i);
    }else{
        jindianwebjs.saveScreenBrightness(i);
    }
}

//设置系统自动亮度
NATIVE.startAutoBrightness = function (){
    if(isiOS){
        startAutoBrightness()
    }else{
        jindianwebjs.startAutoBrightness();
    }

}

//跳转到个人中心
NATIVE.toAccount = function (){
    if(isiOS){
        toAccount();
    }else{
        jindianwebjs.toAccount();
        //window.history.back();
    }
}

//跳转登录页面
NATIVE.toLogin = function (){
    if(isiOS){
        ToLogin();
    }else{
        jindianwebjs.ToLogin();
    }
}

//登出
NATIVE.outLogin = function (){
    if(isiOS){
        OutLogin();
    }else{
        jindianwebjs.OutLogin();
    }
}

//微信支付
NATIVE.wechatpay = function (amount){
    if(parseFloat(amount)<=0){
        myAlert('请输入正确的充值金额');
        return false;
    }
    if(isiOS){
        wechatpay(parseFloat(amount));
    }else{
        jindianwebjs.wechatpay(parseFloat(amount));
    }
}

//支付宝支付
NATIVE.alipay = function (amount){
    if(parseFloat(amount)<=0){
        myAlert('请输入正确的充值金额');
        return false;
    }
    if(isiOS){
        alipay(parseFloat(amount));
    }else{
        //myAlert("尚哲浩需要加的alert："+amount);
        jindianwebjs.alipay(parseFloat(amount));
    }
}

//apple支付
NATIVE.appleyPay = function (id,amount){
    if(parseFloat(amount)<=0){
        myAlert('请输入正确的充值金额');
        return false;
    }
    if(isiOS){
        // myAlert("尚哲浩需要加的alert："+amount);
        appleyPay(id,parseFloat(amount));
    }else{
        jindianwebjs.appleyPay(id,parseFloat(amount));
    }
}



var winurl = window.location.href ;
var accessToken = getQueryString(winurl, 'accessToken') ;
if(accessToken =='undefined'){
    accessToken = '';
}


document.write("<script language=javascript src='../js/layer.js'></script>");
document.write('<div class="loading" style="display: none;" ><img src="../images/loading.gif"></div>');


function myAlert(msg){
    layer.msg(msg,{time:0.5*1000});
    //console.log(123);
}

//跳转到指定页面
function locationUrl(url,hasParam){
    if(hasParam){
        window.location.href=url+"&accessToken="+accessToken;
    }else{
        window.location.href=url+"?accessToken="+accessToken;
    }
    return false;
    if(isiOS){
        pushPage(url);
    }else if(isAndroid){
        jindianwebjs.pushPage(url);
    }else{
        if(hasParam){
            window.location.href=url+"&accessToken="+accessToken;
        }else{
            window.location.href=url+"?accessToken="+accessToken;
        }
    }


}

var Clih = document.documentElement.clientHeight || document.body.clientHeight;
$(function(){
    var headerH = $(".myheader").height();
    var overH = Clih - headerH;
    document.getElementsByClassName("loading")[0].style.height = overH + "px";
    document.getElementsByClassName("loading")[0].style.top = headerH + "px";
})


