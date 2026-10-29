import { useState } from "react";
import { useLocation } from "react-router-dom";
import bannerImg from "../assets/hospital-banner.webp";

function BookAppointment() {

  const location = useLocation();

  const selectedDoctor = location.state?.doctor || "";
  const selectedDepartment = location.state?.department || "";


  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const [formData, setFormData] = useState({

    patient:"",
    phone:"",
    department:selectedDepartment,
    doctor:selectedDoctor,
    date:"",
    time:""

  });



  const doctors = {

    Cardiology:[
      "Dr. Ananya Sharma",
      "Dr. Rohan Mehta",
      "Dr. Neha Kapoor",
      "Dr. Arjun Singh"
    ],

    Neurology:[
      "Dr. Rahul Verma",
      "Dr. Priya Verma",
      "Dr. Alia Singhania",
      "Dr. Amit Sharma"
    ],

    Orthopedics:[
      "Dr. Shekhar Bhalla",
      "Dr. Vikram Patel",
      "Dr. Simran Kaur",
      "Dr. Manish Gupta"
    ],

    Pediatrics:[
      "Dr. Meera Kapoor",
      "Dr. Aisha Khan",
      "Dr. Rohit Malhotra",
      "Dr. Sneha Verma"
    ]

  };



  const availableDoctors = doctors[formData.department] || [];




  const handleSubmit = (e)=>{

    e.preventDefault();


    setError("");
    setMessage("");



    if(!formData.patient.trim()){

      setError("Please enter patient name");
      return;

    }


    if(!formData.phone.trim()){

      setError("Please enter phone number");
      return;

    }


    if(formData.phone.length !== 10){

      setError("Phone number must be 10 digits");
      return;

    }


    if(!formData.department){

      setError("Please select department");
      return;

    }


    if(!formData.doctor){

      setError("Please select doctor");
      return;

    }


    if(!formData.date){

      setError("Please select appointment date");
      return;

    }


    if(!formData.time){

      setError("Please select time slot");
      return;

    }



    const existingAppointments = JSON.parse(

      localStorage.getItem("appointments")

    ) || [];



    existingAppointments.push({

      ...formData,

      status:"Confirmed"

    });



    localStorage.setItem(

      "appointments",

      JSON.stringify(existingAppointments)

    );



    setMessage("Appointment booked successfully!");



    setFormData({

      patient:"",
      phone:"",
      department:"",
      doctor:"",
      date:"",
      time:""

    });


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

value={formData.patient}

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

value={formData.phone}

onChange={(e)=>setFormData({

...formData,

phone:e.target.value

})}

/>


</div>







<div className="input-row">



<select

value={formData.department}

onChange={(e)=>setFormData({

...formData,

department:e.target.value,

doctor:""

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

value={formData.doctor}

onChange={(e)=>setFormData({

...formData,

doctor:e.target.value

})}

>


<option value="">

Select Doctor

</option>


{

availableDoctors.map((doctor,index)=>(

<option

key={index}

value={doctor}

>

{doctor}

</option>

))

}


</select>



</div>








<div className="input-row">



<input

type="date"

value={formData.date}

onChange={(e)=>setFormData({

...formData,

date:e.target.value

})}

/>








<select

value={formData.time}

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

error && (

<p className="error-message">

{error}

</p>

)

}




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
