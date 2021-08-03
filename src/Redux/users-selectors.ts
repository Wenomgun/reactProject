import {AllStateType} from "./Store";

export const selectPeopleData = (state: AllStateType) => {
    return state.peopleData.peopleData;
}

export const selectPageSize = (state: AllStateType) => {
    return state.peopleData.pageSize;
}

export const selectTotalPeople = (state: AllStateType) => {
    return state.peopleData.totalPeople;
}

export const selectCurrentPage = (state: AllStateType) => {
    return state.peopleData.currentPage;
}

export const selectIsFetching = (state: AllStateType) => {
    return state.peopleData.isFetching;
}

export const selectIsProgress = (state: AllStateType) => {
    return state.peopleData.isProgress;
}