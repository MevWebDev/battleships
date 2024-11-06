


---

# Battleships Web App

A web-based implementation of the classic Battleships game! This project is a web application where player can place their ships, take turns to target the enemy’s grid, and try to sink all opponent ships to win. The app is built with a focus on user-friendly design, responsiveness, and smooth gameplay.

## Table of Contents

- [About the Game](#about-the-game)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Game Rules](#game-rules)
- [Gameplay](#gameplay)
- [Contributing](#contributing)
- [License](#license)

## About the Game

Battleships is a classic two-player strategy game where each player positions a fleet of ships on a grid. Players take turns "firing" at coordinates on the opponent's grid, aiming to hit and sink each of their ships. The player who sinks all of the opponent's ships first wins the game.

## Features

- **Interactive Grid**: Place your ships on the board.
- **VS Computer**: Play against machine.
- **Turn-Based Gameplay**: Take turns to attack the enemy’s grid.
- **Visual Effects**: Feedback for hits, misses, and sunk ships.
- **Responsiveness**: Works on desktop and mobile devices.
  
## Technologies Used

- **Frontend**: HTML, SCSS, JavaScript 
- **Testing**: Jest for unit testing
- **Bundling**: Webpack

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/battleships-webapp.git
   cd battleships-webapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the server:

   ```bash
   npm run server
   ```

2. Start the client:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to start playing!

## Game Rules

1. Each player places a fleet of ships on their own 10x10 grid.
2. Players take turns to call out a grid coordinate, trying to "hit" the opponent's ships.
3. If a hit is successful, the square will be marked, and the player gets feedback.
4. The game continues until one player sinks all of the other player’s ships.

## Gameplay

1. **Place Your Ships**: Drag each ship onto your grid to position your fleet.
2. **Take Turns**: Once both players are ready, take turns firing at coordinates on the opponent’s grid.
3. **Sink Ships**: A player wins by sinking all of the opponent’s ships.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear descriptions.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

