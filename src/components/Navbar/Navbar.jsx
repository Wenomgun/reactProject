import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className={classes.navbar}>
            <div><NavLink activeClassName={classes.activeLink} to='/profile'>Profile</NavLink></div>
            <div><NavLink activeClassName={classes.activeLink} to='/people'>People</NavLink></div>
            <div><NavLink activeClassName={classes.activeLink} to='/message'>Message</NavLink></div>
            <div><NavLink activeClassName={classes.activeLink} to='/news'>News</NavLink></div>
            <div><NavLink activeClassName={classes.activeLink} to='/music'>Music</NavLink></div>
            <div><NavLink activeClassName={classes.activeLink} to='/setting'>Setting</NavLink></div>
        </nav>
    );
}

export default Navbar;