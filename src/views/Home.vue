<template>
  <v-container>
    <h1 style="text-align:center" v-if="isLoadingLocation">Searching location....</h1>
    <h1 style="text-align:center" v-if="!canGeolocate">Can not find your location</h1>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isLoadingLocation: true,
      canGeolocate: true
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let x = position.coords.latitude;
        let y = position.coords.longitude;

        fetch(`https://transport.opendata.ch/v1/locations?x=${x}&y=${y}`)
          .then(data => {
            return data.json();
          })
          .then(data => {
            let element = data.stations.find(element => {
              return element.id && element.id != null
            });
            console.log(element);
            this.$router.push({
              name: "station",
              params: { id: element.id }
            });
          });
      });
      this.canGeolocate = true;
    } else {
      this.canGeolocate = false;
    }

    this.isLoadingLocation = false;
  }
};
</script>
