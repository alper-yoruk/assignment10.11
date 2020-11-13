<template>
  <div class="main-container">
    <div class="detail-container">
      <img class="detail-image" :src="this.info.image" alt="" />
      <h1 class="detail-title">{{ this.info.title }}</h1>
      <div class="detail-news-body" v-html="this.info.body"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    };
  },
  created() {
    axios
      .get(`http://sandbox.arabamd.com/news/${this.$route.params.id}`)
      .then((response) => (this.info = response.data));
  },
};
</script>

<style scoped>
.detail-container {
  width: 860px;
  margin: 32px 0;
  padding: 0 24px;
  max-width: 100%;
}

.detail-image {
  width: 100%;
  height: auto;
}

.detail-title {
  margin: 12px 0;
}

.detail-news-body >>> p {
  margin: 16px 0;
}

@media only screen and (max-width: 600px) {
  .detail-title {
    font-size: 18px;
  }
  .detail-news-body >>> p {
    margin: 12px 0;
    font-size: 14px;
  }
}
</style>
