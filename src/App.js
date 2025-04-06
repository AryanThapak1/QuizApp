import Login from "./Components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import SignUp from "./Components/SignUp";
import TeacherRegistration from "./Components/TeacherRegistration";
import StudentRegister from "./Components/StudentRegister";
import HomePage from "./Components/HomePage";
import NewRoot from "./Components/NewRoot";
import StudentRoot from "./Components/StudentRoot";
import QuizForm from "./Components/QuizForm";
import Quiz from "./Components/Quiz";
import StudentHomePage from "./Components/StudentHomePage";
import ManageStudents from "./Components/ManageStudents";
import ManageQuiz from "./Components/ManageQuiz";
import {loader as authProtector} from './UI/AuthProtectedRoute'
import QuizCode from "./Components/QuizCode";
import AttemptQuiz from "./Components/AttemptQuiz";
import AnalyticsComponent from "./Components/Analytics";
import Analytics from "./Components/Analytics";
import './app.css'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "SignUp",
          element: <SignUp />,
        },
        {
          path: "SignUp/Teacher",
          element: <TeacherRegistration />,
        },
        {
          path: "SignUp/Student",
          element: <StudentRegister />,
        },
        {
          path:"Teacher/",
          element:
          <NewRoot />,
          loader:authProtector,
          children:[
            {
              path:"Home",
              element:<HomePage/>
            },
            {
              path:'Create',
              element:<QuizForm/>
            },
            {
              path:'manage',
              element:<ManageQuiz/>,
            }
            ,
            {
              path:'manage/:id',
              element:<Quiz/>
            },
            {
              path:"students",
              element:<ManageStudents/>,
            },
            {
              
                path:"students/:name",
                element:<Analytics/>
              
            }
          ]
        },
        {
          path:'Student/',
          element:<StudentRoot/>,
          loader:authProtector,
          children:[
            {
              path:'Home',
              element:<StudentHomePage/>
            },
            {
              path:'quiz',
              element:<QuizCode/>
            },
            {
              path:'quiz/:id',
              element:<AttemptQuiz/>
            },
            {
              path:"Analytics",
              element:<AnalyticsComponent/>
            }
          ]
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
