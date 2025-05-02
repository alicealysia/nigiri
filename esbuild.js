import { build } from 'esbuild'
//import esbuildPluginInlineImport from "esbuild-plugin-inline-import";
import { sassPlugin } from 'esbuild-sass-plugin'
import react from "react";

await build({
    entryPoints: ['./src/app.ts'],
    outdir: './dist',
    bundle: true,
    platform: 'node',
    target: 'firefox91',
    format: "esm",
    external: ['gi://*', 'resource://*', 'gettext', 'system', 'cairo', 'console'],
    publicPath: './public',
    minify: false,
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false,
    plugins: [ sassPlugin({
        filter: /\.module\.scss/,
        type: 'local-css'
    }), sassPlugin({
        filter: /\.scss$/,
        type: 'css'
    })],
    loader: react.JSX
})
