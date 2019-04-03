<template>
  <div>
    <Hearders title="私信" path="/behavior"/>
    <router-link tag="div"  :to="{name:'Chat',params:{id:element.id}}" class="msg" v-for="(element,index) in msgData" :key="index">
      <div class="hearderimg">
        <img :src="element.hearderimg" alt>
      </div>
      <div class="msg-content">
        <p class="others-name">{{element.othersname}}</p>
        <p class="others-content" v-if="element.otherscontent">{{element.otherscontent}}</p>
        <p class="others-content" v-else>{{element.minecontent}}</p>
        <span class="date">{{element.date}}</span>
      </div>
      <div class="line"></div>
    </router-link>
  </div>
</template>

<script>
import Hearders from "../components/Headers";
import { timeout } from "q";
export default {
  name: "Msg",
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
      .get(this.HOST + "/msg")
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
.msg {
  position: relative;
  overflow: hidden;

  .hearderimg {
    position: absolute;
    overflow: hidden;
    width: 82/2/568 * 667/50rem;
    height: 82/2/568 * 667/50rem;
    background-color: red;
    border-radius: 50%;
    margin-top: 30/2/568 * 667/50rem;
    margin-left: 20/2/568 * 667/50rem;
    img {
      width: auto;
      height: auto;
      max-width: 200%;
      max-height: 200%;
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
      right: 12/2/568 * 667/50rem;
      color: #959595;
      font-size: 24/2/568 * 667/50rem;
    }
  }
  .line {
    width: 500/2/568 * 667/50rem;
    height: 2/2/568 * 667/50rem;
    background-color: #959595;
    margin-top: 20/2/568 * 667/50rem;
    margin-left: 125/2/568 * 667/50rem;
  }
}
</style>
