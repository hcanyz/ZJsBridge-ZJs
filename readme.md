ZJsBridge
===
> 参考微信jsBridge的一套完整的native-bridge-web协议与实现，清晰规范的开发Hybrid App

[android实现: ZJsBridge](https://github.com/hcanyz/ZJsBridge)

## ZJsBridge能做什么
- 对web端提供js-sdk，形成sdk概念，统一app对外api，统一的api管理（权限、版本兼容）
- 让native端api具备组件化能力，不在需要将所有api写个一个modlue中
- 保障native-web js交互的数据一致性、安全

## 什么场景下需要使用ZJsBridge
- 项目中有较多的web与native交互，需要native统一提供对外api
- native组件化，需要在不同模块中实现api逻辑

## 如何使用 -> [zfjs-sdk-api](./readme-jssdk-api.md#jssdk使用步骤)

## [zfjs-sdk-api](./readme-jssdk-api.md#zfjs-sdk说明文档)

## [Native-Bridge协议](./readme-protocol.md#协议)

## ~~[nativeResourceUrl协议](./readme-nativeResourceUrl.md#协议)~~

参考：   
[wxjs.js](./reference/wxjs.js)   
[wxjs-sdk.js](./reference/wxjs-sdk.js)
