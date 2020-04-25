<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/">全部电影</el-menu-item>
    <el-menu-item index="/movie/add">添加电影</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      activeIndex: this.$route.path
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
