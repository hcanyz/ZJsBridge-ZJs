import SHA1 from 'sha1'

var _dgtVerifyRandomStr = "${_dgtVerifyRandomStr}"

window.__zf = window.__zf || (function () {
    let eventer = (eventName, params) => {
        let ret = {
            msgType: "event",
            eventName,
            params
        }

        let retStr = window.btoa(JSON.stringify(ret))

        window.zfJSBridge._handleMessageFromZF(JSON.stringify({
            jsonMessage: retStr,
            shaKey: SHA1(retStr + _dgtVerifyRandomStr).toString()
        }))
    }

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            eventer("onContainerPause", { test: "test onContainerPause data" })
        }
        if (document.visibilityState === 'visible') {
            eventer("onContainerResume", { test: "test onContainerResume data" })
        }
    });

    return {
        _sendMessage: function (msgStr) {
            var msg = JSON.parse(msgStr)
            var realMsg = JSON.parse(msg.jsonMessage)

            var ret = {
                msgType: "callback",
                callbackId: realMsg.callbackId
            }

            if (SHA1(msg.jsonMessage + _dgtVerifyRandomStr).toString() != msg.shaKey) {
                ret.params = {
                    errCode: "99999999"
                }
            } else {
                switch (realMsg.apiName) {
                    case "config":
                        ret.params = {
                            errCode: 0
                        }
                        break
                    case "setTitle":
                        document.title = realMsg.params.title
                        ret.params = {
                            errCode: 0
                        }
                        break
                    case "backCloseWindow":
                        history.back()
                        ret.params = {
                            errCode: 0
                        }
                        break
                    case "closeWindow":
                        window.close()
                        ret.params = {
                            errCode: 0
                        }
                        break
                    case "putLocalStorageKV":
                        localStorage.setItem(realMsg.params.key, realMsg.params.value)
                        ret.params = {
                            errCode: 0
                        }
                        break
                    case "getLocalStorageKV":
                        ret.params = {
                            errCode: 0,
                            value: localStorage.getItem(realMsg.params.key)
                        }
                        break

                    case "choosePhotos":
                        if (realMsg.params.enableCount > 0) {
                            ret.params = {
                                errCode: 0,
                                result: []
                            }
                            for (let index = 0; index < 5; index++) {
                                ret.params.result.push({
                                    nativeResourceUrl: "assets/logo.png",
                                    name: "logo.png",
                                    size: "123"
                                })
                            }
                        } else {
                            ret.params = {
                                errCode: 1
                            }
                        }
                        break
                    case "uploadPhotos":
                        ret.params = {
                            errCode: 0,
                            result: []
                        }
                        for (const key in realMsg.params.nativeResourceUrls) {
                            ret.params.result.push({
                                nativeResourceUrl: realMsg.params.nativeResourceUrls[key],
                                serverResourceUrl: realMsg.params.nativeResourceUrls[key]
                            })
                        }
                        break
                    case "previewPhotos":
                        ret.params = {
                            errCode: 0,
                        }
                        break

                    case "chooseVideos":
                        if (realMsg.params.enableCount > 0) {
                            ret.params = {
                                errCode: 0,
                                result: []
                            }
                            for (let index = 0; index < 5; index++) {
                                ret.params.result.push({
                                    nativeResourceUrl: "assets/logo.png",
                                    name: "logo.png",
                                    size: 123,
                                    videoTime: 123
                                })
                            }
                        } else {
                            ret.params = {
                                errCode: 1
                            }
                        }
                        break
                    case "uploadVideos":
                        ret.params = {
                            errCode: 0,
                            result: []
                        }
                        for (const key in realMsg.params.nativeResourceUrls) {
                            ret.params.result.push({
                                nativeResourceUrl: realMsg.params.nativeResourceUrls[key],
                                serverResourceUrl: realMsg.params.nativeResourceUrls[key]
                            })
                        }
                        break
                    case "previewVideo":
                        ret.params = {
                            errCode: 0,
                        }
                        break

                    case "chooseFile":
                        if (realMsg.params.enableCount > 0) {
                            ret.params = {
                                errCode: 0,
                                result: []
                            }
                            for (let index = 0; index < 5; index++) {
                                ret.params.result.push({
                                    nativeResourceUrl: "assets/logo.png",
                                    name: "logo.png",
                                    size: "123"
                                })
                            }
                        } else {
                            ret.params = {
                                errCode: 1
                            }
                        }
                        break
                    case "uploadFile":
                        ret.params = {
                            errCode: 0,
                            result: []
                        }
                        for (const key in realMsg.params.nativeResourceUrls) {
                            ret.params.result.push({
                                nativeResourceUrl: realMsg.params.nativeResourceUrls[key],
                                serverResourceUrl: realMsg.params.nativeResourceUrls[key]
                            })
                        }
                        break
                    case "previewFile":
                        ret.params = {
                            errCode: 0,
                        }
                        break

                    case "chooseLocation":
                        ret.params = {
                            errCode: 0,
                            address: "深圳",
                            latitude: 0,
                            longitude: 0
                        }
                        break
                    case "getLocation":
                        ret.params = {
                            errCode: 0,
                            address: "深圳",
                            latitude: 0,
                            longitude: 0
                        }
                        break
                    case "previewLocation":
                        ret.params = {
                            errCode: 0,
                        }
                        break
                }

            }

            var retStr = window.btoa(JSON.stringify(ret))

            window.zfJSBridge._handleMessageFromZF(JSON.stringify({
                jsonMessage: retStr,
                shaKey: SHA1(retStr + _dgtVerifyRandomStr).toString()
            }))
        }
    }
})()