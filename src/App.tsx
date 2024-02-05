import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './routes/HomePage/Home';

import { Footer } from './components/Footer/Footer';

import './styles/main.scss'

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
