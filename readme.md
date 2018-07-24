# Artificial Chatbot

> [Start your chatbot conversation right now]()

If the internet could talk, what would it say?
Start your conversation with the internet today and find out.
Cleverbot is an ML application that was trained by humans who frequent the
internet.

### Build an 80's Chatbot with an NPM Package

How to build a
[voice-controlled intelligent chatbot](https://www.pubnub.com/blog/build-an-80s-chatbot-with-an-npm-package/)
who comprehends human speech and responses accordingly and naturally!

### Add Voice Contorl to your OBS Twitch and YouTube Live Streams

Learn how we [built an OBS
Plugin that adds Subtitles to your
Live Stream](https://www.pubnub.com/developers/twitch-tv-obs-subtitles/).

Add Subtitles to your Twitch stream! Easy OBS integration.
Plugins should be easy to make! And for OBS, this is true. Hurray!
The best way by far, my opinion, is using OBS Browser Sources.

### How to build a Chatbot that talks to You

[Spoken](https://www.npmjs.com/package/spoken) is a free NPM Package for voice
controlled apps.

![Voice Apps](https://i.imgur.com/tXJmwrN.gif)

You can easily add this too your application on **mobile apps** and web.
The following is a simple example of a chatbot conversation flow.
Remember you need to have a microphone enabled on your phone or laptop.

```javascript
spoken.say('Hi!').then( speech => {
    // ask questions using your microphone
    spoken.listen().then( transcript => console.log(transcript) )
} )
```

Note that the Spoken NPM Package is only for capturing your voice and
converting your voice into text.
You can use this text to transmit to a chatbot URL service.
The chatbot URL Service would reply with a text which can be used
with `spoken.say( responseText )` command to speak aloud using
an artificial robot.
And we include a chatbot for free:

#### Cleverbot Chatbot Function

```javascript
let session = "";
let uri     = "http://www.cleverbot.com/getreply?";

export default (request, response) => {
    const pubnub = require('pubnub');
    const xhr    = require('xhr');
    const vault  = require('vault');

    let message = request.params.message || "";

    return vault.get("cleverbot-key").then( key => {
        if (Math.random() > 0.95) session = "";
        return xhr.fetch( uri + [
            "key="   + key
        ,   "input=" + message
        ,   "cs="    + session
        ,   "cb_settings_tweak1=100"
        ,   "cb_settings_tweak2=100"
        ,   "ts=" + (+new Date())
        ].join('&') ).then( result => {
            let bot = null;
            try      { bot = JSON.parse(result.body)                }
            catch(e) { 
                session = "";
                bot = { output: "Bot Error.", cs : session };
            }
            const reply = { "response" : bot.output || '' };
            session = bot.cs;
            pubnub.publish({ channel : "chatbot" , message : reply || '' });
            return response.send(reply);
        } );
    } );
};
```

Using the above code you can plug into
[PubNub Functions](https://www.pubnub.com/products/functions/)
service to get a full end-to-end chatbot user experience.

### Text-to-Speech

Synthetic voices are pretty good these days.
You can still tell they are robot voices.
Turn text into real-world spoken voice.
The voice is synthetic.
You can pick from a few different voices too.

```javascript
// Hello World
spoken.say('Hello World.');

// Say a quick message as Guy Fieri
spoken.say( 'Looks like your on a trip to flavor town.', 'Daniel' );

// Speak with Damayanti's voice
spoken.say( 'I am princess of the Vidarbha Kingdom.', 'Damayanti' );
```
