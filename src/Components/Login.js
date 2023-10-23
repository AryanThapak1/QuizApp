import classes from "./Login.module.css";
import homeImage from "../Images/download2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useLogin from "../custom hooks/useLogin";

const Login = (props) => {
  const {invalid, submitHandler,teacherCheckHandler, userRef, passRef } = useLogin();
  const navigate = useNavigate();
  const access = sessionStorage.getItem("token");
  const type =sessionStorage.getItem("type");
  useEffect(() => {
    if (access) {
      navigate(`/${type}/home`);
    }
  }, []);

  return (
    <div>
      <div className={classes.homepage}>
        <div className={classes.container}>
          <h1>Welcome to QuizWiz</h1>
          <p>Log into your account!</p>
          <form className={classes.form} onSubmit={submitHandler}>
            <label>E-mail</label>
            <input
              type="email"
              className={classes.input}
              ref={userRef}
              required
            />
            <label>Password</label>
            <input
              type="password"
              className={classes.input}
              ref={passRef}
              required
            />

            <button className={classes.button}>Login</button>
            <div>
              <input type="checkbox" onClick={teacherCheckHandler}/>
              <label> Are you a teacher</label>
            </div>
            {invalid && <p>Wrong email or password</p>}
          </form>
          <NavLink to="SignUp" className={classes.signup}>
            Sign Up ?
          </NavLink>
        </div>
        <img src={homeImage} alt="some quiz" className={classes.img} />
      </div>
    </div>
  );
};

export default Login;
