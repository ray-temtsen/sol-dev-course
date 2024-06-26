# Soldev Test Drive

This project is a test drive of the Solana blockchain using the guide from [Soldev](https://www.soldev.app/course).

## Project Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/soldev-test-drive.git
    cd soldev-test-drive
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `src/index.ts` file and add your Solana code following the Soldev guide.

### Running the Project

- **Development mode**: Automatically restarts on changes using `nodemon`.
    ```bash
    npm run dev
    ```

- **Build the project**:
    ```bash
    npm run build
    ```

- **Run the project**:
    ```bash
    npm start
    ```

### Dependencies

- `@solana/web3.js`: Solana JavaScript API
- `@solana-developers/helpers`: Helper functions for Solana development
- `typescript`: TypeScript for static typing
- `ts-node`: TypeScript execution environment
- `nodemon`: Utility that monitors for any changes in your source and automatically restarts your server

### Dev Dependencies

- `eslint`: JavaScript and TypeScript linter
- `prettier`: Code formatter
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`: ESLint plugin and parser for TypeScript
- `@types/node`: Type definitions for Node.js

### Resources

- [Soldev Course](https://www.soldev.app/course)
- [Solana Documentation](https://docs.solana.com/)

### License

This project is licensed under the ISC License.

