const CHANGE_FOLLOW = 'changeFollowed';
const SHOW_MORE = 'showMore';
const SET_PEOPLE = 'setPeople';
const SET_TOTAL_PEOPLE = 'setTotalPeople';
const SET_CURRENT_PAGE = 'setCurrentPage';
const SET_IS_FETCHING = 'setIsFetching';

let initialState = {
    peopleData: [],
    pageSize: 3,
    totalPeople: 0,
    currentPage: 1,
    isFetching: false
};

const peopleReducer = (state = initialState, action) => {
    if (action.type === CHANGE_FOLLOW) {
        let userId = action.data;
        return {
            ...state,
            peopleData: state.peopleData.map((user) => {
                if (user.userId !== userId) {
                    return user;
                }
                return {...user, isFollowed: !user.isFollowed}
            })
        };
    } else if (action.type === SHOW_MORE) {
        return {...state, peopleData: [...state.peopleData, ...action.data]};
    } else if (action.type === SET_PEOPLE) {
        return {...state, peopleData: [...action.data]};
    } else if (action.type === SET_TOTAL_PEOPLE) {
        return {...state, totalPeople: action.data};
    } else if (action.type === SET_CURRENT_PAGE) {
        return {...state, currentPage: action.data};
    } else if (action.type === SET_IS_FETCHING) {
        return {...state, isFetching: action.data};
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

export const setTotalPeople = (count) => ({
    type: SET_TOTAL_PEOPLE,
    data: count
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    data: page
});

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING,
    data: isFetching
});

export default peopleReducer;