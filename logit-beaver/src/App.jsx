import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import JobsPage from "./pages/JobsPage/JobsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs-page" element={<JobsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
