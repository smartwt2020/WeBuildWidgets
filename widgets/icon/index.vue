<template>
  <div :class="getClass" :id="config.id" ref="widget" v-if="hideElement">
    <i :class="getIcon"></i>
  </div>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: '',
  mixins: [common],
  data: () => ({
  }),
  computed: {
    getIcon () {
      return 'fa fa-' + this.GetValueString(this.config.value)
    }
  },
  methods: {
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
