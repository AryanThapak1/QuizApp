import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [invalid, setInvalid] = useState(false);
    const [type,SetType]=useState('Student');
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const [url,setUrl]=useState("'http://localhost:8080/api/v1/users/")
    const submitHandler = async (event) => {
        event.preventDefault();
        const credentials = {
            email: userRef.current.value,
            password: passRef.current.value
        };

        const response = await fetch('http://localhost:8080/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data=await response.json();
        const token=data.token;

        if (token) {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('type',type);
            navigate(`/${type}/Home`);
        } else {
            setInvalid(true);
        }
    };

    const teacherCheckHandler=(event)=>
    {
        if(event.target.checked)
      {
        SetType('Teacher');
      }

      else
      {
        SetType('Student');
      }
      
    }
   
    return { invalid, submitHandler,teacherCheckHandler, userRef, passRef };
};

export default useLogin;
