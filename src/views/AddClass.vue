<template>
  <navbar></navbar>
  <h2>请输入班课号</h2>
  <input type="text" />
  <button>查找</button>
  <button>取消</button>
</template>

<script>
import navbar from "@/components/nav.vue";
export default {
  name: "AddClass",
  components: {
    navbar,
  },
};
</script>