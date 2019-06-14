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
