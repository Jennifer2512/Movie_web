import Contact from 'pages/contact';
import Discovery from 'pages/discovery';
import Home from 'pages/home/Home';

const routes = [
	{
        title:'Home',
		path: '/',
		component: <Home />
	},
	{
        title: 'Discovery',
		path: '/discovery',
		component: <Discovery />
	},
	{
        title: 'Contact',
		path: '/contact',
		component: <Contact />
	}
];
export default routes;
