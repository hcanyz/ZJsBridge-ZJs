! function (windowz, n) {
    n(windowz, !0)
}(window, function (windowz, open) {
    /**
     * 调用zfJSBridge执行api
     * @param {String} apiName 
     * @param {Any} params 
     * @param {
     *    success:((res:String)->Unit)?,
     *    fail:((res:String)->Unit)?)?
     *    cancel:((res:String)->Unit)?)?
     *    complete:((res:String)->Unit)?)? 操作完成后一定会调用
     * } callBack res对象包括 errCode errMsg
     */
    function call(apiName, params, callBack) {
        windowz.zfJSBridge ? windowz.zfJSBridge.call(apiName, checkParams(params), function (ret) {
            callBack._complete && callBack._complete(ret) || delete callBack._complete

            var errCode = ret && ret['errCode']
            switch (errCode) {
                case 0:
                    callBack.success && callBack.success(ret)
                    break
                case 1:
                    callBack.cancel && callBack.cancel(ret)
                    break
                default:
                    callBack.fail && callBack.fail(ret)
                    break
            }
            callBack.complete && callBack.complete(ret)
        }) : defCall(apiName, callBack)
    }

    function checkParams(params) {
        return params || {}
    }

    function defCall(apiName, callBack) {
        callBack.complete && callBack.complete()
        console.log("zfJSBridge not found ," + apiName)
    }

    function on(eventName, callBack) {
        windowz.zfJSBridge ? windowz.zfJSBridge.on(eventName, function (ret) {
            callBack(ret)
        }) : defOn(eventName, callBack)
    }

    function defOn(eventName, callBack) {
        callBack.complete && callBack.complete()
        console.log("zfJSBridge not found ," + eventName)
    }

    var api = {
        _test_unicode_params_and_result: function (e) {
            call("_test_unicode_params_and_result", {
                unicodeParams: e.unicodeParams || ""
            }, e)
        }
    }
    return open && (windowz.zfTestApi = api), api
})