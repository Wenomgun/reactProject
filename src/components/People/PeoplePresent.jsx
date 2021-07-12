import classes from './People.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";
import Reloader from "../Common/Reloader";

let PeoplePresent = (props) => {
    let pagesCount = Math.ceil(props.totalPeople / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const renderData = () => {
        if (props.isFetching) {
            return <Reloader></Reloader>
        } else {
            return props.peopleData.map((user) => {
                return <div key={user.userId} className={classes.peopleWrap}>
                    <div className={classes.photoWrap}>
                        <div>
                            <NavLink to={`/profile/${user.userId}`} >
                                <img className={classes.avatar} src={user.photo} />
                            </NavLink>
                        </div>
                        <div>
                            <button onClick={() => {props.changeFollowed(user.userId)}}
                                    className={user.isFollowed ? classes.isNotFollowed : classes.isFollowed}>
                                {user.isFollowed ? 'Отписаться' : 'Подписаться'}
                            </button>
                        </div>
                    </div>
                    <div className={classes.infoWrap}>
                        <div className={classes.info}>
                            <div>{user.fullName}</div>
                            <div>{user.address}</div>
                        </div>
                        <div>
                            {user.description}
                        </div>
                    </div>
                </div>
            })
        }
    }

    return <div className={classes.people}>
        <div className={classes.paginator}>
            {pages.map((page) => {
                return <div key={page} onClick={() => { props.changePageHandler(page)} }
                            className={[props.currentPage === page ? classes.currentPage : '', classes.page].join(' ')}
                >{page}</div>
            })}
        </div>
        {
            renderData()
        }
    </div>
}

export default PeoplePresent;