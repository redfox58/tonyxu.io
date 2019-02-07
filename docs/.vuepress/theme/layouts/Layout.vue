<template>
  <ParentLayout>
    <!-- <CarbonAds slot="sidebar-top"/> -->
    <Comments slot="page-bottom"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import CarbonAds from '../components/CarbonAds.vue'
import Comments from '../components/Comments.vue'
export default {
  components: {
    ParentLayout,
    // CarbonAds,
    Comments
  }
}
</script>