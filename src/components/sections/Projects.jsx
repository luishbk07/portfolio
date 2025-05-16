import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

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
  const projects = [
    {
      id: 1,
      title: 'Pouch Agent Site',
      description: 'Insurance agent platform with policy management and client tracking features.',
      technologies: ['React', 'NodeJS', 'JavaScript'],
      image: 'https://placehold.co/600x400/121212/FFCC00?text=Pouch+Agent',
      demo: 'https://agent.pouchinsurance.com/'
    },
    {
      id: 2,
      title: 'Fastlane Website',
      description: 'Insurance company website with information about services and quote forms.',
      technologies: ['JavaScript', 'React', 'NodeJS'],
      image: 'https://placehold.co/600x400/121212/FFCC00?text=Fastlane',
      demo: 'https://Fastlane.insure/'
    },
    {
      id: 3,
      title: 'Solaris Insure',
      description: 'Insurance marketplace for the Southern California region.',
      technologies: ['JavaScript', 'React', 'NodeJS'],
      image: 'https://placehold.co/600x400/121212/FFCC00?text=Solaris+Insure',
      demo: 'https://Solaris.insure/'
    },
    {
      id: 4,
      title: 'ATL Software Products',
      description: 'Various applications developed with Angular for ATL-Software.',
      technologies: ['Angular 11+', 'Bootstrap', 'PHP'],
      image: 'https://placehold.co/600x400/121212/FFCC00?text=ATL+Software',
    },
  ]

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
            <span className='text-primary'>My</span> Projects
          </h2>
          <div className='w-16 h-1 bg-primary mx-auto mb-4'></div>
          <p className='text-white max-w-2xl mx-auto'>
            Here are some of the notable projects I've worked on. Each project showcases
            my skills in development and problem solving.
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