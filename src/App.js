import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/TrippyHomePage1/HomePage";
import Flight_Details from "./component/FlightDisplayPage2/Flight_Details";
import { Route, Routes } from "react-router-dom";
import { FlightProvider } from "./context/FlightContext";
import BookingDetails from "./component/BookingDetailsPage4/BookingDetails";
import FlightSummaryNew from "./component/NewFlightSummary/FlightSummaryNew";
import Login  from "./component/Auth/Login";
import Signup  from "./component/Auth/Signup";
import Dashboard from "./component/Auth/Dashboard "

function App() {
  return (
    <FlightProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/flights/search" element={<Flight_Details />}></Route>
          <Route
            path="/flights/bookingDetails"
            element={<BookingDetails />}
          ></Route>
          <Route path="/summary/:id" element={<FlightSummaryNew />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Footer />
      </div>
    </FlightProvider>
  );
}

export default App;
