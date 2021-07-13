import classes from './Users.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";
import Reloader from "../Common/Reloader";
import Avatar from "../Common/Avatar";

let UsersPresent = (props) => {
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
                return <div key={user.id} className={classes.peopleWrap}>
                    <div className={classes.photoWrap}>
                        <div>
                            <NavLink to={`/profile/${user.id}`} >
                                <Avatar data={user}></Avatar>
                            </NavLink>
                        </div>
                        <div>
                            <button onClick={() => {props.changeFollowed(user)}}
                                    className={user.followed ? classes.isNotFollowed : classes.isFollowed}>
                                {user.followed ? 'Отписаться' : 'Подписаться'}
                            </button>
                        </div>
                    </div>
                    <div className={classes.infoWrap}>
                        <div className={classes.info}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
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

export default UsersPresent;