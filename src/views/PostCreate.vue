<template>

    <!-- <v-container>
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
    </v-container> -->
 <div class="container-fluid mt-5 justify-content-center">
    <div class="row">
      <div class="col mt-3">
        <div class="card">
          <div class="card-header">asddddddd456546</div>
          <div class="card-body">zxc</div>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="col mt-3">
        <div class="card">
          <div class="card-header">zz567asdasdasdasd</div>
          <div class="card-body">456asd</div>
        </div>
      </div>
    </div>
    <div class="w-100"></div>
    <div class="row">
      <div class="col mt-3">
        <div class="card">
          <div class="card-header">
            <input type="text" placeholder="여기 입력" v-model="string" />
          </div>
          <div class="card-body">
            <p>{{ string }}</p>
          </div>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="col mt-3">
        <div class="card">
          <div class="card-header">aasadsdasd</div>
          <div class="card-body">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      @click="goToEvents"
                      type="button"
                      class="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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


