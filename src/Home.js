import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import "./Home.css"

/** Goes to the homepage, displays differently depending on whether user is
 * logged in.
 */
function Home() {
  const { currentUser } = useContext(UserContext);
  console.log("Home", currentUser)

  return (
    <div className="Home" style={{backgroundImage: "url(/ian-dooley-unsplash.jpeg)",
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="container text-center jobly-welcome">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currentUser.username ?
          (
            <h2>Welcome back, {currentUser.firstName}!</h2>
          )
          :
          (
            <div className="home-button-container">
              <Link className="home-button btn btn-primary font-weight-bold mr-3"
                to="/login">Log in
              </Link>
              <Link className="home-button btn btn-primary font-weight-bold"
                to="/signup">Sign Up</Link> 
            </div>
          )}
      </div>
    </div>
  )
}

export default Home;