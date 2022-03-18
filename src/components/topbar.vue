<template>
  <div class="body">
    <div class="login-tab">
      <div class="col-2"></div>
      <img src="../../assets/ybk_logo.png" class="logo" />
      <div class="col-6"></div>
      <img src="../../assets/touping.png" class="icon" />
      <div class="col-1">手机投屏</div>
      <div class="col-2">帮助</div>
      <div class="col-2"></div>
    </div>
    <div class="login"><div class="login-title"></div></div>
  </div>
</template>

<script>
// import LoginForm from "@/components/login-form.vue";
// import LoginPhone from "@/components/login-phone.vue";

export default {
  data() {
    return {
      title: "",
      loading: false,
      isAccount: true,
    };
  },
//   components: {
//     LoginForm,
//     LoginPhone,
//   },
  methods: {},
};
</script>

<style lang="sass">

.logo {
    width: 120px;
    height: 40px;
}
.icon {
    width: 20px;
    height: 20px;
}
.flex{
    display: flex;
}
.tab {
    height: 50px;
    display: flex;
    align-items: center;
}
</style>