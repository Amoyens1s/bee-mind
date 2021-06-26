<template>
  <button type="button" class="btn btn-primary">Primary</button>
</template>

<script lang="ts">
export default {
  name: 'Node',
  props: {
    color: {
      type: String,
      required: false,
      default: '#565656'
    }
  }
}
</script>

<style>

</style>
