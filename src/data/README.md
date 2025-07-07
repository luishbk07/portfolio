# Portfolio Data Management

This directory contains the centralized data for the portfolio website, following best practices for data separation and maintainability.

## File Structure

### `portfolio.json`
Contains all portfolio data organized into logical sections:

- **personal**: Personal information, profile description, education, location, etc.
- **skills**: Technical, professional, and soft skills with percentage ratings
- **experience**: Work experience with responsibilities and details
- **projects**: Portfolio projects with technologies, images, and links

## Usage

### Custom Hooks
The data is accessed through custom hooks located in `src/hooks/usePortfolioData.js`:

- `usePortfolioData()` - Returns all portfolio data
- `useSkillsData()` - Returns skills data specifically
- `useProjectsData()` - Returns projects data specifically
- `useExperienceData()` - Returns experience data specifically
- `usePersonalData()` - Returns personal information specifically

### Example Usage
```javascript
import { useSkillsData } from '../hooks/usePortfolioData'

const MyComponent = () => {
  const { skills, loading, error } = useSkillsData()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <div>
      {skills.technical.map(skill => (
        <div key={skill.name}>{skill.name}: {skill.percentage}%</div>
      ))}
    </div>
  )
}
```

## Benefits

1. **Maintainability**: Update content in one place
2. **Type Safety**: Clear data structure
3. **Performance**: Data is loaded once and cached
4. **Scalability**: Easy to extend with new data sections
5. **Testing**: Data can be easily mocked
6. **Future-ready**: Can be easily replaced with API calls

## Data Structure

### Skills
Each skill object contains:
- `name`: Skill name
- `percentage`: Proficiency level (0-100)

### Projects
Each project object contains:
- `id`: Unique identifier
- `title`: Project name
- `description`: Project description
- `technologies`: Array of technologies used
- `image`: Project image URL
- `demo`: Live demo URL (optional)
- `github`: GitHub repository URL (optional)

### Experience
Each job object contains:
- `id`: Unique identifier
- `position`: Job title
- `company`: Company name
- `period`: Employment period
- `location`: Work location
- `responsibilities`: Array of job responsibilities

## Updating Data

To update portfolio content:

1. Edit `portfolio.json`
2. Follow the existing data structure
3. The changes will automatically reflect in all components
4. No component code changes needed

## Future Enhancements

- Add validation schema for data structure
- Implement data versioning
- Add support for multiple languages
- Connect to a CMS or API
- Add image optimization pipeline 