<template>
  <div>
    <div class="container-fluid row tab">
      <div class="col-md-1"></div>
      <div class="col-md-2">
        <img
          class="img-responsive img-rounded logo"
          src="@/assets/logo-index.png"
        />
      </div>

      <div class="col-md-1 flex">
        <img class="img-responsive icon" src="@/assets/gongkaike.png" alt="" />
        <div class="ml-1">公开课</div>
      </div>
      <div class="col-md-1 flex">
        <img class="img-responsive icon" src="@/assets/renwu.png" alt="" />
        <div class="ml-1">任务中心</div>
      </div>
      <div class="col-md-1 flex">
        <img class="img-responsive icon" src="@/assets/jiaoxue.png" alt="" />
        <div class="ml-1">教学包</div>
      </div>
      <div class="col-md-1 flex">
        <img class="img-responsive icon" src="@/assets/ku.png" alt="" />
        <div class="ml-1">库管理</div>
      </div>
      <div class="col-md-1 flex">
        <img class="img-responsive icon" src="@/assets/tiku.png" alt="" />
        <div class="ml-1">我的题库</div>
      </div>
      <div class="col-md-1 flex">
        <img class="img-responsive icon" src="@/assets/touping.png" />
        <div class="ml-1">手机投屏</div>
      </div>
      <div class="col-md-2 flex">
        <img
          class="img-responsive icon radis"
          :src="avatar == '' ? '@/assets/user-avatar.png' : avatar"
          alt=""
        />
        <div class="ml-2">{{username}}</div>
        <div class="ml-2" style="cursor: pointer" @click="logout">退出</div>
        <div class="ml-2">帮助</div>
      </div>
    </div>
  </div>
</template>

<script>
import baseUrl from "@/utils/api.js";
import axios from "axios";
export default {
  data() {
    return {
        avatar: '',
        username: ""
    };
  },
  created() {
      this.avatar = localStorage.getItem("avatar")
      this.username = localStorage.getItem("nickname")
      console.log(this.username)
  },
  methods: {
    logout() {
    //   console.log(JSON.parse(localStorage.getItem("user")));
    //   let id = localStorage.getItem("user");
    //   axios.post(baseUrl["baseUrl"] + "/logout?id=" + id).then((res) => {
    //     console.log(res);
    //     if (res.data) {
          localStorage.removeItem("id");
          localStorage.removeItem("avatar");
          localStorage.removeItem("username");
          this.$router.push("login");
    //     }
    //   });
    },
  },
};
</script>

<style lang="sass">
@import 'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css'
.logo
    width: 120px
    height: 40px

.icon
    width: 20px
    height: 20px
.radis
    border-radius: 20px
.flex
    display: flex
    font-size: 13px

.tab
    height: 50px
    display: flex
    align-items: center
.ml-1
    margin-left: 2px
.ml-2
    margin-left: 10px
</style>