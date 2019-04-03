<template>
  <keep-alive>
    <div class="chat">
      <div class="headers">
        {{chatData.othername}}
        <router-link to="/msg">
          <img class="back" src="../assets/images/f-1.png" alt>
        </router-link>
        <img class="more" src="../assets/images/42-43/更多-1.png" @click="hiddenHandler" alt>
      </div>
      <div class="hidden" v-show="flag">
        <p :class="{'active':false}">
          <img src="../assets/images/42-43/z1.png" alt>
          屏蔽此人
        </p>
        <p @click="clearHandler" :class="{'active':true}">
          <img src="../assets/images/42-43/z2.png" alt class="clear">
          清空聊天
        </p>
      </div>
      <div v-show="show" ref="father">
        <div v-show="getDefaultChatData.otherscontent">
          <div class="hearderimg">
            <img :src="getDefaultChatData.hearderimg" alt>
          </div>
          <div class="chat-frame">
            <div class="sanjiao"></div>
            <p class="frame-content">{{getDefaultChatData.otherscontent}}</p>
          </div>
          <div class="minute">1分钟前</div>
        </div>

        <div>
          <div class="hearderimg2">
            <img :src="getDefaultChatData.mineimg" alt>
          </div>
          <div class="chat-frame2">
            <div class="sanjiao"></div>
            <p class="frame-content">{{getDefaultChatData.minecontent}}</p>
          </div>
          <div class="minute2">{{getDefaultChatData.date}}</div>
        </div>

        <div ref="child" v-for="(element,index) in getChatData" :key="index">
          <div class="hearderimg2">
            <img :src="chatData.mineimg" alt>
          </div>
          <div class="chat-frame2">
            <div class="sanjiao"></div>
            <p class="frame-content">{{element}}</p>
          </div>
          <div class="minute2">{{chatData.date}}</div>
        </div>
      </div>

      <div class="bottom">
        <div class="img">
          <img src="../assets/images/42-43/photo-1.png" alt>
        </div>
        <input autofocus="autofocus" type="text" @keyup.13="onKeyUpHandler" ref="input">
      </div>
    </div>
  </keep-alive>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: "Chat",
  components: {},
  data() {
    return {
      flag: false,
      show: true,
      chatData: {},
      childArray: []
    };
  },
  methods: {
    ...mapActions(["storechatAction","clearchatAction","storeDefaultChatDataAction","clearDefaultAction"]),
    hiddenHandler() {
      this.flag = !this.flag;
    },
    clearHandler() {
      this.show = false;
      this.flag = false;
      this.clearchatAction();
      this.clearDefaultAction();
    },
    
    onKeyUpHandler(event) {
      this.childArray.push(this.$refs.input.value);
      
      this.storechatAction(this.$refs.input.value);
      this.$refs.input.value = "";
    }
  },
  computed:{
    ...mapGetters(["getChatData","getDefaultChatData"])
  },
  mounted() {
    var id = this.$route.params.id;
    this.$axios
      .get(this.HOST + "/msgid", {
        params: {
          id: id
        }
      })
      .then(res => {
        this.chatData = res.data[0];
        this.storeDefaultChatDataAction(res.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // render(){
  //   return(
  //     <div>
  //         {

  //         }
  //     </div>
  //   )
  // }
};
</script>
<style lang="less" scoped>
.chat {
  background: white;
  height: 100%;
  position: relative;
  .headers {
    position: relative;
    height: 100/2/568 * 667/50rem;
    line-height: 100/2/568 * 667/50rem;
    text-align: center;
    background-color: #a54be8;
    font-size: 36/2/568 * 667/50rem;
    color: #ffffff;
    .back {
      position: absolute;
      left: 50/2/568 * 667/50rem;
      top: 34/2/568 * 667/50rem;
      width: 20/2/568 * 667/50rem;
      height: 30/2/568 * 667/50rem;
    }
    .more {
      position: absolute;
      right: 50/2/568 * 667/50rem;
      top: 34/2/568 * 667/50rem;
      width: 5/2/568 * 667/50rem;
      height: 30/2/568 * 667/50rem;
    }
  }

  .hidden {
    position: absolute;

    height: 100/2/568 * 667/50rem;
    width: 100%;
    z-index: 999;
    p {
      background: #a54be8;
      opacity: 0.8;
      display: inline-block;
      width: 50%;
      line-height: 100/2/568 * 667/50rem;
      text-align: center;
      color: #ffffff;

      font-size: 28/2/568 * 667/50rem;
      img {
        width: 23/2/568 * 667/50rem;
        margin-right: 6/2/568 * 667/50rem;
      }
      .clear {
        width: 20/2/568 * 667/50rem;
      }
    }
    .active {
      opacity: 1;
    }
  }

  .hearderimg {
    position: absolute;
    overflow: hidden;
    width: 82/2/568 * 667/50rem;
    height: 82/2/568 * 667/50rem;
    border-radius: 50%;
    margin-left: 20/2/568 * 667/50rem;
    img {
      width: auto;
      height: auto;
      max-width: 200%;
      max-height: 200%;
    }
  }
  .chat-frame {
    position: relative;
    margin-top: 30/2/568 * 667/50rem;
    margin-left: 130/2/568 * 667/50rem;
    width: 380/2/568 * 667/50rem;
    // height: 200/2/568 * 667/50rem;
    background: #f0f2f5;
    border-radius: 8/2/568 * 667/50rem;
    .sanjiao {
      width: 0;
      height: 0;
      border: 12/2/568 * 667/50rem solid transparent;
      border-right: 12/2/568 * 667/50rem solid #f0f2f5;
      position: absolute;
      top: 23/2/568 * 667/50rem;
      left: -22/2/568 * 667/50rem;
    }
    .frame-content {
      padding-top: 20/2/568 * 667/50rem;
      padding-bottom: 20/2/568 * 667/50rem;
      margin-left: 20/2/568 * 667/50rem;
      margin-right: 25/2/568 * 667/50rem;
      font-size: 32/2/568 * 667/50rem;
      color: #626262;
      line-height: 42/2/568 * 667/50rem;
      letter-spacing: 2/2/568 * 667/50rem;
    }
  }
  .minute {
    margin-top: 24/2/568 * 667/50rem;
    text-align: center;
    color: #959595;
  }
  .hearderimg2 {
    position: absolute;
    overflow: hidden;
    width: 82/2/568 * 667/50rem;
    height: 82/2/568 * 667/50rem;
    border-radius: 50%;
    right: 20/2/568 * 667/50rem;
    img {
      width: auto;
      height: auto;
      max-width: 200%;
      max-height: 200%;
    }
  }
  .chat-frame2 {
    position: relative;
    margin-top: 46/2/568 * 667/50rem;
    margin-left: 130/2/568 * 667/50rem;
    width: 380/2/568 * 667/50rem;
    // height: 67/2/568 * 667/50rem;
    background: #a54be8;
    border-radius: 8/2/568 * 667/50rem;
    .sanjiao {
      width: 0;
      height: 0;
      border: 12/2/568 * 667/50rem solid transparent;
      border-left: 12/2/568 * 667/50rem solid #a54be8;
      position: absolute;
      top: 23/2/568 * 667/50rem;
      right: -22/2/568 * 667/50rem;
      z-index: 999;
    }
    .frame-content {
      padding-top: 20/2/568 * 667/50rem;
      padding-bottom: 20/2/568 * 667/50rem;
      margin-left: 20/2/568 * 667/50rem;
      margin-right: 25/2/568 * 667/50rem;
      font-size: 32/2/568 * 667/50rem;
      color: #ffffff;
      line-height: 42/2/568 * 667/50rem;
      letter-spacing: 2/2/568 * 667/50rem;
    }
  }
  .minute2 {
    margin-top: 24/2/568 * 667/50rem;
    text-align: center;
    color: #959595;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 89/2/568 * 667/50rem;
    background: #f0f2f5;
    z-index: 999;
    .img {
      margin-left: 24/2/568 * 667/50rem;
      margin-top: 26/2/568 * 667/50rem;
      width: 45/2/568 * 667/50rem;
      height: 37/2/568 * 667/50rem;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
    input {
      position: absolute;
      width: 530/2/568 * 667/50rem;
      height: 62/2/568 * 667/50rem;
      top: 12/2/568 * 667/50rem;
      left: 81/2/568 * 667/50rem;
      border-radius: 10/2/568 * 667/50rem;
      border: 1/2/568 * 667/50rem solid #f0f2f5;
      outline: none;
    }
  }
}
</style>
