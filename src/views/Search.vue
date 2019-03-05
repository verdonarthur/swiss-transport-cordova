<style lang="scss">
.autocompleteContainer {
}
.searchStationInput {
}
</style>


<template>
  <v-container fluid>
    <v-autocomplete
      class="searchStationInput"
      change="selectStation"
      v-model="searchStationInput"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      item-text="name"
      item-value="id"
      label="Search a Station"
      cache-items
      flat
      hide-no-data
      hide-details
      solo-inverted
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
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      let stations = [];

      try {
        let data = await fetch(
          
          "https://transport.opendata.ch/v1/locations?query=" + val
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
