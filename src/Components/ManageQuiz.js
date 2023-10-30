
import { useEffect, useState } from "react"
import QuizComponent from "../UI/quizLayout";

const ManageQuiz=(props)=>
{
    const [quiz,setQuiz]=useState([])
    const fetchData=async()=>{
    const response=await fetch('http://localhost:8080/api/v1/teachers/quiz');
    const data=await response.json();
    setQuiz(data)
    }

    useEffect(()=>{
        fetchData();
    })
   
   return(<>
   {quiz.map(el=><QuizComponent quizName={el}/>)}
   </>)
}

export default ManageQuiz