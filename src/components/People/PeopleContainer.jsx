import React from 'react';
import {connect} from "react-redux";
import {changeFollowedActionCreator, setPeopleActionCreator, showMoreActionCreator} from "../../Redux/People-reducer";
import People from "./People";

const mapStateToProps = (state) => {
    return {
        peopleData: state.peopleData
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
        }
    }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;