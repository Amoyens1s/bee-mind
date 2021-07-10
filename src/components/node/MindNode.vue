<template>
  <div class="border">
    <section>
      <div ref="input" id="node" tabindex="0"
        @dblclick="enable($event.target)"
        @focus="focus()"
      >
        请双击输入内容
      </div>
    </section>
    <hr v-if="showHR" size="5" class="animate__animated animate__fadeInLeft">
    <hr v-if="!showHR" size="5" class="animate__animated animate__fadeOutLeft">
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
  showHR: boolean = false
  declare $refs: {
    input: HTMLElement
  }

  public enable (target: EventTarget | null) {
    if (this.$refs.input.contentEditable) {
      if (document) {
        document.onclick = (event) => {
          if (event.target !== target) {
            this.$refs.input.removeAttribute('contenteditable')
            this.showHR = false
          }
        }
      }
    }
    this.$refs.input.contentEditable = 'true'
  }

  public focus () {
    this.showHR = true
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

  hr {
    margin: 0;
    color: blue;
  }
  section {
    display: flex;
  }

  #node {
    background-color:#ffffff;
    padding:10px 40px;
    width:300px;
    overflow:auto;
    outline: none;
    flex:1;
  }

  [contenteditable] {
    outline: none;
    border: 0;
  }
</style>
