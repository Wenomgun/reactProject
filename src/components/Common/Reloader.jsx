import classes from './Reloader.module.css'
import React from 'react';
import loading from '../../assets/loading.gif';

let Reloader = () => {
    const urlReloader = loading;
    return <div className={classes.fetchingReloader}>
        <img src={urlReloader}></img>
    </div>
}

export default Reloader;