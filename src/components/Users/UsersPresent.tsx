import classes from './Users.module.css'
import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import Reloader from "../Common/Reloader";
import Avatar from "../Common/Avatar";
import Paginator from "../Common/Paginator";

export type UserPresentPropsType = {
    totalPeople: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    isProgress: boolean;
    peopleData: any;
    changeFollowed: Function;
    changePageHandler: Function;
    setIsFetching: Function;
}

let UsersPresent: FC<UserPresentPropsType> = ({totalPeople,
                        pageSize,
                        isFetching,
                        peopleData,
                        isProgress,
                        changeFollowed,
                        changePageHandler,
                        currentPage}) => {
    const renderData = () => {
        if (isFetching) {
            return <Reloader/>
        } else {
            return peopleData.map((user: any) => {
                return <div key={user.id} className={classes.peopleWrap}>
                    <div className={classes.photoWrap}>
                        <div>
                            <NavLink to={`/profile/${user.id}`} >
                                <Avatar data={user}/>
                            </NavLink>
                        </div>
                        <div>
                            <button disabled={isProgress} onClick={() => {changeFollowed(user)}}
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
        <Paginator totalItem={totalPeople}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   changePageHandler={changePageHandler}/>
        {
            renderData()
        }
    </div>
}

export default UsersPresent;