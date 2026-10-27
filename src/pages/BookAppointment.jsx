import { useState } from "react";
import bannerImg from "../assets/hospital-banner.webp";


function BookAppointment() {


  const [message, setMessage] = useState("");


  const [formData, setFormData] = useState({
    patient: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: ""
  });



  const handleSubmit = (e) => {

    e.preventDefault();


    localStorage.setItem(
      "appointment",
      JSON.stringify(formData)
    );


    setMessage("Appointment booked successfully!");

  };




  return (

    <section className="booking-page">



      <div className="booking-banner">


        <img
          src={bannerImg}
          alt="Hospital"
        />


        <div className="banner-overlay">

          <h1>
            Book Your Appointment
          </h1>


          <p>
            Schedule your visit with experienced doctors
            and get quality healthcare.
          </p>


        </div>


      </div>






      <div className="booking-container">



        <div className="choose-card">


          <h2>
            Why Choose MediCare?
          </h2>




          <div className="choose-item">

            <span>👨‍⚕️</span>

            <div>

              <h3>
                Experienced Specialists
              </h3>

              <p>
                Our expert doctors provide the best healthcare.
              </p>

            </div>

          </div>




          <div className="choose-item">

            <span>🏥</span>

            <div>

              <h3>
                Modern Facilities
              </h3>

              <p>
                Advanced technology for better treatment.
              </p>

            </div>

          </div>





          <div className="choose-item">

            <span>📅</span>

            <div>

              <h3>
                Easy Online Booking
              </h3>

              <p>
                Book appointments anytime from anywhere.
              </p>

            </div>

          </div>





          <div className="choose-item">

            <span>❤️</span>

            <div>

              <h3>
                Patient Focused Care
              </h3>

              <p>
                Your health and comfort are our priority.
              </p>

            </div>

          </div>



        </div>







        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >


          <h2>
            Patient Details
          </h2>





          <div className="input-row">


            <input

              type="text"

              placeholder="Full Name"

              onChange={(e)=>setFormData({

                ...formData,

                patient:e.target.value

              })}

            />



            <input

              type="number"

              placeholder="Age"

            />


          </div>







          <div className="input-row">



            <select>


              <option>
                Select Gender
              </option>


              <option>
                Female
              </option>


              <option>
                Male
              </option>


            </select>





            <input

              type="tel"

              placeholder="Phone Number"

              onChange={(e)=>setFormData({

                ...formData,

                phone:e.target.value

              })}

            />



          </div>









          <div className="input-row">



            <select

              onChange={(e)=>setFormData({

                ...formData,

                department:e.target.value

              })}

            >


              <option value="">
                Select Department
              </option>


              <option value="Cardiology">
                Cardiology
              </option>


              <option value="Neurology">
                Neurology
              </option>


              <option value="Orthopedics">
                Orthopedics
              </option>


              <option value="Pediatrics">
                Pediatrics
              </option>


            </select>








            <select

              onChange={(e)=>setFormData({

                ...formData,

                doctor:e.target.value

              })}

            >


              <option value="">
                Select Doctor
              </option>



              <option value="Dr. Ananya Sharma">
                Dr. Ananya Sharma
              </option>



              <option value="Dr. Rahul Verma">
                Dr. Rahul Verma
              </option>



              <option value="Dr. Priya Verma">
                Dr. Priya Verma
              </option>



            </select>



          </div>









          <div className="input-row">



            <input

              type="date"

              onChange={(e)=>setFormData({

                ...formData,

                date:e.target.value

              })}

            />








            <select

              onChange={(e)=>setFormData({

                ...formData,

                time:e.target.value

              })}

            >


              <option value="">
                Select Time Slot
              </option>


              <option value="10:00 AM">
                10:00 AM
              </option>


              <option value="12:00 PM">
                12:00 PM
              </option>


              <option value="4:00 PM">
                4:00 PM
              </option>


            </select>



          </div>








          {

            message && (

              <p className="success-message">

                {message}

              </p>

            )

          }








          <button type="submit">

            Confirm Appointment

          </button>





        </form>





      </div>





    </section>

  );

}



export default BookAppointment;