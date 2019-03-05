<style lang="scss">

</style>


<template>
  <v-container>
    <h1 style="text-align:center">{{stationboard==null ? '' : stationboard.station.name}}</h1>
    <div style="text-align:center">
      <v-btn flat icon color="grey" v-on:click="saveToBookmark">
        <v-icon>favorite</v-icon>
      </v-btn>
    </div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap v-if="stationboard != null">
        <StationboardItem 
        v-bind:transport-departure="item.stop.departure" 
        v-bind:transport-name="item.name"
        v-bind:transport-destination="item.to"
        v-bind:transport-number="item.number"
        v-bind:transport-operator="item.operator"
        v-for="(item, key, index) in stationboard.stationboard" :key="index"></StationboardItem>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Moment from "moment";
import Bookmark from '../class/bookmarks.class'
import StationboardItem from '../components/StationboardItem.vue'

export default {
  components:{
    StationboardItem
  },
  data() {
    return { stationboard: null };
  },
  async created() {
    try {
      let data = await fetch(
        `http://transport.opendata.ch/v1/stationboard?id=${
          this.$route.params.id
        }&limit=10`
      );

      this.stationboard = await data.json();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    saveToBookmark(){
      let bookmark = new Bookmark(this.stationboard.station.id, this.stationboard.station.name)

      bookmark.save()
    }
  }
};
</script>
