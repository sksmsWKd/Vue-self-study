<template>
  <div id="app">
    <Header></Header>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    Parent counter : {{ parentCounter }}<br />

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <child></child>

    <br />
    <br />

    <div id="app">
      <button @click="$store.commit('increment')">증가</button>
      <button @click="$store.commit('decrement')">감소</button>
      <button @click="$store.commit('doubleadd', 5)">버튼</button>
      {{ count }}

      <h1>{{ $store.getters.counting }}</h1>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

// App.vue(Parent)
import Child from "./Child.vue";

export default {
  name: "App",
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    child: Child,
    Header,
  },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  methods: {
    // 이벤트 추가
    addCounter() {
      this.$store.commit("addCounter");
    },
    subCounter() {
      this.$store.state.counter--;
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
