---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: 'xml2js Error: Cannot read property ''toString'' of undefined'
---

I fetch xml file from website and parse it to object, I got a error ` TypeError: Cannot read property 'toString' of undefined
    at Parser.parseString (parser.js:312)
    at Parser.parseString (parser.js:5)
    at push../node_modules/xml2js/lib/parser.js.exports.parseString (parser.js:369)
    at reader (weather_reader.js:32)`
```js
   parseString( xml, options,  function(err, result) {
      console.log(err)
        console.log(result)
    })
```

I use fetch to get xml and parseFormString(), this process makes a error, maybe the xml format became different.

```js
    const url = "https://weather.gc.ca/rss/city/on-82_e.xml";
     fetch(url, {
         method:'GET',
         mode: 'cors',
     })
        .then(res => res.text())
        .then(
            (result) =>{
                let parser = new DOMParser();
                let xml = parser.parseFromString(result, 'text/xml');
                return result;
            });
```

So I try `request-promise-native`, this time everything is correct.

```js
const rp = require('request-promise-native');
export default async function fetch_data(){
    const url = "https://dd.weather.gc.ca/citypage_weather/xml/siteList.xml";

    let data = await rp({ uri: url, simple: true });
    return data;
}
```