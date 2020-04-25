<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="电影名称">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="下载地址">
      <el-input v-model="form.uri"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
export default {
  name: "MovieForm",
  data() {
    return {
      form: {
        title: "",
        uri: ""
      }
    };
  },
  methods: {
    onSubmit() {
      // form提交
      axios.defaults.withCredentials = true;
      axios
        .post(this.$store.state.SERVER_URL + "/movie/add", this.form)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            this.$router.push("/");
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>
