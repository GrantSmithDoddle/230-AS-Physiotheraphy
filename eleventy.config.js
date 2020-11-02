const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"));

    // Generate Sitemap
    eleventyConfig.addPlugin(sitemap, {
      sitemap: {
        hostname: "https://asphysiotherapy.co.uk",
      },
    });

    // Limit Filter for NunJucks
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    // Include our static assets
    eleventyConfig.addPassthroughCopy({'src/_includes/assets/js': 'assets/js'});
    eleventyConfig.addPassthroughCopy({'src/_includes/assets/css': 'assets/css'});
    eleventyConfig.addPassthroughCopy({'src/_includes/assets/img': 'assets/img'});
    eleventyConfig.addPassthroughCopy({'src/_assets/svg': 'assets/svg'});
    eleventyConfig.addPassthroughCopy({'src/_assets/fonts': 'fonts'});
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    return {
        templateFormats: ['md', 'njk'],
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            data: '_data'
        }
    }
}
