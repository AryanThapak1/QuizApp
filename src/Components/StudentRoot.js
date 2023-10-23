import StudentNav from "./StudentNav";
import { Outlet } from "react-router-dom";
const StudentRoot=()=>
{
    return(
    <>
    <StudentNav/>
   <Outlet/>
   </>
   
    )
}

export default StudentRoot;