import {Vue, install} from './install'

export default class MyPlugin {
  _vm = null;
  _listeners = [];
  unwatch = null;

  constructor(options = {}){
    this._vm = new Vue({data: options})
  }
  
  watchData () {
    const self = this
    return this._vm.$watch('$data', () => {
      let i = self._listeners.length
      while (i--) {
        Vue.nextTick(() => {
          self._listeners[i] && self._listeners[i].$forceUpdate()
        })
      }
    }, { deep: true })
  }
  
  addListener(vm){
    this._listeners.push(vm);
  }

  removeListener(vm){
    // todo
  }

  // Method for Vue.prototype

  _method(){
    // code
  }

  static install(){}
}

MyPlugin.install = install