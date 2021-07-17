const ADD_MESSAGE = 'addMessage';

let initialMessages = [
    {text: 'Hi, how are you?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Fine, Thanks', userId: '2', date: new Date(), fromMe: false},
    {text: 'and how are you?', userId: '2', date: new Date(), fromMe: false},
    {text: 'Good', userId: '1', date: new Date(), fromMe: true},
    {text: 'Where are you from?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Moscow', userId: '2', date: new Date(), fromMe: false},
];

const messageReducer = (state = initialMessages, action) => {
    if (action.type === ADD_MESSAGE) {
        state = [...state, {...action.data}];
    }

    return state;
}
export const addMsgActionCreator = (data) => ({
    type: ADD_MESSAGE,
    data: data
});

export default messageReducer;