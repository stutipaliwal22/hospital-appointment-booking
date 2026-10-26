function Doctors() {

  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      department: "Cardiologist",
      experience: "10 years experience",
      rating: "⭐⭐⭐⭐⭐",
      available: "Available Today"
    },
    {
      name: "Dr. Rahul Verma",
      department: "Neurologist",
      experience: "8 years experience",
      rating: "⭐⭐⭐⭐⭐",
      available: "Available Today"
    },
    {
      name: "Dr. Priya Singh",
      department: "Pediatrician",
      experience: "6 years experience",
      rating: "⭐⭐⭐⭐",
      available: "Available Tomorrow"
    }
  ];


  return (

    <section className="doctors">

      <h2>Our Expert Doctors</h2>

      <div className="doctor-cards">

        {
          doctors.map((doctor,index)=>(

            <div className="doctor-card" key={index}>

              <div className="doctor-circle">
                👩‍⚕️
              </div>

              <h3>{doctor.name}</h3>

              <p>{doctor.department}</p>

              <span>{doctor.experience}</span>

              <div className="rating">
                {doctor.rating}
              </div>

              <div className="availability">
                {doctor.available}
              </div>

              <button>
                Book Appointment
              </button>

            </div>

          ))
        }

      </div>

    </section>

  );

}

export default Doctors;