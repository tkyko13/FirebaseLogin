<template>
 <div class="login">
   <p
     v-if="user.login"
     class="text"
   >
     {{user.email}} でログイン中
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
   // dataのように扱える
   // dataを作る前処理が必要な際に利用
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
 mounted() {
   // ログインしているかどうかのチェック　ログインしていたらデータ追加
   this.$store.dispatch('checkLogin');
 },
 methods : {
   async login () {
      // メールとパスワードでログイン
      console.log('login action', this.email, this.password);
      this.$store.dispatch('login', {email:this.email, password:this.password});
   },
   loginGoogle() {
      // Googleアカウントでログイン
      this.$store.dispatch('loginGoogle');
   },
   logout : function() {
      // ログアウト
      this.$store.dispatch('logout');
   }
 }
}
</script>