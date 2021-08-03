const ADD_MESSAGE = 'message/addMessage';

type MessageActionType = {
    type: typeof ADD_MESSAGE;
    data: Message;
}

type Message = {
    text: string;
    userId: string;
    date: Date;
    fromMe: boolean;
}

let initialMessages: Message[] = [
    {text: 'Hi, how are you?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Fine, Thanks', userId: '2', date: new Date(), fromMe: false},
    {text: 'and how are you?', userId: '2', date: new Date(), fromMe: false},
    {text: 'Good', userId: '1', date: new Date(), fromMe: true},
    {text: 'Where are you from?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Moscow', userId: '2', date: new Date(), fromMe: false},
];

const messageReducer = (state: Message[] = initialMessages, action: MessageActionType): Message[] => {
    if (action.type === ADD_MESSAGE) {
        state = [...state, {...action.data}];
    }

    return state;
}

export const addMsgActionCreator = (data: Message): MessageActionType => {
    return {
        type: ADD_MESSAGE,
        data
    }
}

export default messageReducer;