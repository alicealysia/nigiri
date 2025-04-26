import { build } from 'esbuild'
//import esbuildPluginInlineImport from "esbuild-plugin-inline-import";
import { sassPlugin } from 'esbuild-sass-plugin'
import react from "react";

await build({
    entryPoints: ['./src/app.ts'],
    outdir: './dist',
    bundle: true,
    target: 'firefox91',
    format: "esm",
    external: ['gi://*', 'resource://*', 'gettext', 'system', 'cairo', 'console'],
    publicPath: './public',
    plugins: [/*esbuildPluginInlineImport(),*/ sassPlugin({
        type: "css-text"
    }) ],
    loader: react.JSX
})
