<template>
  <svg width="500" height="500">
    <path
      class="radial"
      :d="radialData()"
      transform="translate(250, 250)"
      fill="green"
    ></path>
  </svg>
  <input name="rays" type="range" min="4" max="60" v-model="rays" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import * as d3 from 'd3'

@Options({})
export default class Home extends Vue {
  message = 'Hello World!'

  outerRadius = 200;
  rays = 5

  innerRadius () {
    return this.outerRadius * 0.5
  }

  radialPoints (): [number, number][] {
    const step = 2 * Math.PI / (this.rays * 2)
    const points: [number, number][] = []
    for (let i = 0; i <= this.rays * 2; i++) {
      const currentRadius = i % 2 ? this.innerRadius() : this.outerRadius
      points.push([i * step, currentRadius])
    }
    return points
  }

  radialData () {
    return d3.lineRadial()(this.radialPoints())
  }
}
</script>
