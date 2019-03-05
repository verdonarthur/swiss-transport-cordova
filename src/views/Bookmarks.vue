<template>
  <div class="bookmarks">
    <v-container fluid grid-list-lg>
      <v-layout row wrap v-if="bookmarks != null">
        <v-flex xs12 v-for="(item, key, index) in bookmarks.stations" :key="index">
          <v-card class color="accent">
            <v-card-title>
              <h3 class="title" v-on:click="displayStation" v-bind:data-stationid="item.id">{{item.name}}</h3>

              <v-spacer></v-spacer>
              <v-btn icon v-on:click="removeStation(item.id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Bookmarks from "../class/bookmarks.class";

export default {
  data() {
    return {
      bookmarks: null
    };
  },
  created() {
    console.log(Bookmarks.getSavedBookmarks());
    this.bookmarks = Bookmarks.getSavedBookmarks();
  },
  methods:{
    displayStation(ele){
      let idStation = ele.currentTarget.getAttribute('data-stationid')
      this.$router.push({ name: "station", params: { id: idStation } });
    },
    removeStation(id){
      Bookmarks.removeById(id)
      this.bookmarks = Bookmarks.getSavedBookmarks()
    }
  }
};
</script>
