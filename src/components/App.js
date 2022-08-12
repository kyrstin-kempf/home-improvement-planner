import NewProject from './NewProject';
import NavBar from './NavBar';
import AllProjects from './AllProjects';
import OneProject from './OneProject';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProjects/>} />
        <Route path="/projects/new" element={<NewProject/>} />
        <Route path="/projects/:id" element={<OneProject/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
