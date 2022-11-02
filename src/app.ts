import { createApp } from 'vue'
import './app.scss'
import { Menu, MenuItem, OverLay, Popup, Icon, FixedNav } from '@nutui/nutui-taro';
const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Menu)
  .use(Icon)
  .use(MenuItem)
  .use(OverLay)
  .use(Popup)
  .use(FixedNav);
export default App
