<template>
  <nav>
    <router-link to="/build"><button class="add">创建班课</button></router-link>
    <router-link to="/add"><button class="add">加入班课</button></router-link>
    <input type="text" placeholder="搜索我加入的班课" />
  </nav>
  <nav>
    <router-link to="/">我创建的</router-link>;
    <router-link to="/about">我加入的</router-link>
  </nav>
</template>

<script>
export default {
    name: "navbar",
}
</script>