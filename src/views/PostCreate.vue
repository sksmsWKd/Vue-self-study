<template>
  <div>
    <v-container>
      <v-flex xs6>
        <h1>ㅎ_ㅇ</h1>
        <v-text-field label="제목" v-model="title"> </v-text-field>
        <v-text-field label="내용" v-model="content" height="20px">
        </v-text-field>
        <v-text-field label="이미지" v-model="src"></v-text-field>
        <v-btn @click="create">작성</v-btn>
      </v-flex>

      <h3>이미지예시</h3>
      https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tree_Sparrow_August_2007_Osaka_Japan.jpg/250px-Tree_Sparrow_August_2007_Osaka_Japan.jpg
    </v-container>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 0,
      title: null,
      content: null,
      src: null,
    };
  },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    ...mapMutations(["createPost"]),

    create() {
      let postObj = {
        index: this.index,
        title: this.title,
        content: this.content,
        src: this.src,
      };

      this.$store.commit("createPost", postObj);
      this.index += 1;
      alert("게시글 작성 완료");
      this.clearForm();
    },
    clearForm() {
      this.title = null;
      this.content = null;
      this.src = null;
    },
  },
};
</script>


