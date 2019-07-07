<template lang="html">
  <div id="app">
    <router-link to="/login">登录</router-link>

    <router-link to="/back/welcome">后台</router-link>

    <router-link to="/back/list">列表</router-link>

    <router-link to="/back/edit">编辑</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script >

<style lang="scss">
  body{
    margin: 0;
    height: 100vh;
  }
#app {
margin: 0;
}
</style>
