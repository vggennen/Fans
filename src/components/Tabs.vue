<template>
  <div>
    <el-tabs type="border-card" v-model="activeName" @tab-click = "setIndex">
      <el-tab-pane label="找人" name='1'>
         <el-tabs  type="card" >
          <el-tab-pane label="昵称"  ></el-tab-pane>
          <el-tab-pane label="偶粉ID号"  ></el-tab-pane>
          <el-tab-pane label="只找大咖"  ></el-tab-pane>
        </el-tabs>
        <!-- <SearchInput /> -->
      </el-tab-pane>
      <el-tab-pane label="找片" name='2'>
          <el-tabs  type="card">
            <el-tab-pane label="演员"></el-tab-pane>
            <el-tab-pane label="片名"  ></el-tab-pane>
            <el-tab-pane label="角色"  ></el-tab-pane>
          </el-tabs>
      </el-tab-pane>
      <SearchInput />
    </el-tabs>
    
  </div>
</template>

<script>
import SearchInput from "./SearchInput"
export default {
  name: "Tabs",
  data() {
    return {
      activeName: '1'
    }
  },
  components:{
    SearchInput
  },
  methods:{
    setIndex(tab,event){
      //console.log(tab,event);
      //console.log(tab.name);
      this.$emit("ongetIndexEvent",tab.name)
    }
  }
};
</script>

<style>

</style>