<template>
  <div class="news-container" @click="goTo(featuredInfo[0].id)">
    <img
      :src="featuredInfo[0].image"
      :alt="featuredInfo[0].title"
      class="news-image"
    />
    <div class="news-title">
      {{ featuredInfo[0].title }}
    </div>
  </div>
</template>

<script>
import { goTo } from "../mixins/goTo.js";

export default {
  mixins: [goTo],
  props: {
    featuredInfo: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.news-container {
  display: block;
  position: relative;
  color: white;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: end;
  -webkit-box-align: end;
  align-items: flex-end;
  cursor: pointer;
  margin: 32px 0;
  max-width: 100%;
}

.news-image {
  width: 100%;
  max-width: 100%;
}

.news-title {
  position: absolute;
  text-align: left;
  width: 100%;
  left: 0px;
  bottom: 0px;
  padding: 12px 18px;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 600px) {
  .news-title {
    font-size: 16px;
    padding: 6px 12px;
  }
}
</style>
