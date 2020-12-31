import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@wessberg/rollup-plugin-ts';
import pkg from './package.json';

export const ignoresNonDefaultExports = true;

export default {
  input: pkg.source,
  globals: { 'styled-components': 'styled' },
  external: Object.keys(pkg.peerDependencies || {}),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ extensions: ['.ts', 'tsx'], include: ['src/**/*'] }),
    resolve({ extensions: ['.ts', '.tsx'] }),
    commonjs(),
    ts(),
  ],
};
