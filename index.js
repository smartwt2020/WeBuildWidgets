import './plugins/fontAwesome/index.css'

import label from './widgets/label'
import paragraph from './widgets/paragraph'
import html from './widgets/html'
import icon from './widgets/icon'

import link from './widgets/link'
import button from './widgets/button'

import image from './widgets/image'

import input from './widgets/input'
import textarea from './widgets/textarea'
import Switch from './widgets/switch'
import checkbox from './widgets/checkbox'
import select from './widgets/select'

import kpiCard from './widgets/kpiCard'

import chartTest from './widgets/chartTest'

export default {
  install (Vue) {
    Vue.component('wbWidgetLabel', label)
    Vue.component('wbWidgetParagraph', paragraph)
    Vue.component('wbWidgetHtml', html)
    Vue.component('wbWidgetIcon', icon)

    Vue.component('wbWidgetLink', link)
    Vue.component('wbWidgetButton', button)

    Vue.component('wbWidgetImage', image)

    Vue.component('wbWidgetInput', input)
    Vue.component('wbWidgetTextarea', textarea)
    Vue.component('wbWidgetSwitch', Switch)
    Vue.component('wbWidgetCheckbox', checkbox)
    Vue.component('wbWidgetSelect', select)

    Vue.component('wbWidgetKpiCard', kpiCard)

    Vue.component('wbWidgetChartTest', chartTest)
  }
}
