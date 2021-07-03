/**
 * vue文件不被识别为TS文件，故作此声明，防止编辑器报错
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
