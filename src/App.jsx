import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Doctors from "./pages/Doctors";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
  path="/book-appointment"
  element={
    <ProtectedRoute>
      <BookAppointment />
    </ProtectedRoute>
  }
/>


<Route
  path="/my-appointments"
  element={
    <ProtectedRoute>
      <MyAppointments />
    </ProtectedRoute>
  }
/>

<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/register"
  element={<Register />}
/>

<Route 
path="/doctors" 
element={<Doctors />} 
/>

      </Routes>

    </BrowserRouter>

  );

}


export default App;