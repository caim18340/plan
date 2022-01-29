import { App as VM } from 'vue'
import {
  Collapse,
  CollapseItem,
  Button,
  Cell,
  CellGroup,
  Icon,
  Tabbar,
  TabbarItem,
  Image as VanImage,
  Tag,
  Popup,
  Field,
  RadioGroup,
  Radio,
  Form,
  Step,
  Steps,
  Calendar
} from 'vant'

const plugins = [
  Collapse,
  CollapseItem,
  Button,
  Icon,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  VanImage,
  Tag,
  Popup,
  Field,
  RadioGroup,
  Radio,
  Form,
  Step,
  Steps,
  Calendar
]

export const vantPlugins = {
  install: function(vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}
