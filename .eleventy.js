module.exports = function (eleventyConfig) {
    // specify that this folder should be passed to output which eleventy is producing...pass just as is, no changes
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('admin');
};