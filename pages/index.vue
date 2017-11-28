<template>
  <div class="f1 code">
    hello world!
    <ul>
      <li v-for="user in users" :key="user.id">{{user.login}}</li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from "vuex"

  export default {
    computed: mapState([
      "users"
    ])
  }
</script>
