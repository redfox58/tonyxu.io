<template>
  <div class="comments" v-if="$page.frontmatter.type === 'post'">
    <div class="inner">
      <ClientOnly>
          <Disqus shortname="tonyxu-io" :key="$route.fullPath"/>
      </ClientOnly>
    </div>
  </div>
</template>
<script>
export default {

};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.comments {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid $borderColor;
    padding-top: 1rem;
    overflow: auto; // clear float
  }
}
</style>