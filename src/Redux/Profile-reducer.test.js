import profileReducer, {setProfileData, setProfileStatus} from "./Profile-reducer";


it('change status', () => {
    const newStatus = 'new status';
    let state = {
        profileData: null,
        postData: [
            {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны',  date: new Date(), likes: 4, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
            {fio: 'Makar Makarov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 1, photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'},
            {fio: 'Ivan Ivanov', post: 'Высота блока с горизонтальной полосой прокрутки увеличивается на высоту скролбара, хотя по спецификации CSS заданные размеры должны', date: new Date(), likes: 2, userId: 2, photoUser: 'https://png.clipart.me/istock/previews/4090/40905468-single-vector-male-avatar.jpg'}
        ],
        status: ''
    }

    const action = setProfileStatus(newStatus);
    let newState = profileReducer(state, action);
    expect(newState.status === newStatus).toBe(true);
})
