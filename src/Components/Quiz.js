import React, { useEffect, useState } from "react";
import Question from "../UI/Question";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Quiz.module.css"; // Import the CSS module
import { useDispatch } from "react-redux";
import { questionActions } from "../Store/Store";
import Form from "../UI/Form";
const Quiz = (props) => {
  const [question,setQuestions]=useState([]);
  const {id}=useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const fetchData=async ()=>{
   const response=await fetch(`http://localhost:8080/api/v1/teachers/quiz/${id}`);
   const data=await response.json();
   setQuestions(data)
  }
  const quizSaveHandler=()=>
  {
     setTimeout(()=>{navigate('/teacher/manage')},3000);
  }
  
  const deleteHandler=async ()=>{
    const response = await fetch(`http://localhost:8080/api/v1/teachers/quiz/${id}`,{
      method:"DELETE"
    })
   
    if(response.ok)
    {
      navigate('/teacher/manage')
    }
  }
  useEffect(()=>{
    dispatch(questionActions.addQuiz(id))
    fetchData()
  },[])

  const empty=question.length===0;
  return (
    <>
    <div className={styles.quizContainer}>
      {question.map((el) =>{ 
        if(!el.Question)
        {
          return null;
        }
        return (
        <Question
          Question={el.Question}
          Option1={el.Option1}
          Option2={el.Option2}
          Option3={el.Option3}
          Option4={el.Option4}
          name={el.Question}
          className={styles.question} // Apply question class
        />
      )})}
     
      <Form/>
        <button className={styles.formButton} onClick={quizSaveHandler}>Save</button>
        <button className={styles.formButton} onClick={deleteHandler}>Delete</button>
    </div>
    </>
    
  );
};

export default Quiz;
