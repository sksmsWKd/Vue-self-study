<template>
  <div>
    <h1>SignUp</h1>

    <v-text-field label="아이디" v-model="userId"></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field label="이름" v-model="name"></v-text-field>
    <v-text-field label="주소" v-model="address"></v-text-field>
    <v-text-field label="이미지" v-model="src"></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>

    <v-text-field label="글자의 색을 입력해 주세요" v-model="color">
    </v-text-field>
    <v-text-field label="글자의 사이즈를 입력해 주세요" v-model="fontSize">
    </v-text-field>

    <div>
      <div :style="{ color: color, 'font-size': fontSize + 'px' }">
        <p>style test</p>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userId: null,
      password: null,
      name: null,
      address: null,
      src: null,
      color: "",
      fontSize: 13,
    };
  },
  methods: {
    // ...mapMutations(["addUsers"]),
    ...mapActions(["addUser"]),

    signUp() {
      let userObj = {
        userId: this.userId,
        password: this.password,
        name: this.name,
        address: this.address,
        src: this.src,
      };
      // this.$store.commit("addUsers", userObj);
      // this.addUsers(userObj);
      // EventBus.$emit("signUp", userObj);
      // this.$store.dispatch("addUser", userObj);
      this.addUser(userObj);
      this.clearForm();
    },
    clearForm() {
      (this.userId = null),
        (this.password = null),
        (this.name = null),
        (this.address = null),
        (this.src = null);
    },
  },
};
</script>