import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";

export function Home() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}