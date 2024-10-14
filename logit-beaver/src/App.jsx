import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import JobsPage from "./pages/JobsPage/JobsPage";

export default function App() {
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
