import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would normally send the data to your backend
    setIsSubmitted(true)
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }
  
  return (
    <section id='contact' className='py-24 bg-secondary-light'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12 text-center'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            <span className='text-primary'>Contact</span> Me
          </h2>
          <div className='w-16 h-1 bg-primary mx-auto mb-4'></div>
          <p className='text-white max-w-2xl mx-auto'>
            Interested in working together? Feel free to reach out. I'm always open 
            to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold mb-6 text-primary'>Get In Touch</h3>
            
            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='bg-primary p-3 rounded-md text-secondary'>
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className='text-white font-medium mb-1'>Email</h4>
                  <p className='text-white'>Luishenriquezj007@gmail.com</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-4'>
                <div className='bg-primary p-3 rounded-md text-secondary'>
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className='text-white font-medium mb-1'>Phone</h4>
                  <p className='text-white'>+1(809) 758-2190</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-4'>
                <div className='bg-primary p-3 rounded-md text-secondary'>
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className='text-white font-medium mb-1'>Location</h4>
                  <p className='text-white'>Santo Domingo, Dominican Republic</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-primary p-3 rounded-md text-secondary'>
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className='text-white font-medium mb-1'>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/luis-henriquez-4307546/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">linkedin.com/in/luis-henriquez-4307546</a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-primary p-3 rounded-md text-secondary'>
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className='text-white font-medium mb-1'>Nationality</h4>
                  <p className='text-white'>Dominican</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-semibold mb-6 text-primary'>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input 
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your Name'
                  required
                  className='w-full p-3 rounded-md bg-secondary border border-gray-700 text-white focus:outline-none focus:border-primary transition'
                />
              </div>
              
              <div>
                <input 
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Your Email'
                  required
                  className='w-full p-3 rounded-md bg-secondary border border-gray-700 text-white focus:outline-none focus:border-primary transition'
                />
              </div>
              
              <div>
                <input 
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  required
                  className='w-full p-3 rounded-md bg-secondary border border-gray-700 text-white focus:outline-none focus:border-primary transition'
                />
              </div>
              
              <div>
                <textarea 
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your Message'
                  required
                  rows={5}
                  className='w-full p-3 rounded-md bg-secondary border border-gray-700 text-white focus:outline-none focus:border-primary transition resize-none'
                />
              </div>
              
              <motion.button
                type='submit'
                className='px-8 py-3 bg-primary hover:bg-primary-dark text-secondary font-semibold rounded-md transition-colors w-full'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 