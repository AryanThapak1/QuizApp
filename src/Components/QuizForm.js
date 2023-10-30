import React, { useEffect, useState } from "react";
import Form from "../UI/Form";
import classes from "./QuizForm.module.css";
import { useSelector } from "react-redux";
import QuizName from "../UI/QuizName";

const QuizForm = () => {
  const [selected, setSelected] = useState(false);

  const continueHandler = (event) => {
    event.preventDefault();
    setSelected(true);
  };

  const quizName=useSelector(state=>state.quiz);
  useEffect(()=>{
    if(quizName.trim().length!==0)
    {
      setSelected(true);
    }

  },[quizName])
  return (
    <div className={classes.container}>
      <p className={classes.quizFormDescription}>
        Welcome to our intuitive and user-friendly Create Quiz Section, where
        your imagination takes center stage! Here, you have the power to craft
        engaging quizzes tailored to your unique interests and preferences.
      </p>
      <form className={classes.form}>
        {!selected &&<button className={classes.quizFormButton} onClick={continueHandler}>
          Continue
        </button>}
      </form>
      {selected && (
        <>
          <QuizName/>
        </>
      )}
    </div>
  );
};

export default QuizForm;
