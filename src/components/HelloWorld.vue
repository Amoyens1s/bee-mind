<template>
  <nav-bar></nav-bar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import NavBar from './header/NavBar.vue'

@Options({
  components: { NavBar },
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
