<template>
  <router-link to="/todoListAll">Go to todoListAll</router-link>
  <router-link to="/todoListExample">Go to todoListExample</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
  import {
    defineComponent,
    defineAsyncComponent
  } from 'vue'

  export default defineComponent({
    name: 'App',
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

  .btn {
    display: inline-block;
    padding: 4px, 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  body {
    background-color: #CDCDCD;
  }
</style>