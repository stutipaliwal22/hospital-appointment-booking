import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/book-appointment" 
          element={<BookAppointment />} 
        />

        <Route
  path="/my-appointments"
  element={<MyAppointments />}
 />

<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/register"
  element={<Register />}
/>

      </Routes>

    </BrowserRouter>

  );

}


export default App;