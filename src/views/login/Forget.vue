<template>
  <div class="body">
    <div class="login-tab">
      <div class="col-2"></div>
      <img src="../../assets/ybk_logo_gray.png" class="logo" />
      <div class="col-6"></div>
      <div class="col-1 hand" @click="goLogin">返回登录</div>
      <div class="col-1" style="color: #e2e2e2">|</div>
      <div class="col-1">帮助</div>
      <div class="col-2"></div>
    </div>
    <div class="container">
      <div class="tab">
        <div class="block"></div>
        <div class="right">重置密码</div>
      </div>
      <div class="center">
        <LoginForm class="form" @func="getForm"></LoginForm>
        <div class="auto">
          <input
            type="checkbox"
            value="isAgree"
            id="isAgree"
            v-model="isAgree"
          />
          <label for="isAgree"> </label>
          我已阅读并同意<span class="prim">《用户协议》</span>
        </div>
        <div class="btn">
          <button
            @click="reg"
            :disabled="!isAgree"
            :class="isAgree ? '' : 'disable'"
          >
            重置
          </button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        为了获得最佳浏览效果，建议在分辨率大于或等于 1024*768 的屏幕下浏览网站
      </div>
      <div>京公网安备 11010802020877号 京ICP备12041916号-4</div>
      <div>©2012 - 2022北京智启蓝墨信息技术有限公司</div>
      <div>
        地址：北京市海淀区上地东路 35 号颐泉汇写字楼316室 联系电话：400-008-1078
      </div>
    </div>
  </div>
</template>

<script>
import baseUrl from "@/utils/api.js";
import axios from "axios";
import LoginForm from "@/components/login-form.vue";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      isAgree: false,
    };
  },
  components: {
    LoginForm,
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    getForm(username, password) {
      console.log(username);
      this.form.username = username;
      this.form.password = password;
    },
    reg() {
      let data = {
        account: this.username,
        code: "123",
        password: this.password,
        rePassword: this.password,
      };
      axios.post(baseUrl["baseUrl"] + "/forget", data).then((res) => {
        console.log(res);
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style lang="sass">
@import './login.scss'
</style>
