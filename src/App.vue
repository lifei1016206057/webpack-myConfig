<template>
  <div id="app">
    <!-- <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/tscode">tscode</router-link> -->

    <el-container>
      <el-aside width="200px">
        <layout></layout>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import layout from "./view/layout";
export default {
  components: { layout },
  mounted() {
    console.log("mounted");
  },
};
</script>
 
<style scoped lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  // background: ;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>