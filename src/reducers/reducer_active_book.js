// state argument is not application state, on the state this
// reducer is responsible for

// ES6: 'state = null' - when state is undefined, set to null
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      // always want to return a fresh object
      return action.payload;
  }

  return state;
}