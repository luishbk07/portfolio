import { motion } from 'framer-motion'
import { usePersonalData } from '../../hooks/usePortfolioData'

const About = () => {
  const { personal, loading, error } = usePersonalData()

  if (loading) {
    return (
      <section id='about' className='py-24 bg-secondary'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-white'>Loading about information...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id='about' className='py-24 bg-secondary'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-red-500'>Error loading about information: {error}</div>
        </div>
      </section>
    )
  }

  if (!personal) return null

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
            <span className='text-primary'>About</span> Me
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
            <h3 className='text-2xl font-semibold mb-4 text-primary'>Profile</h3>
            <p className='text-white mb-4'>
              {personal.profile.title}
            </p>
            <p className='text-white'>
              {personal.profile.description}
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
                <h4 className='text-xl font-semibold mb-2 text-primary'>Education</h4>
                <p className='text-white'>{personal.info.education.degree}</p>
                <p className='text-white text-sm'>{personal.info.education.institution} ({personal.info.education.year})</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>Location</h4>
                <p className='text-white'>{personal.info.location.city}</p>
                <p className='text-white text-sm'>{personal.info.location.country}</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>Languages</h4>
                <p className='text-white'>Spanish: {personal.info.languages.spanish}</p>
                <p className='text-white'>English: {personal.info.languages.english}</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>Experience</h4>
                <p className='text-white'>{personal.info.experience.years}</p>
                <p className='text-white text-sm'>{personal.info.experience.level}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 