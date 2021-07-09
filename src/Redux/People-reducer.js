const CHANGE_FOLLOW = 'changeFollowed';
const SHOW_MORE = 'showMore';
const SET_PEOPLE = 'setPeople';

let initialPeople = [

];

const peopleReducer = (state = initialPeople, action) => {
    if (action.type === CHANGE_FOLLOW) {
        let userId = action.data;
        let newState = [...state];
        newState = newState.map((user) => {
            if (user.userId !== userId) {
                return user;
            }
            return {...user, isFollowed: !user.isFollowed}
        });
        return newState;
    } else if (action.type === SHOW_MORE) {
        return [...state, ...action.data];
    } else if (action.type === SET_PEOPLE) {
        return [...action.data];
    }
    return state;
}

export const changeFollowedActionCreator = (userID) => ({
    type: CHANGE_FOLLOW,
    data: userID
});

export const setPeopleActionCreator = (people) => ({
    type: SET_PEOPLE,
    data: people
});

export const showMoreActionCreator = (people) => ({
    type: SHOW_MORE,
    data: people
});

export default peopleReducer;