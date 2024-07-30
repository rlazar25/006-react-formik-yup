import { useSelector } from "react-redux";

function HomePage() {

    const { user } = useSelector(state => state.userStore)

    return (
        <div>
            <h1 className="title">Home Page</h1>

            <h2 className="title text-blue-500">Welcome {`${user.firstName} ${user.lastName}`} </h2>
        </div>
    )
}

export default HomePage;