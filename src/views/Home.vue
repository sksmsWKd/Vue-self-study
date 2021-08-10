<template>
  <div>
    <h1>
      <h1>h {{ title }}</h1>
      <input type="text" v-model="input" />
      <button type="button" @click="getData">get</button>
      <button type="button" @click="setData">set</button>

      <select class="form-control" v-model="region" @change="change">
        <option
          :key="index"
          :value="option.v"
          v-for="(option, index) in options"
        >
          <!-- 데이터 하나씩 돌아가며, key 넣기 필수 , 유일한 키값 -->
          {{ option.v }} : {{ option.t }}
        </option>
      </select>

      <table class="table table-bordered" v-show="tableshow">
        <tr :key="index" v-for="(data, index) in options">
          <td>{{ data.v }}</td>
          <td>{{ data.t }}</td>
        </tr>
      </table>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tableshow: true,
      title: "제목자리",
      input: "abc",
      region: "3",
      options: [
        { v: "1", t: "aa" },
        { v: "2", t: "bb" },
        { v: "3", t: "cc" },
        { v: "4", t: "dd" },
      ],
    };
  },
  watch: {
    // 정의한 데이터를. 메서드형식으로 만듬

    input() {
      //input 데이터가 변경이 일어나면,
      //데이터 변경을 체크
      console.log(this.input + "으로 변경");
      // alert("변경금지!!");
      // this.input = "abc";
    },
  },
  methods: {
    change() {
      alert(this.region);
    },
    getData() {
      alert(this.input);
      //메소드안에서 데이터 접근시 this
    },

    setData() {
      this.input = "12345";
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>