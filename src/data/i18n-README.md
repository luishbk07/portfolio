# Internationalization (i18n) Documentation

This portfolio website supports multiple languages with a comprehensive internationalization system built with React Context and best practices.

## 🌍 Supported Languages

- **English (en)** - Default language
- **Spanish (es)** - Complete translation

## 📁 File Structure

```
src/
├── contexts/
│   └── LanguageContext.jsx          # Language context and hooks
├── data/
│   ├── translations/
│   │   ├── en.json                  # English UI translations
│   │   └── es.json                  # Spanish UI translations
│   └── portfolio/
│       ├── en.json                  # English portfolio content
│       └── es.json                  # Spanish portfolio content
└── components/                      # All components use translation hooks
```

## 🔧 Usage

### Basic Translation Hook
```javascript
import { useTranslation } from '../../contexts/LanguageContext'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return (
    <h1>{t('navbar.about')}</h1>  // Returns "About" or "Acerca de"
  )
}
```

### Language Control Hook
```javascript
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()
  
  return (
    <select value={currentLanguage} onChange={(e) => changeLanguage(e.target.value)}>
      {supportedLanguages.map(lang => (
        <option key={lang} value={lang}>{lang}</option>
      ))}
    </select>
  )
}
```

### Portfolio Content Hook
```javascript
import { usePortfolioContent } from '../../contexts/LanguageContext'

const MyComponent = () => {
  const portfolioData = usePortfolioContent()
  
  return (
    <div>
      {portfolioData.projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  )
}
```

## 📝 Translation Keys Structure

### UI Translations (`/translations/`)
- `navbar.*` - Navigation menu items
- `hero.*` - Hero section content
- `about.*` - About section content
- `skills.*` - Skills section headers
- `experience.*` - Experience section content
- `projects.*` - Projects section content
- `contact.*` - Contact section content
- `footer.*` - Footer content
- `common.*` - Common terms (loading, error, etc.)

### Content Data (`/portfolio/`)
- `skills.*` - Skill names and categories
- `experience.*` - Job positions, companies, responsibilities
- `projects.*` - Project titles, descriptions, technologies

## 🎯 Features

### Automatic Language Detection
- Remembers user preference in localStorage
- Falls back to English if invalid language
- Persists across browser sessions

### Fallback System
- If a translation key is missing, falls back to English
- If English is also missing, displays the key itself
- Prevents breaking the UI with missing translations

### Real-time Language Switching
- All components automatically re-render when language changes
- No page refresh required
- Smooth user experience

### Type Safety
- Centralized translation key management
- Easy to spot missing translations
- Consistent translation structure

## 🔄 Language Switching Flow

1. User clicks language selector in navbar
2. `changeLanguage()` function is called
3. Context updates `currentLanguage` state
4. All components re-render with new translations
5. Preference saved to localStorage

## 📊 Language Data Management

### Adding New Languages

1. **Create translation files:**
   ```
   src/data/translations/fr.json
   src/data/portfolio/fr.json
   ```

2. **Update context:**
   ```javascript
   const SUPPORTED_LANGUAGES = ['en', 'es', 'fr']
   ```

3. **Add language names and flags:**
   ```javascript
   const languageNames = {
     en: 'English',
     es: 'Español',
     fr: 'Français'
   }
   ```

### Translation Best Practices

1. **Use descriptive keys:**
   ```json
   {
     "skills.categories.technical": "Technical Skills",
     "about.profile.description1": "..."
   }
   ```

2. **Keep translations consistent:**
   - Same terminology across all sections
   - Consistent capitalization rules
   - Maintain tone and style

3. **Test all languages:**
   - Verify all translations display correctly
   - Check for text overflow in different languages
   - Ensure proper character encoding

## 🚀 Performance Features

- **Lazy loading**: Only loads required language data
- **Memoization**: Prevents unnecessary re-renders
- **Efficient updates**: Context only updates when language changes
- **Small bundle**: Translations loaded synchronously for fast switching

## 🔍 Debugging

### Check current language:
```javascript
const { currentLanguage } = useLanguage()
console.log('Current language:', currentLanguage)
```

### Debug missing translations:
```javascript
const { t } = useTranslation()
console.log('Translation result:', t('some.key'))
// Returns key itself if translation missing
```

### View loaded data:
```javascript
const portfolioData = usePortfolioContent()
console.log('Portfolio data:', portfolioData)
```

## 🔧 Maintenance

### Updating Translations
1. Edit appropriate JSON files in `src/data/translations/`
2. Changes are automatically reflected in the UI
3. No component code changes needed

### Adding New Content
1. Add to both English and Spanish portfolio files
2. Follow existing data structure
3. Components automatically use new content

This internationalization system provides a robust, scalable solution for multi-language support while maintaining excellent developer experience and user performance. 