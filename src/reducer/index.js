const Reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FILTERS':
      return {
        ...state,
        filters: action.payload
      }
    default:
      return state
  }
}

export default Reducer
