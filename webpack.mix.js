let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('assets/js/content.js', 'dist/js').vue()
    .copy('assets/manifest.json', 'dist')
    .options({
        processCssUrls: false
    });