<style scoped lang="scss">
.cstToolbar {
  .titleToolbar {
    color: var(--v-secondary-base);
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    width: 100%;
  }
}
</style>


<template>
  <v-app>
    <v-toolbar app color="primary" class="cstToolbar">
      <v-toolbar-title class="headline titleToolbar">{{$router.currentRoute.name}}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-bottom-nav app fixed :value="true">
      <v-btn flat color="primary" :to="{ name: 'search'}">
        <span>Search</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn flat color="primary" :to="{ path: '/'}">
        <span>Homepage</span>
        <v-icon>location_on</v-icon>
      </v-btn>

      <v-btn flat color="primary" :to="{ name: 'bookmarks'}">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {}
};
</script>
