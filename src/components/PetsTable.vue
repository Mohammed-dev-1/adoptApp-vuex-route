<template>
  <div class="container">
    <div class="tx">
    <h1>{{species}} For Adoption</h1>
    <b-table class="tx" striped hover :items="pets">
      <template #cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetsTable',
  props: {
    species: String,
    pets: Array
  }
}
</script>

<style>
.tx{
  color: #fdfff8;
}
.tx h1 {
  color: #1f3057;
}
</style>
