import { Link } from "react-router-dom"
import classes from '../Components/LoginNav.module.css'
const StudentNav=()=>
{
    const logoutHandler=()=>
   {
      sessionStorage.removeItem('token');               
      sessionStorage.removeItem('type');
   }
   return(
    <nav className={classes.LoginBar}>
        <Link to=''>Home</Link>
        <Link to=''>Analytics</Link>
        <Link to='Quiz'>Attempt Quiz</Link>
        <Link to='/' onClick={logoutHandler}>Logout</Link>
    </nav>
   )
}

export default StudentNav;