import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Router from '../Router/Router'
import Nav from '../components/Nav/Nav'

// Services
import * as authService from '../services/authService'

// Socket.io
import { io } from "socket.io-client"
const socket = io()

const App = () => {
	const navigate = useNavigate()
	const [user, setUser] = useState(authService.getUser())

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
		navigate('/')
	}

	useEffect(() => {
		const connect = async () => {
			socket.on("onConnect", (data) => { console.log('Data:', data) })
		}
		connect()
	}, [])

	return (
		<>
			<Nav user={user} handleLogout={handleLogout} />
			<Router handleSignupOrLogin={handleSignupOrLogin} />
		</>
	)
}

export default App
