import ReactDOM from 'react-dom/client'
import { SettingsProvider } from './contexts/SettingsContext'
import App from './App'
import './index.css'

declare global {
  interface AppGlobal {
    APP_NAME: string
    SETTINGS_STORE_KEY: string
  }

  interface Window {
    APP: AppGlobal
  }
}

const devMode = process.env.NODE_ENV === 'development' && process.env.REACT_APP_DEV_MODE === 'true'

const defaultAppSettings = {
  dev: devMode,
  theme: 'dark',
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <SettingsProvider value={{ defaultValues: defaultAppSettings }}>
      <App />
    </SettingsProvider>
  </>
)
