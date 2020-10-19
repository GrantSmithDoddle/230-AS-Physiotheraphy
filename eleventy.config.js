const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const { minify } = require("terser");

module.exports = eleventyConfig => {

    // Navigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"));

    // Inline CSS into Header
    eleventyConfig.addFilter("cssmin", function(code) {
      return new CleanCSS({}).minify(code).styles;
    });

    // Inline JS into Footer
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
      code,
      callback
    ) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    });

    // Minify our HTML - During development this can be quite annoying.
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if ( outputPath.endsWith(".html") )
      {
          let minified = htmlmin.minify(content, {
              useShortDoctype: true,
              removeComments: true,
              collapseWhitespace: true
          })
          return minified
      }
      return content
    });

    // Generate Sitemap
    eleventyConfig.addPlugin(sitemap, {
      sitemap: {
        hostname: "https://asphysiotherapy.co.uk",
      },
    });

    // Limit Filter for NunJucks
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    // Include our static assets
    eleventyConfig.addPassthroughCopy({'src/_includes/resources/img': 'assets/img'});
    eleventyConfig.addPassthroughCopy({'src/_includes/resources/svg': 'assets/svg'});
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