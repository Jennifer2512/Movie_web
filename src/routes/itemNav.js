import Contact from 'pages/contact/Contact';
import Discovery from 'pages/discovery/Discovery';
import Home from 'pages/home/Home';
import earth from 'assets/icon/earth.png';
import mail from 'assets/icon/mail.png';
import home from 'assets/icon/home.png';
const itemNav = [
	{
		title: 'Home',
		path: '/',
		component: <Home />,
		icon: home
	},
	{
		title: 'Discovery',
		path: '/discovery',
		component: <Discovery />,
		icon: earth
	},
	{
		title: 'Contact',
		path: '/contact',
		component: <Contact />,
		icon: mail
	}
];
export default itemNav;
