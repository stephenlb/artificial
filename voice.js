/*

// Usage Example

<script src="voice.js"></script>
<script>
    voice.onInterim = (transcript) => {
        console.log( 'Interim:', transcript );
        voice.speak(transcript);
    };

    voice.onFinal = (transcript) => {
        console.log( 'Final:', transcript );
        voice.speak(transcript);
    };

    voice.onStart = () => { console.log('Started listening.')   };
    voice.onEnd   = () => { console.log('Ended listening..')    };
    voice.onError = () => { console.log('Error in listening..') };

    voice.listen();
    voice.speak('Hello.');
</script>

*/
(()=>{
    'use strict';

    const voice       = window.voice = (text) => speack(text);
    const recognition = new webkitSpeechRecognition();
    const interim     = [];

    //recognition.continuous     = true;
    recognition.lang           = navigator.language || 'en-US';
    recognition.interimResults = true;

    voice.recognition = recognition;

    voice.speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    };

    voice.listen = () => {
        if (speechSynthesis.speaking)
            return setTimeout( voice.listen, 300 );

        voice.onInterim = voice.onInterim || (()=>{});
        voice.onFinal   = voice.onFinal   || (()=>{});
        voice.onStart   = voice.onStart   || (()=>{});
        voice.onEnd     = voice.onEnd     || (()=>{});
        voice.onError   = voice.onError   || (()=>{});

        recognition.onstart  = voice.onStart;
        recognition.onend    = voice.onEnd;
        recognition.onerror  = voice.onError;
        recognition.onresult = results;

        try { recognition.start() }
        catch(e) {}
    };

    function results(event) {
        const results = event.results;

        // Results
        for (let i=0;i<results.length;i++) {
            // Interim Result
            interim.push(results[i][0].transcript);

            // Final Result
            if (results[i].isFinal)
                voice.onFinal( results[i][0].transcript, event );
        }

        voice.onInterim( interim.join(''), event );
        interim.length = 0;
    }

})();

