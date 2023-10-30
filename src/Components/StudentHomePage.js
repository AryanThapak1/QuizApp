import React from "react";
import classes from "./StudentHomePage.module.css"; // Don't forget to import your CSS file for styling
import { useNavigate } from "react-router-dom";

const StudentHomePage = () => {
    const navigate=useNavigate();

    const startedHandler=()=>
    {
        navigate('/Analytics')
    }
    return (
        <div className={classes.homeContainer}>
            <h1 className={classes.heading}>Welcome, Student!</h1>
            <p className={classes.description}>
                Elevate your learning experience with QuizQiz. Sharpen your knowledge, attempt quizzes, and track your progress effortlessly.
            </p>
            <div className={classes.features}>
                <div className={classes.feature}>
                    <i className={`fas fa-pen ${classes.icon}`}></i>
                    <h2>Attempt Quizzes</h2>
                    <p>Challenge yourself with interactive quizzes. Test your understanding and enhance your skills in various subjects.</p>
                </div>
                <div className={classes.feature}>
                    <i className={`fas fa-chart-bar ${classes.icon}`}></i>
                    <h2>Check Analytics</h2>
                    <p>Review your quiz performance, analyze your strengths and weaknesses, and monitor your progress over time.</p>
                </div>
            </div>
            <div className={classes.cta}>
                <p>Ready to embark on your learning journey?</p>
                <button className={classes.startButton} onClick={startedHandler}>Get Started</button>
            </div>
        </div>
    );
}

export default StudentHomePage;
