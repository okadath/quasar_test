<template>
<div>
    <form class="login" @submit.prevent="login">
      <h1>Log in</h1>
      <section>
        <b-field label="Email" >
            <b-input required v-model="email" color="red" type="email" placeholder="Email"  ></b-input>
        </b-field>
           <b-field label="Password">
            <b-input hide-hint type="password" v-model="password" placeholder="Password" required  password-reveal>
            </b-input>
        </b-field>
    <hr/>
      </section>
    <button type="submit">Login</button>
    </form>
</div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const email = this.email
      const password = this.password
      this.$store
        .dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
