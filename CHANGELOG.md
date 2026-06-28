# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0-alpha] - 2026-06-28

### Added

#### Features
- **Conservatory Page** - Plant care information hub with integrated weather widget
  - Weather widget with automatic geolocation detection
  - Local weather display for plant care optimization
  - Plant care tips and recommendations

- **Geolocation & Weather Integration**
  - Automatic user location detection via browser geolocation API
  - Manual city entry fallback for users who deny location permissions
  - Weather data integration for local conditions
  - Graceful error handling with user-friendly messaging

- **Science Library** - Educational tools for optimal plant care
  - **Sunbeam Cartographer** - Interactive light intensity visualizer
    - Light zone classification based on Thimijan & Heins (1983) research
    - Lux range visualization (0-100,000 lux)
    - Plant recommendations for each light zone
    - Interactive spectrum with clickable zones
  - Scientific references and citations for accuracy

#### Light Zone Classifications
- Soft Morning Glow (0–2000 lux) - Low indirect light
- Bright Indirect (2000–5000 lux) - Moderate to bright light
- Direct Sunlight (5000–10,000 lux) - High intensity light
- Intense Direct Sun (10,000+ lux) - Outdoor/extreme conditions

#### UI/UX
- Responsive design for mobile and desktop
- Accessible components with ARIA labels
- Beautiful gradient-based styling
- Interactive component feedback and animations
- Error state handling with clear messaging

### Fixed

- **Geolocation Error Handling** - Added graceful fallback UI when users deny location permissions
  - Users can now manually enter their city instead of seeing bare error messages
  - Retry button to attempt geolocation again
  - Toggle between auto-detection and manual entry
  
- **Light Zone Label Accuracy** - Corrected scientific classifications per peer-reviewed research
  - 3200 lux now correctly labeled as "Bright Indirect" instead of "Soft Morning Glow"
  - All light zone thresholds align with Thimijan & Heins (1983) research

### Technical Details

#### Technology Stack
- React for UI components
- CSS3 for styling with gradients and animations
- Custom React hooks for state management (useGeolocation)
- Browser Geolocation API
- Open-Meteo weather API

#### Project Structure
```
src/
├── components/
│   ├── WeatherWidget.jsx
│   └── SunbeamCartographer.jsx
├── hooks/
│   └── useGeolocation.js
├── pages/
│   ├── Conservatory.jsx
│   └── ScienceLibrary.jsx
├── constants/
│   └── lightZones.js
└── styles/
    ├── WeatherWidget.css
    ├── SunbeamCartographer.css
    └── Conservatory.css
```

### Known Issues
- None documented at this time

### Future Roadmap
- Integration with additional weather data providers
- Plant database with care requirements
- Watering schedule notifications
- Pest and disease identification
- Community plant sharing features
- Multi-language support

### Contributors
- karliem13 - Initial development

### References

1. Thimijan, R. W., & Heins, R. D. (1983). Photometric, radiometric, and quantum light units of measurement: A review of procedures for interconversion. HortScience, 18(6), 952–956.

---

## Guidelines for Future Releases

### Versioning
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

### Adding New Entries
When releasing a new version:
1. Add a new section with `## [X.Y.Z] - YYYY-MM-DD`
2. Include Added, Fixed, Changed, Deprecated, Removed, Security sections as needed
3. Update the unreleased section with new changes
4. Create a GitHub Release tag matching the version number

### Unreleased Changes

#### Planned for Next Release
- Plant database integration
- Watering reminders
- Enhanced weather data (humidity, temperature trends)
