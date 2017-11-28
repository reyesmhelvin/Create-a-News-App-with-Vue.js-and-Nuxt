<template>
  <div class="f1 code">
    <ul>
      <li v-for="article in news" :key="article.id">{{article.acf.news_title}}</li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from "vuex"

  export default {
    computed: mapState([
      "news"
    ])
  }
</script>
