import React, {useContext} from 'react';
import AuthenContext from '../../store/authen-context';
import classes from './Navigation.module.css';
const Navigation = (props) => {
	return (
		<AuthenContext.Consumer>
			{(ctx) => {return (
				<nav className={classes.nav}>
					<ul>
						{ctx.isLoggedIn && (<li><a href="/">Users</a></li>)}
						{ctx.isLoggedIn && (<li><a href="/">Admin</a></li>)}
						{ctx.isLoggedIn && (<li><button onClick={props.onLogout}>Logout</button></li>)}
					</ul> 
				</nav> 
			)}}
		</AuthenContext.Consumer>
	);
};

export default Navigation;
