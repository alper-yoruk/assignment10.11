<template>
  <div class="main-container">
    <div class="container">
      <FeaturedNews :featured-info="this.featuredNews" />
      <div class="regular-news-container">
        <RegularNews
          class="regular-news"
          v-for="news in info"
          :key="news.id"
          :news-info="news"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedNews from "../components/FeaturedNews";
import RegularNews from "../components/RegularNews";
import axios from "axios";

export default {
  components: {
    FeaturedNews,
    RegularNews,
  },
  data() {
    return {
      info: [],
      featuredNews: [],
    };
  },
  created() {
    axios
      .get("http://sandbox.arabamd.com/news")
      .then((response) => (this.info = response.data));
  },
  beforeUpdate() {
    this.getIsFeaturedNews();
  },
  methods: {
    getIsFeaturedNews() {
      let index = this.info.findIndex((x) => x.isFeatured === true);
      if (index > -1) {
        return (this.featuredNews = this.info.splice(index, 1));
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

.main-container {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 100px;
  overflow-x: hidden;
}

.container {
  max-width: 860px;
  width: 100%;
  height: auto;
}

.regular-news-container {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

@media only screen and (max-width: 991px) {
  .regular-news-container {
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
}
</style>
