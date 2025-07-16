import { useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, validateFormData, RateLimiter } from '../config/emailjs'

// Create a singleton rate limiter instance
const rateLimiter = new RateLimiter()

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const sendEmail = useCallback(async (formData, userId = 'default') => {
    // Reset states
    setError(null)
    setSuccess(false)
    setIsLoading(true)

    try {
      // Rate limiting check
      if (!rateLimiter.canAttempt(userId)) {
        const remainingTime = rateLimiter.getRemainingTime(userId)
        throw new Error(`Too many attempts. Please wait ${Math.ceil(remainingTime / 1000)} seconds before trying again.`)
      }

      // Validate form data
      const validationErrors = validateFormData(formData)
      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(', '))
      }

      // Sanitize form data to prevent XSS
      const sanitizedData = {
        from_name: formData.name.trim().substring(0, 100), // Limit length
        from_email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim().substring(0, 200), // Limit length
        message: formData.message.trim().substring(0, 2000), // Limit length
        to_name: 'Luis Henriquez', // Your name
        reply_to: formData.email.trim().toLowerCase(),
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      // Send email
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        sanitizedData,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (response.status === 200) {
        setSuccess(true)
        return { success: true, message: 'Email sent successfully!' }
      } else {
        throw new Error('Failed to send email. Please try again.')
      }

    } catch (err) {
      const errorMessage = err.message || 'An error occurred while sending the email.'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const resetStates = useCallback(() => {
    setError(null)
    setSuccess(false)
    setIsLoading(false)
  }, [])

  return {
    sendEmail,
    isLoading,
    error,
    success,
    resetStates
  }
} 