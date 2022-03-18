<template>
  <tabbar class="tab-width"></tabbar>
  <p>我加入的</p>
  <bkcard></bkcard>
</template>

<script>
// @ is an alias to /src
import tabbar from "@/components/tabbar.vue";
import bkcard from "@/components/card.vue";
export default {
  name: "HomeView",
  components: {
    bkcard,
    tabbar,
  },
};
</script>

<style>
.tab-width {
  width: 100%;
  height: 50px;
}

</style>