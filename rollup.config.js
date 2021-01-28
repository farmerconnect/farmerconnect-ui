import typescript from '@rollup/plugin-typescript';
import svg from 'rollup-plugin-svg';

const config = {
    input: 'src/index.tsx',
    output: [{
        file: 'dist/farmerconnect-ui.cjs.js',
        format: 'cjs'
    },
    {
        file: 'dist/farmerconnect-ui.esm.js',
        format: 'es'
    }],
    plugins: [
        typescript(),
        svg()
    ]
};

export default config;
