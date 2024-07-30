import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavbarComponent() {

const {user} = useSelector((state) => state.userStore)

    return (
        <div className="flex justify-between items-center p-2">
            <h1>Logo</h1>
            <ul className="flex gap-4 items-center">
                <li><NavLink to={'/'}>Home</NavLink></li>
                {user ? <img className="w-10 h-10 object-cover rounded-full" src={user.image} alt="12324" /> : <li><NavLink to={'/register'}>Register</NavLink></li>
            }
            </ul>
        </div>
    )
}

export default NavbarComponent;