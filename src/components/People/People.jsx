import classes from './People.module.css'
import React from 'react';
import db from '../../Redux/db'

const People = (props) =>{

    // firebase.auth().signInWithEmailAndPassword('akalyig@mail.ru', '123456')
    //     .then((resp) => {
    //         console.log(resp);
    //     })
    //     .catch((e) => {
    //     console.log(e);
    // })

    if (props.peopleData.length === 0) {
        db.get('/peoples.json').then((resp) => {
            const data = resp.data;
            const key = Object.keys(data)[0];
            props.setPeople(data[key]);
        });
    }
    return (
        <div className={classes.people}>
            {props.peopleData.map((user) => {
                    return <div key={user.userId} className={classes.peopleWrap}>
                        <div className={classes.photoWrap}>
                            <div>
                                <img src={user.photo} />
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
        </div>
    );
}

export default People;