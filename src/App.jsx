import { Outlet } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUserAction } from "./store/userSlice.js";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.hasOwnProperty('user_shop')) {
      let USER = JSON.parse(localStorage.getItem('user_shop'));
      dispatch(restoreUserAction(USER ))
    }
  }, [])

  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App
