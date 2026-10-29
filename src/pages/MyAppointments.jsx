import { useState } from "react";


function MyAppointments() {


  const [search, setSearch] = useState("");



  const appointments = JSON.parse(
    localStorage.getItem("appointments")
  ) || [];



  const filteredAppointments = appointments.filter((item) => {

    return (

      item.patient
        ?.toLowerCase()
        .includes(search.toLowerCase())


      ||

      item.doctor
        ?.toLowerCase()
        .includes(search.toLowerCase())


      ||

      item.department
        ?.toLowerCase()
        .includes(search.toLowerCase())

    );

  });



  return (

    <section className="appointments-page">


      <div className="appointments-header">

        <h1>
          My Appointments
        </h1>


        <p>
          View and manage your upcoming doctor appointments
        </p>


      </div>




      <input

        type="text"

        placeholder="Search patient, doctor or department"

        className="search-box"

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

      />





      {


      filteredAppointments.length > 0 ? (


        <div className="appointment-cards">


        {

        filteredAppointments.map((item,index)=>(


          <div 
          className="appointment-card"
          key={index}
          >


            <h2>
              {item.patient}
            </h2>


            <p>
              <b>Phone:</b> {item.phone}
            </p>


            <p>
              <b>Doctor:</b> {item.doctor}
            </p>


            <p>
              <b>Department:</b> {item.department}
            </p>


            <p>
              <b>Date:</b> {item.date}
            </p>


            <p>
              <b>Time:</b> {item.time}
            </p>


            <span className="confirmed">

              {item.status}

            </span>



          </div>


        ))

        }


        </div>


      )


      :


      (

        <div className="no-appointment">

          <h2>
            Appointment Not Found
          </h2>


          <p>
            Book an appointment to see it here.
          </p>


        </div>

      )


      }




    </section>

  );


}


export default MyAppointments;