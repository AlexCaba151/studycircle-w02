# StudyCircle Design Planning

## Design Goal

StudyCircle should have a clean, friendly, and modern interface that makes it easy for university students to find and manage study groups.

The design prioritizes readability, simplicity, accessibility, and responsive behavior.

## Color Palette

| Purpose | Color | Hex |


| Primary | Blue | `#2563EB` |
| Primary Dark | Dark Blue | `#1D4ED8` |
| Text | Slate 900 | `#0F172A` |
| Secondary Text | Slate 600 | `#475569` |
| Background | Slate 50 | `#F8FAFC` |
| Surface | White | `#FFFFFF` |
| Border | Slate 200 | `#E2E8F0` |
| Success | Green | `#16A34A` |
| Error | Red | `#DC2626` |

### Color Usage

- Blue is used for primary actions and important interactive elements.
- Dark blue is used for hover and active states.
- Slate 900 is used for primary text.
- Slate 600 is used for secondary information.
- Slate 50 is used for page backgrounds.
- White is used for cards and content surfaces.
- Slate 200 is used for borders and separators.
- Green is used for successful actions or confirmations.
- Red is used for errors and validation messages.

## Typography

### Primary Font

The application uses:

```text
Arial, Helvetica, sans-serif
```

The typography system uses different sizes and weights to establish a clear visual hierarchy.

### Headings

- Page title: `text-4xl`, bold
- Section heading: `text-2xl`, bold
- Card heading: `text-lg`, bold

### Body Text

- Standard body text: `text-base`
- Supporting text: `text-sm`
- Small metadata: `text-xs`

## Layout

StudyCircle follows a mobile-first responsive design.

### Container

Main content uses a centered container with a maximum width:

```text
max-w-5xl
```

### Responsive Breakpoints

The application uses Tailwind CSS responsive breakpoints:

- Mobile: default
- Small: `sm`
- Medium: `md`
- Large: `lg`

Layouts should adapt from a single-column mobile layout to multi-column desktop layouts.

## Spacing

The application uses Tailwind CSS spacing utilities consistently.

Common spacing values include:

```text
p-4
p-5
p-6
gap-3
gap-4
gap-6
mt-2
mt-3
mt-5
mb-4
mb-8
```

Spacing should remain consistent between sections, cards, forms, and controls.

## Components

Reusable components should use consistent visual patterns.

### Buttons

Primary buttons:

- Blue background
- White text
- Rounded corners
- Clear hover state

### Cards

Study group cards should use:

- White background
- Light border
- Rounded corners
- Subtle shadow
- Consistent padding

### Forms

Forms should use:

- Clearly visible labels
- Consistent input spacing
- Validation messages
- Accessible controls

## Accessibility

The design should maintain sufficient color contrast and provide clear visual states for interactive elements.

Interactive controls must have accessible names and should be usable with keyboard navigation.

## Design Principles

1. Keep the interface simple.
2. Use consistent spacing.
3. Use reusable components.
4. Design mobile-first.
5. Maintain accessible color contrast.
6. Use clear visual hierarchy.
7. Avoid unnecessary visual complexity.