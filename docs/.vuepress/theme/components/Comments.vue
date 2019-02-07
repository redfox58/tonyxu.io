<template>
<div class="comments">
  <div class="inner">
  <div id="disqus_thread"></div>
  </div>
</div>
</template>
<script>
export default {
    mounted() {
      var disqus_config = function () {
        this.page.url = window.location.origin;  
        this.page.identifier = window.location.pathname; 
      };
      (function() {
        var d = window.document, s = d.createElement('script');
        s.src = 'https://tonyxu-io.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  }
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.comments
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float

</style>