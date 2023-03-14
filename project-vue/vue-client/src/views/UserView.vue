<template>
  <div class="container">
   <div class="row justify-content-center mt-5">
     <div class="col-md-6">
       <div v-show="message" class="alert alert-danger">{{message}}</div>
       <h4 class="mb-3">New User</h4>
       <div class="form-group">
          <label for="fullname">Name</label>
          <input type="text" class="form-control mb-3" id="fullname" placeholder="Enter name" v-model="user.fullname">
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control mb-3" id="username" placeholder="Enter username" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control mb-3" id="password" placeholder="Enter password" v-model="user.password">
        </div>
         <button class="w-100 btn btn-secondary btn-lg mt-3" type="button"  @click="saveUser">Save </button>
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
        password: '',
        fullname: ''
      }
    }
  },
  methods: {
    saveUser () {
      UserDataService.create(this.user)
        .then(response => {
          // console.log(response.data)
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          // Handle the error here
          // console.log(error.response.data.message)
          this.message = error.response.data.message
        })
    }
  }
}
</script>
