<template>
  <v-app id="inspire">
    <v-navigation-drawer right v-model="drawer" fixed app>
      <v-img
        src="https://mcdn.wallpapersafari.com/medium/41/99/KLR9cA.jpg"
        height="100%"
      >
        <v-list dense>
          <v-list-tile router :to="{ name: 'home' }" exact>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile router :to="{ name: 'users' }" exact>
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile router :to="{ name: 'posts' }" exact>
            <v-list-tile-action>
              <v-icon>view_list</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Posts</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile router :to="{ name: 'postcreate' }" exact>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Create</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-img>
    </v-navigation-drawer>

    <v-toolbar dark fixed app color="cyan lighten-5">
     
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>

        <v-toolbar-title>HI</v-toolbar-title>
      </v-img>
    </v-toolbar>

    <v-content>
      <router-view />
      <!--      <router-view /> 가 중요함 컴포넌트 만듬
                웹 사이트에서 url 경로에 따라 컴포넌트 보여줌. -->
    </v-content>
    <!-- <v-footer color="cyan lighten-5" fixed app>
      <span class="white--text"> ㅎ_ㅇ</span>
    </v-footer> -->

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>