<template>
  <div class="page">
    
    <h1>ユーザーページ</h1>

    <h3 v-if="user.login">
      {{user.email}} でログイン中
    </h3>
    <h3 class="title" v-else>
      ログインしてね！
      <router-link to="/">Go to Top</router-link>
    </h3>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'
const db = firebase.firestore();
const userRef = db.collection('users');

export default {
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  },
  async created() {
    const user = await userRef.get();
    console.log(user)
  }
};
</script>