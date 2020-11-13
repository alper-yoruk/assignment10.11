export const goTo = {
  methods: {
    goTo(newsID) {
      this.$router.push(`news/${newsID}`);
    }
  }
};
