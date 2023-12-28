import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <center>
                <h1>
                    <Link to={"/products/home"}>Home</Link>|
                    <Link to={"/products/add"}>
                        <button className={"btn btn-success"}>Add</button></Link>
                </h1>
            </center>

        </>
    )
}