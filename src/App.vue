<template>
  <todoListAll />
</template>

<script lang="ts">
  import {
    defineComponent,
    defineAsyncComponent
  } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {
      todoListAll: defineAsyncComponent(() => import('@/components/todoListAll.vue'))
    },
    setup() {

    }
  })
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;

  }

  body {
    background-color: #CDCDCD;
  }
</style>