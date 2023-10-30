import React from 'react';
import styles from './QuizLayout.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionActions } from '../Store/Store';

const QuizComponent = ({ quizName }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleQuizClick = () => {
  
  
  setTimeout(()=>{
    dispatch(questionActions.addQuiz(quizName));
    navigate(`${quizName}`);
  })
  };

  return (
    <div className={styles.quizComponent} onClick={handleQuizClick}>
      {quizName}
    </div>
  );
};

export default QuizComponent;
