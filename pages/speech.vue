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
      this.speech.stop();
      if (e.results[0].isFinal) {
        this.autotext = e.results[0][0].transcript;
      }
    };
    this.speech.onend = () => {
      // 繰り返し検出開始
      this.speech.start();
    };
  },
  methods: {
    onRec: function (type) {
      this.speech.start();
    },
  },
};
</script>
