<template>
  <p>我创建的</p>
  <bkcard></bkcard>
</template>

<script>
// @ is an alias to /src
import bkcard from "@/components/card.vue";

export default {
  name: "HomeView",
  components: {
    bkcard,
  },
};
</script>



