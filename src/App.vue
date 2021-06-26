<template>
  <nav-bar></nav-bar>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <node></node>
</template>

<script lang="ts">
import NavBar from './components/header/NavBar.vue'
import HelloWorld from './components/HelloWorld.vue'
import Node from './components/Node.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld,
    Node
  }
}
</script>

<style>

</style>
