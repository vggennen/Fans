<template>
  <div>
    <Hearders title="消息" path="/behavior"/>
    <div
      class="sys"
      v-for="(element,index) in msgData"
      :key="index"
    >
      <div class="hearderimg">
        <img src="../assets/images/46/消息图标.png" alt>
      </div>
      <div class="msg-content">
        <p class="others-name">{{element.othersname}}</p>
        <p class="others-content" v-if="element.otherscontent">{{element.otherscontent}}</p>
        <p class="others-content" v-else>{{element.minecontent}}</p>
        <span class="date">{{element.date}}</span>
        <div class="n" v-show="index == 0">
            <img src="../assets/images/39-40-41/n.png" alt="">
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import Hearders from "../components/Headers";
export default {
  name: "Sys",
  data() {
    return {
      msgData: []
    };
  },
  components: {
    Hearders
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/sys")
      .then(res => {
        this.msgData = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.sys {
  position: relative;
  overflow: hidden;

  .hearderimg {
    position: absolute;
    overflow: hidden;
    width: 82/2/568 * 667/50rem;
    height: 82/2/568 * 667/50rem;
    border-radius: 50%;
    margin-top: 30/2/568 * 667/50rem;
    margin-left: 20/2/568 * 667/50rem;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .msg-content {
    position: relative;
    overflow: hidden;
    margin-top: 20/2/568 * 667/50rem;
    margin-left: 109/2/568 * 667/50rem;
    .others-name {
      position: absolute;
      top: 20/2/568 * 667/50rem;
      left: 22/2/568 * 667/50rem;
      color: #313131;
      font-size: 28/2/568 * 667/50rem;
    }
    .others-content {
      margin-top: 66/2/568 * 667/50rem;
      margin-left: 22/2/568 * 667/50rem;
      color: #1b1b1b;
      font-size: 32/2/568 * 667/50rem;
      padding-right: 82/2/568 * 667/50rem;
      line-height: 48/2/568 * 667/50rem;
    }
    .date {
      position: absolute;
      top: 20/2/568 * 667/50rem;
      right: 32/2/568 * 667/50rem;
      color: #959595;
      font-size: 24/2/568 * 667/50rem;
    }
    .n{
        position: absolute;
        top: 72/2/568 * 667/50rem;
        right: 34/2/568 * 667/50rem;
        width: 30/2/568 * 667/50rem;
        height: 30/2/568 * 667/50rem;
        img{
            width: 100%;
        }
    }
  }
  .line {
    width: 500/2/568 * 667/50rem;
    height: 2/2/568 * 667/50rem;
    background-color: #959595;
    margin-top: 30/2/568 * 667/50rem;
    margin-left: 125/2/568 * 667/50rem;
  }
}
</style>