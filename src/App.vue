<template>
  <!-- <nav>
    <router-link to="/build"><button class="add">创建班课</button></router-link>
    <router-link to="/add"><button class="add">加入班课</button></router-link>
    <input type="text" placeholder="搜索我加入的班课" />
  </nav>
  <nav>
    <router-link to="/">我创建的</router-link>;
    <router-link to="/about">我加入的</router-link>
    
  </nav>-->
  <router-view />
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 13px;
  width: 980px;
  margin: auto;
  background-color: white;
  border-bottom: 1px solid black;
  a {
    font-weight: bold;
    color: #2c3e50;
    float: left;
    padding-right: 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .add {
    float: left;
  }
  input {
    width: 400px;
    height: 36px;
  }
}
</style>
