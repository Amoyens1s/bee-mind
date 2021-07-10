<template>
  <button @click="add()">123</button>
  <container>
    <MindNode></MindNode>
  </container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import * as d3 from 'd3'
import MindNode from '@/components/node/MindNode.vue'

@Options({
  components: {
    MindNode: MindNode
  }
})
export default class Home extends Vue {
  private svg!: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  mounted () {
    this.svg = d3.select('container')
  }

  public add () {
    this.svg.append('MindNode')
  }
}
</script>

<style scoped>
  container {
    display: block;
    background-color: tomato;
    height: 90vh;
    margin: 0
  }
</style>
