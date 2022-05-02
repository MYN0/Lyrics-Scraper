# Lyrics-Finder! [![Version](https://img.shields.io/npm/v/@myno_21/time.svg)](https://www.npmjs.com/package/@myno_21/time)

> 🧣 Get lyrics of any song by just it's title no API key needed!

[![Downloads](https://img.shields.io/npm/dt/@myno_21/time.svg)](https://www.npmjs.com/package/@myno_21/time)

[![Codestyle standard status](https://github.com/cvzi/genius-lyrics-userscript/workflows/standardjs/badge.svg)](https://standardjs.com/)

# Installation 📝

```bash
$ npm install @myno_21/lyrics-fetcher
```

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](http://npmjs.org/package/@myno_21/playstore-scraper)

# Example 📣

```js
// CommonJS
const { getLyrics } = require("@myno_21/lyrics-fetcher");

//ECMAScript/ESM
import { getLyrics } from "@myno_21/lyrics-fetcher";

async function lyrics(query) {
  const data = await getLyrics(query); // Make sure to use the async/await or else it'll return undefined
  console.log(data); //Console logging the data.
}
lyrics("FireFlies");
// Output

// {
//   title: 'Fireflies',
//   author: 'Owl City',
//   lyrics: "[Verse 1]You would not believe your eyes if ten million firefliesLit up the world as I fell asleep'Cause they'd fill the open air and leave teardrops everywhereYou'd think me rude but I would just stand and stare[Chorus]I'd like to make myself believeThat planet Earth turns slowlyIt's hard to say that I'd rather stay awake when I'm asleep'Cause everything is never as it seems[Verse 2]'Cause I'd get a thousand hugs from ten thousand lightning bugsAs they tried to teach me how to danceA foxtrot above my head, a sock hop beneath my bedA disco ball is just hanging by a thread[Chorus]I'd like to make myself believeThat planet Earth turns slowlyIt's hard to say that I'd rather stay awake when I'm asleep'Cause everything is never as it seems (When I fall asleep)[Bridge]Leave my door open just a crack(Please take me away from here)'Cause I feel like such an insomniac(Please take me away from here)Why do I tire of counting sheep(Please take me away from here)When I'm far too tired to fall asleep?[Verse 3]To ten million fireflies, I'm weird 'cause I hate goodbyesI got misty eyes as they said farewell (They said farewell)But I'll know where several are if my dreams get real bizarre'Cause I saved a few and I keep them in a jar (Jar, jar, jar)[Chorus]I'd like to make myself believeThat planet Earth turns slowlyIt's hard to say that I'd rather stay awake when I'm asleep'Cause everything is never as it seems (When I fall asleep)I'd like to make myself believeThat planet Earth turns slowlyIt's hard to say that I'd rather stay awake when I'm asleep'Cause everything is never as it seems (When I fall asleep)[Outro]I'd like to make myself believeThat planet Earth turns slowlyIt's hard to say that I'd rather stay awake when I'm asleepBecause my dreams are bursting at the seams..."
// }
```

## Important 🧣

### This is a lyrics scraper and it scraps the lyrics from [Genius](https://genius.com/), So there are higher chances that you'll not get your response because while scraping their needs to be a delay or else it'll count as a suspicious activity so please make a delay after a request.

## ★ Previous Packages

- [@myno_21/time](https://www.npmjs.com/package/@myno_21/formatted-duration) _(Get a unix timestamps, timezone, humanreadable-time without struggling a bit!)_

- [@myno_21/formatted-duration](https://www.npmjs.com/package/@myno_21/formatted-duration) _(Format seconds/milliseconds to a date/duration without struggling a bit!)_

- [@myno_21/password-generator](https://www.npmjs.com/package/@myno_21/password-generator) _(Generates random passwords with some really cool options such as limit,includes etc.)_

- [@myno_21/playstore-scraper](https://www.npmjs.com/package/@myno_21/playstore-scraper) _(Scrape information of a playstore app without having any sort of API key!)_
