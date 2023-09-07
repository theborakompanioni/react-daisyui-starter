import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouteObject,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { Theme } from 'react-daisyui'
import ROUTES from './routes'
import { SettingsPage } from './pages/SettingsPage'
import { AboutPage } from './pages/AboutPage'
import { Layout } from './components/Layout'
import { useSettings } from './contexts/SettingsContext'
import './App.css'

const projectVersion = process.env.REACT_APP_VERSION || '0.1.0-dev'

/* Using HashRouter for GitHub Pages compatibility */
const USE_HASH_ROUTER = true

const createRouter = (routes: RouteObject[]) => (USE_HASH_ROUTER ? createHashRouter : createBrowserRouter)(routes)

function Index() {
  return <Navigate to={ROUTES.about} replace={true} />
}

function App() {
  const { theme } = useSettings()

  const router = createRouter(
    createRoutesFromElements(
      <Route
        id="base"
        element={
          <>
            <div>
              <Outlet />
            </div>
          </>
        }
      >
        <Route
          id="parent"
          element={
            <>
              <Layout title={window.APP.APP_NAME} drawer={{}}>
                <Outlet />
              </Layout>
            </>
          }
        >
          <Route id="home" path={ROUTES.home} index element={<Index />} />
          <Route id="settings" path={ROUTES.settings} element={<SettingsPage />} />
          <Route
            id="about"
            path={ROUTES.about}
            element={
              <>
                <AboutPage name={window.APP.APP_NAME} version={`v${projectVersion}`} />
              </>
            }
          />
        </Route>
        <Route id="404" path="*" element={<Navigate to={ROUTES['*']} replace={true} />} />
      </Route>,
    ),
  )

  return (
    <Theme dataTheme={theme || 'dark'}>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
