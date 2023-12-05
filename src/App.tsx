import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Route/HomePage/Home';

export function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route index path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}
