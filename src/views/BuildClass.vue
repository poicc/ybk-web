<template>
  <navbar></navbar>
  <input type="text" /> 创建班课
  <div>
    <div class="form-group">
      <div class="form-group">
        <label>课程名称</label>
        <input
          v-model="brand"
          type="text"
          class="form-control"
          placeholder="如:"
        />
      </div>

      <div class="form-group">
        <label>教师名称</label>
        <input
          v-model="price"
          type="text"
          class="form-control"
          placeholder="如:"
        />
      </div>

      <div class="form-group">
        <label>班级名称</label>
        <input
          v-model="num"
          type="text"
          class="form-control"
          placeholder="如:"
        />
      </div>

      <button type="submit">提交</button>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav.vue";
export default {
  name: "BuildClass",
  components: {
    navbar,
  },
};
</script>


<style lang="scss">
#build-form {
  //   width: 980px;
  //   margin:  0 auto;
  background-color: rgb(160, 148, 148);
}
</style>