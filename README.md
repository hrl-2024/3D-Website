# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Additional package used to build the project:
```
# for react skeletons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom  

# for 3d model:
npm install @react-three/fiber
npm install @react-three/drei

npm install @react-spring/three      # for animation

npm install @emailjs/browser   # for email submission

npm i react-vertical-timeline-component # for About page's project timeline
```

# How to run this project:
use `npm run dev` to run the website locally (also during development)

After you've done with developing it, use `npm run build` to build a stable version.
You can find the version in dist folder, and you can use that to deploy the website to your domain.