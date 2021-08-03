import classes from './Reloader.module.css'
import React, {FC} from 'react';
import loading from '../../assets/loading.gif';

let Reloader: FC = (): JSX.Element => {
    const urlReloader = loading;
    return <div className={classes.fetchingReloader}>
        <img src={urlReloader}/>
    </div>
}

export default Reloader;