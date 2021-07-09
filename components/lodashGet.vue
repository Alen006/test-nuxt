<template lang="pug">
  div
    h2 test
    span {{countDiscount}}
</template>

<script>
// import _get from 'lodash/get'

import _map from 'lodash/map'
export default {
  data() {
    return {
      prices: [150, 200, 250, 300],

      pricesObj: [{ a: 150, b: 200 }]
    }
  },
  computed: {
    // countDiscount() {
    //   return this.prices.map((e) => e - e * 0.15)
    // }
    countDiscount() {
      const array = _map({ x: 14, y: 28 })

      const mappedArray = _map(array, function square(n) {
        return n * n
      })
      return mappedArray
    }
  },
  mounted() {}
}
</script>
