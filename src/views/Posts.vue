<template>
  <v-container>
    <h1>Posts</h1>

    <v-flex xs6>
      <Postlist></Postlist>
    </v-flex>
  </v-container>
</template>
<script>
import Postlist from "../components/Posts/Postlist.vue";
export default {
  components: {
    Postlist,
  },
};
</script>