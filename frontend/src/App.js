import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/setting/:name" element={<Setting/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
