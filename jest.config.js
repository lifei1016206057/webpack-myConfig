module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(t|j)sx?$': [
            'babel-jest', {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: true
                            }
                        }
                    ],
                    '@babel/preset-typescript'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        ]
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '/build/',
        '/dist/',
        '/docs/',
        '/examples/'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        "^Assets/(.*)$": "<rootDir>/src/assets/$1",
        "^Store/(.*)$": "<rootDir>/src/store/$1",
        "^Json/(.*)$": "<rootDir>/src/json/$1"
    },
    testURL: 'http://localhost/',

};