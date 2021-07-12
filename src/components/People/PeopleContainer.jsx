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
import PeoplePresent from "./PeoplePresent";

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    getPeople = () => {
        this.props.setIsFetching(true)
        Promise.all([
            db.get(`/peoples.json?orderBy="userId"&limitToFirst=${this.props.pageSize}&print=pretty`),
            db.get('/peoplesTotalCount.json')
        ]).then((resp) => {
            const peoplesData = resp[0].data;
            const pagesData = resp[1].data;
            let peoples = [];
            for (const key in peoplesData) {
                peoples.push({ ...peoplesData[key]})
            }
            for (const key in pagesData) {
                this.props.setTotalPeople(pagesData[key]);
            }
            this.props.setPeople(peoples);
            this.props.setIsFetching(false);
        });
    }

    componentDidMount() {
        // let data = {userId: 10,
        //     fullName: 'Soft Gopnic',
        //     description: 'I`m driver',
        //     photo: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg',
        //     address: 'Omsk',
        //     isFollowed: false
        // };
        // db.post('/peoplesTotalCount.json', 10);
        this.getPeople();
    }

    changePageHandler(page) {
        this.props.setCurrentPage(page);
        this.props.setIsFetching(true);
        const startPosition = (this.props.pageSize * page) - (this.props.pageSize - 1);
        db.get(`/peoples.json?orderBy="userId"&startAt=${startPosition}&limitToFirst=${this.props.pageSize}&print=pretty`)
            .then((resp) => {
                const peoplesData = resp.data;

                let peoples = [];
                for (const key in peoplesData) {
                    peoples.push({ ...peoplesData[key]})
                }
                this.props.setPeople(peoples);
                this.props.setIsFetching(false)
            });
    }

    render() {
        return <PeoplePresent
            totalPeople={this.props.totalPeople}
            peopleData={this.props.peopleData}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changePageHandler={(page) => {this.changePageHandler(page)}}
            changeFollowed={this.props.changeFollowed}
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
})(PeopleContainer);