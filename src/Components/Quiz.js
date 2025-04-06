import React, { useEffect, useState } from "react";
import Question from "../UI/Question";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import styles from "./Quiz.module.css"; // Import the CSS module
import { useDispatch } from "react-redux";
import { questionActions } from "../Store/Store";
import Form from "../UI/Form";
import LoadingBar from "../UI/LoadingBar";
const Quiz = (props) => {
  const [question,setQuestions]=useState([]);
  const [showForm,setShowForm]=useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [failed,setFailed]=useState(false);
  const {id}=useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const fetchData=async ()=>{
    try{
   const response=await fetch(`http://localhost:8080/api/v1/teachers/quiz/${id}`);
   const data=await response.json();
   setQuestions(data)}
   catch(err){
    setFailed(true);
   }
  }

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const importHandler=async(event)=>{
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('pdf_file', file);
   
    const response=await fetch(`http://localhost:8080/api/v1/teachers/quiz/upload?quizName=${id}`,{
      method:"POST",
      body:formData
    })
    setTimeout(()=>{
      setIsLoading(false);
    },5000)
    
    if(response.ok){
      window.location.reload();
    }

    else
    {
      setFailed(true);
      setIsLoading(false);
    }
  }

  
  const quizSaveHandler=()=>
  {
     setTimeout(()=>{navigate('/teacher/manage')},3000);
  }
  
  const showFormHandler=()=>{
    setShowForm(prevState=>!prevState);
  }

  const deleteHandler=async ()=>{
    try{
    const response = await fetch(`http://localhost:8080/api/v1/teachers/quiz/${id}`,{
      method:"DELETE",
      body:JSON.stringify({id})
    })
   
    if(response.ok)
    {
      navigate('/teacher/manage')
    }}
    catch{
      setFailed(true);
    }
  }

  const questionDeleteHandler=async(Question)=>{
    try{
    const response = await fetch(`http://localhost:8080/api/v1/teachers/quiz/${id}/${Question}`,{
      method:"DELETE",
      body:JSON.stringify({id,Question}),
      headers:
      {
        'Content-Type':"application/json"
      }
    })

    if(response.ok)
    {
      window.location.reload();
    }
  }
  catch(err){
    setFailed(false);
  }
}
  useEffect(()=>{
    dispatch(questionActions.addQuiz(id))
    fetchData()
  },[])

  const empty=question.length===0;
  return (
  
    <div className={styles.quizContainer}>
      {isLoading && <LoadingBar />}
      {failed && <p className={styles.invalid}>There has been some error please try again</p>}
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
           deleteHandler={questionDeleteHandler}
        />
      )})}
      <form className={styles.uploadForm}>
      <input type="file" name="pdfInput" accept=".pdf" onChange={onFileChange}/>
      <button className={styles.formButton} onClick={importHandler}>Import From Pdf</button>
      </form>
       <button className={`${styles.formButton} ${styles.toggleButton}`} onClick={showFormHandler}> {showForm ?"Hide":"Show"} Form</button>
      {showForm && <Form/>}
        <button className={styles.formButton} onClick={quizSaveHandler}>Save</button>
        <button className={styles.formButton} onClick={deleteHandler}>Delete</button>
    </div>

  );
};

export default Quiz;
