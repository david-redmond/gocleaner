module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript support
    testEnvironment: 'node', // Set the test environment to Node.js
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore these paths when searching for tests
    moduleFileExtensions: ['ts', 'js', 'json', 'node'], // File extensions to be used
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Test file patterns
    transform: {
        '^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json', // Path to your TypeScript config
        },
    },
};
