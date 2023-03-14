<template>
  <div class="container">
   <div class="row justify-content-center mt-5">
     <div class="col-md-6">
       <div v-show="message" class="alert alert-danger">{{message}}</div>
       <h4 class="mb-3">Login</h4>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control mb-3" id="username" placeholder="Enter username" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control mb-3" id="password" placeholder="Enter password" v-model="user.password">
        </div>
         <button class="w-100 btn btn-secondary btn-lg mt-3" type="button"  @click="login">login </button>
          <hr class="my-4">
     </div>
   </div>
  </div>
</template>

<script>
import UserDataService from '@/services/UserDataService'

export default {
  data () {
    return {
      message: null,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      UserDataService.postLogin(this.user)
        .then(response => {
          console.log(response.data)
          // localStorage.setItem('token', response.data.token)
          this.$store.dispatch('user', response.data.user)
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          // Handle the error here
          this.message = error.response.data.message
          // console.log(error.response.data.body.message)
        })
    }
  }
}
</script>
