import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import  BookingPage  from "./Pages/BookingPage/BookingPage";
import SingleHotel from "./Pages/SingleHotel/SingleHotel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
