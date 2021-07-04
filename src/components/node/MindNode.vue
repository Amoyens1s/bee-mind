<template>
  <section>
    {{customStyle}}
    <!-- 似乎无法使用props改变class -->
    <div id="node" class="customStyle"
      @click="enable($event.target)"
      @blur="disable($event.target)"
    >
      请双击输入内容
    </div>
  </section>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    customStyle: String
  }
})
export default class MindNode extends Vue {
  mounted () {
    console.log(this.customStyle)
  }

  get customStyle (): string {
    return this.customStyle
  }

  public enable (target: any) {
    // 双击使输入框变为可编辑状态，但目前还有些问题
    target.contentEditable = 'true'
  }

  public disable (target: any) {
    target.removeAttribute('contenteditable')
  }

  unmounted () {
  }
}
</script>

<style scoped>
  #node {
    background-color:#f0f0f0;
    border:solid red 1px;
    padding:10px 40px;
    width:300px;
    resize: horizontal;
    overflow:auto;
  }

  .blue {
    background-color:black !important;
  }
</style>
