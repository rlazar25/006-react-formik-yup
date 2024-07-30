import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUserAction } from "../store/userSlice";
import { toast } from "react-toastify";

function NavbarComponent() {

    const { user } = useSelector((state) => state.userStore)

    const dispatch = useDispatch()

    function logoutUserHandler(){
        dispatch(removeUserAction());
        toast.error('Logoutovao si se')
    }

    return (
        <div className="flex justify-between items-center p-2">
            <h1>Logo</h1>
            <ul className="flex gap-4 items-center">
                <li><NavLink to={'/'}>Home</NavLink></li>
                {user.image ? <>
                    <button onClick={logoutUserHandler} className="text-red-600">Logout</button>
                    <img className="w-10 h-10 object-cover rounded-full" src={user.image} alt="12324" />
                </> : <li><NavLink to={'/register'}>Register</NavLink></li>
                }
            </ul>
        </div>
    )
}

export default NavbarComponent;