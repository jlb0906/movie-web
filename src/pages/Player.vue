<template>
  <el-row type="flex" justify="center">
    <el-col :span="18">
      <el-container>
        <el-header>
          <home-header></home-header>
        </el-header>
        <el-main>
          <dplayer></dplayer>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import HomeHeader from "./components/Header";
import Dplayer from "./components/Dplayer";

export default {
  name: "MovieAdd",
  components: {
    HomeHeader,
    Dplayer
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
