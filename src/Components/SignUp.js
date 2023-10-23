import { NavLink } from 'react-router-dom';
import classes from './SignUp.module.css'

const SignUp=()=>{
 return(
<div className={classes.container}>
 <h1>Who are you ?</h1>
 <nav className={classes.nav}>
 <NavLink to="Teacher">Teacher</NavLink>
 <NavLink to="Student">Student</NavLink>
 </nav>
 </div>
 )
 
}

export default SignUp;