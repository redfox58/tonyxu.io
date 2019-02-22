<template>
  <ParentLayout>
    <Comments slot="page-bottom"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Comments from '../components/Comments.vue'
export default {
  components: {
    ParentLayout,
    Comments
  }
}
</script>