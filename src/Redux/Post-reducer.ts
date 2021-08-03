const ADD_POST = 'post/addPost'
let initialPosts = [
    {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны',  date: new Date(), likes: 4, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
    {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
    {fio: 'Ivan Ivanov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 2, photoUser: 'https://png.clipart.me/istock/previews/4090/40905468-single-vector-male-avatar.jpg'}
];

type AddPostAction = { type: typeof ADD_POST; data?: any; }

const postReducer = (state = initialPosts, action: AddPostAction) => {
    if (action.type === ADD_POST) {
        state = [...state, {...action.data}];
    }

    return state;
}
export const addPostActionCreator = (data: any): AddPostAction => ({
    type: ADD_POST,
    data: data
});

export default postReducer;