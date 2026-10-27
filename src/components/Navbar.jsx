function Navbar() {

  return (

    <nav>

      <h2>🏥 MediCare Hospital</h2>


      <div>

        <a href="/">
          Home
        </a>

        <a href="/#doctors">
          Doctors
        </a>

        <a href="/book-appointment">
          Book Appointment
        </a>

        <a href="/my-appointments">
          My Appointments
        </a>

      </div>


      <a href="/login">
  <button>
    Login
  </button>
</a>


    </nav>

  );

}

export default Navbar;