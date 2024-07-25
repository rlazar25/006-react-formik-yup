import { NavLink } from "react-router-dom";

function NavbarComponent() {
    return (
        <div className="flex justify-between items-center p-2">
            <h1>Logo</h1>
            <ul className="flex gap-4">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/register'}>Register</NavLink></li>
            </ul>
        </div>
    )
}

export default NavbarComponent;