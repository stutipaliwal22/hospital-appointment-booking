import { useState } from "react";


function MyAppointments() {


  const [search, setSearch] = useState("");



  const savedAppointment = JSON.parse(
    localStorage.getItem("appointment")
  );



  const appointments = [

    ...(savedAppointment
      ? [
          {
            patient: savedAppointment.patient || "N/A",
            doctor: savedAppointment.doctor || "N/A",
            department: savedAppointment.department || "N/A",
            date: savedAppointment.date || "N/A",
            time: savedAppointment.time || "N/A",
            status: "Confirmed"
          }
        ]
      : []),



    {
      patient: "Rahul",
      doctor: "Dr. Rahul Verma",
      department: "Neurology",
      date: "30 Oct 2026",
      time: "12:00 PM",
      status: "Pending"
    },


    {
      patient: "Raman",
      doctor: "Dr. Shekhar Bhalla",
      department: "Cardiology",
      date: "04 Nov 2026",
      time: "12:00 PM",
      status: "Pending"
    },


    {
      patient: "Anushka",
      doctor: "Dr. Alia Singhania",
      department: "Neurology",
      date: "09 Nov 2026",
      time: "04:00 PM",
      status: "Confirmed"
    },


    {
      patient: "Preksha",
      doctor: "Dr. Priya Verma",
      department: "Pediatrics",
      date: "16 Nov 2026",
      time: "04:00 PM",
      status: "Confirmed"
    }

  ];





  const filteredAppointments = appointments.filter((appointment)=>{


    return (

      appointment.patient
      .toLowerCase()
      .includes(search.toLowerCase())


      ||

      appointment.doctor
      .toLowerCase()
      .includes(search.toLowerCase())


      ||

      appointment.department
      .toLowerCase()
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
          Manage and view your upcoming doctor appointments
        </p>


      </div>





      <input

        type="text"

        className="search-box"

        placeholder="Search patient, doctor or department"

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

      />






      <div className="appointment-table">


        <table>


          <thead>

            <tr>

              <th>Patient</th>

              <th>Doctor</th>

              <th>Department</th>

              <th>Date</th>

              <th>Time</th>

              <th>Status</th>

            </tr>


          </thead>





          <tbody>



          {

            filteredAppointments.length > 0 ? (


              filteredAppointments.map((item,index)=>(


                <tr key={index}>


                  <td>
                    {item.patient}
                  </td>


                  <td>
                    {item.doctor}
                  </td>


                  <td>
                    {item.department}
                  </td>


                  <td>
                    {item.date}
                  </td>


                  <td>
                    {item.time}
                  </td>


                  <td>


                    <span

                      className={
                        item.status === "Confirmed"
                        ? "confirmed"
                        : "pending"
                      }

                    >

                      {item.status}

                    </span>


                  </td>


                </tr>


              ))


            )



            :



            (

              <tr>

                <td
                  colSpan="6"
                  className="not-found"
                >

                  Appointment Not Found

                </td>


              </tr>

            )


          }



          </tbody>



        </table>



      </div>



    </section>


  );


}



export default MyAppointments;