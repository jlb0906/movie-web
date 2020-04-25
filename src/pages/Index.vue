<template>
  <el-row type="flex" justify="center">
    <el-col :span="18">
      <div class="grid-content bg-purple-dark">
        <el-container>
          <el-header>
            <home-header></home-header>
          </el-header>
          <el-main>
            <home-main></home-main>
          </el-main>
        </el-container>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeMain from "./components/Main";

export default {
  name: "Index",
  components: {
    HomeHeader,
    HomeMain
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
