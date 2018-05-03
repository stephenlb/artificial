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

    //recognition.continuous     = true;
    recognition.lang           = navigator.language || 'en-US';
    recognition.interimResults = true;

    voice.recognition = recognition;

    voice.speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    };

    voice.listen = () => {
        voice.onInterim = voice.onInterim || (()=>{});
        voice.onFinal   = voice.onFinal   || (()=>{});
        voice.onStart   = voice.onStart   || (()=>{});
        voice.onEnd     = voice.onEnd     || (()=>{});
        voice.onError   = voice.onError   || (()=>{});

        recognition.onstart  = voice.onStart;
        recognition.onend    = voice.onEnd;
        recognition.onerror  = voice.onError;
        recognition.onresult = results;

        recognition.start();
    };

    function results(event) {
        const results = event.results;

        // Final Result
        if (results[results.length-1].isFinal)
            voice.onFinal( results[results.length-1][0].transcript, event );

        // Interim Results
        for (let i=0;i<results.length;i++)
            voice.onInterim( results[i][0].transcript, event );
    }

})();

