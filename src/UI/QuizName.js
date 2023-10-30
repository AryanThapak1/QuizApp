
import classes from './QuizName.module.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizName=(props)=>{
    const quizref=useRef();
    const navigate=useNavigate();
    const quizNameHandler=async ()=>{
    
     const response=await fetch('http://localhost:8080/api/v1/teachers/quiz',{
        method:"POST",
        body:JSON.stringify({quizName:quizref.current.value}),
        headers:{
            "Content-Type":"application/json"
        }
     })

     if(response.ok)
     {
        navigate('/teacher/manage');
     }
    }
    return(
    <div className={classes.container}>
        <div className={`${classes.formContainer} ${classes.quizNameForm}`}>
        <label> Enter Quiz Name</label>
    <input type="text" ref={quizref}/>
    <button onClick={quizNameHandler}>Save quiz</button>
        </div>
        </div>)
}

export default QuizName;