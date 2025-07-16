import { useLanguage } from '../contexts/LanguageContext'

const LanguageDetector = ({ children }) => {
  const { isDetecting } = useLanguage()

  if (isDetecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Detectando idioma...</p>
          <p className="text-gray-400 text-sm">Detecting language...</p>
        </div>
      </div>
    )
  }

  return children
}

export default LanguageDetector 