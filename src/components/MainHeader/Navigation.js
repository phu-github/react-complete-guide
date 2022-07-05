import React, {useContext} from 'react';
import AuthenContext from '../../store/authen-context';
import classes from './Navigation.module.css';
const Navigation = () => {
	const ctx = useContext(AuthenContext);
	return (
		<nav className={classes.nav}>
			<ul>
				{ctx.isLoggedIn && (<li><a href="/">Users</a></li>)}
				{ctx.isLoggedIn && (<li><a href="/">Admin</a></li>)}
				{ctx.isLoggedIn && (<li><button onClick={ctx.onLogout}>Logout</button></li>)}
			</ul> 
		</nav> 
	);
};

export default Navigation;
