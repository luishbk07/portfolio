import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useSkillsData } from '../../hooks/usePortfolioData'

const SkillProgress = ({ skill, percentage }) => {
  const progressRef = useRef(null)
  const isInView = useInView(progressRef, { once: true, amount: 0.3 })
  
  return (
    <div className='mb-6'>
      <div className='flex justify-between mb-2'>
        <span className='text-white font-medium'>{skill}</span>
        <span className='text-primary font-medium'>{percentage}%</span>
      </div>
      <div className='h-2 bg-secondary-light rounded-full overflow-hidden' ref={progressRef}>
        <motion.div 
          className='h-full bg-primary rounded-full' 
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const { skills, loading, error } = useSkillsData()

  if (loading) {
    return (
      <section id='skills' className='py-24 bg-secondary-light'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-white'>Loading skills...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id='skills' className='py-24 bg-secondary-light'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-red-500'>Error loading skills: {error}</div>
        </div>
      </section>
    )
  }

  if (!skills) return null

  return (
    <section id='skills' className='py-24 bg-secondary-light'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            <span className='text-primary'>My</span> Skills
          </h2>
          <div className='w-16 h-1 bg-primary mx-auto'></div>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold mb-6 text-primary'>Technical Skills</h3>
            {skills.technical.map((skill, index) => (
              <SkillProgress key={index} skill={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold mb-6 text-primary'>Professional Skills</h3>
            {skills.professional.map((skill, index) => (
              <SkillProgress key={index} skill={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold mb-6 text-primary'>Soft Skills</h3>
            {skills.soft.map((skill, index) => (
              <SkillProgress key={index} skill={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills 