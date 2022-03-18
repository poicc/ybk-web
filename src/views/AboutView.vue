<template>
<navbar></navbar>
  <p>我加入的</p>
  <bkcard></bkcard>
</template>

<script>
// @ is an alias to /src
import bkcard from "@/components/card.vue";
import navbar from "@/components/nav.vue";
export default {
  name: "HomeView",
  components: {
    bkcard,
    navbar,
  },
};
</script>