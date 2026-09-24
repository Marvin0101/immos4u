# immos4u

A production real-estate company website built with Next.js, React and TypeScript.

The application is used as the public website of immos4u and focuses on responsive user interfaces, reusable React components and the presentation of real-estate services across desktop and mobile devices.

## Live Website

https://immos4u.de

## Tech Stack

- Next.js
- React
- TypeScript
- Material UI
- Ant Design
- CSS Modules
- Vercel

## Features

- Responsive layout for desktop and mobile devices
- Reusable React components
- Responsive desktop and mobile navigation
- Drawer-based mobile navigation with Material UI
- Image carousel built with Ant Design
- Property and service pages
- Optimized image handling with Next.js `Image`
- Client-side navigation with Next.js
- Component-based frontend architecture

## Project Structure

```text
components/
  Address.tsx
  BasicMenu.tsx
  Card.tsx
  Countstats.tsx
  Expose.tsx
  Footer.tsx
  Gallery.tsx
  Header.tsx
  ReadMore.tsx

pages/
  bewertung/
  ferienobjekte/
  kaufobjekte/
  mietobjekte/
  referenzen/
  rund-ums-haus/
  index.tsx
  kontakt.tsx
  jobs.tsx
  team.tsx

styles/
  *.module.css
```

## Technical Approach

The application is structured around reusable React components instead of implementing each page independently.

Navigation is shared across the application and adapts to different screen sizes. Desktop users receive a conventional navigation structure, while smaller screens use a drawer-based mobile navigation implemented with Material UI.

The project combines Material UI and Ant Design where their components fit the respective use case, while custom styling is handled through CSS Modules.

Next.js provides the application structure, routing and optimized image handling, while React is used for the component architecture, state management and interactive UI behavior. TypeScript provides type safety throughout the frontend.

## Responsive Navigation

One of the main UI challenges was providing a navigation concept that works consistently across different screen sizes.

The desktop version uses a structured menu with several service categories, while the mobile version switches to a drawer-based navigation. React state is used to control the drawer and interactive behavior.

The header also reacts to scrolling by reducing its size to preserve screen space while keeping navigation accessible.

## Reusable Components

The frontend is divided into reusable components for recurring interface elements such as:

- navigation
- property presentation
- service cards
- galleries
- statistics
- expandable content

This keeps page implementations smaller and makes UI behavior and styling more consistent across the website.

## UI Libraries

The application uses both Material UI and Ant Design.

Material UI is primarily used for interactive interface elements such as:

- buttons
- navigation elements
- mobile drawer
- lists

Ant Design is used for the image carousel.

Custom layouts and project-specific styling are implemented with CSS Modules.

## Development

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

Create a production build with:

```bash
npm run build
```

## About the Project

immos4u is a production website developed for a real-estate company and is actively used as its public-facing company website.

The project was implemented with Next.js, React and TypeScript and includes responsive navigation, reusable UI components, service and property pages, and image galleries.

A key focus of the implementation was creating a maintainable component structure that works consistently across desktop and mobile layouts.
