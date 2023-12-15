import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/HomePage/Home';

import './Styles/main.scss';

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route index path="/" element={ <Home /> } />
                </Routes>
            </Router>
        </div>
    );
}
