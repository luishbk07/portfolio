import { createContext, useContext, useState, useEffect } from 'react'

// Import translation files
import enTranslations from '../data/translations/en.json'
import esTranslations from '../data/translations/es.json'

// Import portfolio data files
import enPortfolio from '../data/portfolio/en.json'
import esPortfolio from '../data/portfolio/es.json'

const translations = {
  en: enTranslations,
  es: esTranslations
}

const portfolioData = {
  en: enPortfolio,
  es: esPortfolio
}

const SUPPORTED_LANGUAGES = ['en', 'es']
const DEFAULT_LANGUAGE = 'en'
const STORAGE_KEY = 'portfolio-language'

// Spanish-speaking countries and regions
const SPANISH_SPEAKING_COUNTRIES = [
  'AR', // Argentina
  'BO', // Bolivia
  'CL', // Chile
  'CO', // Colombia
  'CR', // Costa Rica
  'CU', // Cuba
  'DO', // Dominican Republic
  'EC', // Ecuador
  'SV', // El Salvador
  'GT', // Guatemala
  'HN', // Honduras
  'MX', // Mexico
  'NI', // Nicaragua
  'PA', // Panama
  'PY', // Paraguay
  'PE', // Peru
  'PR', // Puerto Rico
  'ES', // Spain
  'UY', // Uruguay
  'VE', // Venezuela
  'GQ', // Equatorial Guinea
  'PH', // Philippines (Spanish influence)
]

// Function to detect language based on location
const detectLanguageFromLocation = async () => {
  try {
    console.log('🔍 Starting language detection...')
    
    // First try to get location from IP geolocation
    console.log('📍 Fetching location from IP...')
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    
    console.log('🌍 Location data:', data)
    console.log('🏳️ Country code:', data.country_code)
    console.log('📝 Spanish-speaking countries:', SPANISH_SPEAKING_COUNTRIES)
    
    if (data.country_code && SPANISH_SPEAKING_COUNTRIES.includes(data.country_code)) {
      console.log('✅ Detected Spanish-speaking country:', data.country_code)
      return 'es'
    }
    
    // Fallback to browser language
    const browserLang = navigator.language || navigator.userLanguage
    console.log('🌐 Browser language:', browserLang)
    
    if (browserLang.startsWith('es')) {
      console.log('✅ Detected Spanish browser language')
      return 'es'
    }
    
    console.log('🌍 Defaulting to English')
    return 'en'
  } catch {
    console.log('❌ Could not detect location, using browser language')
    // Fallback to browser language
    const browserLang = navigator.language || navigator.userLanguage
    console.log('🌐 Browser language (fallback):', browserLang)
    
    if (browserLang.startsWith('es')) {
      console.log('✅ Detected Spanish browser language (fallback)')
      return 'es'
    }
    console.log('🌍 Defaulting to English (fallback)')
    return 'en'
  }
}

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get language from localStorage or use default
    const savedLanguage = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE
  })

  const [isDetecting, setIsDetecting] = useState(false)

  useEffect(() => {
    // Auto-detect language on first visit
    const savedLanguage = localStorage.getItem(STORAGE_KEY)
    
    if (!savedLanguage) {
      setIsDetecting(true)
      detectLanguageFromLocation().then(detectedLanguage => {
        setCurrentLanguage(detectedLanguage)
        setIsDetecting(false)
      }).catch(() => {
        setIsDetecting(false)
      })
    }
  }, [])

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem(STORAGE_KEY, currentLanguage)
  }, [currentLanguage])

  const changeLanguage = (languageCode) => {
    if (SUPPORTED_LANGUAGES.includes(languageCode)) {
      setCurrentLanguage(languageCode)
    }
  }

  // Translation function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        value = translations[DEFAULT_LANGUAGE]
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return the key if no translation found
          }
        }
        break
      }
    }
    
    return value || key
  }

  // Get portfolio data for current language
  const getPortfolioData = () => {
    return portfolioData[currentLanguage] || portfolioData[DEFAULT_LANGUAGE]
  }

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getPortfolioData,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isRTL: false, // Add RTL support if needed later
    isDetecting
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Export individual hooks for specific data types
export const useTranslation = () => {
  const { t } = useLanguage()
  return { t }
}

export const usePortfolioContent = () => {
  const { getPortfolioData } = useLanguage()
  return getPortfolioData()
} 