# Gym Website

## Overview

This project is a modern, fully responsive gym website built with React and styled using Tailwind CSS. It also incorporates animations powered by Framer Motion to enhance the user experience.

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices (desktop, tablet, and mobile).
- **Navigation Bar**: A dynamic and responsive navigation bar for seamless user interaction.
- **Framer Motion Animations**: Smooth animations for an engaging and interactive experience.
- **Modern Design**: Clean and professional design tailored for gym or fitness-related businesses.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: A library for declarative animations and gestures.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Hemzaaaaaa/react-gym-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd gym-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The website will be available at `http://localhost:5173`.

## Folder Structure

```
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── Equipments.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ResponsiveMenu.jsx
│   │   └── mockData
│   │       └── data.js
│   ├── utility
│   │   └── animation.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Scripts

- `npm run dev`: Starts the development server.

## Customization

1. **Update Content**: Replace placeholder text and images in the `src/assets` folder.
2. **Modify Styles**: Customize styles in the `tailwind.config.js` file or directly in the components.

## Deployment

To deploy the application:

1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` folder to your preferred hosting service (e.g., Vercel, Netlify).

## Acknowledgments

- **React**: [https://reactjs.org/](https://reactjs.org/)
- **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Framer Motion**: [https://www.framer.com/motion/](https://www.framer.com/motion/)

## License

This project is licensed under the [MIT License](LICENSE).
