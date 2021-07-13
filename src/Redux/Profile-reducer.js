const SET_PROFILE_DATA = 'setProfileData';

let initialProfileData = {
    profileData: null,
    postData: [
        {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны',  date: new Date(), likes: 4, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
        {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
        {fio: 'Ivan Ivanov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 2, photoUser: 'https://png.clipart.me/istock/previews/4090/40905468-single-vector-male-avatar.jpg'}
    ]
}

const profileReducer = (state = initialProfileData, action) => {
    if (action.type === SET_PROFILE_DATA) {
        return {
            ...state, profileData: action.data
        };
    }
    return state;
}

export const setProfileData = (profileData) => ({
    type: SET_PROFILE_DATA,
    data: profileData
});

export default profileReducer;