import { LanguageProvider } from './i18n/LanguageContext'
import MenuPage from './pages/MenuPage'

function App() {
  return (
    <LanguageProvider>
      <MenuPage />
    </LanguageProvider>
  )
}

export default App

