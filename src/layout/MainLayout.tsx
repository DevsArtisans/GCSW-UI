import { ReactNode } from "react"
import Navbar from "../components/Navbar/HomeNavbar"

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex h-screen  mx-0 p-0 w-full'>
      <div className='2xl:p-10  mx-0 p-0 w-full'>
        <Navbar />
        <div className='md:p-6 '>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
