import { Link } from "react-router-dom";
import classes from "./LoginNav.module.css"
const LoginNav=()=>
{
   const logoutHandler=()=>
   {
      sessionStorage.removeItem('token')
   }
   return(
    <nav className={classes.LoginBar}>
        <Link to=''>Home</Link>
        <Link to='create'>Create Quiz</Link>
        <Link to='manage'>Manage Quiz</Link>
        <Link to='/' onClick={logoutHandler}>Logout</Link>
    </nav>
   )
}

export default LoginNav;