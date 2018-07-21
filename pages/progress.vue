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
export default {
  layout: 'malariathon',
  components: {},
  data () {
    return {
      title: 'Progress'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'How is our progress?' }
      ]
    }
  }
}
</script>

<style>

</style>
