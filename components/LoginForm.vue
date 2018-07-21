<template lang="pug">
  section
    h2 Login with Facebook
    a.sign-in(primary, href="#", v-on:click="facebookLogin") Facebook Login
</template>

<script>
export default {
  data () {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    emailLogin () {
      this.$store.dispatch('logInWithEmail', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        this.formEmail = ''
        this.formPassword = ''
      }).catch((e) => {
        console.log(e.message)
      })
    },
    facebookLogin () {
      this.$store.dispatch('logInWithFacebook').then(() => {
        console.log('inside then statement on login')
      }).catch(e => {
        console.log(e.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
