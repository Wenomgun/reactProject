import React from 'react';
import {connect} from "react-redux";
import {
    changeFollowed, getUsers, setIsFetching
} from "../../Redux/People-reducer";
import UsersPresent from "./UsersPresent";
import {authRedirectContainer} from "../hoc/authRedirectContainer";
import {compose} from "redux";
import {
    selectCurrentPage,
    selectIsFetching,
    selectIsProgress,
    selectPageSize,
    selectPeopleData, selectTotalPeople
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    changePageHandler(page) {
        this.props.getUsers(page);
    }

    changeFollowedUser = (user) => {
        this.props.changeFollowed(user);
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
            isProgress={this.props.isProgress}
            setIsFetching={() => {this.props.setIsFetching()}}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        peopleData: selectPeopleData(state),
        pageSize: selectPageSize(state),
        totalPeople: selectTotalPeople(state),
        currentPage: selectCurrentPage(state),
        isFetching: selectIsFetching(state),
        isProgress: selectIsProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        changeFollowed,
        setIsFetching,
        getUsers
    }),
    authRedirectContainer
)(UsersContainer);