const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-versionhash')
require('vuetifyjs-mix-extension')
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

mix.js('resources/js/app.js', 'public/dist/js').vuetify('vuetify-loader');
mix.sass('resources/sass/app.scss', 'public/dist/css')
    .sass('resources/sass/admin.scss', 'public/dist/css');

if (mix.inProduction()) {
    mix.versionHash()
} else {
    mix.sourceMaps()
}

mix.webpackConfig({
    plugins: [
        // new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.join(__dirname, './resources/js')
        }
    },
    output: {
        chunkFilename: 'dist/js/[chunkhash].js',
        //    path: mix.config.hmr ? '/' : path.resolve(__dirname, './public/build')
    }
})

