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
      title: 'The Rules'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'These are the rules' }
      ]
    }
  }
}
</script>

<style>

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
