import { useState, useEffect } from 'react'
import { usePortfolioContent } from '../contexts/LanguageContext'

export const usePortfolioData = () => {
  const portfolioData = usePortfolioContent()
  const [data, setData] = useState(portfolioData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      setLoading(true)
      setData(portfolioData)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [portfolioData])

  return { data, loading, error }
}

// Individual data hooks for better component separation
export const useSkillsData = () => {
  const { data, loading, error } = usePortfolioData()
  return {
    skills: data?.skills || null,
    loading,
    error
  }
}

export const useProjectsData = () => {
  const { data, loading, error } = usePortfolioData()
  return {
    projects: data?.projects || [],
    loading,
    error
  }
}

export const useExperienceData = () => {
  const { data, loading, error } = usePortfolioData()
  return {
    experience: data?.experience || [],
    loading,
    error
  }
}

// Note: Personal data is now handled by translations, not portfolio data
// Keeping this for backward compatibility but it will return null
export const usePersonalData = () => {
  return {
    personal: null,
    loading: false,
    error: null
  }
} 