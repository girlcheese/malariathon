<template lang="pug">
  section.w-100.pv3.f6.ph3.ph4-ns
    .mw9.center.ph3-ns
      p(v-if="user") Hello, {{user.displayName}}
      p(v-else) The user is not authenticated!
    .mw9.center.ph3-ns
      login-form
</template>

<script>

import LoginForm from '~/components/LoginForm.vue'
export default {
  layout: 'malariathon',
  components: { LoginForm },
  data () {
    return {
      title: 'Login'
    }
  },
  computed: {
    user () { return (this.$store.state || {}).user || null }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Login to view more' }
      ]
    }
  }
}
</script>

<style>

</style>
