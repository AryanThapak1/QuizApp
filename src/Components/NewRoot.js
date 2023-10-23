import LoginNav from "./LoginNav";
import { Outlet } from "react-router-dom";
const NewRoot=()=>
{
    return(
        <>
        <LoginNav/>
        <Outlet/>
        </>
    );
}

export default NewRoot;