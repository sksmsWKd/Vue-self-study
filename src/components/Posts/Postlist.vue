<template>
  <div>
    <v-container mt-3>
      <h1>pass</h1>
      <br /><br />
      <v-layout row>
        <v-flex ml-5 mr-5>
          <v-card width="600">
            <v-toolbar color="pink" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>

              <v-toolbar-title>EE</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>

            <br />

            <v-list three-line>
              <v-list-item-group v-for="post in posts" v-bind:key="index">
                <v-btn block elevation="2" outlined @click="show(post.index)">
                  <v-subheader
                    v-if="post.title"
                    :key="post.title"
                    v-text="post.title"
                  >
                  </v-subheader>
                  <v-subheader
                    v-if="post.index"
                    :key="post.index"
                    v-text="post.index"
                  >
                  </v-subheader
                ></v-btn>

                <v-divder></v-divder>

                <!-- <h2>sodyd</h2>
            <v-list-item-component
              v-if="post.content"
              :key="post.content"
              v-text="post.content"
            >
            </v-list-item-component>
            <v-list-item-avatar>
              <v-img :src="post.src"></v-img>
            </v-list-item-avatar>
            <!-- <router-link style=text-decoration:none; :to="{ name: 'intro'}"> -->
                <v-btn @click="destroy(post.index)">??</v-btn>

                <br /><br /><br />

                <v-divder></v-divder>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex ml-5 mr-5>
          <v-card width="600" v-if="ifshow">
            <v-toolbar color="pink" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>

              <v-toolbar-title>INFO</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>

            <v-list>
              <v-list-item-group
                v-for="post in posts"
                v-bind:key="post.index"
                v-if="post.index == indexing"
              >
                <v-subheader
                  v-if="post.title"
                  :key="post.title"
                  v-text="post.title"
                >
                </v-subheader>
                <v-subheader
                  v-if="post.index"
                  :key="post.index"
                  v-text="post.index"
                >
                </v-subheader>
                <v-list-item-component
                  v-if="post.content"
                  :key="post.content"
                  v-text="post.content"
                >
                </v-list-item-component>
                <v-list-item-avatar>
                  <v-img :src="post.src"></v-img>
                </v-list-item-avatar>

                <v-btn @click="hide()">close</v-btn>

                <v-text-field label="댓글" v-model="ccontent"> </v-text-field>
                <v-btn @click="commentSave()">댓글작성</v-btn>
                <v-list>
                  {{ comments }}
                </v-list>

                <v-list-item-group
                  v-for="comment in comments"
                  v-bind:key="comment.index"
                >
                  <v-subheader
                    v-if="comment.ccontent"
                    :key="comment.ccontent"
                    v-text="comment.ccontent"
                  >
                  </v-subheader>
                </v-list-item-group>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      ifshow: false,
      indexing: 0,
      title: null,
      content: null,
      src: null,
      ccontent: null,
      index: 0,
    };
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(["comments"]),
  },
  methods: {
    ...mapMutations(["deletePost"]),
    ...mapMutations(["commentSave2"]),

    show(abc) {
      this.ifshow = true;
      this.indexing = abc;
    },
    hide() {
      this.ifshow = false;
    },
    destroy: function (post) {
      this.$store.commit("deletePost", post);
    },
    commentSave() {
      let comments = {
        index: this.index,
        ccontent: this.ccontent,
      };
      this.$store.commit("commentSave2", comments);

      this.index += 1;
      this.ccontent = null;
    },
  },
};
</script>