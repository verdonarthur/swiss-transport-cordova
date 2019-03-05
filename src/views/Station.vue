<template>
  <div>
    {{stationId}}
  </div>
</template>

<script>
export default {computed: {
    stationId () {
      return this.$route.params.id
    }
  }
}
</script>
