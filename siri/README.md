# Animated Orb

A beautiful, interactive WebGL-powered orb animation built with React and Vite.

## Features

- **WebGL Shaders**: Custom GLSL shaders for stunning visual effects
- **Interactive**: Hover over the orb to see rotation and distortion effects
- **Customizable**: Adjust hue with a slider to change colors
- **Smooth Animations**: Fluid wave patterns and lighting effects
- **Responsive**: Adapts to different screen sizes

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Component Props

### Orb Component

- `hue` (number): Hue shift in degrees (0-360)
- `hoverIntensity` (number): Intensity of hover effects (default: 0.2)
- `rotateOnHover` (boolean): Enable rotation on hover (default: true)
- `forceHoverState` (boolean): Force hover state (default: false)

## Technologies

- React 18
- Vite
- TailwindCSS
- WebGL/GLSL

## Browser Support

Requires a browser with WebGL support.
