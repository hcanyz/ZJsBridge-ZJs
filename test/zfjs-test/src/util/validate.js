/**
 *@description 验证用户名格式 3-16个字母或数字
 * @param str
 */
export function isValidUsername (str) {
  const reg = /^[a-zA-Z0-9_]{3,16}$/
  return reg.test(str)
}

/**
 * @description 验证URL地址格式
 * @param str
 * @returns {boolean}
 */
export function isValidUrl (str) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(str)
}
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function isValidateEmail (email) {
  const re = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return re.test(email)
}
/**
 * @description 判断是否对象
 * @param obj
 * @returns {boolean}
 */
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}
/**
 * @description 判断是否空对象
 * @param obj
 * @returns {boolean}
 */
export function isEmptyObject (obj) {
  for (var key in obj) {
    return false
  }
  return true
}
/**
 * @description 判断是否promise
 * @param obj
 * @returns {boolean}
 */
export function isPromise (val) {
  return val && typeof val.then === 'function'
}

/**
 * @description 判断是否全部小写
 * @param str
 * @returns {boolean}
 */
export function isLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @description 判断是否全部大写
 * @param str
 * @returns {boolean}
 */
export function isUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @description 判断是否全为字母
 * @param str
 * @returns {boolean}
 */
export function isAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @description 判断是否全为数字
 * @param str
 * @returns {boolean}
 */
export function isDigital (str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}

/**
 * @description 判断是否整数
 * @param num
 * @returns {boolean}
 */
export const isJudgeInt = num => {
  return num % 1 === 0
}

/**
 * @description 判断是否为电话号码
 * @param str
 * @returns {boolean}
 */
export function isPhoneNumber (str) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(str)
}
/*
  判断是否是 固定电话
  @returns {boolean}
*/
export function isTelephoneNumber (str) {
  const reg = /^(0?(13[0-9]|15[012356789]|166|17[013678]|18[0-9]|14[57])[0-9]|19[0-9]{8})|(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/
  return reg.test(str)
}

// 检验身份证
export function isCardNo (str) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(str)
}

// 验证公司&&用户名
export function isname (str) {
  const reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{2,30}$/
  return reg.test(str)
}

// 验证信用证号
export function iscreditCode (str) {
  const reg = /^[a-zA-Z0-9]{2,30}$/
  return reg.test(str)
}

// 判断浏览器
export function isBrowser () {
  let u = navigator.userAgent
  return {// 移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, // 是否iPad
    webApp: u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
  }
}
// 判断ios设备
export function isIOS () {
  // let reg = /\(i[^;]+;( U;)? CPU.+Mac OS X/
  let reg = /iphone|ipad|ipod/i
  let u = window.navigator.userAgent
  if (reg.test(u)) {
    return true
  } else {
    return false
  }
}

// 判断android设备
export function isAndroid () {
  let reg = /android/i
  let u = window.navigator.userAgent
  if (reg.test(u)) {
    return true
  } else {
    return false
  }
}

// 判断微信浏览器 Whether the curr-using browser is the wx-browser
export function isWxEv () {
  let userAgent = window.navigator.userAgent.toLowerCase()
  let reg = /MicroMessenger/gi
  if (reg.test(userAgent)) {
    return true
  } else {
    return false
  }
}
// 判断qq内置浏览器
export function isQQ () {
  let userAgent = window.navigator.userAgent.toLowerCase()
  let reg = /QQ/gi
  if (reg.test(userAgent)) {
    return true
  } else {
    return false
  }
}



// WEBPACK FOOTER //
// ./src/util/validate.js