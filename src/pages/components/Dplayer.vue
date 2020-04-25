<template>
  <div id="dplayer"></div>
</template>

<script>
import DPlayer from "dplayer";
import axios from "axios";

export default {
  name: "Dplayer",
  data() {
    return {
      movie: {}
    };
  },
  methods: {
    getMovieInfo(res) {
      var data = res.data;
      if (data.code == 0 && data.data) {
        this.movie = data.data;
      }
      this.newPlayer()
    },
    newPlayer() {
      new DPlayer({
        container: document.getElementById("dplayer"),
        screenshot: true,
        video: {
          url: this.movie.uri,
        },
        subtitle: {
          url:this.movie.title
        },
      });
    }
  },
  mounted() {
    axios
      .get(this.$store.state.SERVER_URL + "/movie/" + this.$route.params.id)
      .then(this.getMovieInfo);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
