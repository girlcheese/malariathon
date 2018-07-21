<template lang="pug">

  header.bg-black-90.fixed.w-100.ph3.pv3.pv4-ns.ph4-m.ph5-l
    nav.f6.fw6.ttu.tracked
      ul.nav
        li
          a(href="/rules").link.dim.white.dib.mr3 The Rules
        li
          a(href="/health").link.dim.white.dib.mr3 Health and Wellness
        li
          a(href="/progress").link.dim.white.dib.mr3 Progress
        li
          a(href="/faqs").link.dim.white.dib.mr3 FAQs
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
