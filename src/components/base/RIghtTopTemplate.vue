<template>
  <div class="template">
    <img src="../../../public/img/rightTemplate1.png" alt="" />
    <div class="template-title">
      <p>{{ title }}</p>
      <p class="template-title-number">{{ number }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    number: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.template {
  position: relative;
  width: 108px;
  height: 88px;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .template-title {
    text-align: left;
    padding: 15px 0 0 15px;
    box-sizing: border-box;
    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }
    .template-title-number {
      font-size: 36px;
      color: #62a5f4;
      font-family: Acens;
    }
  }
}
</style>
