<template>
  <section class="section">
    <p>{{autotext}}</p>
    <button v-on:click="onRec">REC</button>
  </section>
</template>

<script>

export default {
  data() {
    return {
      speech:"",
      autotext:""
    };
  },
  async mounted() {
    this.speech = new webkitSpeechRecognition();
    this.speech.lang = 'ja-JP';
    this.speech.onresult = (e) => {
      // 言葉が途切れたら実行される
      this.speech.stop();
      if (e.results[0].isFinal) {
        // テキストの取り出し
        console.log(e.results[0][0]);
        this.autotext = e.results[0][0].transcript;
      }
    };
    this.speech.onend = () => {
      // stopが呼ばれたら実行される
      // 繰り返し検出開始
      this.speech.start();
    };
  },
  methods: {
    onRec: function (type) {
      // ボタンが押されたら検出開始
      this.speech.start();
    },
  },
};
</script>
