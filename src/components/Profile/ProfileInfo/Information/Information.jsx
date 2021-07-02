import classes from './Information.module.css'

const Information = (props) =>{
    const data = props.data;
    return (
       <div className={classes.information}>
           <b>{data.firstName} {data.lastName}</b>
           <span>Дата рождения: {data.birthday + ''}</span>
           <span>Информация: {data.info}</span>
       </div>
    );
}

export default Information;