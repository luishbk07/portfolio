import { useState, useEffect } from 'react'
import portfolioData from '../data/portfolio.json'

export const usePortfolioData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      // Simulate async loading (in case you want to fetch from API later)
      setData(portfolioData)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }, [])

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

export const usePersonalData = () => {
  const { data, loading, error } = usePortfolioData()
  return {
    personal: data?.personal || null,
    loading,
    error
  }
} 