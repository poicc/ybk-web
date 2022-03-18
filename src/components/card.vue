<template>
  <ul class="container">
    <li v-for="(item, index) in images" :key="index">
      <img :src="item.course.coverUrl" alt="" class="bk" />
      <img :src="item.creater.avatar" alt="" class="avator" />
      <div class="box">
        <span id="teacher">{{ item.creater.nickname }}</span>
        <span id="classname">{{ item.course.title }}</span>
        <p>{{ item.course.des }}</p>
        <a>进入 ></a>
      </div>
    </li>
  </ul>
</template>

<script>
// import baseUrl from "@/utils/api.js";
import axios from "axios";
export default {
  name: "bkcard",
  props: { src: String },
  data() {
    return {
      images: [],
    };
  },

  beforeCreate() {
    axios({
      method: "post",
      url: "http://106.14.169.149:8071/index",
      data: {
        page: 0,
        size: 4,
        role: 49,
        type: 82,
      },
    }).then((resp) => {
      console.log(resp.data.data);
      this.images = resp.data.data;
      // console.log(this.images);
    });
  },
};
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  width: 980px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 20px 20px;
  padding: 20px 20px;
  li {
    // border: 1px solid black;
    border-radius: 7px;
    height: 319px;
    list-style-type: none;
    overflow: hidden;
    position: relative;
    box-shadow: 4px 4px 5px #888888;
    &:hover {
      cursor: pointer;
    }
    .bk {
      width: 100%;
      height: 220px;
    }
    .avator {
      height: 66px;
      width: 66px;
      position: absolute;
      left: 10px;
      bottom: 63px;
      border-radius: 33px;
      background-color: white;
      padding: 3px 3px;
    }

    .box {
      height: 96px;
      width: 100%;
      position: relative;
      #teacher {
        position: absolute;
        left: 86px;
        top: 5px;
      }
      #classname {
        color: #333;
        line-height: 18px;
        position: absolute;
        top: 41px;
        left: 10px;
      }
      p {
        position: absolute;
        bottom: 12px;
        left: 10px;
        color: #999;
        font-size: 14px;
      }
      a {
        position: absolute;
        bottom: 10px;
        right: 5px;
        color: #00bbdd;
        font-size: 14px;
      }
    }
  }
}
</style>