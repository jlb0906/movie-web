<template>
  <el-table :data="movieList" style="width: 100%" stripe>
    <el-table-column prop="title" label="电影名称"></el-table-column>
    <el-table-column prop="uri" label="观看链接">
      <template slot-scope="scope">
        <div>
          <router-link :to="'/movie/player/' + scope.row.id">观看链接</router-link>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeMain",
  data() {
    return {
      movieList: []
    }
  },
  mounted() {
    this.getMovieList();
  },
  methods: {
    handleDelete(index, row) {
      axios
        .post(this.$store.state.SERVER_URL + "/movie/delete/" + row.id)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            this.movieList.splice(index, 1);
            this.$message("已删除" + row.title);
          }
        });
    },
    getMovieList() {
      axios
        .get(this.$store.state.SERVER_URL + "/movie/list/1")
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      var data = res.data;
      if (data.code == 0 && data.data) {
        this.movieList = data.data;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
