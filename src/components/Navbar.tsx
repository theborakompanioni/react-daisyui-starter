import { PropsWithChildren, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { WrenchScrewdriverIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { Navbar as DaisyNavbar, Button, Menu } from 'react-daisyui'
import ROUTES from '../routes'

type NavbarProps = {
  title: ReactNode
  toggleSidebar: () => void
}

function Title({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <div className="font-title inline-flex text-2xl transition-all duration-100 md:text-3xl">
        <Link to={{ pathname: ROUTES.home }}>
          <Button className="text-xl normal-case" color="ghost">
            {children}
          </Button>
        </Link>
      </div>
    </>
  )
}

export function Navbar({ title, toggleSidebar }: NavbarProps) {
  return (
    <DaisyNavbar className="w-auto gap-2 mb-6">
      <DaisyNavbar.Start>
        <div className="flex-none md:hidden">
          <Button shape="square" color="ghost" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
        <div className="flex-1 hidden md:block">
          <span data-testid="sidebar-title-md">
            <Title>
              <>
                <div className="w-8 mr-2">
                  <img src="logo192.png" alt="logo" />
                </div>
                {title}
              </>
            </Title>
          </span>
        </div>
      </DaisyNavbar.Start>
      <DaisyNavbar.Center className="flex-none md:hidden">
        <span data-testid="sidebar-title">
          <Title>
            <>
              <div className="w-8 mr-2">
                <img src="logo192.png" alt="logo" />
              </div>
              {title}
            </>
          </Title>
        </span>
      </DaisyNavbar.Center>
      <DaisyNavbar.End>
        <div className="flex-none hidden md:block">
          <Menu horizontal={true} className="gap-2">
            <Menu.Item>
              <NavLink to={ROUTES.settings} className="rounded-lg">
                <WrenchScrewdriverIcon className="w-6 h-6" />
                Settings
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to={ROUTES.about} className="rounded-lg">
                <InformationCircleIcon className="w-6 h-6" />
                About
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </DaisyNavbar.End>
    </DaisyNavbar>
  )
}
