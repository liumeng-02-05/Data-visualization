<template>
  <div class="home">
    <Container :options="{ width: 1920, height: 1130 }">
      <div class="home-top">
        <div class="homeLeft">
          <HomeTitle></HomeTitle>
        </div>
        <div class="homeRight">
          <RightTop></RightTop>
          <RightCentent></RightCentent>
        </div>
      </div>
      <div class="home-bottom">
        <HomeBottom></HomeBottom>
      </div>
    </Container>
  </div>
</template>

<script>
import HomeTitle from "../components/HomeTitle";
import Container from "../components/Container/index";
import RightTop from "@/components/RightTop";
import RightCentent from "@/components/RightCentent";
import HomeBottom from "@/components/HomeBottom";
export default {
  components: {
    HomeTitle,
    RightTop,
    RightCentent,
    HomeBottom,
    Container
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url("../../public/img/bg.png");
  background-color: rgb(0, 0, 0);
  background-size: 101.425% 100%;
  background-position: -7.77778px top;
  margin-left: -7.77778px;
  .home-top {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    margin: 30px 30px 0;
    .homeLeft {
      height: 100%;
    }
    .homeRight {
      width: 493px;
      height: 100%;
      margin-left: 20px;
      box-sizing: border-box;
    }
  }
  .home-bottom {
    height: 116px;
    display: flex;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 13px;
    box-sizing: border-box;
  }
}
</style>
