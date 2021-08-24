<template>
  <div>
    <h1>All Users :{{ count }}</h1>
    <h2><a href="/">Go Home</a></h2>

    <h3>
      Seoul users: {{ seouls }} <br />
      Seoul % : {{ percent }}%
    </h3>
    <h2><br />Our Users<br /></h2>

    <v-list two-line>
      <v-list-tile v-for="(user, index) in allUsers" :key="index" avatar>
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title
            >id:#{{ index }} / {{ user.address }} 거주</v-list-tile-sub-title
          >
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";

//1.getters 편하게 사용하기위해서 mapgetters 사용 ㅡ import 필요
//2.getters 를 computed 안에 선언
//3.약속 ...mapGetters() 선언,
//4.computed 에서 불러온 getters 만 mapGetters 로 편하게 사용가능
//5.$store.getters.A 말고,  computed 처럼 allUsersCount  만 적어도 가능.
//a - map을 통해서 직관적으로 변수에 사용가능.

//mutation - state 값을 변이시킴
//1.mutation을 편하게 사용하기위해 사용할 vue에서
//import mapMutation시킴
//2....mapMutation 을 method 안에 선언+ 이름지정
//3. 이렇게 불러오면 , vue instance내에서 함수처럼 사용 가능.
//또는 , mapMutation 하지않고, method 에 commit('mutation이름') 으로도 가능,
//  this.$store.commit("addUsers",userObj);  ->뒤에인자는 addUser 에넣을 인자 payload

//mutation.. 동기로
//action -> 비동기
//actions 를 실행시킴(dispatch) , actions 내에서 mutation을 commit-> vue변화

import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["allUsersCount", "percentOfSeoul", "countOfSeoul"]),
    ...mapGetters({
      count: "allUsersCount",
      seouls: "countOfSeoul",
      percent: "percentOfSeoul",
    }),
    ...mapState(["allUsers"]),
  },

  mounted() {
    EventBus.$on("signUp", (users) => {
      this.$store.state.allUsers.push(users);
    });
  },
};
</script>
