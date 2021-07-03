const messageeReducer = (state, action) => {
    if (action.type === 'add-msg') {
        state.push(action.data);
    }

    return state;
}

export default messageeReducer