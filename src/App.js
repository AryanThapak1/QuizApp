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
import AuthProtectedRoute from "./UI/AuthProtectedRoute";
import QuizCode from "./Components/QuizCode";
import AttemptQuiz from "./Components/AttemptQuiz";
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
              children:[{
                path:":name",
                element:<HomePage/>
              }]
            }
          ]
        },
        {
          path:'Student/',
          element:<StudentRoot/>,
          children:[
            {
              path:'Home',
              element:<StudentHomePage/>
            },
            {
              path:'Quiz',
              element:<QuizCode/>
            },
            {
              path:'Quiz/:id',
              element:<AttemptQuiz/>
            }
          ]
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
