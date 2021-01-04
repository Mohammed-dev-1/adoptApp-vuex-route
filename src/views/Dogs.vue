<template>
  <div class="up d-flex justify-content-center">
    <div class="cardog shadow-lg mb-5 p-3 rounded">
      <Pets-Table
        species="dogs"
        :pets="dogs"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetsTable from '../components/PetsTable'

export default {
  name: 'dogs',
  components: {
    PetsTable
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style>
.cardog{
  width: 800px;
  color: #29374b;
  background: #448d60;
}
</style>
