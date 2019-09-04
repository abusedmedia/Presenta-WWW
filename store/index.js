export const state = () => ({
  color: 'vibrant',
  colors: ['bn', 'original', 'vibrant', 'polite', 'breeze', 'sunny']
})

export const mutations = {
  changeColor (state, color) {
    state.color = color
  }
}

export const getters = {
  colorstyle (state) {
    const ob = {}
    ob[state.color] = true
    return ob
  },
  color (state) {
    return state.color
  },
  colors (state) {
    return state.colors
  }
}
