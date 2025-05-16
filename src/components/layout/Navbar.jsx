import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href='#home' className='text-2xl font-bold text-primary'>
            Luis<span className='text-white'>Dev</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className='text-white hover:text-primary transition-colors'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.title}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden bg-secondary'
        >
          <div className='container mx-auto px-4 py-4 flex flex-col space-y-4'>
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-white hover:text-primary block py-2 transition-colors'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar 