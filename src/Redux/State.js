const dialogsData = [
    {name: 'Alex', userId: '1'},
    {name: 'Martin', userId: '2'},
    {name: 'Locost', userId: '3'},
    {name: 'Rob', userId: '4'},
    {name: 'Protost', userId: '5'},
    {name: 'Ghost', userId: '6'},
];
const messagesData = [
    {text: 'Hi, how are you?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Fine, Thanks', userId: '2', date: new Date(), fromMe: false},
    {text: 'and how are you?', userId: '2', date: new Date(), fromMe: false},
    {text: 'Good', userId: '1', date: new Date(), fromMe: true},
    {text: 'Where are you from?', userId: '1', date: new Date(), fromMe: true},
    {text: 'Moscow', userId: '2', date: new Date(), fromMe: false},
];

const postsData = [
    {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны',  date: new Date(), likes: 4, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
    {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
    {fio: 'Ivan Ivanov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 2, photoUser: 'https://png.clipart.me/istock/previews/4090/40905468-single-vector-male-avatar.jpg'}
];

let state = {
    dialogs: {
        dialogsData,
        messagesData
    },
    profileData: {
        postsData,
        userInfo: {
            firstName: 'Makar',
            lastName: 'Makarov',
            birthday: new Date(),
            address: 'Moscow',
            info: 'I`m student and programmer',
            photo: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg',
            isOnline: true
        }
    }
}

export default state;