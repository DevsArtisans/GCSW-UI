import { useLocation } from "react-router-dom"
import LoginSidebar from "../../components/Login/LoginSidebar"
import Loginbox from "../../components/Login/Loginbox"
import Registerbox from "../../components/Login/Registerbox"
import { useEffect } from "react"
import { useAuthStore } from "../../hooks/Auth/useAuthStore"

const Login = () => {
  const location = useLocation()
  const { startGetSession } = useAuthStore()
  useEffect(() => {
    startGetSession()
  }, [])

  return (
    <div className='bg-white'>
      <div className='flex min-h-screen'>
        <div className='flex flex-row w-full'>
          <LoginSidebar />
          <div className='flex flex-1 flex-col items-center justify-center px-10 relative'>
            {location.pathname == "/login" ? <Loginbox /> : <Registerbox />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
