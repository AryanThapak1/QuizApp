import { useEffect } from "react";
import Question from "../UI/Question";
import { useSelector } from "react-redux";
const Quiz=(props)=>
{
    const question=useSelector(state=>state.questions);
    useEffect(()=>
    {
        console.log(question)
    })
    return(
       <div>
         {question.map(el=><Question Question={el.Question} Option1={el.Option1} 
         Option2={el.Option2} 
         Option3={el.Option3}
         Option4={el.Option4}
         name={el.Question}
         />)}
       </div>
           
        
        
    )

}

export default Quiz;