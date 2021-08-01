export const selectPeopleData = (state: any) => {
    return state.peopleData.peopleData;
}

export const selectPageSize = (state: any) => {
    return state.peopleData.pageSize;
}

export const selectTotalPeople = (state: any) => {
    return state.peopleData.totalPeople;
}

export const selectCurrentPage = (state: any) => {
    return state.peopleData.currentPage;
}

export const selectIsFetching = (state: any) => {
    return state.peopleData.isFetching;
}

export const selectIsProgress = (state: any) => {
    return state.peopleData.isProgress;
}