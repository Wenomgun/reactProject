const postReducer = (state, action) => {
    if (action.type === 'add-post') {
        state.push(action.data);
    }

    return state;
}

export default postReducer;