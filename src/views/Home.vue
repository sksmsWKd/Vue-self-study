<template>
  <v-container>
    <h1>Home</h1>

    <h2><a href="/users">Go All users</a></h2>
    <h2>전체 유저 수 :{{ $store.getters.allUsersCount }}</h2>

    <h3>
      <!-- <br />...mapGetters 사용자지정<br /> -->
      서울 수 : {{ seouls }} <br />
      서울% : {{ percent }}%
    </h3>

    <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
      <v-layout wrap row>
        <v-flex xs12 sm6 class="pb-2" width="50%">
          <v-card height="290px" :color="`#C1F0F6	`">
            50%
            <h1>1</h1>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="pb-2" width="50%">
          <v-card height="290px" :color="`#C1F0F6	`">
            50%
            <h1>2</h1>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="pb-2" v-for="i in 3">
          <v-card height="140px" :color="`#292929	`"> 33% </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 4">
          <v-card height="180px" :color="`#AF4035`"> 25% </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["allUsers"]),
    ...mapGetters({
      count: "allUsersCount",
      seouls: "countOfSeoul",
      percent: "percentOfSeoul",
    }),
  },
};
</script>
