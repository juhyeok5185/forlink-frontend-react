import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/auth/Login';
import MemberSave from "./pages/auth/MemberSave";
import './index.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/membersave" element={<MemberSave />} />
            </Routes>
        </Router>
    );
}

export default App;