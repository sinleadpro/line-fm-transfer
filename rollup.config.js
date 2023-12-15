import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import nodePolyfills from "rollup-plugin-polyfill-node";

const config = [
  {
    input: ["./index.js"],
    // external: ["style.css"],
    output: [
      {
        file: "build/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "build/index.esm.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: [".mjs", ".js", ".json", ".node", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      nodePolyfills(),
      babel({
        plugins: ["@babel/plugin-transform-optional-chaining"],
        exclude: "node_modules/**",
      }),
      postcss(),
    ],
  },
];

export default config;
