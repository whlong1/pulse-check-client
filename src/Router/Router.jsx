import { Routes, Route } from 'react-router-dom'

// Components
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Lesson from '../components/Lesson/Lesson'

const Router = ({ handleSignupOrLogin }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Lesson />}
      />
      <Route
        path="/signup"
        element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/login"
        element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
      />
    </Routes>
  )
}

export default Router