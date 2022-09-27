import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
	console.log(user)
	return (
		<nav>
			<NavLink to="/">
				<h3>Dystopian Sentiment App</h3>
			</NavLink>
			<ul>
				<li><NavLink to="/login">Log In</NavLink></li>
				<li><NavLink to="/signup">Sign Up</NavLink></li>
				<li><NavLink to="/instance">Instance</NavLink></li>
			</ul>
			<button onClick={handleLogout}>Logout</button>
		</nav>
	)
}

export default Nav