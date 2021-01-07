import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/index.tsx',
    output: {
        file: 'build/bundle.js',
        format: 'cjs'
    },
    plugins: [ typescript() ]
};

export default config;
