<template>
  <tabbar class="tab-width"></tabbar>
  <navbar></navbar>
  <p>我加入的</p>
  <bkcard></bkcard>
</template>

<script>
// @ is an alias to /src
import tabbar from "@/components/tabbar.vue";
import bkcard from "@/components/card.vue";
import navbar from "@/components/nav.vue";

export default {
  name: "HomeView",
  components: {
    bkcard,
    tabbar,
    navbar
  },
};
</script>

<style>
.tab-width {
  width: 100%;
  height: 50px;
}

</style>