<template>
  <div class="page">
    
    <h1>My Loginテスト</h1>

    <LoginMenu />

    <h3 v-if="user.login">
      ログインに成功！
      <router-link to="/userPage">マイページへ</router-link>
    </h3>
    <h3 class="title" v-else>
      ログインしてね！
    </h3>
  </div>
</template>

<script>
import LoginMenu from "~/components/LoginMenu.vue";

export default {
  components: {
    LoginMenu: LoginMenu,
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  }
};
</script>