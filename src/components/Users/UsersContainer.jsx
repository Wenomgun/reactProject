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

class UsersContainer extends React.Component {
    getPeople = () => {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((resp) => {
                if (!resp.data.error) {
                    const peoplesData = resp.data.items;
                    const totalCount = resp.data.totalCount;
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
        db.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then((resp) => {
                if (!resp.data.error) {
                    const peoplesData = resp.data.items;
                    const totalCount = resp.data.totalCount;
                    this.props.setPeople(peoplesData);
                    this.props.setIsFetching(false);
                }
            });
    }

    changeFollowedUser = (user) => {
        const newUser = {...user, isFollowed: !user.isFollowed};
        db.put('/peoples.json', newUser)
            .then((resp) => {
                const peoplesData = resp.data;
                let peoples = [];
                for (const key in peoplesData) {
                    peoples.push({ ...peoplesData[key]})
                }
                this.props.changeFollowed(newUser);
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