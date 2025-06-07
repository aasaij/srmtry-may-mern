import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import StudetList from "./components/StudetList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// function App() {
//   // const firstName = "Sridevi";
//   // const sgender = "female";
//   // const score = 10;
//   return (
//     <div className="App">
//       {/* <Greeting
//         name="Helda"
//         gender="female"
//         sname={firstName}
//         sgender={sgender}
//         score={score}
//       />
//       <Counter /> */}
//       <StudetList />
//     </div>
//   );
// }
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/greet" element={<Greeting />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/studentlist" element={<StudetList />} />
      </Routes>
    </Router>
  );
}

export default App;
