import Contact from 'pages/contact/Contact';
import Discovery from 'pages/discovery/Discovery';
import Home from 'pages/home/Home';

const Routers = [
	{
		path: '/',
		component: <Home />
	},
	{
		path: '/discovery',
		component: <Discovery />
	},
	{
		path: '/contact',
		component: <Contact />
	}
];
export default Routers;
