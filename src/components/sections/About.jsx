import { motion } from 'framer-motion'

const About = () => {
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
              Dominican willing to work remotely or relocated to some 
              countries. IT Professional with more than 5 years of experience in 
              several areas such as Development, Data Base and QA.
            </p>
            <p className='text-white'>
              Nice knowledge of JavaScript, TypeScript, React, Angular, NodeJS, 
              HTML, CSS, etc. Able to convey ideas and communicate in English.
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
                <p className='text-white'>Computer Science Degree</p>
                <p className='text-white text-sm'>UASD (2017)</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>Location</h4>
                <p className='text-white'>Santo Domingo</p>
                <p className='text-white text-sm'>Dominican Republic</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>Languages</h4>
                <p className='text-white'>Spanish: Native</p>
                <p className='text-white'>English: Intermediate</p>
              </div>
              <div className='bg-secondary-light p-5 rounded-lg'>
                <h4 className='text-xl font-semibold mb-2 text-primary'>Experience</h4>
                <p className='text-white'>+5 Years</p>
                <p className='text-white text-sm'>Development Lead</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 