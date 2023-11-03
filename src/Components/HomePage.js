import React from "react";
import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate=useNavigate();
    const startedHandler=()=>
    {
        navigate('/teacher/create')
    }
    return (
        <div className={classes.homeContainer}>
            <h1 className={classes.heading}>Welcome, Teacher!</h1>
            <p className={classes.description}>
                Unlock the power of education with QuizWiz. Manage your classroom efficiently, track student progress, and create engaging quizzes effortlessly.
            </p>
            <div className={classes.features}>
                <div className={classes.feature}>
                    <i className={`fas fa-chart-line ${classes.icon}`}></i>
                    <h2>Check Student Analytics</h2>
                    <p>Gain insights into student performance, track progress, and identify areas for improvement.</p>
                </div>
                <div className={classes.feature}>
                    <i className={`fas fa-edit ${classes.icon}`}></i>
                    <h2>Create Quizzes</h2>
                    <p>Build interactive quizzes with a user-friendly interface. Add questions, set options, and define correct answers.</p>
                </div>
                <div className={classes.feature}>
                    <i className={`fas fa-tasks ${classes.icon}`}></i>
                    <h2>Manage Quizzes</h2>
                    <p>Effortlessly organize quizzes, review results, and modify content as needed. Keep your teaching materials up-to-date.</p>
                </div>
            </div>
            <div className={classes.cta}>
                <p>Ready to enhance your teaching experience?</p>
                <button className={classes.startButton} onClick={startedHandler}>Get Started</button>
            </div>

        </div>
    );
}

export default HomePage;
