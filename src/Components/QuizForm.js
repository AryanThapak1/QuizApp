import React, { useState } from "react";
import Form from "../UI/Form";
import classes from "./QuizForm.module.css";

const QuizForm = () => {
  const [selected, setSelected] = useState(false);
  const [inputType, SetInputType] = useState("");

  const inputHandler = (event) => {
    if (event.target.value === "Multiple") {
      SetInputType("checkbox");
    } else {
      SetInputType("radio");
    }
  };

  const continueHandler = (event) => {
    event.preventDefault();
    setSelected(true);
  };

  return (
    <div className={classes.container}>
      <p className={classes.quizFormDescription}>
        Welcome to our intuitive and user-friendly Create Quiz Section, where
        your imagination takes center stage! Here, you have the power to craft
        engaging quizzes tailored to your unique interests and preferences.
      </p>
      <form className={classes.form}>
        <label htmlFor="option1" className={classes.quizFormHeader}>
          Question Type
        </label>
        <div>
          <input
            type="radio"
            value="Single"
            name="option"
            onChange={inputHandler}
            id="option1"
          />
          <label htmlFor="option1">Single Option</label>
        </div>
        <div>
          <input
            type="radio"
            value="Multiple"
            name="option"
            onChange={inputHandler}
            id="option2"
          />
          <label htmlFor="option2">Multiple Choice</label>
        </div>
        <button className={classes.quizFormButton} onClick={continueHandler}>
          Continue
        </button>
      </form>
      {selected && (
        <>
          <Form type={inputType} name={inputType} />
        </>
      )}
    </div>
  );
};

export default QuizForm;
