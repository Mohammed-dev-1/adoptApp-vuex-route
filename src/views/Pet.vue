<template>
  <div class="container d-flex justify-content-center">
    <div class="card shadow-lg p-3 rounded">
      <h1 class="once">{{ animal.name }} {{ $route.params.species }} </h1>
      <p class=""><span class="once">Age: </span>{{ animal.age }} years old</p>
      <p class=""><span class="once">Breed: </span>{{ animal.breed }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pet',
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>

<style scoped>
.card{
  width: 500px;
  color: #fcfae0;
  background: #448d60;
}
.second{
  color: #65a2c3;
}
.once{
  color: #29374b;
}
</style>
