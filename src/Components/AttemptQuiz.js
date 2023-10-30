import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import styles from "./AttemptQuiz.module.css"; // Import your CSS module

const AttemptQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(new Array(quiz.length).fill(""));
  const [obtainedMarks,setObtainedMarks]=useState(0);
  const [submitted, setSubmitted] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/students/quiz/${id}`);
    const data = await response.json();
    setQuiz(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleOptionChange = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedOptions);
    const correctOption =quiz[currentQuestionIndex].CorrectOption;

    if (option === correctOption) {
      setObtainedMarks(prevstate => prevstate + 1);
    } else {
      setObtainedMarks(prevstate => prevstate - 1);
    }

    console.log(option)
    console.log(correctOption)
    console.log(obtainedMarks)
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleSubmit = async() => {
    
    const response = await fetch(`http://localhost:8080/api/v1/students/quiz/${id}`,{
        method:"POST",
        body:JSON.stringify({
            username:localStorage.getItem('token'),
            obtainedMarks,
            totalMarks:quiz.length
        }),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await response.json();
    setSubmitted(true);
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
            checked={selectedOptions[currentQuestionIndex] === currentQuestion.Option1}
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
            checked={selectedOptions[currentQuestionIndex] === currentQuestion.Option2}
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
            checked={selectedOptions[currentQuestionIndex] === currentQuestion.Option3}
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
            checked={selectedOptions[currentQuestionIndex] === currentQuestion.Option4}
            onChange={() => handleOptionChange(currentQuestion.Option4)}
            disabled={submitted}
          />
          {currentQuestion.Option4}
        </label>
      </div>
      <div className={styles.navigationButtons}>
        <button onClick={handlePrev} disabled={currentQuestionIndex === 1 || submitted}>Prev</button>
        {currentQuestionIndex < quiz.length - 1 && <button onClick={handleNext} disabled={submitted}>Next</button>}
        {currentQuestionIndex === quiz.length - 1 && !submitted && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default AttemptQuiz;
 