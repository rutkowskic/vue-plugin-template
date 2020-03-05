import MyPlugin from './index'
import mixin from './mixin'
export let Vue

export function install(_Vue){
  Vue = _Vue

  Vue.mixin(mixin)

  if (!Vue.prototype.hasOwnProperty('$myPlugin')) {
    Object.defineProperty(Vue.prototype, '$myPlugin', {
      get () { return this._myPlugin }
    })
  }

  Vue.prototype.$method = function (key, ...values) {
    return this.$myPlugin._method()
  }
}

