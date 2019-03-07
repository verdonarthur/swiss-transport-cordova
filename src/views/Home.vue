<template>
  <v-container>
    <h1 style="text-align:center" v-if="isLoadingLocation">Searching location....</h1>
    <h1 style="text-align:center" v-if="!canGeolocate">Can not find your location</h1>
  </v-container>
</template>

<script>
let loadStationByPosition = (x, y, router) => {
  fetch(`https://transport.opendata.ch/v1/locations?x=${x}&y=${y}`)
    .then(data => {
      return data.json();
    })
    .then(data => {
      let element = data.stations.find(element => {
        return element.id && element.id != null;
      });
      router.push({
        name: "station",
        params: { id: element.id }
      });
    });
};

export default {
  data() {
    return {
      isLoadingLocation: true,
      canGeolocate: true
    };
  },
  created() {
    let x = 0.0;
    let y = 0.0;

    if (window.cordova && window.cordova.platformId != "browser") {
      console.log("Cordova is loaded", window.cordova);

      navigator.geolocation.getCurrentPosition(
        position => {
          x = position.coords.latitude;
          y = position.coords.longitude;
          loadStationByPosition(x, y, this.$router);
          this.canGeolocate = true;
          this.isLoadingLocation = false;
        },
        error => {
          console.log(
            "code: " + error.code + "\n" + "message: " + error.message + "\n"
          );
          this.canGeolocate = false;
          this.isLoadingLocation = false;
        }
      );
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            x = position.coords.latitude;
            y = position.coords.longitude;
            loadStationByPosition(x, y, this.$router);
            this.canGeolocate = true;
            this.isLoadingLocation = false;
          },
          error => {
            console.log(
              "code: " + error.code + "\n" + "message: " + error.message + "\n"
            );
            this.canGeolocate = false;
            this.isLoadingLocation = false;
          }
        );
      }
    }
  }
};
</script>
