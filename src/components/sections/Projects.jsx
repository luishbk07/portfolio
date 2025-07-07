import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useProjectsData } from '../../hooks/usePortfolioData'
import { useTranslation } from '../../contexts/LanguageContext'

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className='bg-secondary-light rounded-lg overflow-hidden group'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className='relative h-48 md:h-64 bg-secondary-dark overflow-hidden'>
        <img 
          src={project.image} 
          alt={project.title} 
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {project.github && (
            <a 
              href={project.github} 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-secondary text-white p-3 rounded-full hover:bg-secondary-dark transition-colors'
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-secondary text-white p-3 rounded-full hover:bg-secondary-dark transition-colors'
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-primary'>{project.title}</h3>
        <p className='text-white mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((tech, index) => (
            <span key={index} className='text-xs bg-secondary px-3 py-1 rounded-full text-primary'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { projects, loading, error } = useProjectsData()
  const { t } = useTranslation()

  if (loading) {
    return (
      <section id='projects' className='py-24 bg-secondary'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-white'>{t('common.loading')}</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id='projects' className='py-24 bg-secondary'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-red-500'>{t('common.error')}: {error}</div>
        </div>
      </section>
    )
  }

  return (
    <section id='projects' className='py-24 bg-secondary'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            <span className='text-primary'>{t('projects.title')}</span> {t('projects.subtitle')}
          </h2>
          <div className='w-16 h-1 bg-primary mx-auto mb-4'></div>
          <p className='text-white max-w-2xl mx-auto'>
            {t('projects.description')}
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 