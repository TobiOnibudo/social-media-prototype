import {Link} from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import "../Styling/navbar.css";
export function NavBar()
{
    const [user] = useAuthState(auth);

    const signUserOut = async() =>
    {
        await signOut(auth); 
    }

    return <div className="navbar   bg-body-tertiaryry secondary">
        <div className="links ">
        <Link className = "nav-item" to = "/"> Home</Link>
        {!user ? <Link className ="nav-item" to = "/login"> Login</Link> :
        <Link className = "nav-item" to = "/createpost">  Create Post</Link>
        }
        </div>
        <div className="user">
            {user &&
            (
            <>
            <img className = {"user-img"}src= {user?.photoURL || ""} width="30" height="30"/>
            {/* <p className="user-name"> {user?.displayName }</p> */}
            <p><button className="btn btn-light" onClick = {signUserOut}> Log Out </button></p>
            </>
)}
        </div>
    </div>
}