
let initialMessages = [
    {text: 'Hi, how are you?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Fine, Thanks', userId: '2', date: new Date(), fromMe: false},
    {text: 'and how are you?', userId: '2', date: new Date(), fromMe: false},
    {text: 'Good', userId: '1', date: new Date(), fromMe: true},
    {text: 'Where are you from?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Moscow', userId: '2', date: new Date(), fromMe: false},
];

const messageeReducer = (state = initialMessages, action) => {
    let newState = [...state];
    if (action.type === 'add-msg') {
        newState.push(action.data);
    }

    return newState;
}
export const addMsgActionCreator = (data) => ({
    type: 'add-msg',
    data: data
});

export default messageeReducer;