<template>
  <div>
    <div v-for="year in years">
      <h3>{{year}}</h3>
      <div v-for="post in postsInYear(year)">
        <div>
          <router-link :to="post.path" class="title">{{ post.frontmatter.title }}</router-link>
          <p class="date">{{ localizedDateString(post.frontmatter.date) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['year'],
  computed: {
    years() {
      console.log(this.year)
      if (this.year) {
        return [this.year]
      }
      return this.$site.pages
        .filter(
          x =>
            x.frontmatter.lang === this.$lang &&
            x.frontmatter.type === "post" &&
            x.frontmatter.draft !== true
        )
        .map(x => new Date(x.frontmatter.date).getFullYear())
        .reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
        .sort((a, b) => b - a);
    },
    readArticleText() {
      return this.$themeLocaleConfig.readArticleText || "Read article";
    }
  },
  methods: {
    localizedDateString(date) {
      return new Date(date).toLocaleDateString();
    },
    postsInYear(year) {
      return this.$site.pages
        .filter(
          x =>
            x.frontmatter.lang === this.$lang &&
            x.frontmatter.type === "post" &&
            x.frontmatter.draft !== true &&
            new Date(x.frontmatter.date).getFullYear() === year
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>