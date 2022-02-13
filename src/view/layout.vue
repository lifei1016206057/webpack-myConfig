<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item
        :index="index + ''"
        v-for="(item, index) in routes"
        :key="item.path"
        @click="jump(item)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.text }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; //按需引入
import { routes } from "../router";

@Component({
  name: "layout",
  components: {},
})
export default class layout extends Vue {
  isCollapse = true;

  routes = routes;
  mounted() {
    console.log("mounted");
  }

  handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }

  jump(item: { path: string; ["prop"]: any }) {
    if (this.$router.currentRoute?.path === item.path) {
      console.log("相同页面");
      return;
    }
    this.$router.push(item.path);
  }
}
</script>
 
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>