export default {
  getAll_adopt: (state) => {
    return state.cats.length + state.dogs.length
  }
}
