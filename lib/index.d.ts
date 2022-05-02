// Declaring a new type and naming the type to target a particular key in the object
declare type MetaData = {
    

    /**
     * @default
     * @returns the title of the track.
    * @exports
    */
    title?: String,
    /**
     * @default
     * @returns the author of the track.
    * @exports
    */
    author?: String,

    /**
     * @default
     * @returns the main lyrics of the track.
    * @exports
    */
    lyrics?: string
};

/**
 * @default
 * @function *`getLyrics`* Get lyrics of a track without having any sort of API key!
    @returns {Object} an object with the following properties: title, author, lyrics
* @param query ★ Specify a query to look on .
 * @throws {Error} Throws an error if the given query is invalid.
@example
```
// CommonJS
const { getLyrics } = require("@myno_21/lyrics-fetcher");
// ECMAScript
import { getLyrics } from "@myno_21/lyrics-fetcher";

async function main() {
const data = await getLyrics("The Sign");
console.log(data);
};

main();
// Results 🠋
{
//   title: 'The Sign',
//   author: 'Ace of Base',
//   lyrics: "[Intro]Whoa, oh, yeah[Verse](Ah) I got a new lifeYou would hardly recognize me, I'm so gladHow could a person like me care for you?(Ah) Why do I botherWhen you're not the one for me?Ooh, is enough enough?[Chorus]I saw the sign, and it opened up my eyesI saw the signLife is demanding without understandingI saw the sign, and it opened up my eyesI saw the signNo one's gonna drag you up to get into the light where you belongBut where do you belong?[Verse 2](Ah) Under the pale moonFor so many years, I've wondered who you areHow could a person like you bring me joy?Under the pale moonWhere I see a lot of starsOoh, is enough enough?[Chorus]I saw the sign, and it opened up my eyesI saw the signLife is demanding without understandingI saw the sign, and it opened up my eyesI saw the signNo one's gonna drag you up to get into the light where you belongBut where do you belong?[Interlude]Oh, oh, oh[Instrumental Break][Chorus]I saw the sign, and it opened up my mindAnd I am happy now living without youI've left you, oh-oh-ohI saw the sign, and it opened up my eyesI saw the signNo one's gonna drag you up to get into the light where you belong[Outro](I saw the sign, I saw the si-i-ign) I saw the sign(I saw the sign, I saw the si-i-i-ign)(I saw the sign, I saw the sign) I saw the signAnd it opened up my eyes, I saw the sign"
// }

```
@return
 */
// ★
export function getLyrics(query?: string): MetaData // Exporting the whole function again in the d*ts file.
