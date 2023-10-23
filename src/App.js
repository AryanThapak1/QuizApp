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
          element:<NewRoot/>,
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
              element:<Quiz/>
            }
          ]
        },
        {
          path:'Student/',
          element:<StudentRoot/>,
          children:[
            {
              path:'Home',
              element:<HomePage/>
            }
          ]
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
