import Contact from 'pages/contact/Contact';
import Detail from 'pages/detail/Detail';
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
	},
	{
		path: '/detail/:category/:id',
		component: <Detail />
	}
];
export default Routers;
