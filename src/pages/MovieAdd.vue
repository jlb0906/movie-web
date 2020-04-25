<template>
  <el-row type="flex" justify="center">
    <el-col :span="18">
      <el-container>
        <el-header>
          <home-header></home-header>
        </el-header>
        <el-main>
          <movie-form></movie-form>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import HomeHeader from "./components/Header";
import MovieForm from "./components/MovieForm";

export default {
  name: "MovieAdd",
  components: {
    HomeHeader,
    MovieForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
