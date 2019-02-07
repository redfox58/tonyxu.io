<template>
    <div class="comments">
      <p class="inner">comments</p>
    </div>
</template>
<script>
export default {
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