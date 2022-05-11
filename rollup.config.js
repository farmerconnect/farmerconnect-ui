import ts from 'rollup-plugin-ts';

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
  plugins: [ts()],
};

export default config;
