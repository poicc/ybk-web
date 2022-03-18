<template>
  <ul class="container">
    <li v-for="(img, id) in images" :key="id">
      <img :src="img.url" alt="" class="bk" />
      <img :src="img.avator" alt="" class="avator" />
      <div class="box">
        <span id="teacher">{{ img.teacher }}</span>
        <span id="classname">{{ img.name }}</span>
        <p>{{ img.className }}</p>
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
      images: [
        {
          id: 0,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          name: "突击学习",
          className: "gg",
          teacher: "ez",
        },
        {
          id: 1,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/%E6%91%86pose.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          name: "A",
          className: "gg",
          teacher: "mq",
        },
        {
          id: 2,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/%E8%8E%93%E8%89%AF%E5%BF%83.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          name: "B",
          className: "gg",
          teacher: "hlh",
        },
        {
          id: 3,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/%E8%A3%85%E5%8F%AF%E7%88%B1.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          name: "C",
          className: "gg",
          teacher: "qzk",
        },
        {
          id: 4,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/QQ%E5%9B%BE%E7%89%8720180509112456.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          name: "V4",
          className: "gg",
          teacher: "4v",
        },
        {
          id: 5,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/QQ%E5%9B%BE%E7%89%8720180509112459.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/md/202109130023098.jpg",
          name: "karamazov",
          className: "gg",
          teacher: "王亖",
        },
        {
          id: 6,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/QQ%E5%9B%BE%E7%89%8720180509112507.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/QQ%E5%9B%BE%E7%89%8720180509112456.png",
          name: "CF",
          className: "gg",
          teacher: "edward",
        },
        {
          id: 7,
          url: "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/niconico.png",
          avator:
            "https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/QQ%E5%9B%BE%E7%89%8720180509112456.png",
          name: "Sleep",
          className: "gg",
          teacher: "nygma",
        },
      ],
    };
  },

  // beforeCreate() {
  //   axios({
  //     method: 
  //   })
  // },
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
    border: 1px solid black;
    border-radius: 7px;
    height: 319px;
    list-style-type: none;
    overflow: hidden;
    position: relative;
    &:hover {cursor: pointer;}
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