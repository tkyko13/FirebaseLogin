<template>
  <div class="page">
    
    <h1>indexページ</h1>

    <div v-for="page in pages">
       <router-link v-bind:to="page.path">{{page.title}}</router-link>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      pages : [
        {
          title:'ログイン',
          path:'/login'
        },
        {
          title:'音声認識',
          path:'/speech'
        },
      ]
    };
  },
};
</script>