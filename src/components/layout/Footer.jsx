import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from '../../contexts/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className='bg-secondary-dark py-8 w-full'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='text-white text-center md:text-left'>
              © {currentYear} Luis Henríquez. {t('footer.rights')}
            </p>
          </div>
          
          <div className='flex space-x-4'>
            <a 
              href='mailto:Luishenriquezj007@gmail.com' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-white hover:text-primary transition-colors'
            >
              <FaEnvelope size={24} />
            </a>
            <a 
              href='https://www.linkedin.com/in/luis-henriquez-4307546/' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-white hover:text-primary transition-colors'
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 