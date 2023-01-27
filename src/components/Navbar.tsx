import { PropsWithChildren, ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
    <DaisyNavbar className="w-auto shadow-xl gap-2 border rounded-box m-2 mb-6">
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
          <Menu horizontal={true} className="gap-1">
            <Menu.Item>
              <Link to={ROUTES.settings} className="rounded-lg">
                <WrenchScrewdriverIcon className="w-6 h-6" />
                Settings
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={ROUTES.about} className="rounded-lg">
                <InformationCircleIcon className="w-6 h-6" />
                About
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </DaisyNavbar.End>
    </DaisyNavbar>
  )
}

/*
export function Sidebar({ elementId, title }: SidebarProps) {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => setVisible((current) => !current)

  return (
    <Drawer
      side={true}
      open={visible}
      onClickOverlay={toggleVisible}
      className="font-sans"
    ><>
      <Navbar>
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <Menu horizontal={true}>
            <Menu.Item>
              <a>Navbar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Navbar Item 2</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
      </>
    </Drawer>)
}*/
/*
  return (
    <div
      id={elementId}
      className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
    >
      <FbSidebar>
        <FbSidebar.Logo href="#" img="favicon.ico" imgAlt="">
          <span data-testid="sidebar-title">{title}</span>
        </FbSidebar.Logo>
        <FbSidebar.Items>
          <FbSidebar.ItemGroup>
            <Link to={{ pathname: ROUTES.home }}>
              <FbSidebar.Item as={'span'} icon={HomeIcon}>
                Home
              </FbSidebar.Item>
            </Link>
          </FbSidebar.ItemGroup>
          <FbSidebar.ItemGroup>
            <Link to={ROUTES.settings}>
              <FbSidebar.Item as={'span'} icon={WrenchScrewdriverIcon}>
                Settings
              </FbSidebar.Item>
            </Link>
            <Link to={ROUTES.about}>
              <FbSidebar.Item as={'span'} icon={InformationCircleIcon}>
                About
              </FbSidebar.Item>
            </Link>
          </FbSidebar.ItemGroup>
        </FbSidebar.Items>
      </FbSidebar>
    </div>
  )
}*/
