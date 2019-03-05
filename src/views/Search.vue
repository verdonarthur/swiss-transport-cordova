<style lang="scss">
.autocompleteContainer {
  position: relative;
  height: 100%;
}
.searchStationInput {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>


<template>
  <v-container class="autocompleteContainer">
    <v-autocomplete
      class="searchStationInput"
      change="selectStation"
      v-model="searchStationInput"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      color="white"
      hide-no-data
      hide-selected
      item-text="name"
      item-value="API"
      label="Station stop"
      placeholder="Start typing to Search"
      return-object
    ></v-autocomplete>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
    searchStationInput: null,
    search: null,
    items: []
  }),
  watch: {
    searchStationInput(val) {
      if (!val.id) return;

      this.$router.push({ name: "station", params: { id: val.id } });
    },

    async search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      let stations = [];

      try {
        let data = await fetch(
          "http://transport.opendata.ch/v1/locations?query=" + val
        );
        data = await data.json();

        data.stations.forEach(station => {
          stations.push(station);
        });

        this.items = stations;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
