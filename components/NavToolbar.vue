<template lang="pug">
  - var navItems = { "The Rules": "/rules", "Health and Wellness": "/health", "Progress": "/progress", "FAQs": "/faqs"}
  header.bg-black-90.fixed.w-100.ph3.pv3.pv4-ns.ph4-m.ph5-l
    nav.f6.fw6.ttu.tracked
      ul.nav
        each val, index in navItems
          li
            a(href=val).link.dim.white.dib.mr3 #{index}
</template>

<script>
export default {
  name: 'NavToolbar'
}
</script>

<style scoped>
  li {
    display: inline;
  }

  header {
    top:0;
  }
</style>
