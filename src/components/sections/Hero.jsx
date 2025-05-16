import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen relative flex items-center justify-center overflow-hidden bg-secondary-dark'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-20 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl'></div>
        <div className='absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl'></div>
      </div>
      
      <div className='container mx-auto px-4 z-10'>
        <div className='flex flex-col items-center justify-center text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-4'
          >
            <h1 className='text-4xl md:text-6xl font-bold'>
              <span className='text-white'>Hi, I'm </span>
              <span className='text-primary'>Luis Henríquez</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-8'
          >
            <h2 className='text-2xl md:text-3xl text-white'>
              <span className='font-semibold'>Development Lead - Full-Stack Developer</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mb-6 max-w-2xl'
          >
            <p className='text-lg text-white'>
              IT Professional with over 5 years of experience in several areas such as Development, 
              Data Base, and QA. Strong knowledge of JavaScript, TypeScript, React, Angular, and Node.js.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 mb-12'
          >
            <a 
              href='#projects' 
              className='px-8 py-3 bg-primary hover:bg-primary-dark text-secondary font-semibold rounded-md transition-colors'
            >
              View My Work
            </a>
            <a 
              href='#contact' 
              className='px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold rounded-md transition-colors'
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <a 
          href='#about'
          className='flex flex-col items-center text-white hover:text-primary transition-colors'
        >
          <span className='mb-2'>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero 