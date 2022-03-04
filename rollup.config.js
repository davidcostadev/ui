import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';
// import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export const ignoresNonDefaultExports = true;

export default {
  preserveModules: true,
  input: [pkg.source, './Button.ts'],
  globals: { 'styled-components': 'styled' },
  external: Object.keys(pkg.peerDependencies || {}),
  output: [
    {
      // file: pkg.main,
      dir: 'dist-cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      // file: pkg.module,
      dir: 'dist-esm',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    ts(),
    // typescript({ tsconfig: './tsconfig.json' }),
    babel({ extensions: ['.ts', 'tsx'], include: ['src/**/*'] }),
    resolve({ extensions: ['.ts', '.tsx'] }),
    commonjs(),
  ],
};
