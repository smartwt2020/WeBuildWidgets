<template>
  <select
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
    v-model="bindData"
    @change="upadateBindData">
    <option v-for="(value, key) in getOptions" :key="key" :value="value">
      {{key}}
    </option>
  </select>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: '',
  mixins: [common],
  data: () => ({
    bindData: ''
  }),
  watch: {
    getBindData (val) {
      if (val !== this.bindData) {
        this.bindData = val
      }
    }
  },
  computed: {
    getBindData () {
      return this.config.bindProperty ? this.getVariableData(this.config.bindProperty) : ''
    },
    getOptions () {
      if (!this.config.hasDaynamicOptions) {
        return this.config.options
      } else {
        const options = this.config.options ? this.getVariableData(this.config.options) : {}
        if (Array.isArray(options)) {
          const returnObj = {}
          for (const i in options) {
            const value = options[i]
            returnObj[value] = value
          }
          return returnObj
        } else if (typeof options === 'object' && options !== null) {
          return options
        } else {
          return {}
        }
      }
    }
  },
  methods: {
    upadateBindData () {
      if (this.config.bindProperty) {
        this.setVaiableData(this.config.bindProperty, this.bindData)
      }
    },
    ComponentCss () {
      let css = ''
      const id = `#${this.config.id}`
      const sudoStyle = this.config.sudoStyle || {}
      css += this.JsonToCss(id, { ...this.config.style, ...this.config.addOnStyle }, css)
      for (const sudoClass in sudoStyle) {
        css += this.JsonToCss(`${id}:${sudoClass}`, sudoStyle[sudoClass], css)
      }
      return css
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
