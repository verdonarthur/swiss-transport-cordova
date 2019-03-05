<style lang="scss">
.stationboardItem {
  border-radius: 10px;

  .infoGenTransport {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    text-align:center;
    height: 150px;

    border-bottom: 2px solid black;
    border-top: 2px solid black;

    .arrowSVG i {
      font-size: 3em;
      color: black;
    }
  }

  .infoDetTransport {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    .transportNumber,
    .transportOperator {
      background: #54a0ff;
      min-width: 3em;
      min-height: 2em;
      padding: 1em 1em;
      text-align: center;
      line-height: 1em;
      color: white;
      font-weight: bold;
    }

    .transportOperator {
      min-width: 4em;
    }
    .transportNumber {
      border-radius: 50%;
    }
  }
}
</style>

<template>
  <v-flex xs12>
    <v-card class="stationboardItem">
      <v-card-title>
        <h4 class="headline">{{displayDeparture(transportDeparture)}}</h4>
      </v-card-title>
      <v-card-text class="infoGenTransport">
        <div>
          <h5 class="title">{{transportName}}</h5>
        </div>
        <div class="arrowSVG">
          <v-icon>arrow_right_alt</v-icon>
        </div>
        <div>
          <h5 class="title">{{transportDestination}}</h5>
        </div>
      </v-card-text>
      <v-card-text class="infoDetTransport">
        <div class="transportNumber">{{transportNumber}}</div>
        <div class="transportOperator">{{transportOperator}}</div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import Moment from "moment";

export default {
  props: [
    "transportName",
    "transportDeparture",
    "transportDestination",
    "transportNumber",
    "transportOperator"
  ],
  methods: {
    displayDeparture(date) {
      date = new Moment(date);
      return date.format("HH:mm");
    }
  }
};
</script>
