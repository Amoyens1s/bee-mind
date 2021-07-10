<template>
  <div class="border">
    <section>
      <div ref="input" id="node" tabindex="0"
        @dblclick="enable($event.target)"
      >
        请双击输入内容
      </div>
      <div id="slider"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    customStyle: String
  }
})
export default class MindNode extends Vue {
  slider!: HTMLElement
  declare $refs: {
    input: HTMLElement
  }

  public enable (target: EventTarget | null) {
    if (this.$refs.input.contentEditable) {
      if (document) {
        document.onclick = (event) => {
          if (event.target !== target) {
            this.$refs.input.removeAttribute('contenteditable')
          }
        }
      }
    }
    this.$refs.input.contentEditable = 'true'
  }
}
</script>

<style scoped>
  .border {
    border: 1px solid;
    border-color: blue;
    display: block;
    width: 20vw;
  }

  section {
    display: flex;
  }

  #node {
    background-color:#f0f0f0;
    padding:10px 40px;
    width:300px;
    overflow:auto;
    outline: none;
    flex:1;
  }

  #node:focus {
    transition: 50ms;
    border-bottom: 3px solid;
    border-color: blue;
  }

  [contenteditable] {
    outline: none;
    border: 0;
  }
</style>
