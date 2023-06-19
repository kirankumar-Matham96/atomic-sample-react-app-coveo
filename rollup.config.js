// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';



export default {
    input: 'src/index.tsx',
    output: {
        // file: 'static-test/jsBundle.js',
        dir: "static-test",
        format: 'cjs',
        inlineDynamicsImports: true,
    },
    plugins: [typescript(), commonjs(), resolve()]
};