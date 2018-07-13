# Artificial Chatbot

> [Start your chatbot conversation right now]()

If the internet could talk, what would it say?
Start your conversation with the internet today and find out.
Cleverbot is an ML application that was trained by humans who frequent the
internet.

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
