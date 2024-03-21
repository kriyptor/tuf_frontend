import NavBar from "./Components/NavBar";
import SubmissionPage from "./Components/SubmissionPage";
import SubmissiondataPage from "./Components/SubmissiondataPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SubmissionPage />} />
          <Route path="/submissions" element={<SubmissiondataPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
