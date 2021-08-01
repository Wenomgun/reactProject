import {api} from "../api/api";

const CHANGE_FOLLOW = 'changeFollowed';
const SHOW_MORE = 'showMore';
const SET_PEOPLE = 'setPeople';
const SET_TOTAL_PEOPLE = 'setTotalPeople';
const SET_CURRENT_PAGE = 'setCurrentPage';
const SET_IS_FETCHING = 'setIsFetching';
const SET_IS_PROGRESS = 'setIsProgress';

export type ChangeFollowAction = { type: typeof CHANGE_FOLLOW; data?: any; }
export type ShowMoreAction = { type: typeof SHOW_MORE; data?: any; }
export type SetPeopleAction = { type: typeof SET_PEOPLE; data?: any; }
export type SetTotalPeopleAction = { type: typeof SET_TOTAL_PEOPLE; data?: any; }
export type SetCurrentPageAction = { type: typeof SET_CURRENT_PAGE; data?: any; }
export type SetIsFetchingAction = { type: typeof SET_IS_FETCHING; data?: any; }
export type SetIsProgressAction = { type: typeof SET_IS_PROGRESS; data?: any; }

let initialState = {
    peopleData: [] as any[],
    pageSize: 3 as number,
    totalPeople: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    isProgress: false as boolean,
};

type InitialStatePeople = typeof initialState;
type PeopleAction = ChangeFollowAction | ShowMoreAction | SetPeopleAction | SetTotalPeopleAction
    | SetCurrentPageAction | SetIsFetchingAction | SetIsProgressAction;

const peopleReducer = (state: InitialStatePeople = initialState, action: PeopleAction) => {
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

export const changeFollowedActionCreator = (userID: any): ChangeFollowAction => ({
    type: CHANGE_FOLLOW,
    data: userID
});

export const setPeopleActionCreator = (people: any): SetPeopleAction => ({
    type: SET_PEOPLE,
    data: people
});

export const showMoreActionCreator = (people: any): ShowMoreAction => ({
    type: SHOW_MORE,
    data: people
});

export const setTotalPeople = (count: any): SetTotalPeopleAction => ({
    type: SET_TOTAL_PEOPLE,
    data: count
});

export const setCurrentPage = (page: any): SetCurrentPageAction => ({
    type: SET_CURRENT_PAGE,
    data: page
});

export const setIsFetching = (isFetching: any): SetIsFetchingAction => ({
    type: SET_IS_FETCHING,
    data: isFetching
});

export const setIsProgress = (isProgress: any): SetIsProgressAction => ({
    type: SET_IS_PROGRESS,
    data: isProgress
});

export const getUsers = (page = 1) => {
    return (dispatch: any) => {
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

export const changeFollowed = (user: any) => {
    return (dispatch: any) => {
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