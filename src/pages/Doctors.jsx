import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Doctors() {


  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All");

const navigate = useNavigate();

  const doctors = [

    {
      name: "Dr. Ananya Sharma",
      department: "Cardiology",
      experience: "10 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcqKFUllhSyuZ_jo83dD4RDlyR_ISDew1Q6FfKp-krw&s=10"
    },

    {
      name: "Dr. Rohan Mehta",
      department: "Cardiology",
      experience: "8 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwsI0HVl2rjoNzw2y-UNHTLMzBO8_B71XONUhIcUV2A&s=10"
    },

    {
      name: "Dr. Neha Kapoor",
      department: "Cardiology",
      experience: "12 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYB0b1iSijJOZicvmVYnpOgU_69IOL97Rh9b49Ls10Q&s=10"
    },

    {
      name: "Dr. Arjun Singh",
      department: "Cardiology",
      experience: "7 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_6LOEI23hIYHXCgFropsWPQ8yZ6ydEE6gejIac4Wiw&s=10"
    },


    {
      name: "Dr. Rahul Verma",
      department: "Neurology",
      experience: "9 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LLpQa32nQ6bGUIYAEW450V4gnUnK2e0_FMR194ZS8A&s=10"
    },

    {
      name: "Dr. Kavita Rao",
      department: "Neurology",
      experience: "11 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5qzbLX6PLzaL2ff07VpIiYE_5Lw1qUrsPwnPBFIP0A&s=10"
    },

    {
      name: "Dr. Amit Sharma",
      department: "Neurology",
      experience: "6 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriFvnHS4X0nqU2scoZWr7yXU4NpkiT3R8u4WMbqMfyA&s=10"
    },

    {
      name: "Dr. Priyanka Joshi",
      department: "Neurology",
      experience: "8 years",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqbtAbncs_-YO2HukOmMYbeFgUOe7quBOuouLZNZXsw&s=10"
    },


    {
      name: "Dr. Vikram Patel",
      department: "Orthopedics",
      experience: "15 years",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCscBuJIqHNdljVg2_U1W_se_kMYLbZwbjQl3uYpZLw&s=10" 
    },

    {
      name: "Dr. Simran Kaur",
      department: "Orthopedics",
      experience: "9 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT92Ib9J8OhDSp1VI5dk_O9K8yEtJcyq-NpYR0UefhHhw&s=10"
    },

    {
      name: "Dr. Manish Gupta",
      department: "Orthopedics",
      experience: "10 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKDhGdUJKqZ4SyxLE5HBexRoOP2aGaOwTv5hF0FvULA&s=10"
    },

    {
      name: "Dr. Sneha Verma",
      department: "Orthopedics",
      experience: "7 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCA-hWiiHKcCUbzINSJ3EFaqBkP0HMhRudZ-2dXaFqg&s=10"
    },


    {
      name: "Dr. Priya Verma",
      department: "Pediatrics",
      experience: "12 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcqKFUllhSyuZ_jo83dD4RDlyR_ISDew1Q6FfKp-krw&s=10"
    },

    {
      name: "Dr. Aisha Khan",
      department: "Pediatrics",
      experience: "8 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYB0b1iSijJOZicvmVYnpOgU_69IOL97Rh9b49Ls10Q&s=10"
    },

    {
      name: "Dr. Rohit Malhotra",
      department: "Pediatrics",
      experience: "9 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrpIwNf9qD0SqqzJOPQzE2LYpYeYv1MmtFaEZsiCFfg&s=10"
    },

    {
      name: "Dr. Meera Sharma",
      department: "Pediatrics",
      experience: "6 years",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QijLQbr_W_tbbuz_kpajPmArI6VOFbn35BA2zMDz1w&s=10"
    }

  ];



  const filteredDoctors = doctors.filter((doctor)=>{


    return (

      doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())


      &&

      (

        department === "All"

        ||

        doctor.department === department

      )

    );


  });



  return (

    <section className="doctors-page">


      <h1>
        Find Our Doctors
      </h1>


      <p>
        Search doctors by department or name
      </p>



      <input

        type="text"

        placeholder="Search doctor"

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="doctor-search"

      />



      <select

        value={department}

        onChange={(e)=>setDepartment(e.target.value)}

        className="department-filter"

      >

        <option>
          All
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



      <div className="doctor-cards">


        {
          filteredDoctors.map((doctor,index)=>(


            <div className="doctor-card" key={index}>

<img
    src={doctor.image}
    alt={doctor.name}
    className="doctor-image"
  />

              <h2>
                👨‍⚕️ {doctor.name}
              </h2>


              <p>
                Department: {doctor.department}
              </p>


              <p>
                Experience: {doctor.experience}
              </p>


            <button
  onClick={() => navigate("/book-appointment", {
    state: {
      doctor: doctor.name,
      department: doctor.department
    }
  })}
>
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