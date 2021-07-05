
let initialUserInfo = {
    firstName: 'Makar',
    lastName: 'Makarov',
    birthday: new Date(),
    address: 'Moscow',
    info: 'I`m student and programmer',
    photo: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg',
    isOnline: true
}

const userInfoReducer = (state = initialUserInfo, action) => {

    return state;
}

export default userInfoReducer;