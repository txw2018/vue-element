/**
 * @static
 * @description 增加删除获取localstorage
 * @author txw
 * @data 2019-5-23
 */
export class LocalStorage {
  static set (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }
  static rem (key) {
    window.localStorage.removeItem(key)
  }
  static get (key) {
    return window.localStorage.getItem(key)
  }
}

/**
 * @static
 * @description 增加删除获取sessionstorage
 * @author txw
 * @data 2019-5-23
 */
export class sessionStorage {
  static set (key, data) {
    window.sessionStorage.setItem(key, JSON.stringify(data))
  }
  static rem (key) {
    window.sessionStorage.removeItem(key)
  }
  static get (key) {
    return window.sessionStorage.getItem(key)
  }
}

/**
 * @description 用于回到页面顶部
 * @author txw
 * @param {elem} 最外层的dom，优先建议使用ref获取节点
 * @param {speed} 速度
 * @date 2019-06-21
 * @export
 */
export const scrollTop = (elem, speed = 5) => {
  let oDom = elem.$el || elem // 兼容vue组件跟html标签
  let timer = null
  timer = requestAnimationFrame(function fn () {
    let oTop = oDom.scrollTop
    if (oTop > 0) {
      oDom.scrollTop = oTop - (oTop / speed)
      timer = requestAnimationFrame(fn)
    } else {
      cancelAnimationFrame(timer)
    }
  })
}

/**
 * @description 用于获取节点的样式
 * @author txw
 * @param {elem} 要获取样式的节点，优先建议使用ref获取节点
 * @param {prop} 要获取的属性
 * @date 2019-06-21
 * @export
 * @returns 样式值
 */
export const getStyle = (elem, prop) => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elem, null)[prop]
  } else {
    return elem.currentStyle[prop]
  }
}
