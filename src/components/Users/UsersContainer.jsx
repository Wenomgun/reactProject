import React from 'react';
import {connect} from "react-redux";
import {
    changeFollowedActionCreator,
    setCurrentPage, setIsFetching,
    setPeopleActionCreator,
    setTotalPeople,
    showMoreActionCreator
} from "../../Redux/People-reducer";
import db from "../../Redux/db";
import axios from 'axios';
import UsersPresent from "./UsersPresent";
import {api} from "../../api/api";

class UsersContainer extends React.Component {
    getPeople = () => {
        this.props.setIsFetching(true);
        api.getUsers().then((data) => {
                if (!data.error) {
                    const peoplesData = data.items;
                    const totalCount = data.totalCount;
                    this.props.setTotalPeople(totalCount);
                    this.props.setPeople(peoplesData);
                    this.props.setIsFetching(false);
                }
        });
    }

    componentDidMount() {
        this.getPeople();
    }

    changePageHandler(page) {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);
        api.getUsers(page).then((data) => {
                if (!data.error) {
                    const peoplesData = data.items;
                    const totalCount = data.totalCount;
                    this.props.setPeople(peoplesData);
                    this.props.setIsFetching(false);
                }
            });
    }

    changeFollowedUser = (user) => {
        const newUser = {...user, isFollowed: user.followed};
        api.changedFollowed(user.id, user.followed).then((resp) => {
            if (resp.data.resultCode === 0) {
                this.props.changeFollowed(newUser);
            }
        });
    }

    render() {
        return <UsersPresent
            totalPeople={this.props.totalPeople}
            peopleData={this.props.peopleData}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changePageHandler={(page) => {this.changePageHandler(page)}}
            changeFollowed={this.changeFollowedUser}
            isFetching={this.props.isFetching}
            setIsFetching={() => {this.props.setIsFetching()}}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        peopleData: state.peopleData.peopleData,
        pageSize: state.peopleData.pageSize,
        totalPeople: state.peopleData.totalPeople,
        currentPage: state.peopleData.currentPage,
        isFetching: state.peopleData.isFetching,
    }
}

export default connect(mapStateToProps, {
    changeFollowed: changeFollowedActionCreator,
    showMore: showMoreActionCreator,
    setPeople: setPeopleActionCreator,
    setTotalPeople,
    setCurrentPage,
    setIsFetching
})(UsersContainer);