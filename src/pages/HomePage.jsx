import { useSelector } from "react-redux";

function HomePage() {

    const { user } = useSelector(state => state.userStore)

    return (
        <div>
            <h1 className="title">Home Page</h1>

            {user.firstName ? <h2 className="title text-blue-500">Welcome {`${user.firstName} ${user.lastName}`} </h2> : <h2 className="title text-red-500">Please Register First</h2>}
            
        </div>
    )
}

export default HomePage;