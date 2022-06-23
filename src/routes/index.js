// import Layout from 'components/layout/Layout';
import AboutUs from 'pages/about-us';
import Contact from 'pages/contact';
import Discovery from 'pages/discovery';
import Favorite from 'pages/favorite';
import Home from 'pages/home';

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
        title: 'Favorite',
		path: '/favorite',
		component: <Favorite />
	},
	{
        title: 'About Us',
		path: '/about-us',
		component: <AboutUs />
	},
	{
        title: 'Contact',
		path: '/contact',
		component: <Contact />
	}
];
export default routes;
