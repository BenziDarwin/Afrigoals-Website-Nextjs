# Theme Management Guide

All theme configurations are centralized in a single file for easy customization.

## Theme Configuration File

**Location:** `/lib/theme.ts`

## Available Theme Properties

### Colors
- **Primary Colors**: Teal/Green palette (50-900 shades)
- **Secondary Colors**: Orange palette (50-900 shades)
- **Neutral Colors**: Gray palette for backgrounds and text
- **Status Colors**: Success, Error, Warning

### Gradients
- `primary`: Main gradient for buttons and highlights
- `hero`: Hero section background gradient
- `card`: Card background gradient
- `overlay`: Overlay gradient for images

### Typography
- Font sizes with responsive clamps
- Font weights (light to extrabold)
- Line heights (tight, normal, relaxed)

### Effects
- Shadow levels (sm to xl, glow, inner)
- Blur levels
- Transition speeds and easing functions

### Spacing & Layout
- Section spacing
- Container max-widths
- Border radius values
- Breakpoints

## How to Customize

1. Open `/lib/theme.ts`
2. Modify any values in the theme object
3. Save the file
4. Changes will apply across the entire application

## Example: Changing Primary Color

```typescript
colors: {
  primary: {
    50: '#your-color-50',
    100: '#your-color-100',
    // ... modify all shades
    900: '#your-color-900',
  },
}
```

## Example: Changing Typography

```typescript
typography: {
  sizes: {
    hero: 'clamp(3rem, 6vw, 5rem)', // Larger hero text
    h1: 'clamp(2.5rem, 5vw, 3.5rem)',
    // ... adjust other sizes
  },
}
```

## Notes

- All colors support opacity variants
- Gradients use CSS gradient syntax
- Typography sizes use CSS clamp() for fluid responsive design
- Transitions use cubic-bezier easing for smooth animations
