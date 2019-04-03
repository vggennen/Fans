<script>

import Content from "./content"

export default {
  name: "Tabs",
  data(){
      return{
          panes:[]
      }
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: 0
    }
  },
  methods:{
    onChangeIndex(index){
        this.$emit("changeKey",index);
    }
  },
  components:{
      Content
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {/* render中插槽的使用方式 */}
          {this.$slots.default}
        </ul>
        <Content panes={ this.panes }/>
      </div>
    );
  }
};
</script>
<style scoped>
.tabs-header {
  display: flex;
  padding: 0 0.5rem;
  list-style: none;
  margin: 0;
   background-color: #A54BE8;
  opacity: 0.7;
}
</style>
