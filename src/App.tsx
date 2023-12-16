import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/HomePage/Home';
import Header from './components/Header/Header';

import './Styles/main.scss';
import TestTransform from './routes/TestTransform';

export default function App() {
    return (
        <div className="Conainer">
            <Header />
            <Router>
                <Routes>
                    <Route index path="/" element={ <Home /> } />
                    <Route index path="/test" element={ <TestTransform /> } />
                </Routes>
            </Router>
        </div>
    );
}
