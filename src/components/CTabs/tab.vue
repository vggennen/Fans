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
  line-height: 1.174rem;
  position: relative;
    flex-grow: 1;
    font-size: 0.42rem;
    color: #721cb1;
    text-align: center;
}

.tab.active {
    height: 0.6rem;
    margin: 0.26rem 0;
    line-height: 0.6rem;
    border-radius: 0.5rem;
  background-color: #721cb1;
  color:white;
}
</style>
