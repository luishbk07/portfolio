import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import { useTranslation, useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languageFlags = {
    en: '🇺🇸',
    es: '🇪🇸'
  }

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 text-white hover:text-primary transition-colors px-3 py-2 rounded-md'
      >
        <FaGlobe size={16} />
        <span className='hidden sm:inline'>{t(`languages.${currentLanguage}`)}</span>
        <span className='text-sm'>{languageFlags[currentLanguage]}</span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='absolute right-0 mt-2 w-40 bg-secondary-light rounded-md shadow-lg border border-secondary z-50'
        >
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                changeLanguage(lang)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors flex items-center space-x-2 ${
                currentLanguage === lang ? 'text-primary bg-secondary' : 'text-white'
              }`}
            >
              <span>{languageFlags[lang]}</span>
              <span>{t(`languages.${lang}`)}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  const navLinks = [
    { title: t('navbar.about'), href: '#about' },
    { title: t('navbar.skills'), href: '#skills' },
    { title: t('navbar.experience'), href: '#experience' },
    { title: t('navbar.projects'), href: '#projects' },
    { title: t('navbar.contact'), href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        // Close any open language selectors
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href='#home' className='text-2xl font-bold text-primary'>
            Luis<span className='text-white'>Dev</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6'>
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className='text-white hover:text-primary transition-colors'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.title}
            </motion.a>
          ))}
          <div className='language-selector'>
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center space-x-3'>
          <div className='language-selector'>
            <LanguageSelector />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden bg-secondary'
        >
          <div className='container mx-auto px-4 py-4 flex flex-col space-y-4'>
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-white hover:text-primary block py-2 transition-colors'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar 