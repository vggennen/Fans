<script>
export default {
  name: "Tab",
  props: {
    tabName: {
      type: String,
      default: "tab"
    },
    index: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    this.$parent.panes.push(this);
  },
  computed: {
    // this.$parent.currentIndex
    // 对比高亮
    active() {
      return this.$parent.currentIndex === this.index;
    }
  },
  methods: {
    getIndexHandler(event) {
      // console.log(event.target.innerHTML);
      this.$parent.onChangeIndex(this.index);
    }
  },

  render() {
    let className = {
      tab: true,
      active: this.active
    };

    return (
      <li onClick={this.getIndexHandler.bind(this)} class={className}>
        {this.tabName}
      </li>
    );
  }
};
</script>
<style scoped>
.tab {
  list-style: none;
  line-height: 40px;
  /* margin-right: 30px; */
  position: relative;
  /* width:50%; */
  text-align: center;
  flex-grow: 1;
}

.tab.active {
  /* border-bottom: 2px solid blue; */
    /* width: 0;
    height: 0;
    border-width: 0 0.3rem  0.3rem;
    border-style: solid;
    border-color: transparent transparent #fff; */
    /* position: relative; */
    background-color: #aa5ae9;
    border-radius: 10px;
}
</style>
