import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { questionActions } from "../Store/Store";
const Form = (props) => {
  const quesRef = useRef();
  const op1 = useRef();
  const op2 = useRef();
  const op3 = useRef();
  const op4 = useRef();
  const [correctOption, setCorrectOption] = useState(null);
  const dispatch=useDispatch();
  const handleRadioChange = (event) => {
    setCorrectOption(event.target.value);
  };

  const addQuestionHandler = async() => {
    const data = {
      Question: quesRef.current.value,
      Option1: op1.current.value,
      Option2: op2.current.value,
      Option3: op3.current.value,
      Option4: op4.current.value,
      CorrectOption: correctOption // Add the correct option to your data
    };

    const response= await fetch('https://react-7358c-default-rtdb.firebaseio.com/question.json',{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })

    if(response.ok)
    {
       dispatch(questionActions.addQuestion(data));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <label htmlFor="title">Question</label>
        <textarea id="title" className={`${classes.input} ${classes.title}`} rows="4" ref={quesRef} />

        <Input label="Option 1" type="text" ref={op1} />
        <input type="radio" name="correctOption" value="Option 1" onChange={handleRadioChange} />
        <Input label="Option 2" type="text" ref={op2} />
        <input type="radio" name="correctOption" value="Option 2" onChange={handleRadioChange} />
        <Input label="Option 3" type="text" ref={op3} />
        <input type="radio" name="correctOption" value="Option 3" onChange={handleRadioChange} />
        <Input label="Option 4" type="text" ref={op4} />
        <input type="radio" name="correctOption" value="Option 4" onChange={handleRadioChange} />

        <button onClick={addQuestionHandler}>Add Question</button>
      </div>
    </div>
  );
};

export default Form;
