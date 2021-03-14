<template>
  <div>
    <heading class="mb-6">Price Widget</heading>
    <!-- Four columns -->
    <div class="flex mb-4 h-screen">
      <div class="w-1/4 bg-grey h-12">
        <h2>INR</h2>
        <input type="number" class="p-2" v-model="inr" />
      </div>
      <div class="w-1/4 bg-grey-light h-12">
        <h2>USD</h2>
        <input class="p-2 bg-40" :value="inr * rates.USD" />
      </div>
      <div class="w-1/4 bg-grey h-12">
        <h2>GBP</h2>
        <input class="p-2 bg-40" :value="inr * rates.GBP" />
      </div>
      <div class="w-1/4 bg-grey-light h-12">
        <h2>EUR</h2>
        <input class="p-2 bg-40" :value="inr * rates.EUR" />
      </div>
    </div>
    {{ rates }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      inr: 100,
      rates: null,
    };
  },
  created() {
    fetch("https://api.exchangeratesapi.io/latest?base=INR").then(
      async (response) => {
        const data = await response.json();
        this.rates = data.rates;
      }
    );
  },
  mounted() {},
};
</script>

<style>
/* Scoped Styles */
</style>
