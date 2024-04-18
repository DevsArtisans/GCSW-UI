import { useLocation } from "react-router-dom"
import LoginSidebar from "../../components/Login/LoginSidebar"
import Registerbox from "../../components/Login/Registerbox"

const Register = () => {
  const location = useLocation()

  return (
    <div className='bg-white'>
      {/* Example */}
      <div className='flex min-h-screen'>
        {/* Container */}
        <div className='flex flex-row w-full'>
          {/* Sidebar */}
          <LoginSidebar />
          {/* Login */}
          <div className='flex flex-1 flex-col items-center justify-center px-10 relative'>
            {location.pathname === "/register" ? <Registerbox /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
