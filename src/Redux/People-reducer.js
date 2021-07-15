import {api} from "../api/api";

const CHANGE_FOLLOW = 'changeFollowed';
const SHOW_MORE = 'showMore';
const SET_PEOPLE = 'setPeople';
const SET_TOTAL_PEOPLE = 'setTotalPeople';
const SET_CURRENT_PAGE = 'setCurrentPage';
const SET_IS_FETCHING = 'setIsFetching';
const SET_IS_PROGRESS = 'setIsProgress';

let initialState = {
    peopleData: [],
    pageSize: 3,
    totalPeople: 0,
    currentPage: 1,
    isFetching: false,
    isProgress: false,
};

const peopleReducer = (state = initialState, action) => {
    if (action.type === CHANGE_FOLLOW) {
        let userDataAction = action.data;

        return {
            ...state,
            peopleData: state.peopleData.map((user) => {
                if (userDataAction.id !== user.id) {
                    return user;
                }
                return {...user, followed: !user.followed, isFollowed: !user.followed}
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
    } else if (action.type === SET_IS_PROGRESS) {
        return {...state, isProgress: action.data};
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

export const setIsProgress = (isProgress) => ({
    type: SET_IS_PROGRESS,
    data: isProgress
});

export const getUsers = (page = 1) => {
    return (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(setIsFetching(true));
        api.getUsers(page).then((data) => {
            if (!data.error) {
                dispatch(setTotalPeople(data.totalCount));
                dispatch(setPeopleActionCreator(data.items));
                dispatch(setIsFetching(false));
            }
        });
    }
}

export const changeFollowed = (user) => {
    return (dispatch) => {
        const newUser = {...user, isFollowed: user.followed};
        dispatch(setIsProgress(true));
        api.changedFollowed(user.id, user.followed).then((resp) => {
            if (resp.data.resultCode === 0) {
                dispatch(changeFollowedActionCreator(newUser));
                dispatch(setIsProgress(false));
            }
        });
    }
}

export default peopleReducer;