import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './routes/HomePage/Home';

import { Footer } from './components/Footer/Footer';

import './Styles/main.scss'

export function App() {
	return (
		<div className='container'>
			<Router>
				<Routes>
					<Route index path='/' element={<Home />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}
