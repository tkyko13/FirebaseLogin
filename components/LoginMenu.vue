<template>
 <div class="login">
   <p
     v-if="user.login"
     class="text"
   >
     {{ user }}
     <button v-on:click="logout">ログアウト</button>
   </p>
   <div v-else>
     email: <input type="email" v-model="email">
     password: <input type="password" v-model="password">
     <button v-on:click="login">
       メールログイン
     </button>
     <button v-on:click="loginGoogle">
       Googleログイン
     </button>
   </div>
 </div>
</template>

<script>
export default {
 computed: {
   user () {
     return this.$store.getters['user'];
   },
 },
 data () {
   return {
     email: '',
     password: '',
   }
 },
 created() {
   this.$store.dispatch('checkLogin');
 },
 methods : {
   login (email, password) {
     this.$store.dispatch('login', {email: this.email, password: this.password});
   },
   loginGoogle() {
     this.$store.dispatch('loginGoogle');
   },
   logout : function() {
      this.$store.dispatch('logout');
    }
 }
}
</script>