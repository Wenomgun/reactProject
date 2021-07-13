import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () =>{
    return (
        <header className={classes.header}>
           <div>
               Logo
           </div>
           <div>
               <NavLink to='/login'>Login</NavLink>
           </div>
        </header>
    );
}

export default Header;