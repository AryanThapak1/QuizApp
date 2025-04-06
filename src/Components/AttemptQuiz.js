import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./AttemptQuiz.module.css"; // Import your CSS module
import ConfirmBox from "../UI/ConfirmBox";
import { useDispatch } from "react-redux";
import { questionActions } from "../Store/Store";

const AttemptQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(quiz.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/students/quiz/${id}`
    );
    const data = await response.json();
    console.log(data);
    setQuiz(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (submitted) {
      navigate("/student/analytics");
    }
    fetchData();
  }, [id, submitted]);

  const handleOptionChange = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = async () => {
    let obtainedMarks = 0;
    for (var i = 1; i < quiz.length; i++) {
      if (selectedOptions[i] === quiz[i].CorrectOption) {
        obtainedMarks++;
      }
    }

    obtainedMarks = (obtainedMarks * 100) / (quiz.length - 1);
    
    const response = await fetch(
      `http://localhost:8080/api/v1/students/quiz/${id}`,
      {
        method: "POST",
        body: JSON.stringify({
          quizName: id,
          username: sessionStorage.getItem("token"),
          obtainedMarks,
          totalMarks:100,
          attempted: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      setAttempted(true);
      setShowBox(false);
      dispatch(questionActions.addQuizCode(""));
      setTimeout(() => {
        navigate("/Student/Quiz");
      }, 3000);
      return;
    }
    dispatch(questionActions.addQuizCode(""));
    setSubmitted(true);
  };

  const showBoxHandler = () => {
    setShowBox(true);
  };

  const hideBoxHandler = () => {
    setShowBox(false);
  };

  if (quiz.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = quiz[currentQuestionIndex];

  return (
    <div className={styles.questionContainer}>
      <h2>{currentQuestion.quizName}</h2>
      <p className={styles.question}>{currentQuestion.Question}</p>
      <div className={styles.options}>
        <label>
          <input
            type="radio"
            name={`question${currentQuestionIndex}`}
            value={currentQuestion.Option1}
            checked={
              selectedOptions[currentQuestionIndex] === currentQuestion.Option1
            }
            onChange={() => handleOptionChange(currentQuestion.Option1)}
            disabled={submitted}
          />
          {currentQuestion.Option1}
        </label>
        <label>
          <input
            type="radio"
            name={`question${currentQuestionIndex}`}
            value="Option2"
            checked={
              selectedOptions[currentQuestionIndex] === currentQuestion.Option2
            }
            onChange={() => handleOptionChange(currentQuestion.Option2)}
            disabled={submitted}
          />
          {currentQuestion.Option2}
        </label>
        <label>
          <input
            type="radio"
            name={`question${currentQuestionIndex}`}
            value="Option3"
            checked={
              selectedOptions[currentQuestionIndex] === currentQuestion.Option3
            }
            onChange={() => handleOptionChange(currentQuestion.Option3)}
            disabled={submitted}
          />
          {currentQuestion.Option3}
        </label>
        <label>
          <input
            type="radio"
            name={`question${currentQuestionIndex}`}
            value="Option4"
            checked={
              selectedOptions[currentQuestionIndex] === currentQuestion.Option4
            }
            onChange={() => handleOptionChange(currentQuestion.Option4)}
            disabled={submitted}
          />
          {currentQuestion.Option4}
        </label>
      </div>
      <div className={styles.navigationButtons}>
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 1 || submitted}
        >
          Prev
        </button>
        {currentQuestionIndex < quiz.length - 1 && (
          <button onClick={handleNext} disabled={submitted}>
            Next
          </button>
        )}
        {currentQuestionIndex === quiz.length - 1 && !submitted && (
          <button onClick={showBoxHandler}>Submit</button>
        )}
        {attempted && (
          <p className={styles.invalid}>
            Seems like you already attempted the quiz hence you can submit!
          </p>
        )}
        {showBox && (
          <ConfirmBox
            message="Do you want to Submit ?"
            onConfirm={handleSubmit}
            onCancel={hideBoxHandler}
          />
        )}
      </div>
    </div>
  );
};

export default AttemptQuiz;
