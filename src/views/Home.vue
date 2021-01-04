<template>
  <div class="container">

    <h1>Adopt a New best Friend.</h1>

    <div class="container justify-content-center d-flex">
      <button
        @click="togglePetForm"
        class="btn btn-primary mb-4">
        New Adopt
      </button>
      <h4 class="p-3 font-weight-bold">{{ getAll_adopt }}</h4>
    </div>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        />

        <b-form-input
          class="mt-3"
          id="exampleInput2"
          type="text"
          v-model="formData.breed"
          required
          placeholder="Enter breed"
        />

        <b-form-input
          class="mt-3"
          id="exampleInput2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        />

        <b-form-select
          class="mt-3"
          id="exampleInput3"
          :options="['cats', 'dogs']"
          required
          v-model="formData.species"
          placeholder="Species"
        />

        <b-button
          type="submit"
          class="mt-3"
          variant="primary">
          Submit
        </b-button>
        <b-button
          type="reset"
          variant="danger"
          class="ml-2 mt-3">
          Reset
        </b-button>

    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        breed: '',
        age: null,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAll_adopt'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { age, name, breed, species } = this.formData
      const payload = {
        species,
        pet: {
          name,
          breed,
          age
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        breed: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>

<style scoped>

</style>
