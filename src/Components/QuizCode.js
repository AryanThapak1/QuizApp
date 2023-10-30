import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './QuizCode.module.css'; // Import the CSS module
import { useDispatch } from 'react-redux';
import { questionActions } from '../Store/Store';
import { useSelector } from 'react-redux';

const QuizCode = (props) => {
  const quizref = useRef();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [wrong,SetWrong]=useState(false);
  const quizNameHandler = async () => {
    const response = await fetch('http://localhost:8080/api/v1/students/quiz', {
      method: 'POST',
      body: JSON.stringify({ quizName: quizref.current.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      dispatch(questionActions.addQuizCode(quizref.current.value));
      navigate(`/student/Quiz/${quizref.current.value}`);
      SetWrong(false);
    }

    else
    {
        SetWrong(true);
        return;
    }

  }; 
  const quizCode=useSelector(state=>state.quizCode);

  useEffect(()=>{
      if(quizCode.length>0)
      {
        navigate(`/student/Quiz/${quizCode}`);
      }
  })
  return (
    <div className={classes.container}>
      <div className={`${classes.formContainer} ${classes.quizNameForm}`}>
        <label className={classes.label}>Enter Quiz Code</label>
        <input type="text" className={classes.input} ref={quizref} />
        <button className={classes.button} onClick={quizNameHandler}>
          Attempt Quiz
        </button>
        {wrong && <p className={classes.invalid}>Wrong Code!</p>}
      </div>
    </div>
  );
};

export default QuizCode;
