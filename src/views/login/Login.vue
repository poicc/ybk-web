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
    <div class="login">
      <div class="login-title"></div>
      <div class="card-container">
        <div class="tab">
          <div
            :class="isUser ? 'change' : ''"
            class="hand"
            @click="isUser = true"
          >
            账号密码登录
          </div>
          <div class="col-small"></div>
          <div
            :class="isUser ? '' : 'change'"
            class="hand"
            @click="isUser = false"
          >
            短信验证登录
          </div>
        </div>
        <LoginForm class="form" @func="getForm" v-if="isUser"></LoginForm>
        <LoginPhone class="form" v-else></LoginPhone>
        <div class="auto-login">
          <div class="auto"><input type="checkbox" />30天自动登录</div>
          <div class="col-1"></div>
          <div class="forget">忘记密码?</div>
        </div>
        <div class="btn"><button @click="login">登录</button></div>
        <div class="href">注册蓝墨云账号 | 学校账号密码登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login-form.vue";
import LoginPhone from "@/components/login-phone.vue";
import baseUrl from "@/utils/api.js";
import axios from "axios";

export default {
  data() {
    return {
      isUser: true,
      form: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    LoginForm,
    LoginPhone,
  },
  methods: {
    getForm(username, password) {
      console.log(username);
      this.form.username = username;
      this.form.password = password;
    },
    login() {
      // axios.interceptors.request.use((config) => {
      //   config.headers = {
      //     'Access-Control-Allow-Origin' : ("*"),
      //     'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
      //     'Access-Control-Allow-Headers': "Content-Typ"
      //   }
      // });
      axios.post(baseUrl["baseUrl"] + "/login", this.form).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="sass">
@import './login.scss'
</style>
