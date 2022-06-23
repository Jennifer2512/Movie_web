import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from 'components/header/Header';
import routes from 'routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from 'components/footer/Footer';

function App() {
	const renderRoute = (route, key = () => {}) => {
		if (route.navigateTo) {
			return (
				<Route
					path={route.path}
					key={key}
					element={<Navigate to={route.navigateTo} replace />}
				/>
			);
		}
		return <Route key={key} path={route.path} element={route.component} />;
	};

	return (
		<>
			<Header />
			<Routes>
				{routes.map((route, index) =>
					renderRoute(route, index, renderRoute)
				)}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
