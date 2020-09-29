<template>
  <div class="page">
    
    <h1>My Loginテスト</h1>

    <Login />

    <h3 v-if="user.login">
      ログインに成功！
    </h3>
    <h3 class="title" v-else>
      ログインしてね！
    </h3>
  </div>
</template>

<script>
import Login from "~/components/Login.vue";

export default {
  components: {
    Login: Login,
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  }
};
</script>