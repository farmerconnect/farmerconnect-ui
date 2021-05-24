import typescript from '@rollup/plugin-typescript';

const config = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/farmerconnect-ui.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/farmerconnect-ui.esm.js',
      format: 'es',
    },
  ],
  plugins: [typescript()],
};

export default config;
