<template>
  <textarea
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
    v-model="bindData"
    @keypress="upadateBindData"
    />
</template>

<script>
import common from '../../mixins/common'
import { addMarginStyle } from '../../utills/marginSpace'

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
      addMarginStyle(this.config.style)
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
