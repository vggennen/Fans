<template>
  <div>
    <div class="minecom" v-for="(element,index) in minecomData" :key="index">
      <div class="hearderimg">
        <img :src="element.hearderimg" alt>
      </div>
      <div class="content">
        <img src="../../../assets/images/37/内容框.png" alt>
        <p class="minename">{{element.minename}}</p>
        <p class="mine-content">{{element.minecontent}}</p>
        <span class="date">{{element.date}}</span>
      </div>
      <div class="others-content">
        <span>{{element.othersname}}:</span>&nbsp;&nbsp;{{element.otherscontent}}
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Minecom",
  data(){
    return{
      minecomData:[]
    }
  },
  mounted(){
    this.$axios.get(this.HOST + "/comment/minecom")
    .then(res => {
      this.minecomData = res.data;
    })
    .catch(error => {
      console.log(error);
      
    })
  }
};
</script>

<style lang="less" scoped>
.minecom {
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
      max-width: 200%;
      max-height: 200%;
    }
  }
  .content {
    position: relative;
    margin-top: 30/2/568 * 667/50rem;
    margin-left: 109/2/568 * 667/50rem;
    width: 516/2/568 * 667/50rem;
    height: 131/2/568 * 667/50rem;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
    .minename {
      position: absolute;
      top: 20/2/568 * 667/50rem;
      left: 22/2/568 * 667/50rem;
      color: #000000;
      font-size: 30/2*375/320/50rem;
    }
    .mine-content {
      position: absolute;
      top: 66/2/568 * 667/50rem;
      left: 22/2/568 * 667/50rem;
      color: #535353;
      font-size: 32/2/568 * 667/50rem;
    }
    .date {
      position: absolute;
      top: 20/2/568 * 667/50rem;
      right: 12/2/568 * 667/50rem;
      color: #959595;
      font-size: 24/2/568 * 667/50rem;
    }
  }
  .others-content {
    margin-top: 22/2/568 * 667/50rem;
    margin-right: 22/2/568 * 667/50rem;
    padding-left: 119/2/568 * 667/50rem;
    color: #313131;
    font-size: 28/2/568 * 667/50rem;
    line-height: 38/2/568 * 667/50rem;
    span {
      color: #a54be8;
    }
  }
  .line {
    width: 500/2/568 * 667/50rem;
    height: 1/2/568 * 667/50rem;
    background-color: #959595;
    margin-top: 22/2/568 * 667/50rem;
    margin-left: 120/2/568 * 667/50rem;
  }
}
</style>