import React from 'react';
import {connect} from "react-redux";
import {
    changeFollowedActionCreator,
    setCurrentPage,
    setPeopleActionCreator,
    setTotalPeople,
    showMoreActionCreator
} from "../../Redux/People-reducer";
import People from "./People";

const mapStateToProps = (state) => {
    return {
        peopleData: state.peopleData.peopleData,
        pageSize: state.peopleData.pageSize,
        totalPeople: state.peopleData.totalPeople,
        currentPage: state.peopleData.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFollowed: (userId) => {
            dispatch(changeFollowedActionCreator(userId));
        },
        showMore: (userId) => {
            dispatch(showMoreActionCreator());
        },
        setPeople: (people) => {
            dispatch(setPeopleActionCreator(people));
        },
        setTotalPeople: (count) => {
            dispatch(setTotalPeople(count));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page));
        }
    }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;