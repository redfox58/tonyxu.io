<template>
  <div class="sticky-side-bar">
    <a v-bind:href="tipUrl"><font-awesome-icon icon="dollar-sign" /></a>
    <a v-bind:href="faceboolUrl" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
    <a v-bind:href="linkedinUrl"><font-awesome-icon prefix="fab" :icon="['fab', 'linkedin-in']" /></a>
  </div>
</template>

<style lang='stylus' scoped>
.sticky-side-bar {
  position: fixed;
  z-index:1;
  top: 50%;
  right: 0rem;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.sticky-side-bar a {
  display: block;
  text-align: center;
  padding: 10px;
  transition: all 0.3s ease;
  color: white;
  font-size: 14px;
  margin-bottom: 2px;
  background-color: $accentColor;
}

.sticky-side-bar a:hover {
  background-color: lighten($accentColor, 30%);
}
</style>

<script>
export default {
  name: "Tip",
  computed: {
    faceboolUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    },
    linkedinUrl() {
      return `https://www.linkedin.com/shareArticle?mini=true&source=${encodeURIComponent(window.location.href)}`
    },
    tipUrl() {
      return this.$lang === 'en-US' ? '/tip/' : '/zh/tip/'
    }
  }
};
</script>