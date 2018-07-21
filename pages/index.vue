<template lang="pug">
  section.w-100.pv3.f6.ph3.ph4-ns
    .mw9.center.ph3-ns
      .cf.ph2-ns
        .fl.w-100.w-third-ns.pa2
          .outline.bg-white.pv4
        .fl.w-100.w-third-ns.pa2
          .outline.bg-white.pv4
        .fl.w-100.w-third-ns.pa2
          .outline.bg-white.pv4
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  layout: 'malariathon',
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
