import classes from './Information.module.css'
import {FC} from "react";

const Information: FC<any> = ({data}) =>{
    return (
       <div className={classes.information}>
           <b>{data.fullName}</b>
           <span>Дата рождения: {data.birthday + ''}</span>
           <span>Информация: {data.info}</span>
       </div>
    );
}

export default Information;