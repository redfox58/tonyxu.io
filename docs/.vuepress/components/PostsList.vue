<template>
<div>
    <div v-for="post in posts">
        <h3>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h3>
        
        <p>{{ post.frontmatter.description }}</p>

        <p><router-link :to="post.path">{{readArticleText}}</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(`${this.$localePath}posts/`) && !x.frontmatter.posts_list)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        },
        readArticleText() {
          return this.$themeLocaleConfig.readArticleText || 'Read article'
        }
    }
}
</script>