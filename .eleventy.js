const htmlmin = require("html-minifier"); //minify html

const prettyDate = require('./lib/pretty-date.js')
const kebab = require('./lib/kebab.js')

module.exports = function(eleventyConfig) {

    // Recomplile 11ty when files change
    eleventyConfig.addWatchTarget("./src/style/")

    // ---------------------------- START - BLACK OPS 6 COLLECTIONS ----------------------------

    // A Collection for main Easter Eggs -----------------
    eleventyConfig.addCollection("mainEggs", collection => {
        return collection.getFilteredByTag("mainEgg")
    });

    eleventyConfig.addCollection("weaponTypes", collection => {
        return collection.getFilteredByTag("weaponType")
    });

    // A collection for Black Ops 6 Zombie Medals -----------------
    eleventyConfig.addCollection("bo6ZombieMedals", collection => {
        return collection.getFilteredByTag("bo6Medal").filter(item => item.data.bo6ZombieMedal)
    });

    // A collection for Black Ops 6 MP Medals -----------------
    eleventyConfig.addCollection("bo6MPMedals", collection => {
        return collection.getFilteredByTag("bo6Medal").filter(item => item.data.bo6MPMedal)
    });

    //  // A collection for Featured Posts -----------------
    // eleventyConfig.addCollection("featuredPosts", collection => {
    //     return collection.getFilteredByTag("post").filter(item => item.data.featured)
    // });

    // A collection for weapon stats -----------------
    eleventyConfig.addCollection("weaponStats", collection => {
        return collection.getFilteredByTag("weaponBuild").filter(item => item.data.weaponSetClass)
    });

    // A collection for creator builds -----------------
    eleventyConfig.addCollection("creatorBuilds", collection => {
        return collection.getFilteredByTag("weaponBuild").filter(item => item.data.creator)
    });

    // A collection for public builds -----------------
    eleventyConfig.addCollection("publicBuilds", collection => {
        return collection.getFilteredByTag("publicBuild").filter(item => item.data.person)
    });

    // // A collection for Stefan's builds -----------------
    // eleventyConfig.addCollection("stefanBuilds", collection => {
    //     return collection.getFilteredByTag("weaponBuild").filter(item => item.data.stefanWeaponClass)
    // });

    // ---------------------------- END - BLACK OPS 6 COLLECTIONS ----------------------------

    

    // ---------------------------- START - WARFRAME COLLECTIONS ----------------------------

    eleventyConfig.addCollection("warframeItems", collection => {
        return collection.getFilteredByTag("warframeItem")
    });

    // ---------------------------- END - WARFRAME COLLECTIONS ----------------------------



    // Expose Nunjucks filters
    eleventyConfig.addFilter("prettyDate", prettyDate);
    eleventyConfig.addFilter("kebab", kebab);
    eleventyConfig.addFilter("split", (str, delimiter) => str.split(delimiter));

    // Automatically open up the browser on script runs
    eleventyConfig.setBrowserSyncConfig({
        open: true
    })

    // minify html on prod build
    eleventyConfig.addTransform ('htmlmin', content => {
        if (process.env.NODE_ENV === 'production') {
            return htmlmin.minify (content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
        }
        return content
    })

    eleventyConfig.addGlobalData('site', {
        name: '115base',
        url: 'https://yoursitename.com',
        host: process.env.NODE_ENV === 'production' ? 'https://gearset.com' : 'http://localhost:8080',
        slogan: 'Your Gaming Guide',
        description: "your default site description"
    });

    return {
        htmlTemplateEngine: 'njk',

        dir: {
            input: "site/src",
            output: "public",
            // In relation to input
            layouts: "../templates",
            // In relation to input
            includes: "../templates/partials"
        },

        templateFormats: [
            "md",
            "njk",
            "jpg",
            "jpeg", 
            "png",
            "gif",
            "webp",
            "svg",
            "xml",
            "txt",
            "pdf",
            "zip",
            "mp4",
            "ogv",
            "json",
            "ics"
        ]
    }
}
