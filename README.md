# Pac-Man Game

A modern implementation of the classic Pac-Man game built with Next.js and TypeScript.

## Features

- Classic Pac-Man gameplay mechanics
- Four ghosts with different behaviors and personalities
- Power pellets (energizers) that allow Pac-Man to eat ghosts
- Score tracking and lives system
- Responsive design with touch controls for mobile devices
- Keyboard controls for desktop
- Visual ghost path debugging option
- User authentication system

## Architecture

The game is built using a component-based architecture with the following key components:

### Core Game Logic (`src/pacman/`)

- `Game.ts`: Main game controller managing game state, scoring, and ghost behavior
- `Pacman.ts`: Handles Pac-Man movement, collision detection, and pill collection
- `Ghost.ts`: Implements ghost AI using A\* pathfinding algorithm
- `Board.ts`: Manages the game board layout, walls, and pills
- `TypesAndSettings.ts`: Contains game constants and type definitions

### React Components (`src/components/`)

- Game board and grid components
- Pac-Man and ghost sprites
- Walls and pills rendering
- Touch screen controller for mobile devices
- UI elements (score, lives, game over screen)

### Pages (`src/app/`)

- Main game page with authentication
- Game play interface

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start playing.

## Controls

- Arrow keys or WASD: Move Pac-Man
- Touch controls available on mobile devices
- Show/Hide ghost paths for debugging

## Game Rules

- Collect all pills to win
- Avoid ghosts or lose a life
- Eat power pellets to temporarily make ghosts vulnerable
- Game ends when all lives are lost

## Technical Details

- Built with Next.js 13+ (App Router)
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- A\* pathfinding algorithm for ghost AI
- Local storage for user authentication

## Development

The project uses modern web development practices and tools:

- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS for styling
- Next.js for server-side rendering and routing

## License

This project is open source and available under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
