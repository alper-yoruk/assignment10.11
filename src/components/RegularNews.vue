<template>
  <div class="news-container" @click="goTo(newsInfo.id)">
    <!-- <p>{{ newsInfo.snippet }}</p> -->
    <img class="news-image" :src="newsInfo.image" alt="" />
    <div class="news-title">
      {{ newsInfo.title }}
    </div>
  </div>
</template>

<script>
import { goTo } from "../mixins/goTo.js";

export default {
  mixins: [goTo],
  props: {
    newsInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.news-container {
  position: relative;
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  cursor: pointer;
  width: 250px;
  margin-top: 16px;
}
.news-image {
  width: 100%;
  max-width: 100%;
}

.news-title {
  position: absolute;
  text-align: left;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 6px 12px;
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 991px) {
  .news-container {
    width: 45%;
    margin-top: 12px;
  }
}

@media only screen and (max-width: 600px) {
  .news-container {
    width: 90%;
    margin-bottom: 12px;
  }

  .news-image {
    width: 100%;
    height: auto;
  }
}
</style>
