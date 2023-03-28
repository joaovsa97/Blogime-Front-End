import { useState } from "react"

import Login from "../components/Login/Login.jsx"
import Register from "../components/Register/Register.jsx"

const LoginPage = () => {
    const [isEditing, setisEditig] = useState(false)

  return (
    <div className="container">
        <Login isEditing={isEditing} changeLogin={() => setisEditig(true)}/>

        <Register isEditing={isEditing} changeRegister={() => setisEditig(false)}/>
    </div>
  )
}

export default LoginPage