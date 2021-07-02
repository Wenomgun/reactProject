import classes from './Information.module.css'

const Information = () =>{
    return (
       <div className={classes.information}>
           <span>Имя: MAkar</span>
           <span>Фамилия: Makarov</span>
           <span>Дата рождения: 12.11.2000</span>
           <span>Информация: Любой текст</span>
       </div>
    );
}

export default Information;