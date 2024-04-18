import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation, useParams } from "react-router-dom"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
  teamName: string
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, teamName }: SidebarProps) => {
  const location = useLocation()
  const { pathname } = location
  console.log("sidebar: ", teamName)
  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded")
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded")
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded")
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 border-r-neutral-400 border-opacity-50 border-r-[1.5px] dark:border-opacity-20 dark:border-[#5F7DA1]  ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6 border-b-[1.5px] border-b-neutral-400 border-opacity-50 dark:border-opacity-20 dark:border-[#5F7DA1]'>
        <NavLink
          to={`/${teamName}/dashboard`}
          className={" flex items-center pb-3 sm:pb-2 md:pb-3 lg:pb-2"}
        >
          <span className='mr-2 text-neutral-600 dark:text-neutral-200 font-medium'>
            Equipo Dinamita
          </span>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden'
        >
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 64 64'
            className='h-5'
          >
            <g>
              <path
                fill='#787486'
                className='dark:fill-[#A3A3A3]'
                d='M20,32.8c-0.2-0.2-0.4-0.4-0.7-0.7c4.5-4.5,9-9,13.5-13.5c0.7-0.7,1.4-1.4,2.1-2.1c1.8-1.8-1-4.7-2.8-2.8
        c-5,5-10,10-14.9,14.9c-0.7,0.7-1.4,1.4-2.1,2.1c-0.8,0.8-0.8,2.1,0,2.8c4.9,4.9,9.8,9.8,14.7,14.7c0.7,0.7,1.4,1.4,2.1,2.1
        c1.8,1.8,4.7-1,2.8-2.8C29.8,42.5,24.9,37.6,20,32.8z'
              />
              <path
                fill='#787486'
                className='dark:fill-[#A3A3A3] '
                d='M34,32.8c-0.2-0.2-0.4-0.4-0.7-0.7c4.5-4.5,9-9,13.5-13.5c0.7-0.7,1.4-1.4,2.1-2.1c1.8-1.8-1-4.7-2.8-2.8
        c-5,5-10,10-14.9,14.9c-0.7,0.7-1.4,1.4-2.1,2.1c-0.8,0.8-0.8,2.1,0,2.8c4.9,4.9,9.8,9.8,14.7,14.7c0.7,0.7,1.4,1.4,2.1,2.1
        c1.8,1.8,4.7-1,2.8-2.8C43.8,42.5,38.9,37.6,34,32.8z'
              />
            </g>
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}

        <nav className='py-4 px-4 lg:px-6 '>
          {/* <!-- Menu Group --> */}
          <div>
            {/* <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark3'>
              MENU
            </h3> */}
            <div></div>

            <ul className='mb-6 flex flex-col gap-1.5  '>
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to={`/${teamName}/dashboard`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-600 duration-300 ease-in-out hover:bg-gray-3 dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    className='fill-current'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z'
                      fill=''
                    />
                    <path
                      d='M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z'
                      fill=''
                    />
                    <path
                      d='M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z'
                      fill=''
                    />
                    <path
                      d='M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z'
                      fill=''
                    />
                  </svg>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${teamName}/tasks`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-600 duration-300 ease-in-out hover:bg-gray-3 dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12.3701 8.88H17.6201'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.37988 8.88L7.12988 9.63L9.37988 7.38'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.3701 15.88H17.6201'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.37988 15.88L7.12988 16.63L9.37988 14.38'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  Tasks
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to={`/${teamName}/members`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-600 duration-300 ease-in-out hover:bg-gray-3 dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  Members
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${teamName}/settings`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-600 duration-300 ease-in-out hover:bg-gray-3 dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z'
                      className='dark:stroke-[#AEB7C0] stroke-[#64748B]'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  Settings
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Tables --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <div className='mb-5 border-t-[1.5px] border-t-neutral-400 border-opacity-50 dark:border-opacity-20 dark:border-[#5F7DA1]'></div>
            <h3 className='flex justify-between mb-4 ml-4 text-xs font-semibold text-bodydark3 dark:text-bodydark2'>
              MY PROJECTS
              <NavLink to={`/${teamName}/create-project`} className={``}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.33301 8H10.6663'
                    stroke='#787486'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8 10.6667V5.33337'
                    stroke='#787486'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.99967 14.6667H9.99967C13.333 14.6667 14.6663 13.3334 14.6663 10V6.00004C14.6663 2.66671 13.333 1.33337 9.99967 1.33337H5.99967C2.66634 1.33337 1.33301 2.66671 1.33301 6.00004V10C1.33301 13.3334 2.66634 14.6667 5.99967 14.6667Z'
                    stroke='#787486'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </NavLink>
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              <li>
                <NavLink
                  to={`/${teamName}/:projectName`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-600 duration-300 ease-in-out hover:bg-gray-3 dark:hover:bg-meta-4 ${
                    pathname.includes("project") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  Mobile App &nbsp; &nbsp; &nbsp; 📱
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
