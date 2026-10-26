function BookAppointment() {

  return (

    <section className="booking-page">

      <h1>Book Your Appointment</h1>

      <p>
        Fill the details below to schedule your hospital visit.
      </p>


      <form className="appointment-form">


        <input 
          type="text"
          placeholder="Patient Name"
        />


        <input 
          type="number"
          placeholder="Age"
        />


        <select>

          <option>
            Select Gender
          </option>

          <option>
            Male
          </option>

          <option>
            Female
          </option>

        </select>


        <input 
          type="tel"
          placeholder="Phone Number"
        />


        <select>

          <option>
            Select Department
          </option>

          <option>
            Cardiology
          </option>

          <option>
            Neurology
          </option>

          <option>
            Orthopedics
          </option>

          <option>
            Pediatrics
          </option>

        </select>



        <select>

          <option>
            Select Doctor
          </option>

          <option>
            Dr. Ananya Sharma
          </option>

          <option>
            Dr. Rahul Verma
          </option>

          <option>
            Dr. Priya Singh
          </option>

        </select>



        <input 
          type="date"
        />



        <select>

          <option>
            Select Time
          </option>

          <option>
            10:00 AM
          </option>

          <option>
            12:00 PM
          </option>

          <option>
            4:00 PM
          </option>

        </select>



        <button>
          Book Appointment
        </button>


      </form>


    </section>

  );

}

export default BookAppointment;