import { PropsWithChildren, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, WrenchScrewdriverIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { Menu } from 'react-daisyui'
import ROUTES from '../routes'

interface SidebarProps {
  title: ReactNode
}

export function Sidebar({ title, children }: PropsWithChildren<SidebarProps>) {
  return (
    <div className="p-4 menu w-60 md:w-80 bg-base-100">
      <Menu horizontal={false}>
        <Menu.Title className="mb-2">
          <span>{title}</span>
        </Menu.Title>
        <Menu.Item>
          <Link to={{ pathname: ROUTES.home }}>
            <HomeIcon className="w-6 h-6" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={ROUTES.settings}>
            <WrenchScrewdriverIcon className="w-6 h-6" />
            Settings
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link to={ROUTES.about}>
            <InformationCircleIcon className="w-6 h-6" />
            About
          </Link>
        </Menu.Item>
      </Menu>
      <>{children}</>
    </div>
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
      <div className="flex h-36 items-center justify-center">Content</div>
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
