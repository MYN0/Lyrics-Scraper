"use strict" // The "use strict" thing is used to make sure that the code is in strict mode, Well also this is very optional.
const cheerio = require("cheerio").default;  // Importing the default cheerio
const req = require("html-get") // Importing the html-get package, You can also use the request package but i prefer this one because their was a required promise to the package and it was very hard to return objects.
const fetch = require("node-fetch").default; // Importing node fetch and by the way i'm using node-fetch@2 not the current version

// Parameters converting the track parameter to an String
/**
 * @param {String} track 
 */
async function getLyrics(track) {

    // Main function.
    if (!track) throw new Error("Empty query provided, Please specify a track to search for.") // Checking if the query/track is empty.
    var request = await fetch(`https://api.genius.com/search?q=${track}&access_token=qcDvIFknBUAOS2quMLHSaVmSoheEh_11B50NyXnGz7iKhoQi1ZkQtNNWEcokZoNq`) // Fetching the api with the query.
    var res = await request.json(); // Converting the data to JSON
    if (res.response.hits.length === 0) throw new Error(`No track found, The track is either invalid or not found.`) // returns an error if their was no result found for the given query.
    var mainbasicURL = String(res.response.hits[0].result.url); // (This is optional but i like to do this) -: I converted the URL to a string so i can use the basic String features this isn't required at all this is very optional.
    const resa = await req(`${mainbasicURL}`, { getBrowserless: true }); // Making a request to the URL.
    const $ = await cheerio.load(resa.html); // Getting the HTML data of the URL.

    // The following code is for the information and i just fetch the data from the given URL so their is nothing special to it.
    const lyrics = await $('div[class="Lyrics__Container-sc-1ynbvzw-6 jYfhrf"]').text()
    const title = await $("span[class='SongHeaderVariantdesktop__HiddenMask-sc-12tszai-10 bFjDxc']").text()
    const author = await $('a[class="Link-h3isu4-0 hwdSYP SongHeaderVariantdesktop__Artist-sc-12tszai-11 ayFeg"]').text()

    return { // Returning the data to an object.
        title,
        author,
        lyrics
    };
}
module.exports = { getLyrics } // Exporting an object of functions.


// https://api.genius.com/search?q=Renegades&access_token=qcDvIFknBUAOS2quMLHSaVmSoheEh_11B50NyXnGz7iKhoQi1ZkQtNNWEcokZoNq