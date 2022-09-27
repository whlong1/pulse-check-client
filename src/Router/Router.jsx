import { Routes, Route } from 'react-router-dom'

// Components
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Lesson from '../components/Lesson/Lesson'
import Instance from '../components/Instance/Instance'

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
      <Route
        path="/instance"
        element={<Instance />}
      />
    </Routes>
  )
}

export default Router