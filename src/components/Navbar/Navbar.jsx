import classes from './Navbar.module.css'


const Navbar = () =>{
    return (
        <nav className={classes.navbar}>
            <div><a href='/profile'>Profile</a></div>
            <div><a href='/message'>Message</a></div>
            <div><a href='/news'>News</a></div>
            <div><a href='/music'>Music</a></div>
            <div><a href='/setting'>Setting</a></div>
        </nav>
    );
}

export default Navbar;