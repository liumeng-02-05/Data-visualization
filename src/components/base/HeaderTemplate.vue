<template>
  <div class="headerTemplate">
    <div class="headerTemplate-left">
      <img :src="newSrc" alt="" />
    </div>
    <div class="headerTemplate_right">
      <p class="message">{{ title }}</p>
      <p class="number">
        <span>{{ number }}</span>
        <span class="company">{{ company }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Img1 from "../../../public/img/titleContent1.png";
import Img2 from "../../../public/img/titleContent2.png";
import Img3 from "../../../public/img/titleContent3.png";
import Img4 from "../../../public/img/titleContent4.png";
export default {
  props: {
    src: {
      type: String
    },
    title: {
      type: String,
      default: "Typesomething"
    },
    number: {
      type: String
    },
    company: {
      type: String
    }
  },
  setup(props) {
    const newSrc = computed(() => {
      let srcurl = "";
      switch (props.src) {
        case "1":
          srcurl = Img1;
          break;
        case "2":
          srcurl = Img2;
          break;
        case "3":
          srcurl = Img3;
          break;
        case "4":
          srcurl = Img4;
          break;
      }
      return srcurl;
    });
    return {
      newSrc
    };
  }
};
</script>

<style lang="scss" scoped>
.headerTemplate {
  display: flex;
  justify-content: flex-start;
  .headerTemplate-left {
    img {
      width: 60px;
      height: 60px;
      display: block;
    }
  }
  .headerTemplate_right {
    text-align: left;
    .message {
      font-size: 16px;
      color: rgba(146, 188, 251, 0.7);
    }
    .number {
      margin-top: 3px;
      white-space: nowrap;
      span {
        color: #fe7893;
        font-size: 36px;
        font-family: Acens;
      }
      .company {
        font-size: 14px;
      }
    }
  }
}
</style>
