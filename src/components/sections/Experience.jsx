import { motion } from 'framer-motion'
import { useExperienceData } from '../../hooks/usePortfolioData'

const ExperienceItem = ({ position, company, period, location, responsibilities }) => {
  return (
    <motion.div 
      className='mb-10 relative pl-8 border-l-2 border-primary'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className='absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0'></div>
      <div className='mb-1 text-primary font-bold text-lg'>{position}</div>
      <div className='mb-2 flex flex-wrap gap-2'>
        <span className='text-white font-medium'>{company}</span>
        <span className='text-gray-400'>|</span>
        <span className='text-gray-400'>{period}</span>
        <span className='text-gray-400'>|</span>
        <span className='text-gray-400'>{location}</span>
      </div>
      <ul className='list-disc ml-4 text-white space-y-1'>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

const Experience = () => {
  const { experience, loading, error } = useExperienceData()

  if (loading) {
    return (
      <section id='experience' className='py-24 bg-secondary'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-white'>Loading experience...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id='experience' className='py-24 bg-secondary'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-red-500'>Error loading experience: {error}</div>
        </div>
      </section>
    )
  }

  return (
    <section id='experience' className='py-24 bg-secondary'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            <span className='text-primary'>Professional</span> Experience
          </h2>
          <div className='w-16 h-1 bg-primary mx-auto mb-4'></div>
          <p className='text-white max-w-2xl mx-auto'>
            My professional journey showcases my development expertise and growth in the IT industry.
          </p>
        </motion.div>
        
        <div className='max-w-3xl mx-auto'>
          {experience.map((job) => (
            <ExperienceItem 
              key={job.id}
              position={job.position}
              company={job.company}
              period={job.period}
              location={job.location}
              responsibilities={job.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 