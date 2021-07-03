<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import NavBar from '@/components/header/NavBar.vue'

@Options({
  components: { NavBar },
  props: {
    msg: String
  }
})
export default class App extends Vue {}
</script>
<style>
</style>
