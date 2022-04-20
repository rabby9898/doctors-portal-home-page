import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import MakeAppointment from './components/MakeAppointment/MakeAppointment/MakeAppointment';
import LogIn from './components/LogIn/Login/LogIn';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/appointment" element={<MakeAppointment/>} />
      <Route path="/login" element={<LogIn/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
