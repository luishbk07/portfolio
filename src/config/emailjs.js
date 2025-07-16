// EmailJS Configuration
// For security, these should be set as environment variables in production
// You can set them in your EmailJS dashboard or use environment variables

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (get this from your EmailJS dashboard)
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  
  // Your EmailJS Template ID
  TEMPLATE_ID: 'template_f00uy1o',
  
  // Your EmailJS Public Key (get this from your EmailJS dashboard)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  
  // Rate limiting configuration
  RATE_LIMIT: {
    MAX_ATTEMPTS: 3,
    WINDOW_MS: 60000, // 1 minute
  }
}

// Security validation functions
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateFormData = (formData) => {
  const errors = []
  
  // Check required fields
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.push('Please enter a valid email address')
  }
  
  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long')
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }
  
  // Check for potential spam indicators
  const spamIndicators = ['casino', 'viagra', 'lottery', 'winner', 'urgent', 'limited time']
  const messageLower = formData.message.toLowerCase()
  
  if (spamIndicators.some(indicator => messageLower.includes(indicator))) {
    errors.push('Message contains suspicious content')
  }
  
  return errors
}

// Rate limiting utility
export class RateLimiter {
  constructor() {
    this.attempts = new Map()
  }
  
  canAttempt(userId) {
    const now = Date.now()
    const userAttempts = this.attempts.get(userId) || []
    
    // Remove old attempts outside the window
    const recentAttempts = userAttempts.filter(timestamp => 
      now - timestamp < EMAILJS_CONFIG.RATE_LIMIT.WINDOW_MS
    )
    
    if (recentAttempts.length >= EMAILJS_CONFIG.RATE_LIMIT.MAX_ATTEMPTS) {
      return false
    }
    
    // Add current attempt
    recentAttempts.push(now)
    this.attempts.set(userId, recentAttempts)
    
    return true
  }
  
  getRemainingTime(userId) {
    const userAttempts = this.attempts.get(userId) || []
    if (userAttempts.length === 0) return 0
    
    const oldestAttempt = Math.min(...userAttempts)
    const elapsed = Date.now() - oldestAttempt
    return Math.max(0, EMAILJS_CONFIG.RATE_LIMIT.WINDOW_MS - elapsed)
  }
} 