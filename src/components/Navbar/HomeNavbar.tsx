import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react"
import { CubeIcon } from "@heroicons/react/24/solid"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useAuthStore } from "../../hooks/Auth/useAuthStore"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const locate = useLocation()
  const { user, startLogout } = useAuthStore()
  const menuItems = [
    { name: "Proyectos", to: "/" },
    { name: "Teams", to: "/teams" },
  ]

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <CubeIcon className='w-7 h-7 text-black' />
          <p className='font-bold text-inherit '>GCSW</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand>
          <CubeIcon className='w-7 h-7 text-black' />
          <p className='font-bold text-inherit'>GCSW</p>
        </NavbarBrand>
        <NavbarItem isActive={locate.pathname === "/"}>
          <Link color='foreground' to='/projects'>
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem isActive={locate.pathname === "/teams"}>
          <Link to='/teams' aria-current='page'>
            Teams
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as='div' justify='end'>
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='secondary'
              name='Jason Hughes'
              size='sm'
              src='https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem
              textValue='Signed in as '
              key='profile'
              className='h-14 gap-2'
            >
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>{user?.name}</p>
            </DropdownItem>
            <DropdownItem textValue='Settings' key='settings'>
              My Settings
            </DropdownItem>
            <DropdownItem textValue='TeamSettings' key='team_settings'>
              <Link to={"/teams"}>Team Settings</Link>
            </DropdownItem>

            <DropdownItem
              textValue='Logout'
              onClick={startLogout}
              key='logout'
              color='danger'
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full' to={item.to}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
