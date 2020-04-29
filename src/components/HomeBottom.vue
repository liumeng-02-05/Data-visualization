<template>
  <div class="home-bottom-content">
    <div class="home-bottom-left">
      <div class="home-message">
        <div class="home-show" v-for="item in templateMsg" :key="item.id">
          <RIghtTopTemplate
            :title="item.title"
            :number="item.number"
          ></RIghtTopTemplate>
        </div>
      </div>
      <HomeBottomScatter></HomeBottomScatter>
    </div>
    <div class="home-bottom-table">
      <table width="100%" height="100%" cellspacing="1">
        <tr>
          <td>key0</td>
          <td>这是第二种</td>
        </tr>
        <tr>
          <td>key1</td>
          <td>value</td>
        </tr>
        <tr>
          <td>key2</td>
          <td>value</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import RIghtTopTemplate from "@/components/base/RIghtTopTemplate";
import HomeBottomScatter from "@/components/base/HomeBottomScatter";
import { ref } from "vue";
export default {
  components: { RIghtTopTemplate, HomeBottomScatter },
  setup() {
    const templateMsg = ref([
      { id: 1, number: "108" },
      { id: 2, number: "216" },
      { id: 3, number: "49" },
      { id: 4, number: "365" }
    ]);
    return {
      templateMsg
    };
  }
};
</script>

<style lang="scss" scoped>
.home-bottom-content {
  background: rgba(13, 215, 239, 0.06);
  display: flex;
  .home-bottom-left {
    border-bottom: 1px solid #92bcfb;
    width: 1358px;
    display: flex;
    .home-message {
      padding-top: 20px;
      display: flex;
      .home-show {
        margin-right: 36px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .home-bottom-table {
    width: 493px;
    margin-left: 20px;
    table {
      border-left: 1px solid #92bcfb;
      border-top: 1px solid #92bcfb;
      tr td {
        height: 30px;
        border-bottom: 1px solid #92bcfb;
        border-right: 1px solid #92bcfb;
        color: #d56673;
        text-align: left;
        line-height: 30px;
        box-sizing: border-box;
        text-indent: 1rem;
      }
    }
  }
}
</style>
