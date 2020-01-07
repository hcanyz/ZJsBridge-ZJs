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
        windowz.zfJSBridge ? zfJSBridge.call(apiName, checkParams(params), function (ret) {
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

    var api = {
        config: function (e) {
            call("config", {}, (e._complete = function () {
                console.log("_complete config")
            }, e))
        }, setTitle: function (e) {
            call("setTitle", {
                title: e.title || ""
            }, e)
        }, backCloseWindow: function (e) {
            call("backCloseWindow", {
            }, e)
        }, closeWindow: function (e) {
            call("closeWindow", {
            }, e)
        }, putLocalStorageKV: function (e) {
            call("putLocalStorageKV", {
                key: e.key || "",
                value: e.value || ""
            }, e)
        }, getLocalStorageKV: function (e) {
            call("getLocalStorageKV", {
                key: e.key || ""
            }, e)
        },

        choosePhotos: function (e) {
            call("choosePhotos", {
                enableCount: e.enableCount || (e.enableCount == undefined ? 0 : e.enableCount)
            }, e)
        },
        uploadPhotos: function (e) {
            call("uploadPhotos", {
                nativeResourceUrls: e.nativeResourceUrls || []
            }, e)
        },
        previewPhotos: function (e) {
            call("previewPhotos", {
                urls: e.urls || [],
                index: e.index || (e.index == undefined ? 0 : e.index)
            }, e)
        },

        chooseVideos: function (e) {
            call("chooseVideos", {
                enableCount: e.enableCount || (e.enableCount == undefined ? 0 : e.enableCount)
            }, e)
        },
        uploadVideos: function (e) {
            call("uploadVideos", {
                nativeResourceUrls: e.nativeResourceUrls || []
            }, e)
        },
        previewVideo: function (e) {
            call("previewVideo", {
                url: e.url || ""
            }, e)
        },

        chooseFile: function (e) {
            call("chooseFile", {
                enableCount: e.enableCount || (e.enableCount == undefined ? 0 : e.enableCount),
                maxSize: e.maxSize || (e.maxSize == undefined ? 0 : e.maxSize),
                isMultiSelect: e.isMultiSelect || (e.isMultiSelect == undefined ? true : e.isMultiSelect)
            }, e)
        },
        uploadFile: function (e) {
            call("uploadFile", {
                nativeResourceUrls: e.nativeResourceUrls || []
            }, e)
        },
        previewFile: function (e) {
            call("previewFile", {
                url: e.url || ""
            }, e)
        },

        chooseLocation: function (e) {
            call("chooseLocation", {
            }, e)
        },
        getLocation: function (e) {
            call("getLocation", {
            }, e)
        },
        previewLocation: function (e) {
            call("previewLocation", {
            }, e)
        },
    }
    return open && (windowz.zfApi = api), api
})