import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);


  useEffect(() => {

    const updateUser = () => {

      const loggedUser = JSON.parse(
        localStorage.getItem("loggedInUser")
      );

      setUser(loggedUser);

    };


    updateUser();


    window.addEventListener(
      "storage",
      updateUser
    );


    return () => {
      window.removeEventListener(
        "storage",
        updateUser
      );
    };


  }, []);



  const handleLogout = () => {

    localStorage.removeItem("loggedInUser");

    setUser(null);

    navigate("/login");

  };



  return (

    <nav>

      <h2>
        🏥 Medicus Hospital
      </h2>



      <div>

        <Link to="/">
          Home
        </Link>


        <Link to="/doctors">
  Doctors
</Link>


        <Link to="/book-appointment">
          Book Appointment
        </Link>


        <Link to="/my-appointments">
          Appointments
        </Link>


      </div>




      <div>

        {
          user ?

          (

            <>
              <span>
                Welcome, {user.name}
              </span>


              <button onClick={handleLogout}>
                Logout
              </button>

            </>

          )

          :

          (

            <>

              <Link to="/login">
                <button>
                  Login
                </button>
              </Link>


              <Link to="/register">
                <button>
                  Register
                </button>
              </Link>


            </>

          )

        }


      </div>


    </nav>

  );

}


export default Navbar;