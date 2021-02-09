<template>
  <div>
    <apexchart width="100%" height="100%" type="bar" ref="chart" :options="options" :series="dsData" ></apexchart>
  </div>
</template>

<script>
import common from '../../mixins/common'
import VueApexCharts from 'vue-apexcharts'
import logicController from '../../wb-logic-controller'
export default {
  name: '',
  mixins: [common],
  components: {
    apexchart: VueApexCharts
  },
  data: () => ({
  }),
  computed: {
    options () {
      return {
        chart: {
          id: `test-chart-${this._uid}`
        }
      }
    },
    dsData () {
      try {
        return this.config.datasocket ? logicController.GetDataSocketData(this.config.datasocket) || [] : []
      } catch {
        return []
      }
    }
  },
  watch: {
    dsData (val) {
      this.updateSeries(val)
    }
  },
  methods: {
    updateSeries (data) {
      this.$refs.chart.updateSeries([{
        data
      }], false, true)
    },
    ComponentCss () {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
