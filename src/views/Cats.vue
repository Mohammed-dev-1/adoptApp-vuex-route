<template>
  <div class="up d-flex justify-content-center">
    <div class="cardog shadow-lg mb-5 p-3 rounded">
      <Pets-Table
        species="cats"
        :pets="cats"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetsTable from '../components/PetsTable'

export default {
  name: 'Cats',
  components: {
    PetsTable
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<style>
</style>
