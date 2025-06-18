# GuitarLA + TS + useReducer

A React + TypeScript e-commerce demo for a guitar store, featuring a shopping cart managed with `useReducer` and persistent state via `localStorage`.

## Features

- Guitar product catalog
- Add, remove, and update guitar quantities in the cart
- Cart state persisted in localStorage
- Responsive design with Bootstrap-inspired styles
- React 19 with functional components and hooks

## Project Structure

```
├── public/
│   └── img/                # Images for guitars, logo, cart, etc.
├── src/
│   ├── components/         # React components (Header, GuitarCard, etc.)
│   ├── data/               # Static data (guitar database)
│   ├── hooks/              # (Reserved for custom hooks)
│   ├── reducers/           # Cart reducer logic
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Styles
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/guitarla-ts.git
   cd guitarla-ts
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Technologies Used

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/) (with TypeScript and React plugins)

## How to use

- Browse the guitar catalog on the homepage.
- Click "Add to cart" to add a guitar.
- Use the cart icon in the header to view, increase, decrease, or remove items.
- The cart persists between page reloads.
- Click "Empty cart" to clear all items.

## Live Demo

[https://monumental-narwhal-5fe307.netlify.app/](https://monumental-narwhal-5fe307.netlify.app/)