<template>
  <div class="marquee-wrap">
    <ul class="marquee-list" :class="{ 'animate-up': animateUp }">
      <li v-for="(item, index) in listData" :key="index">{{ item.message }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "marquee-up",
  setup() {
    const animateUp = ref(false);
    const listData = ref([
      { id: 1, message: "这是一段内容1" },
      { id: 2, message: "这是一段内容2" },
      { id: 3, message: "这是一段内容3" },
      { id: 4, message: "这是一段内容4" },
      { id: 5, message: "这是一段内容5" },
      { id: 6, message: "这是一段内容6" },
      { id: 7, message: "这是一段内容7" },
      { id: 8, message: "这是一段内容8" },
      { id: 9, message: "这是一段内容9" },
      { id: 10, message: "这是一段内容10" },
      { id: 1, message: "这是一段内容1" },
      { id: 2, message: "这是一段内容2" }
    ]);
    const timer = ref(null);
    return {
      animateUp,
      listData,
      timer
    };
  },
  mounted() {
    this.timer = setInterval(this.scrollAnimate, 800);
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.listData.push(this.listData[0]);
        this.listData.shift();
        this.animateUp = false;
      }, 500);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.marquee-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .marquee-list {
    li {
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 32px;
      line-height: 32px;
      text-align: right;
      color: #525d73;
      font-size: 11px;
    }
  }
  .animate-up {
    transition: all 0.5s ease-in-out;
    transform: translateY(-32px);
  }
}
</style>
