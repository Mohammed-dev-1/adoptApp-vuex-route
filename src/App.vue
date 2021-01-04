<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Cats">Cats</router-link> |
      <router-link to="/Dogs">Dogs</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  background: #29374b;
  color: #d6dfdc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d6dfdc;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #d6dfdc;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
