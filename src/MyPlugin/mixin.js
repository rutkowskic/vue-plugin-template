import MyPlugin from './index'
export default {
    beforeCreate() {
        let { myPlugin } = this.$options
        if(myPlugin && myPlugin instanceof MyPlugin){
            this._myPlugin = myPlugin
            this._watcher = this._myPlugin.watchData()
        } else if (this.$root && this.$root.$myPlugin && this.$root.$myPlugin instanceof MyPlugin){
            this._myPlugin = this.$root.$myPlugin
        }
    },
    beforeMount() {
        this.$myPlugin.addListener(this)
    }
}