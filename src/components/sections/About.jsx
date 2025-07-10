import { motion } from 'framer-motion'
import { useTranslation } from '../../contexts/LanguageContext'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id='about' className='py-24 bg-secondary'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            <span className='text-primary'>{t('about.title')}</span> {t('about.subtitle')}
          </h2>
          <div className='w-16 h-1 bg-primary mx-auto'></div>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-secondary-light p-6 rounded-lg'
          >
            {/* Logo */}
            <div className='flex justify-center mb-6'>
              <motion.img
                src='/favicon.svg'
                alt='LuisDev Logo'
                className='w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-black p-2 shadow-lg'
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            
            <h3 className='text-2xl font-semibold mb-4 text-primary text-center'>{t('about.profile.title')}</h3>
            <p className='text-white mb-4'>
              {t('about.profile.description1')}
            </p>
            <p className='text-white'>
              {t('about.profile.description2')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>{t('about.info.education.title')}</h4>
                <p className='text-white'>{t('about.info.education.degree')}</p>
                <p className='text-white text-sm'>{t('about.info.education.institution')} ({t('about.info.education.year')})</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>{t('about.info.location.title')}</h4>
                <p className='text-white'>{t('about.info.location.city')}</p>
                <p className='text-white text-sm'>{t('about.info.location.country')}</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>{t('about.info.languages.title')}</h4>
                <p className='text-white'>{t('about.info.languages.spanish')}</p>
                <p className='text-white'>{t('about.info.languages.english')}</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>{t('about.info.experience.title')}</h4>
                <p className='text-white'>{t('about.info.experience.years')}</p>
                <p className='text-white text-sm'>{t('about.info.experience.level')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 